/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('[service worker]: Instaling...', event);
  event.waitUntil(caches.open('statics').then(cache => {
    console.log('[service worker]: Precaching App Shell');
    // cache.add('../src/index.tsx');
  }))
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[service worker]: Activating...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response) {
        return response;
      } else {
        return fetch(event.request).then(res => {
          return res;
          // return caches.open('dynamic').then(cache => {
          //   cache.put(event.request.url, res);
          //   return res;
          // })
        }).catch();
      }
    })
  );
});