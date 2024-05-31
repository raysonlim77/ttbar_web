'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0a14bc39ae94fd5a2be18f5ac8d09ab9",
"version.json": "d69490030a514824c88f33472843c1d1",
"splash/img/light-2x.png": "9aeff490852f0f3a230b13a8693f5888",
"splash/img/dark-4x.png": "8b1eb3948bdc07e584a9ab8346945749",
"splash/img/light-3x.png": "bc92c1eadbb5817c0502c2dde42d88d5",
"splash/img/dark-3x.png": "bc92c1eadbb5817c0502c2dde42d88d5",
"splash/img/light-4x.png": "8b1eb3948bdc07e584a9ab8346945749",
"splash/img/dark-2x.png": "9aeff490852f0f3a230b13a8693f5888",
"splash/img/dark-1x.png": "c537e70915cb00cbeb133c71d7f3bc6b",
"splash/img/light-1x.png": "c537e70915cb00cbeb133c71d7f3bc6b",
"favicon.ico": "7816d85fdc7df3d2de0ba0a2b3c41e9d",
"index.html": "0110774e6f849141a8d2462a9c42d32e",
"/": "0110774e6f849141a8d2462a9c42d32e",
"main.dart.js": "2b2888b175951b01766592da19fc7dc2",
"404.html": "a487f232a7beb090e1849d2e3d15c01b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon.ico": "7816d85fdc7df3d2de0ba0a2b3c41e9d",
"icons/apple-touch-icon.png": "22df5c68db4ba538a2f7e3d30dc9fe18",
"icons/icon-192.png": "c146b3c0601b2bc445071243342d7049",
"icons/icon-192-maskable.png": "65de6ba62deb125e7f3a9bfa37078d1e",
"icons/icon-512-maskable.png": "0a393d9e52b0643e4a6f3640a7a1060b",
"icons/icon-512.png": "951d64abbdb936af44c47acb393dd2a1",
"manifest.json": "450d2968d59a5fc6a3e92cf05849a3a6",
"assets/AssetManifest.json": "6328960dc059d7d7e4c010881d92f4a0",
"assets/NOTICES": "5432acfed95d83aa3d503b093b93d7d3",
"assets/FontManifest.json": "e317e20676ed192e70e7ab76d1ca4a39",
"assets/AssetManifest.bin.json": "eef322434a1b46374976ff1b90fc4b4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "73aa75c25cdf7f57c9c31e99962d23a6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "15c743b5dccf86e37b7f55428375c570",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df3b3a3f62131e332a8a016b9f7518be",
"assets/fonts/MaterialIcons-Regular.otf": "7db1be24a1a64b7cf37e195179404f4f",
"assets/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/assets/flags/sg.png": "83cb9df68a159724e770019a39f789cc",
"assets/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/assets/images/default_avatar.jpg": "17e60aa64046172f470286c4fdee1d28",
"assets/assets/images/promotion_background.jpg": "1c4db493fab5f3fff0ee22623e5801cf",
"assets/assets/images/logout.svg": "806c3444945987e52597ac5d9af66cd5",
"assets/assets/images/vape.svg": "fb87678c58681750a53430272c3083a6",
"assets/assets/images/default_image.jpg": "494cf30a13f189cd72dd76e8abfff2c1",
"assets/assets/images/avatar.jpg": "3e984a99ab158732def9b14583534d1e",
"assets/assets/images/default_billboard.jpg": "4d87de47692e000531492b7ee88cd77c",
"assets/assets/images/sale_banner.png": "3950b5cc2b114aef82d5aa26861347a8",
"assets/assets/images/sale_banner.svg": "d43848a82f64f38e73919ff3060ad32f",
"assets/assets/images/logo.svg": "77867f12234065ee290f4142f3b042ec",
"assets/assets/splash_background.png": "fa5f8767be17ad1df3be3fb4f632fc05",
"assets/assets/env/development.env": "2fccf46421d1c40eb77f5f291a3b4d2e",
"assets/assets/env/production.env": "87cdf6795aca6111c69345a9e2b08192",
"assets/assets/blank/default_branch.png": "810e478edd7690beb0bec1efa19305e0",
"assets/assets/blank/blank_cart.png": "78c8cf35995d2a41548c87207c4e2589",
"assets/assets/blank/blank_search.png": "19651d716c87472c29d93ea7bb2edd27",
"assets/assets/blank/blank_data.png": "6b0b316859a9de5e0b0575e7fbfaded6",
"assets/assets/blank/blank_wishlist.png": "d3578e59b66740ec5cad22b2a835fb92",
"assets/assets/logo.png": "0a393d9e52b0643e4a6f3640a7a1060b",
"assets/assets/icons/home.svg": "3fd297276e87c12dcd7ceacbe74f8f83",
"assets/assets/icons/product.svg": "9a928dc51f5eddfa393282cda56297df",
"assets/assets/icons/store.svg": "ef7e2d47bf9327ed046db970c4edc980",
"assets/assets/icons/cart.svg": "1d09cfb6ec7d32ac25199e18f61b87ea",
"assets/assets/icons/wishlist.svg": "dcd27c869216d028bbca4ca3dc96dd56",
"assets/assets/icons/agent_profile.svg": "e007de6556cb5b768ac0e7d5af77134e",
"assets/assets/icons/fail.svg": "0ff226ec4c3f86154cb815f0f5f2c94e",
"assets/assets/icons/sign_out.svg": "8a19fb746d2a2c94556b24c3fb0c412c",
"assets/assets/icons/success.svg": "ffa7bf0fe1b5892400a4ecbc928c0915",
"assets/assets/icons/profile.svg": "25ca256d30b17b54784258de3d65ce7c",
"assets/assets/icons/order_history.svg": "beca8fe70d1cbb22479a4717c84fb9f0",
"assets/assets/icons/password.svg": "31e3a649983a63bbb541dc1a2ec381ea",
"assets/assets/icons/personal_detail.svg": "4834db275d574c26b837faed14fa0897",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-Regular.ttf": "43ca24e0c7617e85e968b41d3c16cb17",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-Light.ttf": "7b8567d4b45593ac18606cde3bf3d3d6",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-ExtraBold.ttf": "c22d2fee21995ce2fe7d26b1dce909cb",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-ExtraLight.ttf": "a5678e1c17b4315dc6ecfa4d82aff8aa",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-Medium.ttf": "6ee439848f3f1ac3617b61909e3bbe0d",
"assets/assets/fonts/Montreal-Serial/Montreal-Serial-Bold.ttf": "feba878b0edee4c2e213262676b7026e",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-Light.otf": "076d851b602b9915c429f3a2e436c639",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-SemiBold.otf": "6a386899746222073dd64c5f74d1a69d",
"assets/assets/fonts/Proxima-Nova/Proxima-Nova-ExtraBold.otf": "b4f9eb8ce027016ab9b9860817451d07",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
