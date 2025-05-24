'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d918ef48da9af01ccc5b55b321ddc824",
"assets/AssetManifest.bin.json": "47af0c470ecce279a62568b93d59d8c4",
"assets/AssetManifest.json": "c83aada72e8b085159d62af9fecf99ad",
"assets/assets/icons/at.svg": "9ec67296011b42fc0266dcfdd38a5623",
"assets/assets/icons/copy.svg": "6e2fe5c693690392192e56b46e0d8917",
"assets/assets/icons/user.svg": "729e7c06e79ab4d4de426305ce5accba",
"assets/assets/images/at.png": "4ed9d1b70f0f398cc8bb2df2370bd4df",
"assets/assets/images/back.png": "437d361e3731b9dd7fb39d91d56bcca5",
"assets/assets/images/conf.png": "e085a0e91e06008ea633e531ebe24b6f",
"assets/assets/images/copy.png": "f4827f9ae369d8a04e968fa752563f01",
"assets/assets/images/doctor.png": "ea0061de470ff64c7e70d2b93e5bfd58",
"assets/assets/images/face.png": "5b327ec05ac9d0805509a755c691b9f1",
"assets/assets/images/hotel.png": "fc566e4c2f412ee5e3a80323617cfd39",
"assets/assets/images/laptop.png": "7a7788db2be1dce2589af486bdae9635",
"assets/assets/images/logo.png": "45e95b7e809dc7909797714483b2821d",
"assets/assets/images/mail_box.png": "0446eb06db2345ffd3288edd3f676c1b",
"assets/assets/images/palette.png": "f8fc4e95f57481a8151711342141571a",
"assets/assets/images/user.png": "1d0e634d46787fa5a693f9a321bc4628",
"assets/assets/images/workout.png": "05a4e05c6ac922dc1828a683ea89a574",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "605de9ac61584ec02ad160e47080b4de",
"assets/NOTICES": "96a77fb45fdcb4414af8ce458fbab712",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d33f6f093e715a77076018e33169bd74",
"icons/android-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/android-icon-192x192.png": "6767b36a52a61d45cca989bb15bb8217",
"icons/android-icon-36x36.png": "d22e09c3b3993aeeb1f83b8433312ff6",
"icons/android-icon-48x48.png": "3719f9c62d90d9328827ae6a217a16f3",
"icons/android-icon-72x72.png": "7f0d1ec54a8572f7bfe72566c9885d4f",
"icons/android-icon-96x96.png": "f157c5c7e93559b5aeae6326b80a49f8",
"icons/apple-icon-114x114.png": "f80a3cfd21d9fc3699c9bebecfc42f5f",
"icons/apple-icon-120x120.png": "02bfaaaebfd8629f5401916e41d11e51",
"icons/apple-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/apple-icon-152x152.png": "c3e6db7ef263c703fc734b1aa0b6e00c",
"icons/apple-icon-180x180.png": "839195c2a19c409fee04ba42f33efba9",
"icons/apple-icon-57x57.png": "64e7fd3a13b8dbb32c364dc8bfd17b42",
"icons/apple-icon-60x60.png": "f80f16e4e265b00bcfdd2415345aba95",
"icons/apple-icon-72x72.png": "7f0d1ec54a8572f7bfe72566c9885d4f",
"icons/apple-icon-76x76.png": "5bdc9f710b249f346f6995e983cb28d0",
"icons/apple-icon-precomposed.png": "b15d8d54cdce3458d4feb29f5bb9aca8",
"icons/apple-icon.png": "b15d8d54cdce3458d4feb29f5bb9aca8",
"icons/at.svg": "9ec67296011b42fc0266dcfdd38a5623",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/copy.svg": "6e2fe5c693690392192e56b46e0d8917",
"icons/favicon-16x16.png": "0fbdb5b549766700ad1dbb592991a328",
"icons/favicon-32x32.png": "fcf7ba0e7b6d53932cfaefd9bb12b1d0",
"icons/favicon-96x96.png": "f157c5c7e93559b5aeae6326b80a49f8",
"icons/favicon.ico": "886240308c4ddff00d1dd4952d00e06d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "6a9844731ca26d97767866acda6c7afc",
"icons/ms-icon-144x144.png": "09ac019a51ef90246246595f3334dab4",
"icons/ms-icon-150x150.png": "1876993aeb6d02934369f8723b38d479",
"icons/ms-icon-310x310.png": "f78a3943235d5f4188a6736eecef03cb",
"icons/ms-icon-70x70.png": "f0549db3f4034274b407560e3c3004d7",
"icons/user.svg": "729e7c06e79ab4d4de426305ce5accba",
"images/at.png": "4ed9d1b70f0f398cc8bb2df2370bd4df",
"images/back.png": "437d361e3731b9dd7fb39d91d56bcca5",
"images/conf.png": "e085a0e91e06008ea633e531ebe24b6f",
"images/copy.png": "f4827f9ae369d8a04e968fa752563f01",
"images/doctor.png": "ea0061de470ff64c7e70d2b93e5bfd58",
"images/face.png": "5b327ec05ac9d0805509a755c691b9f1",
"images/hotel.png": "fc566e4c2f412ee5e3a80323617cfd39",
"images/laptop.png": "7a7788db2be1dce2589af486bdae9635",
"images/logo.png": "45e95b7e809dc7909797714483b2821d",
"images/mail_box.png": "0446eb06db2345ffd3288edd3f676c1b",
"images/palette.png": "f8fc4e95f57481a8151711342141571a",
"images/user.png": "1d0e634d46787fa5a693f9a321bc4628",
"images/workout.png": "05a4e05c6ac922dc1828a683ea89a574",
"index.html": "b90b745861a310076b8b93f6fd1bb18a",
"/": "b90b745861a310076b8b93f6fd1bb18a",
"main.dart.js": "2d44391e558b32277412ceb60c86ba62",
"manifest.json": "b5bf0d666c4977d4a9c4a88bb20927c6",
"version.json": "ab5e063a0b43250efad03bc640c7ef51"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
