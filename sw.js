/* Service worker : met toute l'application en cache pour un fonctionnement 100 % hors ligne. (généré par tools/build-sw.py) */
const CACHE = 'linuxrev-e754ab4282';
const ASSETS = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "css/style.css",
 "js/app.js",
 "js/checker.js",
 "js/cmdinfo.js",
 "js/core.js",
 "js/generators.js",
 "js/missions.js",
 "js/shparse.js",
 "js/subjects.js",
 "js/missions/m-c1.js",
 "js/missions/m-c2.js",
 "js/missions/m-c3.js",
 "js/missions/m-c4.js",
 "js/math/check.js",
 "js/math/expr.js",
 "js/math/gen.js",
 "js/math/render.js",
 "js/sim/builtins.js",
 "js/sim/cmd-files.js",
 "js/sim/cmd-net.js",
 "js/sim/cmd-proc.js",
 "js/sim/cmd-sys.js",
 "js/sim/cmd-users.js",
 "js/sim/shell.js",
 "js/sim/system.js",
 "js/sim/terminal.js",
 "js/sim/world.js",
 "js/data/c1.js",
 "js/data/c2.js",
 "js/data/c3.js",
 "js/data/c4.js",
 "js/data/maths/m1.js",
 "js/data/maths/m10.js",
 "js/data/maths/m11.js",
 "js/data/maths/m12.js",
 "js/data/maths/m2.js",
 "js/data/maths/m3.js",
 "js/data/maths/m4.js",
 "js/data/maths/m5.js",
 "js/data/maths/m6.js",
 "js/data/maths/m7.js",
 "js/data/maths/m8.js",
 "js/data/maths/m9.js",
 "icons/apple-touch-icon.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/maskable-512.png"
];
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
