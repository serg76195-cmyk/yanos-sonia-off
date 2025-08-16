self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('sonya-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/стиль.css',
        '/script.js',
        '/manifest.json',
        '/иконка-192.png',
        '/иконка-512.png',
        '/глаз.png',
        '/соня.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
