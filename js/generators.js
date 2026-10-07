/* Exercices générés à l'infini : droits octal/symbolique, chmod, umask, accès, adressage IP, signaux, ports. */
(function () {
  'use strict';
  const APP = window.APP;
  const U = APP.util, perm = APP.perm;
  const R = U.rand, pick = U.pick;
  const COMMON = [0o644, 0o755, 0o600, 0o700, 0o750, 0o640, 0o664, 0o775, 0o711, 0o444, 0o555, 0o660, 0o770, 0o754, 0o534, 0o653, 0o741, 0o620, 0o705, 0o310];
  const randPerm = () => (Math.random() < 0.55 ? pick(COMMON) : R(0, 0o777));
  const s = (m) => perm.toStr(m);
  const o = (m) => perm.oct(m);
  const tri = (m) => [s(m).slice(0, 3), s(m).slice(3, 6), s(m).slice(6, 9)];
  const val = (t) => (t[0] === 'r' ? 4 : 0) + (t[1] === 'w' ? 2 : 0) + (t[2] === 'x' ? 1 : 0);
  const explainOct = (m) => tri(m).map((t) => t + ' = ' + [t[0] === 'r' ? '4' : '0', t[1] === 'w' ? '2' : '0', t[2] === 'x' ? '1' : '0'].join('+') + ' = ' + val(t)).join(' ; ');
  const normPerm = (x) => String(x || '').trim().replace(/\s+/g, '').replace(/^-(?=[-rwx]{9}$)/, '');

  function q(type, obj) { return Object.assign({ id: 'gen-' + type, kind: 'gen', gen: type, type: 'input', level: 1 }, obj); }

  const G = {
    oct: {
      label: 'Symbolique → octal', chapter: 'c2',
      make() { const m = randPerm(); return q('oct', { q: 'Quelle est la valeur **octale** des droits `' + s(m) + '` ?', accept: [o(m)], explain: explainOct(m) + ' → **' + o(m) + '**.', placeholder: 'ex. 750' }); }
    },
    sym: {
      label: 'Octal → symbolique', chapter: 'c2',
      make() { const m = randPerm(); return q('sym', { q: 'Quels droits **symboliques** (9 caractères) correspondent à `chmod ' + o(m) + '` ?', accept: [s(m)], norm: normPerm, explain: o(m).split('').map((d, i) => d + ' = ' + tri(m)[i]).join(' ; ') + ' → **' + s(m) + '**.', placeholder: 'ex. rwxr-x---' }); }
    },
    chmod: {
      label: 'Effet d\'un chmod', chapter: 'c2',
      make() {
        const init = randPerm();
        const who = ['u', 'g', 'o', 'ug', 'go', 'a', 'uo'];
        const clauses = [];
        const n = R(1, 3);
        const used = new Set();
        for (let i = 0; i < n; i++) {
          let w = pick(who); while ([...w].some((c) => used.has(c)) && used.size < 3) w = pick(['u', 'g', 'o']);
          [...w].forEach((c) => used.add(c));
          const op = pick(['+', '-', '=', '+', '-']);
          let p = ['r', 'w', 'x'].filter(() => Math.random() < 0.45).join('');
          if (!p && op !== '=') p = pick(['r', 'w', 'x']);
          clauses.push(w + op + p);
        }
        const mode = clauses.join(',');
        const res = perm.apply(mode, init, false, 0);
        return q('chmod', { q: 'Un fichier a les droits `' + s(init) + '` (' + o(init) + '). Après `chmod ' + mode + ' fic`, quels sont ses droits ? (symbolique ou octal)', accept: [s(res), o(res)], norm: normPerm, explain: 'On applique chaque clause dans l\'ordre (`+` ajoute, `-` retire, `=` fixe exactement) : ' + s(init) + ' → **' + s(res) + '** (' + o(res) + '). Les catégories non citées ne changent pas.', placeholder: 'ex. rw-r--r--' });
      }
    },
    umask: {
      label: 'umask → droits créés', chapter: 'c2',
      make() {
        const um = pick([0o022, 0o002, 0o027, 0o077, 0o007, 0o037, 0o026, 0o033, 0o023]);
        const isDir = Math.random() < 0.5;
        const base = isDir ? 0o777 : 0o666;
        const res = base & ~um;
        return q('umask', { q: 'Avec `umask ' + perm.oct(um, 4) + '`, quels droits aura un nouveau **' + (isDir ? 'répertoire' : 'fichier') + '** ? (symbolique ou octal)', accept: [s(res), o(res)], norm: normPerm, explain: 'Base ' + (isDir ? '777 (répertoire)' : '666 (fichier)') + ' = ' + s(base) + ', on RETIRE les droits du masque ' + s(um) + ' → **' + s(res) + '** (' + o(res) + ').' + (!isDir && (um & 0o111) !== um ? ' Un fichier ne reçoit jamais x par défaut.' : '') });
      }
    },
    umaskInv: {
      label: 'Trouver l\'umask', chapter: 'c2',
      make() {
        const um = pick([0o022, 0o002, 0o027, 0o077, 0o007]);
        return q('umaskInv', { q: 'Quel **umask** (3 chiffres) donne des fichiers en `' + s(0o666 & ~um) + '` et des répertoires en `' + s(0o777 & ~um) + '` ?', accept: [perm.oct(um), perm.oct(um, 4)], explain: 'Le masque contient les droits à retirer de 777 : ' + s(0o777) + ' − ' + s(0o777 & ~um) + ' → **' + perm.oct(um) + '**.', placeholder: 'ex. 027' });
      }
    },
    access: {
      label: 'Qui peut faire quoi ?', chapter: 'c2',
      make() {
        const m = randPerm();
        const isDir = Math.random() < 0.35;
        const ownerName = pick(['alice', 'bob']);
        const grp = pick(['dev', 'projet']);
        const who = pick([{ n: ownerName, owner: true, inG: Math.random() < 0.5 }, { n: 'carol', owner: false, inG: true }, { n: 'dave', owner: false, inG: false }]);
        const acts = isDir ? [['lister son contenu (ls)', 4], ['y créer un fichier', 3], ['y entrer avec cd', 1]] : [['lire le fichier (cat)', 4], ['modifier le fichier', 2], ['exécuter le fichier', 1]];
        const [act, bit] = pick(acts);
        const t = tri(m);
        const cat = who.owner ? 0 : who.inG ? 1 : 2;
        const catName = ['propriétaire (u)', 'groupe (g)', 'autres (o)'][cat];
        const trip = t[cat];
        let ok;
        if (bit === 3) ok = trip[1] === 'w' && trip[2] === 'x';
        else ok = trip['rwx'.indexOf(bit === 4 ? 'r' : bit === 2 ? 'w' : 'x')] !== '-';
        const line = (isDir ? 'd' : '-') + s(m) + '  1 ' + ownerName + ' ' + grp + ' 4096 ' + (isDir ? 'partage' : 'rapport.sh');
        const whoTxt = who.owner ? ownerName + ' (propriétaire' + (who.inG ? ', aussi membre de ' + grp : '') + ')' : who.n + (who.inG ? ' (membre du groupe ' + grp + ')' : ' (ni propriétaire, ni membre de ' + grp + ')');
        return q('access', {
          type: 'qcm', q: 'On a :\n`' + line + '`\n**' + whoTxt + '** peut-il/elle ' + act + ' ?',
          choices: ['Oui', 'Non'], answer: ok ? 0 : 1,
          explain: 'Une seule catégorie s\'applique, la première qui correspond : ici **' + catName + '** → `' + trip + '`. ' + (bit === 3 ? 'Créer dans un répertoire demande w ET x.' : 'Le droit demandé est ' + (bit === 4 ? 'r' : bit === 2 ? 'w' : 'x') + '.') + ' Réponse : **' + (ok ? 'oui' : 'non') + '**.',
          why: { 0: 'Regarde uniquement le triplet ' + catName + ' : `' + trip + '`.', 1: 'Regarde uniquement le triplet ' + catName + ' : `' + trip + '`.' }
        });
      }
    },
    net: {
      label: 'Adresse réseau / diffusion', chapter: 'c4',
      make() {
        const cidr = pick([8, 16, 24, 24, 25, 26, 27, 28, 30]);
        const ip = pick(['192.168.' + R(0, 255) + '.' + R(1, 254), '10.' + R(0, 255) + '.' + R(0, 255) + '.' + R(1, 254), '172.' + R(16, 31) + '.' + R(0, 255) + '.' + R(1, 254)]);
        const n = APP.SIM.ip.netOf(ip + '/' + cidr);
        const kind = pick(['net', 'bc', 'hosts', 'mask']);
        const lab = { net: 'l\'**adresse du réseau**', bc: 'l\'**adresse de diffusion**', hosts: 'le **nombre d\'hôtes** utilisables', mask: 'le **masque** en notation décimale' }[kind];
        const ans = { net: n.net, bc: n.bc, hosts: String(n.hosts), mask: n.mask }[kind];
        return q('net', { q: 'Pour `' + ip + '/' + cidr + '`, donne ' + lab + '.', accept: [ans], level: 2, explain: '/' + cidr + ' → masque ' + n.mask + ' (' + cidr + ' bits réseau, ' + (32 - cidr) + ' bits hôte). Réseau : ' + n.net + ' · Diffusion : ' + n.bc + ' · Hôtes : 2^' + (32 - cidr) + ' − 2 = ' + n.hosts + '. Réponse : **' + ans + '**.' });
      }
    },
    same: {
      label: 'Même réseau ?', chapter: 'c4',
      make() {
        const cidr = pick([24, 25, 26, 27, 28, 16]);
        const base = '192.168.' + R(0, 20) + '.';
        const a = base + R(1, 254), b = Math.random() < 0.5 ? base + R(1, 254) : '192.168.' + R(21, 40) + '.' + R(1, 254);
        const na = APP.SIM.ip.netOf(a + '/' + cidr), nb = APP.SIM.ip.netOf(b + '/' + cidr);
        const same = na.net === nb.net;
        return q('same', { type: 'qcm', level: 2, q: '`' + a + '/' + cidr + '` et `' + b + '/' + cidr + '` peuvent-elles communiquer **directement** (sans routeur) ?', choices: ['Oui, même réseau', 'Non, réseaux différents'], answer: same ? 0 : 1, explain: 'Réseau de la 1re : ' + na.net + '/' + cidr + ' ; de la 2e : ' + nb.net + '/' + cidr + '. ' + (same ? 'Identiques : communication directe.' : 'Différents : il faut passer par une passerelle (routeur).'), why: { 0: 'Calcule l\'adresse réseau de chacune (ET logique avec le masque).', 1: 'Calcule l\'adresse réseau de chacune (ET logique avec le masque).' } });
      }
    },
    signal: {
      label: 'Signaux', chapter: 'c3',
      make() {
        const S = [['SIGHUP', 1, 'fermeture du terminal / relire la configuration'], ['SIGINT', 2, 'interruption, envoyé par Ctrl+C'], ['SIGKILL', 9, 'arrêt immédiat et forcé, non interceptable'], ['SIGTERM', 15, 'arrêt propre, signal par défaut de kill'], ['SIGCONT', 18, 'reprise d\'un processus suspendu'], ['SIGSTOP', 19, 'suspension, non interceptable'], ['SIGTSTP', 20, 'suspension depuis le clavier (Ctrl+Z)']];
        const [n, num, d] = pick(S);
        if (Math.random() < 0.5) return q('signal', { q: 'Quel est le **numéro** du signal `' + n + '` ?', accept: [String(num)], explain: n + ' = **' + num + '** : ' + d + '.' });
        const others = U.shuffle(S.filter((x) => x[0] !== n)).slice(0, 3);
        const ch = U.shuffle([[n, num, d]].concat(others));
        return q('signal', { type: 'qcm', q: 'Quel signal correspond à : **' + d + '** ?', choices: ch.map((x) => x[0] + ' (' + x[1] + ')'), answer: ch.findIndex((x) => x[0] === n), explain: '**' + n + '** (' + num + ') : ' + d + '.', why: Object.fromEntries(ch.map((x, i) => [i, x[0] + ' : ' + x[2] + '.'])) });
      }
    },
    port: {
      label: 'Ports et services', chapter: 'c4',
      make() {
        const P = [['SSH', 22], ['HTTP', 80], ['HTTPS', 443], ['DNS', 53], ['FTP', 21], ['SMTP', 25], ['MySQL', 3306], ['RDP', 3389]];
        const [n, p] = pick(P);
        if (Math.random() < 0.6) return q('port', { q: 'Port par défaut de **' + n + '** ?', accept: [String(p)], explain: n + ' → port **' + p + '**. Ports < 1024 = « bien connus », réservés à root.' });
        const ch = U.shuffle([[n, p]].concat(U.shuffle(P.filter((x) => x[0] !== n)).slice(0, 3)));
        return q('port', { type: 'qcm', q: 'Quel service écoute par défaut sur le port **' + p + '** ?', choices: ch.map((x) => x[0]), answer: ch.findIndex((x) => x[0] === n), explain: 'Port ' + p + ' = **' + n + '**.', why: Object.fromEntries(ch.map((x, i) => [i, x[0] + ' utilise le port ' + x[1] + '.'])) });
      }
    },
    stat: {
      label: 'États (STAT)', chapter: 'c3',
      make() {
        const S = [['R', 'en exécution ou prêt (file d\'attente)'], ['S', 'endormi, interruptible (attend un événement)'], ['D', 'endormi non interruptible (E/S disque)'], ['T', 'suspendu (Ctrl+Z, SIGSTOP)'], ['Z', 'zombie : terminé, le parent n\'a pas lu son code de sortie']];
        const [l, d] = pick(S);
        const ch = U.shuffle(S);
        return q('stat', { type: 'qcm', q: 'Dans `ps`, que signifie la lettre **' + l + '** de la colonne STAT ?', choices: ch.map((x) => x[1]), answer: ch.findIndex((x) => x[0] === l), explain: '**' + l + '** = ' + d + '. Suffixes : s chef de session, + premier plan, < / N priorité haute / basse, l multi-thread.', why: Object.fromEntries(ch.map((x, i) => [i, 'Ça, c\'est l\'état ' + x[0] + '.'])) });
      }
    }
  };
  APP.generators = G;
  APP.genQuestion = (type) => G[type].make();
  APP.genRandom = (chapter) => { const keys = Object.keys(G).filter((k) => !chapter || G[k].chapter === chapter); return G[pick(keys)].make(); };
})();
