// Espresso Trainer Service Worker – Network-First für automatisches Update
// Kein Cache-First: index.html wird immer frisch geladen wenn online.

const CACHE = 'espresso-v1';

// Install: index.html sofort cachen (als Offline-Fallback)
self.addEventListener('install', e => {
  e.waitUntil(
    fetch('./index.html', { cache: 'no-store' })
      .then(res => caches.open(CACHE).then(c => c.put('./index.html', res)))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

// Activate: alte Caches löschen, sofort alle Tabs übernehmen
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// SKIP_WAITING auf Anfrage der Seite
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  let url;
  try { url = new URL(e.request.url); } catch { return; }
  if (url.origin !== location.origin) return;

  // version.json hat eigenen Cache-Buster (?t=...) → SW nicht einmischen
  if (url.pathname.endsWith('version.json')) return;

  // Navigation (index.html): immer zuerst Netzwerk, Offline → Cache-Fallback
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Alles andere: Cache-First (Icons, Manifest etc.)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      });
    })
  );
});
