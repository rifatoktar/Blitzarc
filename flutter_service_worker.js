'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9a5828f3d1bdcb0c1b0da96ee6b4b7c4",
".git/config": "d714a699361c4a8aaa062990d09a4fa7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7decd67b5242e71070b0214f0c5a15fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97b85287db58ae4abf464e6ca1008019",
".git/logs/refs/heads/master": "97b85287db58ae4abf464e6ca1008019",
".git/logs/refs/remotes/origin/master": "85d8201a8d1953a2ac58009309888ed7",
".git/objects/01/aae4c2f4f1d80d76dc3a622dbd1df7ae7dabe1": "07835d2301ef48af7cc294c4caa9671c",
".git/objects/08/8b1bce7ab51f43df6127eca4140cdd83f9732a": "4f8242a85ab404bf3d91c6287f4cbd58",
".git/objects/0d/4d15832231bb68d059d295187062271f20be36": "f1a60361dce92d78af9e5f1e16048352",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/16/cf797673575fd9396b4eb596e3af1ac5e89fdc": "e597ef36e882954d0880e4a0ae18afb5",
".git/objects/1a/bbd1fe3347f356c0b2d158b4b1ff9075f73823": "faf18fc6782635dee653f8c9fe5dd795",
".git/objects/20/d16bf861a95becdcf4bd90e0071ba465eaa187": "fddb40efdf66249b24566d416b7e5bfb",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/24/26b687f30287a870722f7f839e4814fa5286a5": "f10f9c7ac39d10534ef25a7b5b81d8e4",
".git/objects/29/22122bab3f195edb4308551e9dfca8d8f8b004": "3b5c8fcded7f209d42401c52db868cc9",
".git/objects/29/9de7970760fa2ed2b615c505f837698acafaa1": "d78c4b934c4b95a62930f42a5e77c2a0",
".git/objects/2a/a3ae86683494688c011c6a025f4f5ed33ef9df": "98f53c7c0b2f392e19a058ef52136b86",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/2f/67f3cfa7b265b76d08dc6c5c8eec84470b2034": "a05dcf74772fcf25e064aa0462d333ee",
".git/objects/30/411a7b7480dcb258ce05064a4eaea1fc5b383b": "79410f0fa32a0cb6b379516ef9300394",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/32/232b9379edb9f1f870f54368107d1a64b68f4d": "7c83098f0507d82d1df928ffb21b794b",
".git/objects/35/b1b46bb1cd85a36faccd36499761297855a592": "c89237127631cc17cf6d7ffde1874601",
".git/objects/39/211cae127f678aa2bac69eca27b92e98f1b916": "d4ea86cc5dd19d1ef418dbcee9877b49",
".git/objects/3e/d290e516a309d1cc0e26e5a4084c5cdda41f3f": "e586f4e5019c893fb564c92e30c4a02b",
".git/objects/41/d32264573c34c16a5acf82ecbfcd90a7290993": "179957abb7167d7328a03cbddf33e9e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d9f8d5732e1ce842304d50314c536f351d0a92": "60bd174b4e576c1da17ba4d0c1152572",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/d40e093f8a580ff934fec7c21c382a76aca6fb": "60802bf64ff519796a6e6d21942f8e14",
".git/objects/51/a4be0a2d3c42072dfd9f10882d9f8a6493c6c1": "7607a806be000f4469e9b58c8938cbaa",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/701d8eb7b8593a25179798cf5fca3553e7bfb9": "e74e7f0a84fc8d7b1f3fa75d2a02d3f1",
".git/objects/5c/66652b3b161d3828adedd074640f0feeb2b097": "5de6950dbfa434d2318c6c98bbd31645",
".git/objects/5f/1e0efa28a6bb0cc565981ffc98266a0f9f030f": "e6c03aa7645c42babd99221ea12efef8",
".git/objects/61/5093f0f92fa77f4a8875daaf6f340c79499159": "cf84da90e74ecb8763b2e70f71063709",
".git/objects/65/c3f7288da6aaf4e49fe6697147603dba06bba6": "8970ab3bdcaca2699c5045df380e8ade",
".git/objects/69/a5a33065ec08e4d377c3f9b558d22453236bf3": "3ed91f34f05177ed8216de8e5dbe79b4",
".git/objects/69/eca5ce89746a73e86f8bb07ebc8d5f41397355": "146d72509e6f0378d0734a67af3d0f54",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/e8e377e94f5578a16ccaff2fafc4d822f87564": "94ebcba568c09bf773cc2465d8f763a6",
".git/objects/79/6d40e2f86850bbe8874c295c4fc02a03c136bc": "55d5923ddcd313ee64843cc6277f91dc",
".git/objects/79/87479455421741518f8fbc421bf764e3c29034": "b64cb39a4674ad6e7c7ec77455b78fff",
".git/objects/7d/91b9fbe94f27c06ac7e53f15a2e02121735df1": "cd43ae601fc44223757146b5e9f0e358",
".git/objects/81/b861e3ddce165db875a6404fc70554f7de40cd": "d88d6b6c28c97ab94c746dd633a4de75",
".git/objects/83/2c78f28ff311971c85420372b16324fb3af431": "b8ed06e912ce8de7fbd50e3fe2b21553",
".git/objects/86/ff3fe0dbd6ba8fe3d059e43416dd1d96128253": "00361ce231fd37b4f44f58d9e0720704",
".git/objects/88/5e44870420cc2cf642c77da6ad0ecf4b770586": "a1e255ff047f78a2161a6d78c36ceb43",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/70d3e4cee426845da7cf4c89d353f5452e9994": "19065a38ce9669f7dbcbec9d74494736",
".git/objects/93/fabc62ccda6c4d13f3432576c1c138671f4666": "f333213a3d7058dbb171da49d966da4c",
".git/objects/95/c57b248f503de46c4caef343794bccecbe3ef0": "a37bd32af61ae2df3acbe958a7ecf977",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/2ab54ed0f2df87aac607a12fe9af7b76d8c109": "caacb8a28437e29f7281b88bac3c6a75",
".git/objects/9c/6814868f47877ba0e66bef199e8d4a65786631": "e920107a1d8170634c223ab1ca8d3eb1",
".git/objects/a2/1a09d3810492b0d22299f16ef24c33baecf87e": "dc6b2ba188e0142b6b1b9f38fc5c6125",
".git/objects/a5/c646cbdb75515cdeda99efd65135a3a01fb3c6": "946f90651e8183bced3b5778e6f33f81",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/aa/4f56c2ec299a0928fb053b63a6df770f214e59": "4975902ab36ef942af870a6e27cb5705",
".git/objects/ac/3bfbd50fd6f0870e98dbc75bdb636c4e34f355": "e877f9d026d2fb8ed634b781ce6d3378",
".git/objects/ae/40e7f36b954f6309737cc62698f399699423b7": "470d139717e38d05901964fabdc22f67",
".git/objects/b1/43f82ee15bde55e9a75cfff14238a77dde620d": "6a5120a87a9a683f564b3483cdfc2532",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cc8b10c7d31f0e94eec8d1e9643d4216ea3d1d": "63684e473e2f76f5294806a780f48c4b",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c4/0d3fdd3a14df70f470752368d7eb37a231e649": "0e0d0099eb608f8b98ad7ec23c1e176f",
".git/objects/c4/18cc4b3a8f548db2388aa4da67e9b01ac22246": "287cf2a2c7ef17b3d82874075a815560",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c9/c9f341fa7910d176e4c55bc02b613a0b8d1a90": "1061d8edaed6c568683889a5a51d7a14",
".git/objects/ca/860d40fefda4cb879af4d91618c97f64d6797d": "ae648b55d792b107d96ad463ddf2b03c",
".git/objects/d2/16e607b9ba53ebc35b3f624add7f856116546d": "e18c9305b25293c16f5cf273af7c4e8c",
".git/objects/d2/930ec8b3bedd8c84b3e26ebb228eb9150882df": "5ffa1f77332480b43794353e405ce4dd",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/2d67fd0ff8262f9b08fabd99ac4ffec38990e4": "c21aebde97c674bf662cbf6b698f5bf7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d092b25c52a3f19b3b353bd14ca3973b7d97c6": "6800f97a41f7414660138e5e9953e23c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/57e75e381ad638e1cee09d70d716e1281a9e64": "26c08534bf610f3a9df8e9b9482c9558",
".git/objects/db/b3fad1e4aa88af313a85739e53e8abb5905105": "17faa6c3d7e3ad8165b21cb5b30aa914",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/acff19c6d7e94e74698f6b268917082e29754b": "f3e6b929e3414e1ba12cdc521f9fdb4d",
".git/objects/df/de480c697ab3fc7376986cd4c20a64a1ab5c87": "5e749c6a53fd4c33fc178a3a9cffca65",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/5fd8cf06c1a0b4d665e05d651e0907148b0a44": "d350d9026b2a406b10c6b2f45b46c746",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c20f76ea8c517675b5ba877f2aad3e1e53ee41": "e3b353235e36c64197f19a186c9a05c2",
".git/objects/f0/375d1d9b3ecf183ea37f33f6705524e25013f8": "f1e8c71943146034463a57bd9771e17a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7c75b7abbab5f8dac2236617b25a7b9b756c48": "1cbb9c7d99494fc3a65ada77d631506f",
".git/objects/fb/253abe6f903810e01da0a1c9bf2534a5265b30": "bd3ff7a0c07489046d52a9f3b932d321",
".git/objects/fc/3d8d87857401153a83a4252e2913052c0ca26b": "7fb1c2e99318e3d854ba7101dbbf4759",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/refs/heads/master": "003ca5c0126101db2e80464e751938fe",
".git/refs/remotes/origin/master": "003ca5c0126101db2e80464e751938fe",
"assets/AssetManifest.bin": "d918ef48da9af01ccc5b55b321ddc824",
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
"assets/fonts/MaterialIcons-Regular.otf": "ed3db10dc7a1145c6a84e2caee75078d",
"assets/icons/at.svg": "9ec67296011b42fc0266dcfdd38a5623",
"assets/icons/copy.svg": "6e2fe5c693690392192e56b46e0d8917",
"assets/icons/user.svg": "729e7c06e79ab4d4de426305ce5accba",
"assets/images/at.png": "4ed9d1b70f0f398cc8bb2df2370bd4df",
"assets/images/back.png": "437d361e3731b9dd7fb39d91d56bcca5",
"assets/images/conf.png": "e085a0e91e06008ea633e531ebe24b6f",
"assets/images/copy.png": "f4827f9ae369d8a04e968fa752563f01",
"assets/images/doctor.png": "ea0061de470ff64c7e70d2b93e5bfd58",
"assets/images/face.png": "5b327ec05ac9d0805509a755c691b9f1",
"assets/images/hotel.png": "fc566e4c2f412ee5e3a80323617cfd39",
"assets/images/laptop.png": "7a7788db2be1dce2589af486bdae9635",
"assets/images/logo.png": "45e95b7e809dc7909797714483b2821d",
"assets/images/mail_box.png": "0446eb06db2345ffd3288edd3f676c1b",
"assets/images/palette.png": "f8fc4e95f57481a8151711342141571a",
"assets/images/user.png": "1d0e634d46787fa5a693f9a321bc4628",
"assets/images/workout.png": "05a4e05c6ac922dc1828a683ea89a574",
"assets/NOTICES": "2355cd72dd6a2aa911f9d8647786cbce",
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
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c60cbcc8ef01e9d972fd34d8a12f31cf",
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
"index.html": "800e97da32f2e33cdaff3b5bddf2fe26",
"/": "800e97da32f2e33cdaff3b5bddf2fe26",
"main.dart.js": "ce65a8360f7f3b0f04083e4cb51ce1ba",
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
