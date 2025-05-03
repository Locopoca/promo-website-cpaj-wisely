const CACHE_NAME = 'ebook-reader-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/icon-192x192.svg',
  '/icon-512x512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});