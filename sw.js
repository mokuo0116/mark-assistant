/* DOKKYO Mark Assistant service worker
   Deliberately network-only: no cache interception, so deployments update normally. */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  // Intentionally do not call respondWith(); browser performs the normal network request.
});
