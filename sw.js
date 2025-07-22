const CACHE_NAME = 'real-madrid-cache-v1';
const urlsToCache = [
  '/',
  '/semenuck.html',
  '/table.html',
  '/feedback_form.html',
  '/thank_you.html',
  '/style.css',
  '/logo.png',
  '/process_feedback.php',
  '/config.php'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});