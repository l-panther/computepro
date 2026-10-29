
const CACHE = 'computepro-academy-v4';

const ASSETS = [
  './',
  './index.html',
  './pro-academy-nav.css',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  './academy-dashboard.css',
  './compute-hero.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(key => key.startsWith('computepro-') && key !== CACHE)
            .map(key => caches.delete(key))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Always check for the latest HTML, CSS and JavaScript.
  if (
    request.mode === 'navigate' ||
    /\.(css|js)$/i.test(url.pathname)
  ) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE).then(cache => cache.put(request, copy))
            );
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Other assets remain available offline.
  event.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE).then(cache => cache.put(request, copy))
          );
        }
        return response;
      })
    )
  );
});
