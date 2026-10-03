const CACHE = "virtus-dental-v2";
const STATIC = ["/manifest.json", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  // Never cache HTML/navigation responses: deployments should become visible immediately.
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(fetch(request).catch(() => caches.match("/index.html")));
    return;
  }

  // Static assets: network first, then cache fallback.
  event.respondWith(fetch(request).then((response) => {
    const clone = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, clone));
    return response;
  }).catch(() => caches.match(request)));
});
