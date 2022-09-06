'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "911091fe434c5af98a323d4e1d68bb4c",
"index.html": "46fcb073116037753f87f27012d7c0d8",
"/": "46fcb073116037753f87f27012d7c0d8",
"auth.html": "183ffd36852bd94b5f15661e9d2477e7",
"main.dart.js": "785bc7f8817df78f883f4a5a9e6eeec5",
"flutter.js": "195f32f4217e034162a6697208586f44",
"favicon.png": "88c1435a508f03c6a8280e032e3d13fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05bd7438bf021518eba0a4cefb8e8178",
"assets/AssetManifest.json": "628543b598adf2c97b194ad73dd2feb7",
"assets/NOTICES": "5a560caf16b9ac6142a0e53737a1678e",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logos/wawa_logo.svg": "4ad56a19563711d6b48c21dc58059679",
"assets/assets/logos/tavern_in_the_square_logo.svg": "c9efb2edfe1b6a4e1b560adcb0eb9201",
"assets/assets/logos/kfc_logo.svg": "934554b9a51073b4d2c1448ab9b863cd",
"assets/assets/logos/fatz_cafe_logo.svg": "09501f29898168ee3746124f795dd2af",
"assets/assets/logos/cafe_rio_logo.svg": "0cc5d4d9bcd857a826762c1fda48b381",
"assets/assets/logos/city_bbq_logo.svg": "600c679bf0235be6f34138d294a94988",
"assets/assets/logos/chipotle_logo.svg": "722002615b6d77dce57a20eb1e432b55",
"assets/assets/logos/whole_foods_logo.svg": "efd5e86fd005d7cacaf2280798ebdc03",
"assets/assets/logos/spin_pizza_logo.svg": "bca9aca7289c4ce8689dc5854ce331b5",
"assets/assets/logos/homeroom_logo.svg": "d0467ad99e1638557dd3ad601e3df555",
"assets/assets/logos/einstein_bros_bagels_logo.svg": "8945fc4a9ed7de94921b24de13621605",
"assets/assets/logos/kum_and_go_logo.svg": "327dbef537ced27dc576b469eddf978b",
"assets/assets/logos/portland_pie_logo.svg": "ef41dfae1d41bccdeda22f7f7a7852e8",
"assets/assets/logos/walk_ons_logo.svg": "951c4c23896d86a3465e5c6fd6f7e7e8",
"assets/assets/logos/testtest_logo.svg": "fa0c926886dd691b4304cd91f3493338",
"assets/assets/logos/unknown_logo.svg": "fa0c926886dd691b4304cd91f3493338",
"assets/assets/logos/burger_king_logo.svg": "ccd29537e375e6926a26b26d8ccf0052",
"assets/assets/logos/meijer_logo.svg": "0ae93be932acab09b2d56e2b07bb24ed",
"assets/assets/logos/huey_lueys_logo.svg": "ddb6c683aff888fefcd005fd56cc54a5",
"assets/assets/logos/chuck_e_cheese_logo.svg": "28b993e0a1bcdc105d463dd5f972e9ce",
"assets/assets/logos/hoots_logo.svg": "8c0995126cd7f50b33bf08274f59cbc1",
"assets/assets/logos/black_walnut_cafe_logo.svg": "1211b08a59c88017b78e81496d4689ee",
"assets/assets/logos/grimaldis_logo.svg": "9644e5ada2769620514972ceb08b3b22",
"assets/assets/logos/northgate_markets_logo.svg": "7246b6dbc35c2fa2f2f3776288075fc1",
"assets/assets/logos/rutters_logo.svg": "4dc26d6d740946c64e1c6122b6d0fc45",
"assets/assets/logos/taco_bell_logo.svg": "15b6edd0da779b37945dcc5b10e2fc35",
"assets/assets/logos/sb_burgers_logo.svg": "97fc04120fe7a82507cffcaabc8b693a",
"assets/assets/logos/andy_frozen_custard_logo.svg": "308674c3ce60f67bfbecfcad649f2861",
"assets/assets/logos/popeyes_logo.svg": "142f0eeb491eddebfcae1ce34a43ca7f",
"assets/assets/logos/boomerjacks_grill_bar_logo.svg": "187a78f6cc52bc6b6c312fa4a2d136b7",
"assets/assets/logos/spartan_nash_logo.svg": "ae864e1f57a373e833704a31746294d2",
"assets/assets/logos/kwik_trip_logo.svg": "cef6c71b4b79a6bbdb330fac86a57bf6",
"assets/assets/fake_order.json": "b4b1589218f9f69794619c34825790f5",
"assets/assets/icons/flutter.png": "0efb1267e1dc7b9173a9adf4d389f66b",
"assets/assets/icons/order_monitor_icon_512x512.png": "348483b5fcdc9e73003fc6f5c2bd53f7",
"assets/assets/icons/otka_logo.svg": "e39bce750ca5dff5b7a010f457023865",
"assets/assets/icons/order_monitor_pie_chart_icon_v3_1024px.png": "e4eab37bdc5cc1400aaa1a0211159168",
"assets/assets/icons/appwrite.svg": "bc10eb4961df26bef9801101d2bddd56",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
