const cacheName = "serviceWorker-cashe";
const staticAssets = [
  "./build/",
  "./build/manifest.json",
  "./build/index.html",
  "./build/css/app.css",
  "./build/js/app.js",
  "./build/adorable-animal-1080-1920.jpg",
  "./build/adorable-animal-1080-2160.jpg",
  "./build/adorable-animal-1920-1080.jpg",
  "./build/adorable-animal-4896-3264.jpg",
  "./build/img/logo - 32.png",
  "./build/img/logo - 64.png",
  "./build/img/logo - 128.png",
  "./build/img/logo - 192.png",
  "./build/img/logo - 256.png",
  "./build/img/logo - 512.png",
  "./build/img/me.jpeg",
  "./build/svg/angle-down-solid.svg",
  "./build/svg/bars-solid.svg",
  "./build/svg/cubes-solid.svg",
  "./build/scg/envelope-solid.svg",
  "./build/svg/github-brands.svg",
  "./build/build/svg/instagram-brands.svg",
  "./build/svg/mobile-alt-solid.svg",
  "./build/svg/phone-solid.svg"
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
