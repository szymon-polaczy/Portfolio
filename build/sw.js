const cacheName = "serviceWorker-cashe";
const staticAssets = [
  "./Portfolio/build/",
  "./Portfolio/build/manifest.json",
  "./Portfolio/build/index.html",
  "./Portfolio/build/css/app.css",
  "./Portfolio/build/js/app.js",
  "./Portfolio/build/adorable-animal-1080-1920.jpg",
  "./Portfolio/build/adorable-animal-1080-2160.jpg",
  "./Portfolio/build/adorable-animal-1920-1080.jpg",
  "./Portfolio/build/adorable-animal-4896-3264.jpg",
  "./Portfolio/build/img/logo - 32.png",
  "./Portfolio/build/img/logo - 64.png",
  "./Portfolio/build/img/logo - 128.png",
  "./Portfolio/build/img/logo - 192.png",
  "./Portfolio/build/img/logo - 256.png",
  "./Portfolio/build/img/logo - 512.png",
  "./Portfolio/build/img/me.jpeg",
  "./Portfolio/build/svg/angle-down-solid.svg",
  "./Portfolio/build/svg/bars-solid.svg",
  "./Portfolio/build/svg/cubes-solid.svg",
  "./Portfolio/build/scg/envelope-solid.svg",
  "./Portfolio/build/svg/github-brands.svg",
  "./Portfolio/build/build/svg/instagram-brands.svg",
  "./Portfolio/build/svg/mobile-alt-solid.svg",
  "./Portfolio/build/svg/phone-solid.svg"
];

self.addEventListener("install", async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

self.addEventListener("fetch", async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
