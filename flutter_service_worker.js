'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8182b4e298b5aa99b387c16ed89dd514",
"assets/assets/fake_order.json": "34b3bf4d47ced8dd705d4d17b6ae9411",
"assets/assets/icons/appwrite.svg": "bc10eb4961df26bef9801101d2bddd56",
"assets/assets/icons/flutter.png": "0efb1267e1dc7b9173a9adf4d389f66b",
"assets/assets/icons/icon.png": "e4eab37bdc5cc1400aaa1a0211159168",
"assets/assets/icons/ncr.svg": "4405ef093df7d364db54dad4ef9eb3fb",
"assets/assets/icons/okta.svg": "e39bce750ca5dff5b7a010f457023865",
"assets/assets/logos/andy_frozen_custard_logo.svg": "308674c3ce60f67bfbecfcad649f2861",
"assets/assets/logos/black_walnut_cafe_logo.svg": "0a53cd0f074f998067aec12568d21bde",
"assets/assets/logos/boomerjacks_grill_bar_logo.svg": "187a78f6cc52bc6b6c312fa4a2d136b7",
"assets/assets/logos/bricktown_brewery_logo.svg": "370c3a355d2e36d9951655d2dc2ccde9",
"assets/assets/logos/burger_king_logo.svg": "054dbebd3c2f8f894c57f8f5dbc30bca",
"assets/assets/logos/cafe_rio_logo.svg": "0cc5d4d9bcd857a826762c1fda48b381",
"assets/assets/logos/chipotle_logo.svg": "722002615b6d77dce57a20eb1e432b55",
"assets/assets/logos/chuck_e_cheese_logo.svg": "a743214dc66c6b119be9756485ab1067",
"assets/assets/logos/city_bbq_logo.svg": "09c4878714098b5df55de23a4aa73d5c",
"assets/assets/logos/crisp_green_logo.svg": "d7b6b70ca6cbf99eb96eb68a03dc31be",
"assets/assets/logos/einstein_bros_bagels_logo.svg": "8945fc4a9ed7de94921b24de13621605",
"assets/assets/logos/fatz_cafe_logo.svg": "09501f29898168ee3746124f795dd2af",
"assets/assets/logos/firehouse_subs_logo.svg": "667df5bbad96360066c54588320e46d7",
"assets/assets/logos/grimaldis_logo.svg": "9644e5ada2769620514972ceb08b3b22",
"assets/assets/logos/homeroom_logo.svg": "4687024cef7f2862f46c000c41ebdf77",
"assets/assets/logos/hoots_logo.svg": "8c0995126cd7f50b33bf08274f59cbc1",
"assets/assets/logos/huey_lueys_logo.svg": "ddb6c683aff888fefcd005fd56cc54a5",
"assets/assets/logos/hungry_jacks_logo.svg": "8b4322bdfefd4009e30b36497682ad82",
"assets/assets/logos/kfc_logo.svg": "7b7d397ef7d0268c75b3dedcf1c8aa5d",
"assets/assets/logos/kum_and_go_logo.svg": "327dbef537ced27dc576b469eddf978b",
"assets/assets/logos/kwik_trip_logo.svg": "826290d18a1b50ac1e52c7830ef3f235",
"assets/assets/logos/meijer_logo.svg": "0ae93be932acab09b2d56e2b07bb24ed",
"assets/assets/logos/northgate_markets_logo.svg": "7246b6dbc35c2fa2f2f3776288075fc1",
"assets/assets/logos/pizza_hut_logo.svg": "78be2de6c35cc1f17773ac7701646c90",
"assets/assets/logos/popeyes_logo.svg": "dc9b36d28acf797a6adf9cf29883ce7c",
"assets/assets/logos/portland_pie_logo.svg": "ef41dfae1d41bccdeda22f7f7a7852e8",
"assets/assets/logos/rutters_logo.svg": "ee7455acac043fac7bb35b7336b8e4dd",
"assets/assets/logos/sb_burgers_logo.svg": "a0a8148af1f0b78c6e525ea159792fd4",
"assets/assets/logos/spartan_nash_logo.svg": "ae864e1f57a373e833704a31746294d2",
"assets/assets/logos/spin_pizza_logo.svg": "bca9aca7289c4ce8689dc5854ce331b5",
"assets/assets/logos/taco_bell_logo.svg": "7f06e109159ec8169cdbc9ce1150784f",
"assets/assets/logos/tavern_in_the_square_logo.svg": "c9efb2edfe1b6a4e1b560adcb0eb9201",
"assets/assets/logos/testtest_logo.svg": "bd8ea7ed65f7543c589ab56927954dfa",
"assets/assets/logos/unknown_logo.svg": "bd8ea7ed65f7543c589ab56927954dfa",
"assets/assets/logos/walk_ons_logo.svg": "0641440610aa721599832e3ab83618c8",
"assets/assets/logos/wawa_logo.svg": "c8b93e313ef3655e46101c6e0e9b4cf4",
"assets/assets/logos/whole_foods_logo.svg": "7c6f95e5f0958c8fd987de8ac6568171",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7b4d3c738aaebc50be84384d90f0b79c",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "203e7db9db24d1e5e7bbf2f9e6e4bc34",
"auth.html": "073ef5cdab6b9e9750d98bb38f01662e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "47e2ade39910033d7c1257b55677c23b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-512.png": "a6f823160a3be61fe9ee7da442534e92",
"icons/Icon-maskable-192.png": "684ab52c17a2df90f9f822b9b9430b0c",
"icons/Icon-maskable-512.png": "a6f823160a3be61fe9ee7da442534e92",
"index.html": "8f202321e781b0c4d5451bbaf9ca7659",
"/": "8f202321e781b0c4d5451bbaf9ca7659",
"main.dart.js": "88d0a1fb2f322c5f658dcabd1150b102",
"manifest.json": "0dbfb1e4901e4dd7725b0bcfe45bea10",
"version.json": "911091fe434c5af98a323d4e1d68bb4c"
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
