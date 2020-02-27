const cacheName = "serviceWorker-cashe";
const staticAssets = [
  "./",
  "./manifest.json",
  "./index.html",
  "./css/app.css",
  "./js/app.js",
  "./adorable-animal-1080-1920.jpg",
  "./adorable-animal-1080-2160.jpg",
  "./adorable-animal-1920-1080.jpg",
  "./adorable-animal-4896-3264.jpg",
  "./img/logo - 32.png",
  "./img/logo - 64.png",
  "./img/logo - 128.png",
  "./img/logo - 192.png",
  "./img/logo - 256.png",
  "./img/logo - 512.png",
  "./img/me.jpeg",
  "./svg/angle-down-solid.svg",
  "./svg/bars-solid.svg",
  "./svg/cubes-solid.svg",
  "./scg/envelope-solid.svg",
  "./svg/github-brands.svg",
  "./build/svg/instagram-brands.svg",
  "./svg/mobile-alt-solid.svg",
  "./svg/phone-solid.svg"
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
