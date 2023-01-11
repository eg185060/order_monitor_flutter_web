'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "911091fe434c5af98a323d4e1d68bb4c",
"index.html": "4720dacab331713e7089eb4025ab3ad0",
"/": "4720dacab331713e7089eb4025ab3ad0",
"auth.html": "1c7054748544627dc8d46a070e806635",
"main.dart.js": "8d9a68b6a208013f333f32ce8468b704",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "47e2ade39910033d7c1257b55677c23b",
"icons/Icon-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-maskable-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-maskable-512.png": "a6f823160a3be61fe9ee7da442534e92",
"icons/Icon-512.png": "a6f823160a3be61fe9ee7da442534e92",
"manifest.json": "0dbfb1e4901e4dd7725b0bcfe45bea10",
"assets/AssetManifest.json": "b446e5b73611122e3b52b70c7bd558b4",
"assets/NOTICES": "5937b4430c131601cd56cb0fd50930cd",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/shaders/ink_sparkle.frag": "30baffc322d20ba7d0631a3e1e08ebc9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logos/wawa_logo.svg": "a0b93dccbccaff7e7fb328e5c9208646",
"assets/assets/logos/hungry_jacks_logo.svg": "bf8d890c653fc055178693452a9f2119",
"assets/assets/logos/tavern_in_the_square_logo.svg": "c9efb2edfe1b6a4e1b560adcb0eb9201",
"assets/assets/logos/kfc_logo.svg": "dbfcd14ba9bdcb3ff66b2851bb27487b",
"assets/assets/logos/fatz_cafe_logo.svg": "09501f29898168ee3746124f795dd2af",
"assets/assets/logos/cafe_rio_logo.svg": "0cc5d4d9bcd857a826762c1fda48b381",
"assets/assets/logos/city_bbq_logo.svg": "600c679bf0235be6f34138d294a94988",
"assets/assets/logos/firehouse_subs_logo.svg": "e7ad519c4058707d17b6ea2681bda033",
"assets/assets/logos/chipotle_logo.svg": "275fd2542b2cbcbc2cf6d3ad9f44c685",
"assets/assets/logos/whole_foods_logo.svg": "17a0606c097dc9b3c4a966d528fc2440",
"assets/assets/logos/spin_pizza_logo.svg": "bca9aca7289c4ce8689dc5854ce331b5",
"assets/assets/logos/homeroom_logo.svg": "987d3ecae1c1878ac8268a06f025a256",
"assets/assets/logos/einstein_bros_bagels_logo.svg": "e318724555e17f9d0c6a49f9e1b831d5",
"assets/assets/logos/kelp_sushi_joint_logo.svg": "a2555515afe14595e549a937dcc895cc",
"assets/assets/logos/ordermark_logo.svg": "40967d19f18555afc0b6c083c3641a99",
"assets/assets/logos/kum_and_go_logo.svg": "327dbef537ced27dc576b469eddf978b",
"assets/assets/logos/portland_pie_logo.svg": "ef41dfae1d41bccdeda22f7f7a7852e8",
"assets/assets/logos/walk_ons_logo.svg": "fc43c50e102e29ccdc9e954907b99d54",
"assets/assets/logos/testtest_logo.svg": "fa0c926886dd691b4304cd91f3493338",
"assets/assets/logos/wendys_logo.svg": "46524fb23364365e43e012ddfccf08c4",
"assets/assets/logos/bricktown_brewery_logo.svg": "56f3ecb597215577771c1dba44136927",
"assets/assets/logos/unknown_logo.svg": "fa0c926886dd691b4304cd91f3493338",
"assets/assets/logos/burger_king_logo.svg": "73f81e6fbe5251f7eb51b3bc69f43f1c",
"assets/assets/logos/meijer_logo.svg": "0ae93be932acab09b2d56e2b07bb24ed",
"assets/assets/logos/pizza_hut_logo.svg": "78be2de6c35cc1f17773ac7701646c90",
"assets/assets/logos/huey_lueys_logo.svg": "ddb6c683aff888fefcd005fd56cc54a5",
"assets/assets/logos/chuck_e_cheese_logo.svg": "e99f6a55c2fde6019389de65aab43be8",
"assets/assets/logos/hoots_logo.svg": "8c0995126cd7f50b33bf08274f59cbc1",
"assets/assets/logos/black_walnut_cafe_logo.svg": "0a53cd0f074f998067aec12568d21bde",
"assets/assets/logos/grimaldis_logo.svg": "9644e5ada2769620514972ceb08b3b22",
"assets/assets/logos/northgate_markets_logo.svg": "b1af800356369b04d975cd21dbe54679",
"assets/assets/logos/rutters_logo.svg": "4dc26d6d740946c64e1c6122b6d0fc45",
"assets/assets/logos/taco_bell_logo.svg": "9e9f83acaf6fb1a1b37a2d91f39c1ca7",
"assets/assets/logos/sb_burgers_logo.svg": "a7b06ad162eccbe61f2479ee8721d911",
"assets/assets/logos/andy_frozen_custard_logo.svg": "2cb9197c38eadab4f0482fca5ae87b49",
"assets/assets/logos/popeyes_logo.svg": "bb7b9718bd6c1f2d0b5cff0bc1456ca1",
"assets/assets/logos/papa_johns_logo.svg": "c55a020f8ac5a6db38ea87364c44b6ad",
"assets/assets/logos/boomerjacks_grill_bar_logo.svg": "187a78f6cc52bc6b6c312fa4a2d136b7",
"assets/assets/logos/spartan_nash_logo.svg": "ae864e1f57a373e833704a31746294d2",
"assets/assets/logos/buffalo_wild_wings_logo.svg": "9f459caf1a35e320380e4137bd27f8fa",
"assets/assets/logos/kwik_trip_logo.svg": "5a4fad7e7c776460138efd253473a30e",
"assets/assets/logos/crisp_green_logo.svg": "d7b6b70ca6cbf99eb96eb68a03dc31be",
"assets/assets/fake_order.json": "32cf1a53008310f0d3cccba7ffe76edf",
"assets/assets/icons/icon.png": "e4eab37bdc5cc1400aaa1a0211159168",
"assets/assets/icons/flutter.png": "0efb1267e1dc7b9173a9adf4d389f66b",
"assets/assets/icons/ncr.svg": "4405ef093df7d364db54dad4ef9eb3fb",
"assets/assets/icons/okta.svg": "e39bce750ca5dff5b7a010f457023865",
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
