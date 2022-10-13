'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "911091fe434c5af98a323d4e1d68bb4c",
"index.html": "814d9b3f792aafb2258b2a432585d019",
"/": "814d9b3f792aafb2258b2a432585d019",
"auth.html": "1c7054748544627dc8d46a070e806635",
"main.dart.js": "841269cbfbdc75393ffddfbfc844186c",
"flutter.js": "195f32f4217e034162a6697208586f44",
"favicon.png": "47e2ade39910033d7c1257b55677c23b",
"icons/Icon-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-maskable-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-maskable-512.png": "a6f823160a3be61fe9ee7da442534e92",
"icons/Icon-512.png": "a6f823160a3be61fe9ee7da442534e92",
"manifest.json": "0dbfb1e4901e4dd7725b0bcfe45bea10",
"assets/AssetManifest.json": "bd2ecc0876def179313610aa28d5ac5f",
"assets/NOTICES": "6558f6c3cef44aeb41619e5d12924f84",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
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
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logos/wawa_logo.svg": "4ad56a19563711d6b48c21dc58059679",
"assets/assets/logos/hungry_jacks_logo.svg": "bf8d890c653fc055178693452a9f2119",
"assets/assets/logos/tavern_in_the_square_logo.svg": "c9efb2edfe1b6a4e1b560adcb0eb9201",
"assets/assets/logos/kfc_logo.svg": "934554b9a51073b4d2c1448ab9b863cd",
"assets/assets/logos/fatz_cafe_logo.svg": "09501f29898168ee3746124f795dd2af",
"assets/assets/logos/cafe_rio_logo.svg": "0cc5d4d9bcd857a826762c1fda48b381",
"assets/assets/logos/city_bbq_logo.svg": "600c679bf0235be6f34138d294a94988",
"assets/assets/logos/firehouse_subs_logo.svg": "59353a1c6dd9eda4f55c67accfb2d17a",
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
"assets/assets/logos/pizza_hut_logo.svg": "78be2de6c35cc1f17773ac7701646c90",
"assets/assets/logos/huey_lueys_logo.svg": "ddb6c683aff888fefcd005fd56cc54a5",
"assets/assets/logos/chuck_e_cheese_logo.svg": "28b993e0a1bcdc105d463dd5f972e9ce",
"assets/assets/logos/hoots_logo.svg": "8c0995126cd7f50b33bf08274f59cbc1",
"assets/assets/logos/black_walnut_cafe_logo.svg": "0a53cd0f074f998067aec12568d21bde",
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
"assets/assets/logos/crisp_green_logo.svg": "d7b6b70ca6cbf99eb96eb68a03dc31be",
"assets/assets/fake_order.json": "32cf1a53008310f0d3cccba7ffe76edf",
"assets/assets/icons/icon.png": "e4eab37bdc5cc1400aaa1a0211159168",
"assets/assets/icons/flutter.png": "0efb1267e1dc7b9173a9adf4d389f66b",
"assets/assets/icons/ncr.svg": "4405ef093df7d364db54dad4ef9eb3fb",
"assets/assets/icons/okta.svg": "e39bce750ca5dff5b7a010f457023865",
"assets/assets/icons/appwrite.svg": "bc10eb4961df26bef9801101d2bddd56",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f"
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
