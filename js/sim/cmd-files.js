/* Commandes de fichiers et de texte du terminal simulé. */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const C = SIM.cmds;
  const perm = APP.perm;
  const cmpName = SIM.cmpName;

  const MONTHS = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  function lsDate(t) {
    const d = new Date(t);
    const recent = Date.now() - t < 182 * 86400000;
    return (MONTHS[d.getMonth()].padEnd(5) + ' ' + String(d.getDate()).padStart(2) + ' ' + (recent ? String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') : ' ' + d.getFullYear()));
  }
  function human(n) {
    if (n < 1024) return String(n);
    const u = ['K', 'M', 'G', 'T']; let i = -1;
    do { n /= 1024; i++; } while (n >= 1024 && i < 3);
    return (n < 10 ? (Math.ceil(n * 10) / 10).toFixed(1).replace('.', ',') : String(Math.ceil(n))) + u[i];
  }
  SIM.human = human;
  const typeChar = (n) => (n.t === 'd' ? 'd' : n.t === 'l' ? 'l' : n.special ? 'c' : '-');
  function colorName(name, n) {
    if (n.t === 'd') return { s: name, cls: (n.mode & 0o1002) === 0o1002 ? 'c-sticky' : 'c-dir' };
    if (n.t === 'l') return { s: name, cls: 'c-link' };
    if (n.mode & 0o4000) return { s: name, cls: 'c-suid' };
    if (n.mode & 0o111) return { s: name, cls: 'c-exec' };
    if (/\.(tar|gz|tgz|zip)$/.test(name)) return { s: name, cls: 'c-arch' };
    return { s: name, cls: null };
  }

  /* ---------------- ls ---------------- */
  C.ls = async (c) => {
    const { f, pos } = c.opts('lahRdtSrFi1AH', { all: 'a', 'almost-all': 'A', 'human-readable': 'h', recursive: 'R', directory: 'd', color: 'color', 'color=auto': 'color', classify: 'F', inode: 'i' }, { lenient: false });
    const color = c.tty && c.args.some((a) => a.startsWith('--color'));
    const targets = pos.length ? pos : ['.'];
    const files = [], dirs = [];
    let st = 0;
    for (const t of targets) {
      try {
        const r = c.lookup(t, { follow: !f.l || t.endsWith('/') });
        if (r.node.t === 'd' && !f.d) dirs.push({ name: t, node: r.node, abs: r.abs });
        else files.push({ name: t, node: r.node, abs: r.abs, parent: r.parent });
      } catch (e) { c.err("ls: impossible d'accéder à '" + t + "': " + e.message + '\n'); st = 2; }
    }
    const fmtList = (entries, dirNode) => {
      // entries: [{name, node}]
      const canStat = !dirNode || c.sys.can(dirNode, c.cred, 1);
      if (f.t) entries.sort((a, b) => b.node.mtime - a.node.mtime); else if (f.S) entries.sort((a, b) => c.sys.size(b.node) - c.sys.size(a.node)); else entries.sort((a, b) => cmpName(a.name, b.name));
      if (f.r) entries.reverse();
      if (f.l) {
        let total = 0;
        const rows = entries.map((e) => {
          const n = e.node;
          if (!canStat) return [typeChar(e.node) + '?????????', '?', '?', '?', '?', '           ?', e.name, null];
          const size = c.sys.size(n);
          total += Math.ceil(size / 4096) * 4;
          const links = n.t === 'd' ? 2 + Object.values(n.ch).filter((x) => x.t === 'd').length : 1;
          return [perm.toStr(n.mode, typeChar(n)), String(links), c.sys.uname(n.uid), c.sys.gname(n.gid), f.h ? human(size) : String(size), lsDate(n.mtime), e.name + (n.t === 'l' ? ' -> ' + n.target : ''), n];
        });
        const w = [0, 1, 2, 3, 4].map((i) => Math.max(0, ...rows.map((r) => r[i].length)));
        let s = dirNode ? 'total ' + (canStat ? total : 0) + '\n' : '';
        c.out(s); s = '';
        for (const r of rows) {
          const line = r[0].padEnd(w[0]) + ' ' + r[1].padStart(w[1]) + ' ' + r[2].padEnd(w[2]) + ' ' + r[3].padEnd(w[3]) + ' ' + r[4].padStart(w[4]) + ' ' + r[5] + ' ';
          if (color && r[7]) { c.out(line); const cn = colorName(r[6], r[7]); c.sh.termOut(cn.s, cn.cls || 'out'); c.out('\n'); }
          else c.out(line + r[6] + '\n');
          if (!canStat && !c.ctx.lsWarned) { /* rien */ }
        }
        return;
      }
      if (!canStat && entries.length && dirNode) { /* noms visibles */ }
      if (c.tty && !f['1']) {
        if (color) {
          entries.forEach((e, i) => { const cn = colorName(e.name, e.node); c.sh.termOut(cn.s, cn.cls || 'out'); c.out(i < entries.length - 1 ? '  ' : '\n'); });
        } else c.out(entries.map((e) => e.name).join('  ') + (entries.length ? '\n' : ''));
      } else c.out(entries.map((e) => e.name + (f.F && e.node.t === 'd' ? '/' : '') + '\n').join(''));
    };
    if (files.length) fmtList(files.map((x) => ({ name: x.name, node: x.node })), null);
    const listDir = (d, label, recursive) => {
      if (!c.sys.can(d.node, c.cred, 4)) { c.err("ls: impossible d'ouvrir le répertoire '" + label + "': Permission non accordée\n"); st = 2; return; }
      let names = Object.keys(d.node.ch);
      if (!f.a && !f.A) names = names.filter((n) => n[0] !== '.');
      const entries = names.map((n) => ({ name: n, node: d.node.ch[n] }));
      if (f.a) { entries.push({ name: '.', node: d.node }); let par = d.node; try { par = c.sys.resolveRaw(c.sys.normPath('..', d.abs || c.abs(label))) || d.node; } catch (e) { par = d.node; } entries.push({ name: '..', node: par }); }
      if (!c.sys.can(d.node, c.cred, 1) && c.cred.uid !== 0 && (f.l || color || f.F || f.t || f.S)) {
        for (const e of entries) if (e.name !== '.' && e.name !== '..') c.err("ls: impossible d'accéder à '" + label.replace(/\/$/, '') + '/' + e.name + "': Permission non accordée\n");
        st = 1;
      }
      fmtList(entries, d.node);
      if (recursive) {
        for (const n of names.sort(cmpName)) {
          const ch = d.node.ch[n];
          if (ch.t === 'd' && n !== '.' && n !== '..') { c.out('\n' + label.replace(/\/$/, '') + '/' + n + ':\n'); listDir({ node: ch }, label.replace(/\/$/, '') + '/' + n, true); }
        }
      }
    };
    dirs.forEach((d, i) => {
      if (files.length || dirs.length > 1 || f.R) c.out((i || files.length ? '\n' : '') + d.name + ':\n');
      listDir(d, d.name, f.R);
    });
    return st;
  };
  C.dir = C.ls;

  /* ---------------- mkdir / rmdir / touch ---------------- */
  C.mkdir = async (c) => {
    const { f, pos } = c.opts('pvm:', { parents: 'p', verbose: 'v', mode: 'm:' });
    if (!pos.length) { c.err("mkdir: opérande manquant\nSaisissez « mkdir --help » pour plus d'informations.\n"); return 1; }
    let st = 0;
    for (const p of pos) {
      const parts = c.abs(p).split('/').filter(Boolean);
      const todo = f.p ? parts.map((_, i) => '/' + parts.slice(0, i + 1).join('/')) : [c.abs(p)];
      for (const path of todo) {
        let r;
        try { r = c.sys.lookup(path, c.cred, '/', { parent: true }); }
        catch (e) { c.err('mkdir: impossible de créer le répertoire « ' + p + ' »: ' + e.message + '\n'); st = 1; break; }
        if (r.node) { if (!f.p) { c.err('mkdir: impossible de créer le répertoire « ' + p + ' »: Le fichier existe\n'); st = 1; } continue; }
        if (!c.sys.can(r.parent, c.cred, 2)) { c.err('mkdir: impossible de créer le répertoire « ' + p + ' »: Permission non accordée\n'); st = 1; break; }
        const d = c.sys.newDir(r.parent, r.name, c.cred, c.f.umask);
        if (f.m) { const m = perm.apply(f.m, 0o777, true, 0); if (m != null) d.mode = m; }
        if (f.v) c.out("mkdir: création du répertoire '" + path + "'\n");
        c.sys.emit('fs', { op: 'mkdir', path });
      }
    }
    return st;
  };
  C.rmdir = async (c) => {
    const { pos } = c.opts('pv', { parents: 'p' });
    if (!pos.length) { c.err('rmdir: opérande manquant\n'); return 1; }
    let st = 0;
    for (const p of pos) {
      try {
        const r = c.lookup(p, { follow: false });
        if (r.node.t !== 'd') { c.err("rmdir: impossible de supprimer '" + p + "': N'est pas un dossier\n"); st = 1; continue; }
        if (Object.keys(r.node.ch).length) { c.err("rmdir: impossible de supprimer '" + p + "': Le dossier n'est pas vide\n"); st = 1; continue; }
        if (!c.sys.can(r.parent, c.cred, 2)) { c.err("rmdir: impossible de supprimer '" + p + "': Permission non accordée\n"); st = 1; continue; }
        delete r.parent.ch[r.name];
        c.sys.emit('fs', { op: 'rmdir', path: r.abs });
      } catch (e) { c.err("rmdir: impossible de supprimer '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };
  C.touch = async (c) => {
    const { pos } = c.opts('acm', {});
    if (!pos.length) { c.err('touch: opérande de fichier manquant\n'); return 1; }
    let st = 0;
    for (const p of pos) {
      try {
        const r = c.lookup(p, { parent: true });
        if (r.node) {
          if (r.node.uid !== c.cred.uid && !c.sys.can(r.node, c.cred, 2) && c.cred.uid !== 0) { c.err("touch: impossible de faire un touch '" + p + "': Permission non accordée\n"); st = 1; continue; }
          r.node.mtime = Date.now(); continue;
        }
        if (!c.sys.can(r.parent, c.cred, 2)) { c.err("touch: impossible de faire un touch '" + p + "': Permission non accordée\n"); st = 1; continue; }
        c.sys.newFile(r.parent, r.name, '', c.cred, c.f.umask);
        c.sys.emit('fs', { op: 'create', path: r.abs });
      } catch (e) { c.err("touch: impossible de faire un touch '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };

  /* ---------------- rm ---------------- */
  function canDelete(c, parent, node) {
    if (!c.sys.can(parent, c.cred, 2) || !c.sys.can(parent, c.cred, 1)) return false;
    if ((parent.mode & 0o1000) && c.cred.uid !== 0 && node.uid !== c.cred.uid && parent.uid !== c.cred.uid) return false; // sticky bit
    return true;
  }
  C.rm = async (c) => {
    const { f, pos } = c.opts('rRfidv', { recursive: 'r', force: 'f', interactive: 'i', verbose: 'v', dir: 'd' });
    if (f.R) f.r = true;
    if (!pos.length) { if (!f.f) { c.err("rm: opérande manquant\nSaisissez « rm --help » pour plus d'informations.\n"); return 1; } return 0; }
    let st = 0;
    const del = async (path, label, parent, name, node) => {
      if (node.t === 'd') {
        if (!f.r) { c.err("rm: impossible de supprimer '" + label + "': est un dossier\n"); st = 1; return; }
        if (f.i && !(await c.confirm("rm : descendre dans le répertoire '" + label + "' ? "))) return;
        if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 2) || !c.sys.can(node, c.cred, 1)) {
          if (Object.keys(node.ch).length) { c.err("rm: impossible de supprimer '" + label + "': Permission non accordée\n"); st = 1; return; }
        }
        for (const k of Object.keys(node.ch)) await del(path + '/' + k, label.replace(/\/$/, '') + '/' + k, node, k, node.ch[k]);
        if (Object.keys(node.ch).length) return;
        if (f.i && !(await c.confirm("rm : supprimer le répertoire '" + label + "' ? "))) return;
      } else {
        const prot = !c.sys.can(node, c.cred, 2) && !f.f && c.tty;
        if (f.i || prot) {
          const what = node.t === 'l' ? 'lien symbolique' : (c.sys.size(node) ? 'fichier' : 'fichier vide');
          const ok = await c.confirm('rm : supprimer ' + (prot ? what + " protégé en écriture" : what) + " '" + label + "' ? ");
          if (!ok) return;
        }
      }
      if (!canDelete(c, parent, node)) { c.err("rm: impossible de supprimer '" + label + "': " + ((parent.mode & 0o1000) && c.sys.can(parent, c.cred, 2) ? 'Opération non permise' : 'Permission non accordée') + '\n'); st = 1; return; }
      delete parent.ch[name]; parent.mtime = Date.now();
      if (f.v) c.out(node.t === 'd' ? "répertoire '" + label + "' supprimé\n" : "'" + label + "' supprimé\n");
      c.sys.emit('fs', { op: 'rm', path });
    };
    for (const p of pos) {
      let r;
      try { r = c.lookup(p, { follow: false }); }
      catch (e) { if (!f.f) { c.err("rm: impossible de supprimer '" + p + "': " + e.message + '\n'); st = 1; } continue; }
      if (r.abs === '/') { c.err("rm: il est dangereux d'opérer récursivement sur '/'\nrm: utilisez --no-preserve-root pour inhiber cette mesure de sécurité\n"); st = 1; continue; }
      await del(r.abs, p, r.parent, r.name, r.node);
    }
    return st;
  };

  /* ---------------- cp / mv ---------------- */
  function cloneNode(c, n, keep) {
    if (n.t === 'd') {
      const d = { t: 'd', mode: keep ? n.mode : (n.mode & ~c.f.umask) | (n.mode & 0o7000 & 0), uid: keep ? n.uid : c.cred.uid, gid: keep ? n.gid : c.cred.gid, mtime: Date.now(), ch: Object.create(null) };
      return d;
    }
    const o = Object.assign({}, n, { mtime: Date.now() });
    if (!keep) { o.uid = c.cred.uid; o.gid = c.cred.gid; o.mode = n.mode & 0o777 & ~c.f.umask | 0; o.mode = (n.mode & 0o777) & (0o777 & ~c.f.umask); if (n.mode & 0o111 && !(o.mode & 0o111)) o.mode |= 0; }
    if (n.archive) o.archive = JSON.parse(JSON.stringify(n.archive));
    return o;
  }
  C.cp = async (c) => {
    const { f, pos } = c.opts('rRivpaf', { recursive: 'r', interactive: 'i', verbose: 'v', archive: 'a', force: 'f' });
    if (f.R || f.a) f.r = true;
    if (pos.length < 2) { c.err(pos.length ? "cp: opérande de fichier cible manquant après '" + pos[0] + "'\n" : 'cp: opérande de fichier manquant\n'); return 1; }
    const dest = pos.pop();
    let dres;
    try { dres = c.lookup(dest, { parent: true }); } catch (e) { c.err("cp: impossible de créer '" + dest + "': " + e.message + '\n'); return 1; }
    const destIsDir = dres.node && dres.node.t === 'd';
    if (pos.length > 1 && !destIsDir) { c.err("cp: la cible '" + dest + "' n'est pas un répertoire\n"); return 1; }
    let st = 0;
    const copy = async (src, label, targetParent, targetName) => {
      if (src.t === 'd') {
        if (!c.sys.can(src, c.cred, 4) || !c.sys.can(src, c.cred, 1)) { c.err("cp: impossible d'accéder à '" + label + "': Permission non accordée\n"); st = 1; return; }
        let d = targetParent.ch[targetName];
        if (!d) {
          if (!c.sys.can(targetParent, c.cred, 2)) { c.err("cp: impossible de créer le répertoire '" + targetName + "': Permission non accordée\n"); st = 1; return; }
          d = targetParent.ch[targetName] = cloneNode(c, src, f.p || f.a);
          if (!(f.p || f.a)) d.mode = src.mode & 0o777 & ~c.f.umask | 0o700 & src.mode;
        } else if (d.t !== 'd') { c.err("cp: impossible d'écraser le non-répertoire '" + targetName + "' par le répertoire '" + label + "'\n"); st = 1; return; }
        for (const k of Object.keys(src.ch)) await copy(src.ch[k], label + '/' + k, d, k);
        return;
      }
      if (!c.sys.can(src, c.cred, 4) && !src.special) { c.err("cp: impossible d'ouvrir '" + label + "' en lecture: Permission non accordée\n"); st = 1; return; }
      const ex = targetParent.ch[targetName];
      if (ex && ex.t === 'd') { c.err("cp: impossible d'écraser le répertoire '" + targetName + "' par un non-répertoire\n"); st = 1; return; }
      if (ex) {
        if (f.i && !(await c.confirm("cp : écraser '" + targetName + "' ? "))) return;
        if (!c.sys.can(ex, c.cred, 2)) { c.err("cp: impossible de créer le fichier standard '" + targetName + "': Permission non accordée\n"); st = 1; return; }
        ex.c = src.c; ex.mtime = Date.now(); if (src.archive) ex.archive = JSON.parse(JSON.stringify(src.archive)); if (src.bin) ex.bin = src.bin; if (src.compiled) ex.compiled = src.compiled;
      } else {
        if (!c.sys.can(targetParent, c.cred, 2) || !c.sys.can(targetParent, c.cred, 1)) { c.err("cp: impossible de créer le fichier standard '" + targetName + "': Permission non accordée\n"); st = 1; return; }
        const n = cloneNode(c, src, f.p || f.a);
        if (!(f.p || f.a)) { n.uid = c.cred.uid; n.gid = targetParent.mode & 0o2000 ? targetParent.gid : c.cred.gid; n.mode = (src.mode & 0o777) & ~c.f.umask; }
        targetParent.ch[targetName] = n;
      }
      if (f.v) c.out("'" + label + "' -> '" + targetName + "'\n");
    };
    for (const s of pos) {
      let r;
      try { r = c.lookup(s); } catch (e) { c.err("cp: impossible d'évaluer '" + s + "': " + e.message + '\n'); st = 1; continue; }
      if (r.node.t === 'd' && !f.r) { c.err("cp: -r non spécifié ; omission du répertoire '" + s + "'\n"); st = 1; continue; }
      let tp, tn;
      if (destIsDir) { tp = dres.node; tn = r.name === '/' ? 'root' : r.name; }
      else { tp = dres.parent; tn = dres.name; }
      if (r.node === tp || (r.node.t === 'd' && isInside(c.sys, r.abs, (destIsDir ? dres.abs : c.sys.normPath('..', dres.abs))))) {
        c.err("cp: impossible de copier un répertoire, '" + s + "', vers lui-même, '" + dest + "/" + tn + "'\n"); st = 1; continue;
      }
      await copy(r.node, s, tp, tn);
      c.sys.emit('fs', { op: 'cp', path: dest });
    }
    return st;
  };
  function isInside(sys, a, b) { return b === a || b.startsWith(a + '/'); }
  C.mv = async (c) => {
    const { f, pos } = c.opts('ivfn', { interactive: 'i', verbose: 'v', force: 'f' });
    if (pos.length < 2) { c.err(pos.length ? "mv: opérande de fichier cible manquant après '" + pos[0] + "'\n" : 'mv: opérande de fichier manquant\n'); return 1; }
    const dest = pos.pop();
    let dres;
    try { dres = c.lookup(dest, { parent: true }); } catch (e) { c.err("mv: impossible de déplacer vers '" + dest + "': " + e.message + '\n'); return 1; }
    const destIsDir = dres.node && dres.node.t === 'd';
    if (pos.length > 1 && !destIsDir) { c.err("mv: la cible '" + dest + "' n'est pas un répertoire\n"); return 1; }
    let st = 0;
    for (const s of pos) {
      let r;
      try { r = c.lookup(s, { follow: false }); } catch (e) { c.err("mv: impossible d'évaluer '" + s + "': " + e.message + '\n'); st = 1; continue; }
      let tp, tn;
      if (destIsDir) { tp = dres.node; tn = r.name; } else { tp = dres.parent; tn = dres.name; }
      const tabs = destIsDir ? dres.abs + '/' + tn : dres.abs;
      if (r.node.t === 'd' && isInside(c.sys, r.abs, tabs)) { c.err("mv: impossible de déplacer '" + s + "' vers un sous-répertoire de lui-même, '" + dest + "/" + tn + "'\n"); st = 1; continue; }
      if (!canDelete(c, r.parent, r.node)) { c.err("mv: impossible de déplacer '" + s + "' vers '" + dest + "': Permission non accordée\n"); st = 1; continue; }
      if (!c.sys.can(tp, c.cred, 2) || !c.sys.can(tp, c.cred, 1)) { c.err("mv: impossible de déplacer '" + s + "' vers '" + dest + "': Permission non accordée\n"); st = 1; continue; }
      const ex = tp.ch[tn];
      if (ex === r.node) continue;
      if (ex) {
        if (ex.t === 'd' && r.node.t !== 'd') { c.err("mv: impossible d'écraser le répertoire '" + tn + "' par un non-répertoire\n"); st = 1; continue; }
        if (ex.t === 'd' && Object.keys(ex.ch).length) { c.err("mv: impossible de déplacer '" + s + "' vers '" + dest + "/" + tn + "': Le dossier n'est pas vide\n"); st = 1; continue; }
        if (f.i && !(await c.confirm("mv : écraser '" + tn + "' ? "))) continue;
      }
      delete r.parent.ch[r.name];
      tp.ch[tn] = r.node; r.node.mtime = r.node.mtime;
      tp.mtime = Date.now();
      if (f.v) c.out("renommé '" + s + "' -> '" + tn + "'\n");
      c.sys.emit('fs', { op: 'mv', from: r.abs, path: tabs });
    }
    return st;
  };
  C.ln = async (c) => {
    const { f, pos } = c.opts('sfv', { symbolic: 's', force: 'f' });
    if (pos.length < 1) { c.err('ln: opérande de fichier manquant\n'); return 1; }
    const target = pos[0], name = pos[1] || target.replace(/^.*\//, '');
    let r;
    try { r = c.lookup(name, { parent: true }); } catch (e) { return c.fsErr(e, name); }
    if (r.node && r.node.t === 'd') { r = { parent: r.node, name: target.replace(/^.*\//, ''), node: r.node.ch[target.replace(/^.*\//, '')] }; }
    if (r.node && !f.f) { c.err("ln: impossible de créer le lien symbolique '" + name + "': Le fichier existe\n"); return 1; }
    if (!c.sys.can(r.parent, c.cred, 2)) { c.err("ln: impossible de créer le lien '" + name + "': Permission non accordée\n"); return 1; }
    if (f.s) r.parent.ch[r.name] = { t: 'l', mode: 0o777, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), target };
    else { try { const src = c.lookup(target); r.parent.ch[r.name] = src.node; } catch (e) { return c.fsErr(e, target); } }
    return 0;
  };

  /* ---------------- affichage ---------------- */
  C.cat = async (c) => {
    const { f, pos } = c.opts('nAvEbs', { number: 'n' });
    let st = 0, n = 1;
    for (const x of c.inputs(pos)) {
      if (x.text == null) { st = 1; continue; }
      let t = x.text;
      if (t && /\x7fELF/.test(t.slice(0, 4))) t = '\x7fELF\u0002\u0001\u0001\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000>\u0000\u0001\u0000\u0000\u0000�\u0011@\u0000\u0000\u0000\u0000\u0000@\u0000\u0000\u0000…(fichier binaire)\n';
      if (f.n) t = t.split('\n').map((l, i, a) => (i === a.length - 1 && l === '' ? '' : String(n++).padStart(6) + '\t' + l)).join('\n');
      c.out(t);
    }
    return st;
  };
  const pagerCmd = async (c) => {
    const { pos } = c.opts('NSRFXr', {}, { lenient: true });
    const files = pos.filter((p) => p[0] !== '+');
    const inp = c.inputs(files);
    const text = inp.filter((x) => x.text != null).map((x) => x.text).join('');
    if (inp.some((x) => x.text == null)) return 1;
    if (!c.tty) { c.out(text); return 0; }
    await c.sh.term.pager(files[0] || '(entrée standard)', text);
    return 0;
  };
  C.less = pagerCmd; C.more = pagerCmd;
  const headTail = (isHead) => async (c) => {
    c.args = c.args.map((a) => (/^-\d+$/.test(a) ? '-n' + a.slice(1) : a));
    const { f, pos } = c.opts('n:c:fqv', { lines: 'n:', bytes: 'c:', follow: 'f' });
    let n = f.n != null ? f.n : '10';
    const fromStart = !isHead && String(n).startsWith('+');
    n = parseInt(n, 10);
    if (isNaN(n)) { c.err((isHead ? 'head' : 'tail') + ": nombre de lignes incorrect: '" + f.n + "'\n"); return 1; }
    const ins = c.inputs(pos);
    let st = 0;
    ins.forEach((x, i) => {
      if (x.text == null) { st = 1; return; }
      if (ins.length > 1) c.out((i ? '\n' : '') + '==> ' + x.name + ' <==\n');
      if (f.c) { const k = parseInt(f.c, 10); c.out(isHead ? x.text.slice(0, k) : x.text.slice(-k)); return; }
      let lines = x.text.split('\n');
      const trailing = lines[lines.length - 1] === '';
      if (trailing) lines.pop();
      let sel;
      if (isHead) sel = n >= 0 ? lines.slice(0, n) : lines.slice(0, n);
      else sel = fromStart ? lines.slice(n - 1) : lines.slice(Math.max(0, lines.length - n));
      if (sel.length) c.out(sel.join('\n') + '\n');
    });
    if (!isHead && f.f && pos.length) {
      // suivi en direct
      const node = (() => { try { return c.lookup(pos[pos.length - 1]).node; } catch (e) { return null; } })();
      if (!node) return st;
      let len = node.c.length;
      for (;;) {
        const ok = await c.wait(500);
        if (!ok) break;
        if (node.c.length > len) { c.out(node.c.slice(len)); len = node.c.length; }
      }
    }
    return st;
  };
  C.head = headTail(true); C.tail = headTail(false);
  C.wc = async (c) => {
    const { f, pos } = c.opts('lwcmL', { lines: 'l', words: 'w', bytes: 'c', chars: 'm' });
    const all = !f.l && !f.w && !f.c && !f.m;
    const ins = c.inputs(pos);
    let st = 0; const tot = [0, 0, 0];
    const rows = [];
    for (const x of ins) {
      if (x.text == null) { st = 1; continue; }
      const l = (x.text.match(/\n/g) || []).length, w = (x.text.match(/\S+/g) || []).length, b = new TextEncoder().encode(x.text).length;
      tot[0] += l; tot[1] += w; tot[2] += b;
      rows.push([l, w, b, x.name]);
    }
    if (rows.length > 1) rows.push([tot[0], tot[1], tot[2], 'total']);
    const width = all || rows.length > 1 ? Math.max(1, ...rows.map((r) => String(Math.max(r[0], r[1], r[2])).length)) : 0;
    for (const r of rows) {
      const parts = [];
      if (all || f.l) parts.push(String(r[0]).padStart(width));
      if (all || f.w) parts.push(String(r[1]).padStart(width));
      if (all || f.c || f.m) parts.push(String(r[2]).padStart(width));
      c.out(parts.join(' ') + (r[3] !== '-' ? ' ' + r[3] : '') + '\n');
    }
    return st;
  };

  /* ---------------- grep ---------------- */
  function toRegex(p, o) {
    let src = p;
    if (o.F) src = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    else if (!o.E) src = p.replace(/\\\|/g, '\u0001').replace(/\|/g, '\\|').replace(/\u0001/g, '|').replace(/\\\(/g, '\u0002').replace(/\(/g, '\\(').replace(/\u0002/g, '(').replace(/\\\)/g, '\u0003').replace(/\)/g, '\\)').replace(/\u0003/g, ')').replace(/\\\+/g, '+').replace(/\\\?/g, '?');
    if (o.w) src = '(?<![\\w])(?:' + src + ')(?![\\w])';
    if (o.x) src = '^(?:' + src + ')$';
    try { return new RegExp(src, o.i ? 'gi' : 'g'); } catch (e) { return new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), o.i ? 'gi' : 'g'); }
  }
  C.grep = async (c) => {
    const { f, pos } = c.opts('inrRcvwlLqEFoshxe:A:B:C:m:H', { 'ignore-case': 'i', 'line-number': 'n', recursive: 'r', count: 'c', 'invert-match': 'v', color: 'color', 'color=auto': 'color', 'files-with-matches': 'l', quiet: 'q', silent: 'q' }, { lenient: false });
    if (f.R) f.r = true;
    let pattern = f.e != null ? f.e : pos.shift();
    if (pattern == null) { c.err("Utilisation : grep [OPTION]... MOTIFS [FICHIER]...\nSaisissez « grep --help » pour plus d'informations.\n"); return 2; }
    const re = toRegex(pattern, f);
    const color = c.tty && c.args.some((a) => a.startsWith('--color'));
    let files = pos;
    if (f.r && !files.length) files = ['.'];
    const sources = [];
    let st2 = 0;
    const walk = (path, node) => {
      if (node.t === 'd') {
        if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 1)) { if (!f.s) c.err("grep: " + path + ": Permission non accordée\n"); st2 = 2; return; }
        for (const k of Object.keys(node.ch).sort(cmpName)) walk(path.replace(/\/$/, '') + '/' + k, node.ch[k]);
      } else if (node.t === 'f') {
        if (!c.sys.can(node, c.cred, 4)) { if (!f.s) c.err("grep: " + path + ": Permission non accordée\n"); st2 = 2; return; }
        if (node.bin) return;
        sources.push({ name: path, text: node.c });
      }
    };
    if (!files.length) sources.push({ name: '(entrée standard)', text: c.stdin || '' });
    else for (const p of files) {
      try {
        const r = c.lookup(p);
        if (r.node.t === 'd' && !f.r) { if (!f.s) c.err('grep: ' + p + ': est un dossier\n'); continue; }
        walk(p, r.node);
      } catch (e) { if (!f.s) c.err('grep: ' + p + ': ' + e.message + '\n'); st2 = 2; }
    }
    const multi = sources.length > 1 || f.r || f.H;
    let found = false;
    for (const s of sources) {
      const lines = s.text.split('\n'); if (lines[lines.length - 1] === '') lines.pop();
      let count = 0;
      for (let i = 0; i < lines.length; i++) {
        re.lastIndex = 0;
        const m = re.test(lines[i]);
        if (m === !f.v) {
          count++; found = true;
          if (f.q) return 0;
          if (f.l || f.c) continue;
          const prefix = (multi && !f.h ? s.name + ':' : '') + (f.n ? (i + 1) + ':' : '');
          if (f.o && !f.v) { re.lastIndex = 0; let mm; while ((mm = re.exec(lines[i]))) { c.out(prefix + mm[0] + '\n'); if (!mm[0]) re.lastIndex++; } continue; }
          if (color && !f.v) {
            if (prefix) c.sh.termOut(prefix, 'c-grep-pre');
            re.lastIndex = 0; let last = 0, mm; const line = lines[i];
            while ((mm = re.exec(line))) { if (!mm[0]) { re.lastIndex++; continue; } c.out(line.slice(last, mm.index)); c.sh.termOut(mm[0], 'c-match'); last = mm.index + mm[0].length; }
            c.out(line.slice(last) + '\n');
          } else c.out(prefix + lines[i] + '\n');
        }
      }
      if (f.c) c.out((multi && !f.h ? s.name + ':' : '') + count + '\n');
      if (f.l && count) c.out(s.name + '\n');
    }
    if (st2 && !found) return 2;
    return found ? 0 : 1;
  };
  C.egrep = async (c) => { c.args = ['-E'].concat(c.args); return C.grep(c); };

  /* ---------------- find ---------------- */
  C.find = async (c) => {
    const args = c.args.slice();
    const paths = [];
    while (args.length && !/^[-!(]/.test(args[0])) paths.push(args.shift());
    if (!paths.length) paths.push('.');
    // analyse de l'expression
    let i = 0;
    const err = (m) => { c.err('find: ' + m + '\n'); throw SIM.usage(); };
    let maxdepth = Infinity, mindepth = 0;
    const parsePrimary = () => {
      const t = args[i++];
      if (t === '!' || t === '-not') { const e = parsePrimary(); return (n, p, d) => !e(n, p, d); }
      if (t === '(') { const e = parseOr(); if (args[i++] !== ')') err("parenthèse fermante manquante"); return e; }
      const need = () => { if (i >= args.length) err("argument manquant pour « " + t + " »"); return args[i++]; };
      switch (t) {
        case '-name': case '-iname': { const g = need(); const re = globRe(g, t === '-iname'); return (n, p) => re.test(p.replace(/^.*\//, '') || p); }
        case '-path': case '-wholename': { const g = need(); const re = globRe(g, false, true); return (n, p) => re.test(p); }
        case '-type': { const ty = need(); return (n) => (ty === 'f' ? n.t === 'f' && !n.special : ty === 'd' ? n.t === 'd' : ty === 'l' ? n.t === 'l' : ty === 'c' ? !!n.special : false); }
        case '-user': { const u = need(); const uu = c.sys.user(u); if (!uu && !/^\d+$/.test(u)) err("« " + u + " » n'est pas le nom d'un utilisateur connu"); const uid = uu ? uu.uid : +u; return (n) => n.uid === uid; }
        case '-group': { const g = need(); const gg = c.sys.group(g); if (!gg && !/^\d+$/.test(g)) err("« " + g + " » n'est pas le nom d'un groupe existant"); const gid = gg ? gg.gid : +g; return (n) => n.gid === gid; }
        case '-nouser': return (n) => !c.sys.userByUid(n.uid);
        case '-perm': {
          const v = need(); const mm = /^([-/]?)(.*)$/.exec(v); const mode = mm[1], body = mm[2];
          let bits = /^[0-7]+$/.test(body) ? parseInt(body, 8) : perm.apply(body.replace(/^([ugoa]*)=/, '$1+'), 0, false, 0);
          if (bits == null) err("mode non valable « " + v + " »");
          return (n) => (mode === '-' ? (n.mode & bits) === bits : mode === '/' ? (bits === 0 || (n.mode & bits) !== 0) : (n.mode & 0o7777) === bits);
        }
        case '-size': { const v = need(); const mm = /^([+-]?)(\d+)([ckMG]?)$/.exec(v); if (!mm) err("taille non valable « " + v + " »"); const mul = { c: 1, k: 1024, M: 1048576, G: 1073741824, '': 512 }[mm[3]]; const val = +mm[2]; return (n) => { const s = Math.ceil(c.sys.size(n) / mul); return mm[1] === '+' ? s > val : mm[1] === '-' ? s < val : s === val; }; }
        case '-empty': return (n) => (n.t === 'd' ? !Object.keys(n.ch).length : n.t === 'f' && !n.c);
        case '-mtime': case '-mmin': { const v = need(); const k = t === '-mtime' ? 86400000 : 60000; const val = parseInt(v, 10); return (n) => { const age = Math.floor((Date.now() - n.mtime) / k); return v[0] === '+' ? age > Math.abs(val) : v[0] === '-' ? age < Math.abs(val) : age === val; }; }
        case '-maxdepth': maxdepth = +need(); return () => true;
        case '-mindepth': mindepth = +need(); return () => true;
        case '-print': return (n, p) => { c.out(p + '\n'); return true; };
        case '-ls': return (n, p) => { c.out(perm.toStr(n.mode, n.t === 'd' ? 'd' : '-') + ' ' + c.sys.uname(n.uid) + ' ' + c.sys.gname(n.gid) + ' ' + c.sys.size(n) + ' ' + p + '\n'); return true; };
        case '-delete': return (n, p, d, parent, name) => { if (parent) delete parent.ch[name]; return true; };
        case '-exec': case '-ok': {
          const cmd = []; while (i < args.length && args[i] !== ';' && args[i] !== '+') cmd.push(args[i++]);
          if (i >= args.length) err("argument manquant pour « " + t + " »");
          i++;
          return (n, p) => { (c.execQueue = c.execQueue || []).push(cmd.map((x) => x.replace(/\{\}/g, p))); return true; };
        }
        case '-true': return () => true;
        case '-false': return () => false;
        default: err("prédicat inconnu « " + t + " »");
      }
    };
    const parseAnd = () => {
      let e = parsePrimary();
      while (i < args.length && args[i] !== '-o' && args[i] !== '-or' && args[i] !== ')') {
        if (args[i] === '-a' || args[i] === '-and') i++;
        const r = parsePrimary(); const l = e; e = (...a) => l(...a) && r(...a);
      }
      return e;
    };
    const parseOr = () => { let e = parseAnd(); while (args[i] === '-o' || args[i] === '-or') { i++; const r = parseAnd(); const l = e; e = (...a) => l(...a) || r(...a); } return e; };
    let expr = () => true; let hasAction = false;
    if (args.length) { expr = parseOr(); hasAction = args.some((a) => ['-print', '-ls', '-exec', '-delete', '-ok'].includes(a)); }
    let st = 0;
    const visit = (node, path, depth, parent, name) => {
      if (depth >= mindepth && depth <= maxdepth) {
        const ok = expr(node, path, depth, parent, name);
        if (ok && !hasAction) c.out(path + '\n');
      }
      if (node.t === 'd' && depth < maxdepth) {
        if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 1)) { c.err("find: '" + path + "': Permission non accordée\n"); st = 1; return; }
        for (const k of Object.keys(node.ch).sort(cmpName)) visit(node.ch[k], (path === '/' ? '' : path.replace(/\/$/, '')) + '/' + k, depth + 1, node, k);
      }
    };
    for (const p of paths) {
      let r;
      try { r = c.lookup(p); } catch (e) { c.err("find: '" + p + "': " + e.message + '\n'); st = 1; continue; }
      if (p.startsWith('/proc')) c.sys.refreshProc();
      visit(r.node, p, 0, r.parent, r.name);
    }
    for (const cmd of c.execQueue || []) await c.sh.runCommand(cmd, Object.assign({}, c.ctx), {});
    return st;
  };
  function globRe(g, icase, path) {
    let s = '';
    for (let k = 0; k < g.length; k++) {
      const ch = g[k];
      if (ch === '*') s += path ? '.*' : '.*';
      else if (ch === '?') s += '.';
      else if (ch === '[') { const e = g.indexOf(']', k + 1); if (e > k) { s += '[' + g.slice(k + 1, e).replace(/^!/, '^') + ']'; k = e; } else s += '\\['; }
      else s += ch.replace(/[.+^${}()|\\]/g, '\\$&');
    }
    return new RegExp('^' + s + '$', icase ? 'i' : '');
  }
  SIM.globRe = globRe;

  /* ---------------- filtres ---------------- */
  C.sort = async (c) => {
    const { f, pos } = c.opts('rnhuk:t:fo:', { reverse: 'r', numeric: 'n', 'human-numeric-sort': 'h', unique: 'u' });
    const ins = c.inputs(pos); if (ins.some((x) => x.text == null)) return 2;
    let lines = ins.map((x) => x.text).join('').split('\n'); if (lines[lines.length - 1] === '') lines.pop();
    const key = (l) => { if (!f.k) return l; const k = parseInt(f.k, 10); const parts = f.t ? l.split(f.t) : l.trim().split(/\s+/); return parts.slice(k - 1).join(f.t || ' '); };
    const hval = (s) => { const m = /^\s*([\d.,]+)\s*([KMGT]?)/i.exec(s); if (!m) return -Infinity; return parseFloat(m[1].replace(',', '.')) * Math.pow(1024, ' KMGT'.indexOf((m[2] || ' ').toUpperCase())); };
    const cmp = f.h ? (a, b) => hval(key(a)) - hval(key(b)) : f.n ? (a, b) => (parseFloat(key(a)) || 0) - (parseFloat(key(b)) || 0) : (a, b) => { const x = key(a), y = key(b); return x.localeCompare(y, 'fr'); };
    lines.sort(cmp);
    if (f.r) lines.reverse();
    if (f.u) lines = lines.filter((l, i) => i === 0 || l !== lines[i - 1]);
    if (lines.length) c.out(lines.join('\n') + '\n');
    return 0;
  };
  C.uniq = async (c) => {
    const { f, pos } = c.opts('cdui', { count: 'c' });
    const ins = c.inputs(pos.slice(0, 1)); if (ins.some((x) => x.text == null)) return 1;
    const lines = ins[0].text.split('\n'); if (lines[lines.length - 1] === '') lines.pop();
    const groups = [];
    for (const l of lines) { const g = groups[groups.length - 1]; if (g && (f.i ? g.l.toLowerCase() === l.toLowerCase() : g.l === l)) g.n++; else groups.push({ l, n: 1 }); }
    for (const g of groups) { if (f.d && g.n < 2) continue; if (f.u && g.n > 1) continue; c.out((f.c ? String(g.n).padStart(7) + ' ' : '') + g.l + '\n'); }
    return 0;
  };
  C.cut = async (c) => {
    const { f, pos } = c.opts('d:f:c:', { delimiter: 'd:', fields: 'f:' });
    const ins = c.inputs(pos); if (ins.some((x) => x.text == null)) return 1;
    const lines = ins.map((x) => x.text).join('').split('\n'); if (lines[lines.length - 1] === '') lines.pop();
    const ranges = (spec) => spec.split(',').map((r) => { const m = /^(\d*)(-?)(\d*)$/.exec(r); const a = m[1] ? +m[1] : 1; const b = m[2] ? (m[3] ? +m[3] : Infinity) : a; return [a, b]; });
    if (f.c) { const rg = ranges(f.c); for (const l of lines) c.out([...l].filter((_, i) => rg.some(([a, b]) => i + 1 >= a && i + 1 <= b)).join('') + '\n'); return 0; }
    if (!f.f) { c.err('cut: vous devez spécifier une liste d\'octets, de caractères ou de champs\n'); return 1; }
    const d = f.d != null ? f.d : '\t'; const rg = ranges(f.f);
    for (const l of lines) { if (!l.includes(d)) { c.out(l + '\n'); continue; } c.out(l.split(d).filter((_, i) => rg.some(([a, b]) => i + 1 >= a && i + 1 <= b)).join(d) + '\n'); }
    return 0;
  };
  C.tr = async (c) => {
    const { f, pos } = c.opts('ds', {});
    const expand = (s) => s.replace(/([a-zA-Z0-9])-([a-zA-Z0-9])/g, (m, a, b) => { let o = ''; for (let k = a.charCodeAt(0); k <= b.charCodeAt(0); k++) o += String.fromCharCode(k); return o; }).replace(/\[:upper:\]/g, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ').replace(/\[:lower:\]/g, 'abcdefghijklmnopqrstuvwxyz').replace(/\\n/g, '\n');
    const a = expand(pos[0] || ''), b = expand(pos[1] || '');
    let t = c.stdin || '';
    if (f.d) t = [...t].filter((ch) => !a.includes(ch)).join('');
    else t = [...t].map((ch) => { const k = a.indexOf(ch); return k < 0 ? ch : (b[Math.min(k, b.length - 1)] || ''); }).join('');
    if (f.s) t = t.replace(/(.)\1+/g, (m, ch) => (b.includes(ch) || a.includes(ch) ? ch : m));
    c.out(t);
    return 0;
  };
  C.tee = async (c) => {
    const { f, pos } = c.opts('a', { append: 'a' });
    const data = c.stdin || '';
    let st = 0;
    for (const p of pos) {
      try {
        const r = c.lookup(p, { parent: true });
        if (r.node) {
          if (r.node.t === 'd') { c.err('tee: ' + p + ': est un dossier\n'); st = 1; continue; }
          if (!c.sys.can(r.node, c.cred, 2)) { c.err('tee: ' + p + ': Permission non accordée\n'); st = 1; continue; }
          r.node.c = f.a ? r.node.c + data : data; r.node.mtime = Date.now();
        } else {
          if (!c.sys.can(r.parent, c.cred, 2)) { c.err('tee: ' + p + ': Permission non accordée\n'); st = 1; continue; }
          c.sys.newFile(r.parent, r.name, data, c.cred, c.f.umask);
        }
        c.sys.emit('write', { path: r.abs });
      } catch (e) { c.err('tee: ' + p + ': ' + e.message + '\n'); st = 1; }
    }
    c.out(data);
    return st;
  };
  C.diff = async (c) => {
    const { f, pos } = c.opts('rqu', { recursive: 'r', brief: 'q' });
    if (pos.length !== 2) { c.err("diff: opérande manquant après '" + (pos[0] || 'diff') + "'\n"); return 2; }
    let a, b;
    try { a = c.lookup(pos[0]); b = c.lookup(pos[1]); } catch (e) { c.err('diff: ' + (e.path || '') + ': ' + e.message + '\n'); return 2; }
    let differ = false;
    const cmpFiles = (x, y, nx, ny) => {
      if (x.c === y.c) return;
      differ = true;
      if (f.q) { c.out('Les fichiers ' + nx + ' et ' + ny + ' sont différents\n'); return; }
      if (f.r) c.out('diff -r ' + nx + ' ' + ny + '\n');
      const la = x.c.split('\n'), lb = y.c.split('\n');
      if (la[la.length - 1] === '') la.pop(); if (lb[lb.length - 1] === '') lb.pop();
      // diff simple ligne à ligne (LCS)
      const n = la.length, m = lb.length;
      const L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
      for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = la[i] === lb[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
      let i = 0, j = 0; const ops = [];
      while (i < n || j < m) {
        if (i < n && j < m && la[i] === lb[j]) { i++; j++; continue; }
        const si = i, sj = j;
        while ((i < n || j < m) && !(i < n && j < m && la[i] === lb[j])) { if (j >= m || (i < n && L[i + 1][j] >= L[i][j + 1])) i++; else j++; }
        ops.push([si, i, sj, j]);
      }
      const rng = (a1, a2) => (a2 - a1 <= 1 ? String(a1 + 1) : (a1 + 1) + ',' + a2);
      for (const [a1, a2, b1, b2] of ops) {
        if (a1 === a2) c.out(a1 + 'a' + rng(b1, b2) + '\n' + lb.slice(b1, b2).map((l) => '> ' + l).join('\n') + '\n');
        else if (b1 === b2) c.out(rng(a1, a2) + 'd' + b1 + '\n' + la.slice(a1, a2).map((l) => '< ' + l).join('\n') + '\n');
        else c.out(rng(a1, a2) + 'c' + rng(b1, b2) + '\n' + la.slice(a1, a2).map((l) => '< ' + l).join('\n') + '\n---\n' + lb.slice(b1, b2).map((l) => '> ' + l).join('\n') + '\n');
      }
    };
    const cmpDirs = (x, y, nx, ny) => {
      const names = [...new Set(Object.keys(x.ch).concat(Object.keys(y.ch)))].sort(cmpName);
      for (const k of names) {
        const cx = x.ch[k], cy = y.ch[k];
        if (!cx) { differ = true; c.out('Seulement dans ' + ny + ' : ' + k + '\n'); continue; }
        if (!cy) { differ = true; c.out('Seulement dans ' + nx + ' : ' + k + '\n'); continue; }
        if (cx.t === 'd' && cy.t === 'd') { if (f.r) cmpDirs(cx, cy, nx + '/' + k, ny + '/' + k); else c.out('Sous-répertoires communs : ' + nx + '/' + k + ' et ' + ny + '/' + k + '\n'); }
        else if (cx.t === 'f' && cy.t === 'f') cmpFiles(cx, cy, nx + '/' + k, ny + '/' + k);
      }
    };
    if (a.node.t === 'd' && b.node.t === 'd') cmpDirs(a.node, b.node, pos[0].replace(/\/$/, ''), pos[1].replace(/\/$/, ''));
    else if (a.node.t === 'f' && b.node.t === 'f') { if (!c.sys.can(a.node, c.cred, 4) || !c.sys.can(b.node, c.cred, 4)) { c.err('diff: Permission non accordée\n'); return 2; } cmpFiles(a.node, b.node, pos[0], pos[1]); }
    else { c.err('diff: impossible de comparer un fichier et un répertoire\n'); return 2; }
    return differ ? 1 : 0;
  };
  C.seq = async (c) => {
    const n = c.args.map(Number);
    let [a, s, b] = n.length === 1 ? [1, 1, n[0]] : n.length === 2 ? [n[0], 1, n[1]] : n;
    let out = ''; for (let x = a; s > 0 ? x <= b : x >= b; x += s) out += x + '\n';
    c.out(out); return 0;
  };
  C.basename = async (c) => { const p = (c.args[0] || '').replace(/\/+$/, ''); let b = p.replace(/^.*\//, ''); if (c.args[1] && b.endsWith(c.args[1])) b = b.slice(0, -c.args[1].length); c.out(b + '\n'); return 0; };
  C.dirname = async (c) => { const p = (c.args[0] || '').replace(/\/+$/, ''); c.out((p.includes('/') ? p.replace(/\/[^/]*$/, '') || '/' : '.') + '\n'); return 0; };
  C.xargs = async (c) => {
    const words = (c.stdin || '').split(/\s+/).filter(Boolean);
    const cmd = c.args.length ? c.args : ['echo'];
    return c.sh.runCommand(cmd.concat(words), Object.assign({}, c.ctx, { stdin: null }), {});
  };

  /* ---------------- infos fichiers / disque ---------------- */
  C.stat = async (c) => {
    let st = 0;
    for (const p of c.args.filter((a) => a[0] !== '-')) {
      try {
        const { node, abs } = c.lookup(p);
        const ty = node.t === 'd' ? 'répertoire' : node.t === 'l' ? 'lien symbolique' : node.special ? 'fichier spécial de caractères' : (c.sys.size(node) ? 'fichier' : 'fichier vide');
        const d = new Date(node.mtime).toISOString().replace('T', ' ').slice(0, 19);
        c.out('  Fichier : ' + p + '\n   Taille : ' + c.sys.size(node) + '\t\tBlocs : ' + Math.ceil(c.sys.size(node) / 512) + '\t Blocs d\'E/S : 4096   ' + ty + '\nAccès : (' + perm.oct(node.mode, 4) + '/' + perm.toStr(node.mode, node.t === 'd' ? 'd' : '-') + ')  UID : (' + String(node.uid).padStart(5) + '/' + c.sys.uname(node.uid).padStart(8) + ')   GID : (' + String(node.gid).padStart(5) + '/' + c.sys.gname(node.gid).padStart(8) + ')\nModif. : ' + d + ',000000000 +0200\n');
        void abs;
      } catch (e) { c.err("stat: impossible de statuer '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };
  C.file = async (c) => {
    for (const p of c.args) {
      try {
        const { node } = c.lookup(p);
        let t = 'ASCII text';
        if (node.t === 'd') t = 'directory';
        else if (node.bin || node.compiled) t = 'ELF 64-bit LSB pie executable, x86-64, dynamically linked';
        else if (node.archive) t = node.gz ? 'gzip compressed data' : 'POSIX tar archive (GNU)';
        else if (!node.c) t = 'empty';
        else if (/^#!.*bash/.test(node.c)) t = 'Bourne-Again shell script, UTF-8 Unicode text executable';
        else if (/[^\x00-\x7f]/.test(node.c)) t = 'UTF-8 Unicode text';
        c.out(p + ': ' + t + '\n');
      } catch (e) { c.out(p + ": cannot open `" + p + "' (No such file or directory)\n"); }
    }
    return 0;
  };
  C.df = async (c) => {
    const { f } = c.opts('hTi', { 'human-readable': 'h' });
    const rows = [['Sys. de fichiers', 'Taille', 'Utilisé', 'Dispo', 'Uti%', 'Monté sur'], ['udev', 1987654, 0, 1987654, '0%', '/dev'], ['tmpfs', 402832, 1240, 401592, '1%', '/run'], ['/dev/sda1', 20509264, 7312548, 12131912, '38%', '/'], ['tmpfs', 2014164, 0, 2014164, '0%', '/dev/shm'], ['tmpfs', 5120, 4, 5116, '1%', '/run/lock'], ['tmpfs', 402832, 92, 402740, '1%', '/run/user/1000']];
    if (!f.h) rows[0][1] = '1K-blocs';
    const fmt = (v) => (typeof v === 'number' ? (f.h ? human(v * 1024) : String(v)) : v);
    const data = rows.map((r) => r.map(fmt));
    const w = data[0].map((_, i) => Math.max(...data.map((r) => r[i].length)));
    c.out(data.map((r) => r.map((x, i) => (i === 0 || i === 5 ? x.padEnd(w[i]) : x.padStart(w[i]))).join(' ')).join('\n') + '\n');
    return 0;
  };
  C.du = async (c) => {
    const { f, pos } = c.opts('shacd:', { summarize: 's', 'human-readable': 'h', 'max-depth': 'd:' });
    const targets = pos.length ? pos : ['.'];
    let st = 0, total = 0;
    const fmt = (b) => (f.h ? human(b) : String(Math.ceil(b / 1024)));
    const walk = (node, path, depth) => {
      if (node.t !== 'd') { const s = Math.max(4096, Math.ceil(c.sys.size(node) / 4096) * 4096); if (f.a && depth > 0) c.out(fmt(s) + '\t' + path + '\n'); return s; }
      if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 1)) { c.err("du: impossible de lire le répertoire '" + path + "': Permission non accordée\n"); st = 1; return 4096; }
      let s = 4096;
      for (const k of Object.keys(node.ch)) s += walk(node.ch[k], path.replace(/\/$/, '') + '/' + k, depth + 1);
      if (!f.s && (f.d == null || depth <= +f.d)) c.out(fmt(s) + '\t' + path + '\n');
      return s;
    };
    for (const t of targets) {
      try { const { node } = c.lookup(t); const s = walk(node, t, 0); total += s; if (f.s) c.out(fmt(s) + '\t' + t + '\n'); else if (node.t !== 'd') c.out(fmt(s) + '\t' + t + '\n'); }
      catch (e) { c.err("du: impossible d'accéder à '" + t + "': " + e.message + '\n'); st = 1; }
    }
    if (f.c) c.out(fmt(total) + '\ttotal\n');
    return st;
  };
  C.tree = async (c) => {
    const { f, pos } = c.opts('adL:fpugs', {});
    const root = pos[0] || '.';
    let nd = 0, nf = 0;
    let r;
    try { r = c.lookup(root); } catch (e) { c.out(root + '  [error opening dir]\n\n0 directories, 0 files\n'); return 2; }
    c.out(root + '\n');
    const walk = (node, prefix, depth) => {
      if (f.L && depth >= +f.L) return;
      if (!c.sys.can(node, c.cred, 4)) { c.out(prefix + '└── [error opening dir]\n'); return; }
      let names = Object.keys(node.ch).filter((n) => f.a || n[0] !== '.').sort(cmpName);
      if (f.d) names = names.filter((n) => node.ch[n].t === 'd');
      names.forEach((n, i) => {
        const last = i === names.length - 1;
        const ch = node.ch[n];
        const info = f.p || f.u ? '[' + (f.p ? perm.toStr(ch.mode, ch.t === 'd' ? 'd' : '-') : '') + (f.u ? (f.p ? ' ' : '') + c.sys.uname(ch.uid).padEnd(8) : '') + ']  ' : '';
        c.out(prefix + (last ? '└── ' : '├── ') + info + n + '\n');
        if (ch.t === 'd') { nd++; walk(ch, prefix + (last ? '    ' : '│   '), depth + 1); } else nf++;
      });
    };
    if (r.node.t === 'd') walk(r.node, '', 0);
    c.out('\n' + nd + ' director' + (nd > 1 ? 'ies' : 'y') + (f.d ? '' : ', ' + nf + ' file' + (nf > 1 ? 's' : '')) + '\n');
    return 0;
  };

  /* ---------------- droits ---------------- */
  C.chmod = async (c) => {
    const args = c.args.slice();
    let R = false, v = false;
    while (args.length && /^-[Rvcf]+$/.test(args[0])) { if (args[0].includes('R')) R = true; if (args[0].includes('v')) v = true; args.shift(); }
    if (args[0] === '--recursive') { R = true; args.shift(); }
    if (args.length < 2) { c.err(args.length ? "chmod: opérande manquant après '" + args[0] + "'\nSaisissez « chmod --help » pour plus d'informations.\n" : "chmod: opérande manquant\n"); return 1; }
    const mode = args.shift();
    if (perm.apply(mode, 0o644, false, c.f.umask) == null) { c.err("chmod: mode incorrect : '" + mode + "'\nSaisissez « chmod --help » pour plus d'informations.\n"); return 1; }
    let st = 0;
    const apply = (node, label) => {
      if (c.cred.uid !== 0 && node.uid !== c.cred.uid) { c.err("chmod: modification des droits de '" + label + "': Opération non permise\n"); st = 1; return; }
      const before = node.mode;
      let m = perm.apply(mode, node.mode, node.t === 'd', c.f.umask);
      if (c.cred.uid !== 0 && (m & 0o2000) && !(before & 0o2000) && !c.cred.groups.includes(node.gid)) m &= ~0o2000;
      node.mode = m;
      if (v) c.out("le mode de '" + label + "' a été modifié de " + perm.oct(before, 4) + ' (' + perm.toStr(before) + ') en ' + perm.oct(m, 4) + ' (' + perm.toStr(m) + ')\n');
      c.sys.emit('chmod', { path: label, node });
    };
    const walk = (node, label) => {
      apply(node, label);
      if (R && node.t === 'd') {
        if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 1)) { c.err("chmod: impossible de lire le répertoire '" + label + "': Permission non accordée\n"); st = 1; return; }
        for (const k of Object.keys(node.ch)) walk(node.ch[k], label.replace(/\/$/, '') + '/' + k);
      }
    };
    for (const p of args) {
      try { const { node } = c.lookup(p); walk(node, p); }
      catch (e) { c.err("chmod: impossible d'accéder à '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };
  C.chown = async (c) => {
    const args = c.args.slice();
    let R = false, v = false;
    while (args.length && /^-[Rvhcf]+$/.test(args[0])) { if (args[0].includes('R')) R = true; if (args[0].includes('v')) v = true; args.shift(); }
    if (args.length < 2) { c.err(args.length ? "chown: opérande manquant après '" + args[0] + "'\n" : 'chown: opérande manquant\n'); return 1; }
    const spec = args.shift();
    const m = /^([^:.]*)(?:[:.](.*))?$/.exec(spec);
    let uid = null, gid = null;
    if (m[1]) { const u = c.sys.user(m[1]) || (/^\d+$/.test(m[1]) ? { uid: +m[1] } : null); if (!u) { c.err("chown: utilisateur incorrect: « " + spec + " »\n"); return 1; } uid = u.uid; }
    if (m[2]) { const g = c.sys.group(m[2]) || (/^\d+$/.test(m[2]) ? { gid: +m[2] } : null); if (!g) { c.err("chown: groupe incorrect: « " + spec + " »\n"); return 1; } gid = g.gid; }
    else if (spec.endsWith(':') && m[1]) gid = c.sys.user(m[1]).gid;
    let st = 0;
    const apply = (node, label) => {
      if (c.cred.uid !== 0) {
        if (uid != null && uid !== node.uid) { c.err("chown: modification du propriétaire de '" + label + "': Opération non permise\n"); st = 1; return; }
        if (gid != null && (node.uid !== c.cred.uid || !c.cred.groups.includes(gid))) { c.err("chown: modification du groupe de '" + label + "': Opération non permise\n"); st = 1; return; }
      }
      if (uid != null) node.uid = uid;
      if (gid != null) node.gid = gid;
      if (uid != null && node.t !== 'd') node.mode &= ~0o6000;
      if (v) c.out("propriétaire de '" + label + "' modifié en " + spec + '\n');
      c.sys.emit('chown', { path: label, node });
    };
    const walk = (node, label) => { apply(node, label); if (R && node.t === 'd') for (const k of Object.keys(node.ch)) walk(node.ch[k], label.replace(/\/$/, '') + '/' + k); };
    for (const p of args) {
      try { const { node } = c.lookup(p); walk(node, p); }
      catch (e) { c.err("chown: impossible d'accéder à '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };
  C.chgrp = async (c) => {
    const args = c.args.slice();
    let R = false;
    while (args.length && /^-[Rvhcf]+$/.test(args[0])) { if (args[0].includes('R')) R = true; args.shift(); }
    if (args.length < 2) { c.err(args.length ? "chgrp: opérande manquant après '" + args[0] + "'\n" : 'chgrp: opérande manquant\n'); return 1; }
    const gname = args.shift();
    const g = c.sys.group(gname);
    if (!g) { c.err('chgrp: groupe incorrect: « ' + gname + ' »\n'); return 1; }
    let st = 0;
    const apply = (node, label) => {
      if (c.cred.uid !== 0 && (node.uid !== c.cred.uid || !c.cred.groups.includes(g.gid))) { c.err("chgrp: modification du groupe de '" + label + "': Opération non permise\n"); st = 1; return; }
      node.gid = g.gid;
      c.sys.emit('chown', { path: label, node });
    };
    const walk = (node, label) => { apply(node, label); if (R && node.t === 'd') for (const k of Object.keys(node.ch)) walk(node.ch[k], label.replace(/\/$/, '') + '/' + k); };
    for (const p of args) {
      try { const { node } = c.lookup(p); walk(node, p); }
      catch (e) { c.err("chgrp: impossible d'accéder à '" + p + "': " + e.message + '\n'); st = 1; }
    }
    return st;
  };

  /* ---------------- tar ---------------- */
  C.tar = async (c) => {
    const args = c.args.slice();
    if (args.length && /^[a-zA-Z]+$/.test(args[0])) args[0] = '-' + args[0];
    c.args = args;
    const { f, pos } = c.opts('cxtvfzjC:', { create: 'c', extract: 'x', list: 't', verbose: 'v', file: 'f', gzip: 'z', directory: 'C:' }, {});
    // -f prend l'argument suivant
    let file = null;
    if (f.f) {
      // retrouve le nom d'archive : premier argument positionnel après le groupe contenant f
      file = pos.shift();
    }
    const modes = ['c', 'x', 't'].filter((m) => f[m]);
    if (modes.length !== 1) { c.err("tar: Vous devez spécifier l'une des options « -Acdtrux », « --delete » ou « --test-label »\nSaisissez « tar --help » ou « tar --usage » pour plus d'informations.\n"); return 2; }
    if (!file) { c.err('tar: Refus de lire/écrire les données de l\'archive depuis/vers un terminal.\nSaisissez « tar --help » pour plus d\'informations.\n'); return 2; }
    if (f.c) {
      if (!pos.length) { c.err("tar: Lâche refus de créer une archive vide\nSaisissez « tar --help » pour plus d'informations.\n"); return 2; }
      const entries = []; let st = 0;
      const add = (node, path) => {
        if (node.t === 'd') {
          entries.push({ p: path.replace(/\/?$/, '/'), t: 'd', mode: node.mode, uid: node.uid, gid: node.gid });
          if (f.v) c.out(path.replace(/\/?$/, '/') + '\n');
          if (!c.sys.can(node, c.cred, 4) || !c.sys.can(node, c.cred, 1)) { c.err('tar: ' + path + ': Ne peut ouvrir: Permission non accordée\n'); st = 2; return; }
          for (const k of Object.keys(node.ch).sort(cmpName)) add(node.ch[k], path.replace(/\/$/, '') + '/' + k);
        } else {
          if (!c.sys.can(node, c.cred, 4)) { c.err('tar: ' + path + ': Ne peut ouvrir: Permission non accordée\n'); st = 2; return; }
          entries.push({ p: path, t: 'f', mode: node.mode, uid: node.uid, gid: node.gid, c: node.c });
          if (f.v) c.out(path + '\n');
        }
      };
      for (const p of pos) {
        try { const { node } = c.lookup(p); add(node, p.replace(/^\/+/, () => { c.err("tar: Suppression de « / » au début des noms des membres\n"); return ''; })); }
        catch (e) { c.err('tar: ' + p + ' : stat impossible: ' + e.message + '\n'); st = 2; }
      }
      let r;
      try { r = c.lookup(file, { parent: true }); } catch (e) { c.err('tar: ' + file + ' : open impossible: ' + e.message + '\n'); return 2; }
      let node = r.node;
      if (node && !c.sys.can(node, c.cred, 2)) { c.err('tar: ' + file + ' : open impossible: Permission non accordée\n'); return 2; }
      if (!node) { if (!c.sys.can(r.parent, c.cred, 2)) { c.err('tar: ' + file + ' : open impossible: Permission non accordée\n'); return 2; } node = c.sys.newFile(r.parent, r.name, '', c.cred, c.f.umask); }
      node.archive = entries; node.gz = !!(f.z || f.j);
      node.c = f.z || f.j ? '\x1f\u008b\b\u0000\u0000\u0000\u0000\u0000\u0000\u0003í\u009dÛn\u001bÇ\u0019Ç=\u001f\u0080\u008e\u0085Ö%\u0090\u0094Ér…(données compressées gzip)\n' : entries.map((e) => (e.p + '\u0000'.repeat(4) + '0000' + perm.oct(e.mode) + '\u0000' + String(e.uid).padStart(7, '0') + '\u0000' + String(e.gid).padStart(7, '0') + '\u0000' + '0000000' + (e.c ? e.c.length.toString(8) : '0').padStart(4, '0') + '\u0000 ustar  \u0000' + c.sys.uname(e.uid) + '\u0000\u0000\u0000' + c.sys.gname(e.gid) + '\u0000\u0000\u0000\n' + (e.c || ''))).join('') + '\u0000'.repeat(8) + '\n';
      node.fakeSize = Math.max(10240, Math.ceil(entries.reduce((a, e) => a + 512 + Math.ceil((e.c || '').length / 512) * 512, 1024) / 10240) * 10240);
      if (node.gz) node.fakeSize = Math.max(120, Math.round(entries.reduce((a, e) => a + (e.c || '').length, 0) * 0.45) + 60 * entries.length);
      node.mtime = Date.now();
      c.sys.emit('tar', { op: 'c', file: r.abs, entries });
      return st;
    }
    let an;
    try { an = c.lookup(file).node; } catch (e) { c.err('tar: ' + file + ' : open impossible: ' + e.message + '\ntar: Error is not recoverable: exiting now\n'); return 2; }
    if (!c.sys.can(an, c.cred, 4)) { c.err('tar: ' + file + ' : open impossible: Permission non accordée\n'); return 2; }
    if (!an.archive) { c.err('tar: Ceci ne ressemble pas à une archive de type « tar »\ntar: On saute à l\'en-tête suivant\ntar: Arrêt avec code d\'échec à cause des erreurs précédentes\n'); return 2; }
    if (an.gz && !f.z && !f.j && false) { /* tar moderne détecte la compression */ }
    if (f.t) { for (const e of an.archive) c.out(f.v ? perm.toStr(e.mode, e.t === 'd' ? 'd' : '-') + ' ' + c.sys.uname(e.uid) + '/' + c.sys.gname(e.gid) + ' ' + String((e.c || '').length).padStart(6) + ' ' + new Date().toISOString().slice(0, 16).replace('T', ' ') + ' ' + e.p + '\n' : e.p + '\n'); return 0; }
    // extraction
    const base = f.C ? c.abs(f.C) : c.f.cwd;
    try { const b = c.sys.lookup(base, c.cred, '/'); if (b.node.t !== 'd') throw new SIM.FsError('ENOTDIR'); } catch (e) { c.err('tar: ' + (f.C || '.') + ' : chdir impossible: ' + e.message + '\ntar: Error is not recoverable: exiting now\n'); return 2; }
    let st = 0;
    for (const e of an.archive) {
      const target = c.sys.normPath(e.p, base);
      if (f.v) c.out(e.p + '\n');
      try {
        if (e.t === 'd') {
          const r = c.sys.lookup(target, c.cred, '/', { parent: true });
          if (!r.node) { if (!c.sys.can(r.parent, c.cred, 2)) throw new SIM.FsError('EACCES'); const d = c.sys.newDir(r.parent, r.name, c.cred, c.f.umask); d.mode = e.mode & ~c.f.umask; }
        } else {
          const r = c.sys.lookup(target, c.cred, '/', { parent: true });
          if (r.node) { r.node.c = e.c; r.node.mode = e.mode & ~c.f.umask & 0o7777 | (e.mode & 0o700); }
          else { if (!c.sys.can(r.parent, c.cred, 2)) throw new SIM.FsError('EACCES'); const n = c.sys.newFile(r.parent, r.name, e.c, c.cred, c.f.umask); n.mode = e.mode & ~c.f.umask & 0o777; }
        }
      } catch (err) { c.err('tar: ' + e.p + ' : open impossible: ' + err.message + '\n'); st = 2; }
    }
    c.sys.emit('tar', { op: 'x', file, base });
    return st;
  };
  C.gzip = async (c) => { c.err('gzip: (simulateur) utilise plutôt tar -czf archive.tar.gz fichiers\n'); return 1; };

  /* ---------------- divers ---------------- */
  const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  C.date = async (c) => {
    const d = new Date();
    const p2 = (n) => String(n).padStart(2, '0');
    const fmt = c.args.find((a) => a[0] === '+');
    if (!fmt) { c.out(JOURS[d.getDay()] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear() + ', ' + p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()) + ' CEST\n'); return 0; }
    const map = { Y: d.getFullYear(), m: p2(d.getMonth() + 1), d: p2(d.getDate()), H: p2(d.getHours()), M: p2(d.getMinutes()), S: p2(d.getSeconds()), F: d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()), T: p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()), A: JOURS[d.getDay()], B: MOIS[d.getMonth()], y: String(d.getFullYear()).slice(2), s: Math.floor(d.getTime() / 1000), j: String(Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000)).padStart(3, '0'), e: String(d.getDate()).padStart(2), n: '\n', '%': '%', D: p2(d.getMonth() + 1) + '/' + p2(d.getDate()) + '/' + String(d.getFullYear()).slice(2), R: p2(d.getHours()) + ':' + p2(d.getMinutes()) };
    c.out(fmt.slice(1).replace(/%(.)/g, (m, k) => (map[k] != null ? map[k] : m)) + '\n');
    return 0;
  };
  C.cal = async (c) => {
    const d = new Date(); const y = d.getFullYear(), m = d.getMonth();
    const title = MOIS[m] + ' ' + y; let s = title.padStart(10 + Math.floor(title.length / 2)) + '\nlu ma me je ve sa di\n';
    const first = (new Date(y, m, 1).getDay() + 6) % 7; const days = new Date(y, m + 1, 0).getDate();
    let line = '   '.repeat(first);
    for (let k = 1; k <= days; k++) { line += String(k).padStart(2) + ' '; if ((first + k) % 7 === 0) { s += line.trimEnd() + '\n'; line = ''; } }
    if (line) s += line.trimEnd() + '\n';
    c.out(s); return 0;
  };
  C.which = async (c) => {
    let st = 0;
    for (const a of c.args.filter((x) => x[0] !== '-')) { const p = c.sh.findInPath(a, c.f); if (p && c.sys.isInstalledCmd(a)) c.out(p.path + '\n'); else st = 1; }
    return st;
  };
  C.clear = async (c) => { c.sh.term.clear(); return 0; };
  C.reset = C.clear;
  C.tty = async (c) => { c.out('/dev/' + c.sh.tty + '\n'); return 0; };
  C.sh = async (c) => C.bash(c);
  C.logger = async (c) => { c.sys.log('user', c.f.user + ': ' + c.args.join(' ')); return 0; };

  /* ---------------- gcc ---------------- */
  C.gcc = async (c) => {
    const args = c.args.slice();
    let out = 'a.out'; const srcs = [];
    for (let i = 0; i < args.length; i++) { if (args[i] === '-o') out = args[++i]; else if (args[i][0] !== '-') srcs.push(args[i]); }
    if (!srcs.length) { c.err('gcc: fatal error: no input files\ncompilation terminated.\n'); return 1; }
    let code = '';
    for (const s of srcs) { const t = c.readText(s); if (t == null) { c.err('gcc: fatal error: ' + s + ': No such file or directory\ncompilation terminated.\n'); return 1; } code += t; }
    if (!/\bmain\s*\(/.test(code)) { c.err("/usr/bin/ld: /usr/lib/x86_64-linux-gnu/Scrt1.o: in function `_start':\n(.text+0x17): undefined reference to `main'\ncollect2: error: ld returned 1 exit status\n"); return 1; }
    // erreurs de syntaxe grossières : point-virgule manquant après printf(...)
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i].trim();
      if (/^(printf|return|int\s+\w+\s*=)/.test(l) && !/[;{]\s*$/.test(l)) { c.err(srcs[0] + ': In function ‘main’:\n' + srcs[0] + ':' + (i + 1) + ':' + (lines[i].length + 1) + ": error: expected ‘;’ before ‘" + ((lines[i + 1] || '}').trim().split(/\s/)[0] || '}') + "’\n"); return 1; }
    }
    let output = '';
    const re = /printf\s*\(\s*"((?:[^"\\]|\\.)*)"/g; let m;
    while ((m = re.exec(code))) output += m[1].replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/%[dsf]/g, '42');
    let r;
    try { r = c.lookup(out, { parent: true }); } catch (e) { return c.fsErr(e, out); }
    if (!r.node && !c.sys.can(r.parent, c.cred, 2)) { c.err('/usr/bin/ld: cannot open output file ' + out + ': Permission denied\ncollect2: error: ld returned 1 exit status\n'); return 1; }
    const n = r.node || c.sys.newFile(r.parent, r.name, '', c.cred, 0);
    n.c = '\x7fELF'; n.mode = 0o777 & ~c.f.umask; n.compiled = { output };
    return 0;
  };
})();
