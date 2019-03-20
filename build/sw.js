//To jest tablica plików, które statycznie zapisuję do cashu
//Te pliki to te, które sam wyciągam i chcę je wyciągnąć
const staticAssets = [
  './',
  './css/fontello.css',
  './css/app.css',

  './img/me_cmp.png',
  './img/light_wool.png',

  './app.js',
  './sw.js',
  './manifest.json',

  './fontello/font/fontello.woff2',
  './fontello/font/fontello.woff',
  './fontello/font/fontello.ttf',
  './fontello/font/fontello.svg',
  './fontello/font/fontello.eot',
];

//Po zainstalowaniu serviceWorkera do cashu dodajemy tablicę plików statycznych
self.addEventListener('install', async event => {
  const cashe = await caches.open('portfolio-static');
  cashe.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  //nie wiem czy tu włożyć url czy nie
  console.log('fetch => ' + req.url);


  //nie mam zielonego pojeciaa co tu się dzieje

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req));
  }
});

async function cacheFirst(req) {
  const chachedResponde = await caches.match(req);
  return chachedResponde || fetch(req);
}

async function networkFirst(req) {
  const cashe = await caches.open('portfolio-static');

  try {
    const res = await fetch(req);
    cashe.put(req, res.clone());
    return res;
  } catch (err) {
    return await cashe.match(req);
  }
}

//co tu się dzieje
//brakuje jeszcze wyświetlania czegoś kiedy nic nie mamy w cashu

//dynamic cashe - cały czas rośnie - trzeba je odpowiednio usuwać usuwać
//powinniśmy móc zmieniać pojedyńcze pliki z staticAssets, ponieważ jak na razie pobiera wszystko
//aby to poprawić należy użyć workbox od google
//obejrzyj jeszcze raz to co tam jest w tym poradniku