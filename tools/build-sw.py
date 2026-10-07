#!/usr/bin/env python3
"""Régénère sw.js avec la liste des fichiers à mettre en cache (à relancer après toute modification)."""
import hashlib, os, json
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = ['./', 'index.html', 'manifest.webmanifest']
for d in ['css', 'js', 'icons']:
    for dp, dn, fn in os.walk(os.path.join(root, d)):
        for f in sorted(fn):
            if f.startswith('.'): continue
            files.append(os.path.relpath(os.path.join(dp, f), root).replace(os.sep, '/'))
h = hashlib.sha1()
for f in files:
    p = os.path.join(root, f)
    if os.path.isfile(p): h.update(open(p, 'rb').read())
version = h.hexdigest()[:10]
sw = """/* Service worker : met toute l'application en cache pour un fonctionnement 100 %% hors ligne. (généré par tools/build-sw.py) */
const CACHE = 'linuxrev-%s';
const ASSETS = %s;
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('linuxrev-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
""" % (version, json.dumps(files, indent=1))
open(os.path.join(root, 'sw.js'), 'w').write(sw)
print('sw.js :', len(files), 'fichiers, version', version)
