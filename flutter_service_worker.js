'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "44a237d3e5dd685644c8b8af94c924dd",
".git/config": "df9ebf8bfe27c23aa84c3fc16e0152d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "afa49edb9507482df86036aa2c83f114",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1531b4abd607c209780a6db5c493b1a4",
".git/logs/refs/heads/main": "2af5adbd5aa71ae1431105b23f1b7002",
".git/logs/refs/remotes/origin/main": "e55a4969f149fa41f4e07206977c688a",
".git/objects/01/e19ac9fce6d26f65e0ef6ab8af85c6a8284e51": "1a614761657a56e4f41fcf8d1f451364",
".git/objects/09/074eec8e3e6def3b0e1ec2fe1fed2c92363ba3": "eb1d90d1c423ade6ff230b8e9064d20e",
".git/objects/09/eacb4524084b88ab2610622b68635ef0219fed": "61a8d006647a52fda2d0da4d6564a636",
".git/objects/0d/157656bdffa1024a93995c21d0f24cf15a3b9c": "19c0f92867690df3f3c1e35b7402c93a",
".git/objects/0d/193f2c5b8a9332cf0c5028b3763fa8d0d24413": "11dd3a167009d97b7ce406925c361d11",
".git/objects/0e/2728d8d98c197a474985b0be2e3b51f4f1c802": "18d86893a7c2d4631b6443e2149a29e6",
".git/objects/0f/1e7f5703e24af2fef511e7c3cf69c48db97845": "20047f515811e70e68311fb07c4b64dc",
".git/objects/12/57c31e20e0ec54a2877d8d365aa29cc87a9223": "5b18152dd55229720e58b74804f9eab6",
".git/objects/14/faad94058de4e4ec74e28d9fd0b9d11679a04a": "ce9a0efaef027a7db9747d19e9cb8e85",
".git/objects/16/5b36d2a895148efef3bed0a83dc9e2083c5086": "b6005f1e49c71b0d66af6e8f60814c21",
".git/objects/17/32d6ee538f5ef89797d2fb3edbdebfc8fd6001": "2bda53e8b7768541bb6da1fd8d12f09d",
".git/objects/18/f0e1bb4d319772c0da404a61af097d8977e952": "abaee361a8d6009202e1215244f3cf51",
".git/objects/19/9fdaa26a9967a597c3da802a1dad0dcfe5ba9a": "9c1d0aa0041582391d50714718ba9aa9",
".git/objects/1a/d1b2dc7333126a54f41a7e80579777186e70a3": "9cdf83d71ccef4ac78ae1c66dc956427",
".git/objects/23/b89cd74d40df7b921a63373f438656ece536fc": "c8a16f0ca01777e7debc5d96c372076d",
".git/objects/25/67b42179b1a0986dcf831eb798716523d76a2a": "c574bef09e8b7f88006b41ef615bb407",
".git/objects/28/ff37181adcd029fbe0a319808da7388b952f08": "57ed74086c863026652fdf287ed59f4e",
".git/objects/29/0cfa827cd92e1493a68d69ad09a48ddcf146cb": "ba04733d0da613a7534f3f57f221e572",
".git/objects/29/f1e637f8e27b169b0ca28b416fd0e57d0ad5f0": "5b8fcf867447562cb3cf8816a24cde96",
".git/objects/29/fc7d32f27ecb35aa6ab56b89856819f03055be": "fdb6547e040bf2c24ee40c1203c63b6f",
".git/objects/2e/ec4b1bbdd4ad0108bc37a88aaa969191b9b4de": "b418cb55b81299cb075d7264f4cd2c92",
".git/objects/31/f22355574d857db98837bf815400502fb2546a": "645a2f57743b110d0330a060ace8ccac",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/3bc52142e75b1919a56bc8eed753cc84495bae": "3bdf75de286d59d31982e010af3d8d8f",
".git/objects/39/a20b68c0c4113e0450bc7529460d817ea669d1": "7de3fbe50f111922d0c77da46b019571",
".git/objects/39/a42655820a74e4aa9ea8b59c78cbbc1946b51f": "4210e9e03d8c1d2605b20876de00a9f8",
".git/objects/3c/9ba00f3f24e8822b09ff2069e26bbd0d23ac6c": "d9cfd9720887d7de84f6a03f70585a9c",
".git/objects/3f/b9600b8df1dafd6736a4132bf124d1218c6aa4": "0a466835328f3fe6ad8d87ab2e097317",
".git/objects/40/baaab5ef09a155a6bbd2cffc7023b1760f9223": "10d5104ef9428e83b5237a3151885c07",
".git/objects/44/55f48fb8de6dfa6d142291dbda5a636862c6cf": "e51bf3670fe70aaa631e3fce92be486f",
".git/objects/4c/e641aa8e0d9d7fa321820412f5246a826122d7": "673c7160e7c358fd7d6002f95ab3e143",
".git/objects/4d/3996fafbc190454cab0afc056ccabd1891d801": "d846586c1528076645e8a73442770282",
".git/objects/4e/73fca7b9afc8df2495f3019bfe9cb8c721c817": "b3b604c881c609c290948be092bd7460",
".git/objects/4f/02d2d6a574933b03b6cc280a8d68f5e70cace3": "9aa577f048de79ce22ebd89d25ff30d5",
".git/objects/51/c8658f3c3e5caba287f01d834d80c1542b091f": "2c29f59f6e2d535c4c653404d3b86a5f",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/57/3e2029195b1255d7b7e462d1cbc28351fe765b": "b5e9aacabae0305aa601a38a61f361dd",
".git/objects/5c/b42881508bd9b4766afbe0c47a30dbdcc9111d": "2e867381d3f355f5253be35c62aa5b52",
".git/objects/6e/07698eea4c0498ed96b1b2de9d3ebe15b3e120": "ee6bf8447d0707563248f54c9bdc0a86",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bf5d7d40d77abe2f9caecff46356c8bac32498": "9928ff80005564851f1d419b836ba022",
".git/objects/7b/db325c00d3d6ba833784ec1a01a496a741faea": "93d1a4f5b518dff00e42f8694321788c",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/35bfe698ffb87b69b1b408eaa1f09a1fcf8fae": "cc290cf631327ed50a52aa7203a17eab",
".git/objects/84/42a2d7b4d6219e2ac7b1cd0548c05b0b79aa8f": "228de418be826bd9943f4284997aabf9",
".git/objects/86/8bb4fe1653bd5c59fc8ad7412f1ef5b03a9efe": "5877a269e8b91977df9f7c2b79de6051",
".git/objects/88/2babe1fdb3a0b0e856344945bef2a1d49b89e7": "3dd09af6d50364821bb574256d04b44b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/90ac3bb8b6fc2e58240ef5d01d3e335f420dff": "c7453b56bddde30382f60397d9253879",
".git/objects/8f/ee50753c29a6b7fb6b98d755fd81138fe8f487": "8875345c8f3f76b97aba406036030737",
".git/objects/96/3dfe93934182c26f761b4bd56d93cf6a960dbc": "e9ab46fb44994751fb75692d2d76d6ac",
".git/objects/9a/b889a2182902826a6cf04f7766a6d0e0c1fc8d": "7edd5879421ee0b1c0ec82f936e4b960",
".git/objects/9e/2907b3d21d8c3077bd7c69ee0915a9d4a541f4": "02d917ff8ae8a9b62da5834fd2e0ae02",
".git/objects/a0/2c55ea0e4ec518d7751a058c0e2316d72dbf4d": "c388b93ef93bebcc953c43f2d3831a3b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/63d13209634ff285f34001c8501e91b0c40979": "250ebee1a50e0a141e569a15a19cba3d",
".git/objects/a4/039be11920c6542f823fa1bf698fffed449a32": "c3c1e7a8e062c89e71dccc24b110a401",
".git/objects/a5/f9968dd68eb0d4bd383725bb25d733eff7852d": "84629cde51bfd344d2356e2d515c6ece",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/7f7097780b5795035c2ca9dc43a359cf1a0839": "4eb06ce6b6c6d77a0431dc9916b2d93b",
".git/objects/ad/67fd3190c12aa871c82b24917768b689996058": "a50d907b89c2fb8c813115c32f2a0701",
".git/objects/b1/f4f8522e2847833a22a30e52374af2227e94ad": "ec8e4d07f45575eae15defe10502fec9",
".git/objects/b2/196e9bcbf9e0b6df30a5e05967cd26f2e12750": "ce2ccb0a9cd9a9f6a8e5d1ab99810230",
".git/objects/b2/c37c339a5cbe86102a61f04d87d4c649f0a448": "9730d3da14ad5680c5e727c7146b7133",
".git/objects/b3/dbe20da558256b6104775403e8e61fa00b32c5": "9d85f9949990b0da19c4b533720710f6",
".git/objects/b7/1ebb8d5d38e9e7b9b5a5246d1fa24d5117364f": "1c6da3a783647a22a7716cbebaab5059",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f1f9050d63279f06f08260a89c139bc6b18422": "931a70406c10ad716cc83da87b36a402",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/1beacd0441341db06f47c922b68fd400fe461f": "6f2b15ad922c1de69b8c9cbb26e0232b",
".git/objects/bc/91cdf9383e390ffb2e9002fc25d33445829e17": "afe30bb39a77dee0a9f699a8b73c1fd8",
".git/objects/bc/f5455b6a70dce9fce3256071e29663dac98958": "765629cc857a61253daf94645093f8bd",
".git/objects/bf/0b266ae6bf78e0cfbac85a21cdd1df49e64836": "3d4ef8d21918dcf5a1b683adebc1f56e",
".git/objects/c4/1f7ffdddde6cbb717d68850929df8c8b061364": "e57303e1482e40e0d3f1d0ae55887b06",
".git/objects/c4/d06cc08b875e82fcc055f68a71bb2a3c429b2f": "06dcc2e4c20479ac994c071d96da0b3b",
".git/objects/c5/0d21e064d6b6a508948a49661d8b81a190f4e4": "ec001b7c33cfa0b0f11b923328fdd8e6",
".git/objects/c7/fd8bace6af4a9f79ed0b4efc447470d0dbcb57": "ee01c632154fc6b5602aca1ba825094f",
".git/objects/d6/2ecda397a3453e64241eaaef615ca7ecb15e82": "2a81b46aa876c78af33e833b376c2ceb",
".git/objects/d6/8c9ba118fcdfded9843d9970b4c4deb9fcb01c": "3d100aaf833267d403a58154823c4e96",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e6ea6219537fc0ef36bc1307bea45059c2e8cd": "24e603d6bb49a7b8e734630ac7b424cf",
".git/objects/d8/fc8dcb01c5a23e87284f323aa54d424e616fb4": "41f1c0b7c956ae4936a50c7412ae038e",
".git/objects/d9/5d89d067b53d2f9b5c3878d946dc1dbb72ef1a": "ef1aa09e91997c15afbe170badf4f0eb",
".git/objects/dc/3ba7cd77abfb69278d1dcbb81170f874d9880b": "70532ac587a01b125e524fca5c2aaf10",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/fb702cd3edc8e9b0e510b44cf18300deda28ae": "94a80f90d5df559c65077ced10806fa0",
".git/objects/df/7624b95a1f5ffc62df3a0ae58876c7c69b21b8": "e723f5f5647defba4d5de5e79a056e22",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/27cd780fe65e837fce4b8bd64059a9e43dd289": "814578552bbd77b65c9363f7bf3647d4",
".git/objects/ed/9971af02d2a329a104417117c40b1e3fcbd676": "c6946a5281360824a195a9f077f7d660",
".git/objects/f0/87e15e8afd4c71b2b10d7c6134fb7c8a204e62": "a68c347855f55f8c88d1326cf72ce41a",
".git/objects/f2/246f7673808ad1b4fd22fb47edd5a2fc47b833": "3aa26d04bdc107a9a7792e7b44895f36",
".git/objects/f3/861c9494d2a3d2483fe04378d7e4378eef1afe": "30a2b998e95ef796ef21419400900275",
".git/objects/f9/0be691eff7fbdca96f50ca181cedd65d826999": "ee22f57739736db914c3f91a3b10e167",
".git/objects/fb/c70db38503349292eec304e3d591cf664ed366": "cb529c9c864d4b58a32cb4fabec08d4e",
".git/objects/fd/b7d84913e12481d1bb29e2252a034e096ba624": "a47971d88a16ca0304a00d36fbc7fe73",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "cc50595979cc04e01924dade0341a494",
".git/refs/remotes/origin/main": "cc50595979cc04e01924dade0341a494",
"assets/AssetManifest.json": "10e6c53609d3d5540d51cc1e3c524a5f",
"assets/assets/profile.png": "80a6df8a55dea9723dafdb491efe726a",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0f1015045435ac904a83ffbc7478ea9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "015400679694f1f51047e46da0e1dc98",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "33593d2166d6a1e64db1769cc14b4bba",
"/": "33593d2166d6a1e64db1769cc14b4bba",
"main.dart.js": "04765005b29b539e37da60aa6c38f18d",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
