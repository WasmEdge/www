(()=>{"use strict";var e,a,c,d,b,f={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={exports:{}};return f[e].call(c.exports,c,c.exports,t),c.exports}t.m=f,e=[],t.O=(a,c,d,b)=>{if(!c){var f=1/0;for(n=0;n<e.length;n++){c=e[n][0],d=e[n][1],b=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&b||f>=b)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,b<f&&(f=b));if(r){e.splice(n--,1);var l=d();void 0!==l&&(a=l)}}return a}b=b||0;for(var n=e.length;n>0&&e[n-1][2]>b;n--)e[n]=e[n-1];e[n]=[c,d,b]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);t.r(b);var f={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,t.d(b,f),b},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({13:"90c5bef1",25:"7d96b9c5",53:"935f2afb",145:"2c9f3711",261:"reactPlayerKaltura",281:"7d55b5e2",307:"e86632ff",446:"9189d665",462:"9559bbea",480:"a0250c95",484:"1bc31c30",498:"ff75fcec",614:"d9302ef5",695:"8c40ebfb",698:"9ba0f298",716:"c039c881",811:"96afb4a8",819:"6e869a3b",864:"02f9581c",876:"1fabf6b0",948:"12e56b11",996:"284582ab",1013:"8d4d9de5",1038:"9f6eef31",1044:"db0ef359",1069:"39e078a0",1094:"576c299d",1119:"5ae4c3b0",1166:"3e072bea",1479:"f291c751",1506:"f2da5b41",1718:"a7dc9c57",1739:"8983b9d6",1809:"c11c870a",1870:"c40adfc5",1881:"931b0769",1898:"80de8193",1930:"2ec20889",1945:"037dff00",2011:"a73a9704",2104:"ab38a1c0",2121:"reactPlayerFacebook",2146:"7f07c509",2245:"6e7d982e",2267:"56d5919f",2285:"dda29d6c",2462:"28dc9094",2463:"6edb044f",2546:"reactPlayerStreamable",2570:"0f92ccda",2635:"7fe82e14",2648:"939d466b",2653:"4fa83f35",2713:"5d4c99a4",2720:"7bffad2a",2749:"1a01ac65",2756:"05871548",2790:"57394ba3",2816:"219a7ca9",2885:"bdedddcc",2974:"b6eb67de",2992:"e3e2029d",3017:"10eb483c",3064:"99eafbfb",3067:"90b2bdcf",3085:"1f391b9e",3121:"597de563",3169:"93d1247a",3180:"3c2dda00",3184:"0c4e2323",3201:"5e078d0b",3217:"66169b3e",3237:"1df93b7f",3296:"350be918",3365:"9c953695",3462:"b1df8f8c",3490:"f757d4f5",3510:"7bbd1200",3550:"4e7f2ba3",3743:"reactPlayerVimeo",3779:"5079cd12",3883:"6392fd6d",3904:"b7b6f7fe",4082:"03855172",4099:"28f701e7",4147:"fb005cdf",4197:"bf4d5263",4241:"365d19a6",4348:"6b5a99ac",4353:"e1ae02cf",4359:"14a3badf",4394:"53ba0720",4439:"reactPlayerYouTube",4541:"bfc76bad",4543:"70d27609",4568:"4237f88f",4569:"50d960e4",4603:"df7c6675",4653:"9e7e521c",4667:"reactPlayerMixcloud",4695:"580f0f7f",4791:"eeedc6ec",4845:"4406d94b",4898:"927b8eb7",4921:"59e9af34",4931:"88a7bb53",4941:"ab9b4569",5020:"8e0cd2ff",5058:"4a5e354f",5127:"024bf5a4",5153:"8e4c0e44",5156:"4129286c",5160:"36adf013",5185:"108dca9e",5228:"8035225d",5245:"d928b34c",5255:"3b435a04",5288:"a55f7152",5315:"4329902c",5340:"6337b52f",5351:"60b1565b",5410:"1238eb4c",5465:"2fde6dc5",5466:"5c23b30f",5509:"79a6852f",5515:"ab9acdfa",5520:"28f33f95",5554:"1ac135e4",5555:"8dbbcff6",5560:"3b612b88",5565:"b779f309",5614:"d59b60cc",5625:"791206ca",5668:"338d3fa8",5688:"4298c4f5",5937:"2513ce95",5945:"89ea910b",5976:"b66ba5d6",5996:"73d11be2",6011:"reactPlayerFilePlayer",6078:"34663ec9",6114:"065a242f",6125:"reactPlayerSoundCloud",6147:"1e88f901",6197:"2882f202",6216:"reactPlayerTwitch",6238:"f0376a57",6270:"1568ab40",6284:"5b7fb318",6314:"5cd03b96",6383:"732bb58b",6423:"4d5903ba",6445:"6834a6a4",6449:"a2fe9a4b",6455:"8bf1b516",6479:"316baa64",6514:"8db459a3",6518:"a70c4eb2",6525:"d290ec32",6544:"316b1bd9",6591:"816162fc",6642:"c6ba78b9",6681:"34c250fd",6719:"7eae92e8",6768:"32027ce3",6853:"eecc8255",6923:"2e4f5094",6936:"3b111ba6",6974:"7af7e5b8",6992:"026c67d7",7026:"7a9ade4f",7074:"de975e5e",7105:"64146088",7114:"6577af2e",7163:"84be8b19",7182:"7bdf1892",7269:"a0f00cde",7308:"6b52998c",7334:"1204f324",7387:"eecb5142",7493:"b1eea551",7596:"reactPlayerDailyMotion",7599:"7ef71a47",7628:"7b2dfa48",7644:"833d543f",7645:"a7434565",7664:"reactPlayerPreview",7674:"a4f1c453",7728:"f4a8f7dd",7763:"9737c412",7834:"c32cb622",7918:"17896441",7920:"1a4e3797",7946:"ab301d36",7967:"6d5f9cde",7969:"32d32582",8055:"reactPlayerWistia",8092:"7a259256",8132:"01093ebb",8148:"ad77907d",8325:"f81364cc",8334:"2e4dd186",8350:"611779dc",8358:"3521ab7f",8376:"3ccefc6c",8401:"c5b0cfa3",8404:"3545c1c2",8421:"7b104fd2",8426:"68c3651d",8437:"a0e44cd2",8519:"2860a61a",8526:"5678f544",8529:"c793ae6f",8539:"dbf89cc0",8564:"e08f6939",8600:"e125b94e",8694:"5c6c72f4",8717:"f7051b1f",8773:"5d10f4bb",8776:"607e002e",8799:"022c8aa0",8820:"ebdebde0",8833:"8a7f94e0",8865:"d2a00f89",8888:"reactPlayerVidyard",8961:"d793adcc",8977:"9bd42d6d",9038:"a7dad4c4",9049:"ea0113de",9056:"15157cef",9095:"5d83a863",9104:"0d152414",9209:"c38f2a05",9317:"d6e38de2",9334:"247783bb",9490:"438f9299",9500:"9543866a",9514:"1be78505",9568:"949047c6",9598:"ec4aa70d",9781:"6574a443",9806:"41b4135e",9817:"14eb3368",9930:"d8b67de0",9946:"4fb21e99",9947:"8875db2f",9968:"c1526b9f",9972:"f2a4091e"}[e]||e)+"."+{13:"8b109b89",25:"52061094",53:"136e5fd4",145:"729afee2",261:"0db576ec",281:"32b97969",307:"bd2052ac",446:"aefb7975",462:"64aab713",480:"e54d98ad",484:"9b91ad22",498:"bec71ffd",614:"65bf705d",695:"573122df",698:"0f283b42",716:"ba5e7275",811:"ddd2e9d4",819:"b296923e",864:"48634081",876:"87533ab6",948:"d4e21ce5",996:"857936f6",1013:"77808d56",1038:"29ac0dd7",1044:"cfab8dda",1069:"ed23044c",1094:"442807a4",1119:"77fa2fc2",1166:"401f0c21",1479:"3672cf17",1506:"0c5c2cb1",1718:"7ab321f0",1739:"3821d4d4",1809:"17085a5f",1870:"14b0cdb8",1881:"c021956c",1898:"b013e5a6",1930:"f4d382de",1945:"bbfda7f3",2011:"0e3f57a2",2104:"f501bfdb",2121:"43831e9f",2146:"2befd85e",2245:"efca034d",2267:"14f1c9ec",2285:"9b7f4d72",2462:"58ec4ad9",2463:"d7d0b77c",2546:"7110dca0",2570:"8783bc05",2635:"5a6fd373",2648:"7d6fbd24",2653:"c33b8214",2713:"b01b7ef8",2719:"b1b89991",2720:"b8c902a7",2749:"ddeb3d51",2756:"71b880a6",2790:"691a6dae",2816:"8f86b462",2885:"67cbe33f",2974:"9ca1b139",2992:"dbfd86c8",3017:"e2085da5",3064:"fd1156c3",3067:"4ccb88fa",3085:"17d7e0bb",3121:"d67c2f49",3169:"189cde05",3180:"3ec9e184",3184:"0e14bcba",3201:"94e9c180",3217:"91e9fa80",3237:"554389fa",3296:"115e4c1f",3365:"e994469b",3462:"97def196",3490:"970a9a14",3510:"cc909cca",3550:"f87615a3",3743:"108d32dc",3779:"de3804aa",3883:"d12738fd",3904:"86686305",4082:"3179a382",4099:"2d3dc88a",4147:"87c53985",4197:"e2d3594a",4241:"103b4170",4348:"44d0628f",4353:"fc77b160",4359:"9adb418b",4394:"a993a1c4",4439:"a73e03b4",4541:"16b3c42c",4543:"bf6dbcab",4568:"4bca1af7",4569:"04ad4257",4603:"b5790e5d",4653:"9ed1843b",4667:"548450ef",4695:"f99109cc",4791:"5de53588",4845:"5ebb913a",4898:"7cb65dd8",4921:"0d9b84a4",4931:"ab9c220d",4941:"0a14f115",4972:"9b7f94f3",5020:"2bfa12fd",5058:"50410f46",5127:"ece7041c",5153:"bd2be916",5156:"53db9e83",5160:"81a2fc10",5185:"e55f44a0",5228:"32121aea",5245:"80484d7e",5255:"81ea3903",5288:"92b1ccbd",5315:"b54bc955",5340:"8de9cb24",5351:"c0cf7b20",5410:"d6d22e5a",5465:"ba47e15e",5466:"97b03923",5509:"aac0dbe9",5515:"cd8a21d6",5520:"a24985a5",5525:"a7c6fa71",5554:"0195ba87",5555:"8c7a3bc4",5560:"5cfdbdfa",5565:"b4e2d999",5614:"e5af35b7",5625:"570881c7",5668:"5f478931",5688:"4de78279",5936:"a87adbff",5937:"f002f7e8",5945:"679507e1",5976:"5837c7cf",5996:"f6a99267",6011:"58cfbeab",6078:"627fb0fa",6114:"0a27b92c",6125:"4dd2908a",6147:"edeec87e",6197:"d6bee994",6216:"73c22b19",6238:"0f46bf5c",6270:"6e97bc9d",6284:"607a69bf",6314:"3f672043",6316:"20cf00d9",6383:"184397ef",6423:"9a3d0e54",6445:"cd59d711",6449:"62d466ab",6455:"19d8763b",6479:"ac43a39b",6514:"7552fb0f",6518:"67315838",6525:"7bfaaab5",6544:"41137f32",6591:"f0bdfcb8",6642:"4100d5d9",6681:"17b9da1f",6695:"fc8eaf50",6719:"c4cdf203",6768:"5763c6ca",6853:"8464621e",6923:"04f77c81",6936:"e7b0003d",6974:"6fd5920a",6992:"472e622f",7026:"21dc6329",7074:"4c4bb3d0",7105:"3e1a8631",7114:"ba4fcc71",7163:"8314940e",7182:"a6f3d21b",7269:"4366aa5c",7308:"b7d302d7",7334:"2ece0477",7387:"c55e3dff",7493:"fbcb99de",7596:"e2935bd2",7599:"9fe24e06",7628:"fe441776",7644:"95e235cd",7645:"b7886f17",7664:"d1edd980",7674:"cefcc63a",7724:"1eb20591",7728:"c57baaea",7763:"cd45e34f",7834:"121b5c1b",7918:"6a409e9b",7920:"51e84298",7946:"7c46ed9d",7967:"1dc0e689",7969:"54c4fe68",8055:"6723c32c",8092:"df7a8f85",8132:"e399c41e",8148:"7e93ac83",8325:"4f4ba39b",8334:"8c409f86",8350:"27cac4c5",8358:"503dae28",8376:"affc4eab",8401:"0bc40c45",8404:"33fbfd40",8421:"e96cf1f0",8426:"25d01172",8437:"cc2438ca",8443:"b75a6eb7",8519:"dff31a5b",8526:"7f41fe65",8529:"91cb0b93",8539:"d0543b9a",8564:"780f1990",8600:"1b6460ca",8694:"2df9aae1",8717:"a923f78c",8773:"ab489f6e",8776:"e5575909",8799:"a4e51f17",8820:"876b52bf",8833:"3be8db07",8865:"44b9a9ff",8888:"9bbfe9b5",8961:"815287c4",8977:"d921cb55",9038:"ee77e785",9049:"d87fffaf",9056:"88e5e7d7",9095:"ad8dacb8",9104:"cb8d9b5e",9209:"c9df9e25",9317:"ce9b05a9",9334:"b1bb0848",9487:"e1035ed7",9490:"72b1dc36",9500:"4ad7ec89",9514:"b41081c4",9568:"a4f2aa3a",9598:"b4328527",9701:"c5f310fd",9781:"4f773461",9806:"a3cab610",9817:"27aa6346",9930:"08b62d64",9946:"77c4bb0f",9947:"76ff97c4",9968:"a63be53a",9972:"89f97645"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="book:",t.l=(e,a,c,f)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",b+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),b&&b.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/docs/zh-TW/",t.gca=function(e){return e={17896441:"7918",64146088:"7105","90c5bef1":"13","7d96b9c5":"25","935f2afb":"53","2c9f3711":"145",reactPlayerKaltura:"261","7d55b5e2":"281",e86632ff:"307","9189d665":"446","9559bbea":"462",a0250c95:"480","1bc31c30":"484",ff75fcec:"498",d9302ef5:"614","8c40ebfb":"695","9ba0f298":"698",c039c881:"716","96afb4a8":"811","6e869a3b":"819","02f9581c":"864","1fabf6b0":"876","12e56b11":"948","284582ab":"996","8d4d9de5":"1013","9f6eef31":"1038",db0ef359:"1044","39e078a0":"1069","576c299d":"1094","5ae4c3b0":"1119","3e072bea":"1166",f291c751:"1479",f2da5b41:"1506",a7dc9c57:"1718","8983b9d6":"1739",c11c870a:"1809",c40adfc5:"1870","931b0769":"1881","80de8193":"1898","2ec20889":"1930","037dff00":"1945",a73a9704:"2011",ab38a1c0:"2104",reactPlayerFacebook:"2121","7f07c509":"2146","6e7d982e":"2245","56d5919f":"2267",dda29d6c:"2285","28dc9094":"2462","6edb044f":"2463",reactPlayerStreamable:"2546","0f92ccda":"2570","7fe82e14":"2635","939d466b":"2648","4fa83f35":"2653","5d4c99a4":"2713","7bffad2a":"2720","1a01ac65":"2749","05871548":"2756","57394ba3":"2790","219a7ca9":"2816",bdedddcc:"2885",b6eb67de:"2974",e3e2029d:"2992","10eb483c":"3017","99eafbfb":"3064","90b2bdcf":"3067","1f391b9e":"3085","597de563":"3121","93d1247a":"3169","3c2dda00":"3180","0c4e2323":"3184","5e078d0b":"3201","66169b3e":"3217","1df93b7f":"3237","350be918":"3296","9c953695":"3365",b1df8f8c:"3462",f757d4f5:"3490","7bbd1200":"3510","4e7f2ba3":"3550",reactPlayerVimeo:"3743","5079cd12":"3779","6392fd6d":"3883",b7b6f7fe:"3904","03855172":"4082","28f701e7":"4099",fb005cdf:"4147",bf4d5263:"4197","365d19a6":"4241","6b5a99ac":"4348",e1ae02cf:"4353","14a3badf":"4359","53ba0720":"4394",reactPlayerYouTube:"4439",bfc76bad:"4541","70d27609":"4543","4237f88f":"4568","50d960e4":"4569",df7c6675:"4603","9e7e521c":"4653",reactPlayerMixcloud:"4667","580f0f7f":"4695",eeedc6ec:"4791","4406d94b":"4845","927b8eb7":"4898","59e9af34":"4921","88a7bb53":"4931",ab9b4569:"4941","8e0cd2ff":"5020","4a5e354f":"5058","024bf5a4":"5127","8e4c0e44":"5153","4129286c":"5156","36adf013":"5160","108dca9e":"5185","8035225d":"5228",d928b34c:"5245","3b435a04":"5255",a55f7152:"5288","4329902c":"5315","6337b52f":"5340","60b1565b":"5351","1238eb4c":"5410","2fde6dc5":"5465","5c23b30f":"5466","79a6852f":"5509",ab9acdfa:"5515","28f33f95":"5520","1ac135e4":"5554","8dbbcff6":"5555","3b612b88":"5560",b779f309:"5565",d59b60cc:"5614","791206ca":"5625","338d3fa8":"5668","4298c4f5":"5688","2513ce95":"5937","89ea910b":"5945",b66ba5d6:"5976","73d11be2":"5996",reactPlayerFilePlayer:"6011","34663ec9":"6078","065a242f":"6114",reactPlayerSoundCloud:"6125","1e88f901":"6147","2882f202":"6197",reactPlayerTwitch:"6216",f0376a57:"6238","1568ab40":"6270","5b7fb318":"6284","5cd03b96":"6314","732bb58b":"6383","4d5903ba":"6423","6834a6a4":"6445",a2fe9a4b:"6449","8bf1b516":"6455","316baa64":"6479","8db459a3":"6514",a70c4eb2:"6518",d290ec32:"6525","316b1bd9":"6544","816162fc":"6591",c6ba78b9:"6642","34c250fd":"6681","7eae92e8":"6719","32027ce3":"6768",eecc8255:"6853","2e4f5094":"6923","3b111ba6":"6936","7af7e5b8":"6974","026c67d7":"6992","7a9ade4f":"7026",de975e5e:"7074","6577af2e":"7114","84be8b19":"7163","7bdf1892":"7182",a0f00cde:"7269","6b52998c":"7308","1204f324":"7334",eecb5142:"7387",b1eea551:"7493",reactPlayerDailyMotion:"7596","7ef71a47":"7599","7b2dfa48":"7628","833d543f":"7644",a7434565:"7645",reactPlayerPreview:"7664",a4f1c453:"7674",f4a8f7dd:"7728","9737c412":"7763",c32cb622:"7834","1a4e3797":"7920",ab301d36:"7946","6d5f9cde":"7967","32d32582":"7969",reactPlayerWistia:"8055","7a259256":"8092","01093ebb":"8132",ad77907d:"8148",f81364cc:"8325","2e4dd186":"8334","611779dc":"8350","3521ab7f":"8358","3ccefc6c":"8376",c5b0cfa3:"8401","3545c1c2":"8404","7b104fd2":"8421","68c3651d":"8426",a0e44cd2:"8437","2860a61a":"8519","5678f544":"8526",c793ae6f:"8529",dbf89cc0:"8539",e08f6939:"8564",e125b94e:"8600","5c6c72f4":"8694",f7051b1f:"8717","5d10f4bb":"8773","607e002e":"8776","022c8aa0":"8799",ebdebde0:"8820","8a7f94e0":"8833",d2a00f89:"8865",reactPlayerVidyard:"8888",d793adcc:"8961","9bd42d6d":"8977",a7dad4c4:"9038",ea0113de:"9049","15157cef":"9056","5d83a863":"9095","0d152414":"9104",c38f2a05:"9209",d6e38de2:"9317","247783bb":"9334","438f9299":"9490","9543866a":"9500","1be78505":"9514","949047c6":"9568",ec4aa70d:"9598","6574a443":"9781","41b4135e":"9806","14eb3368":"9817",d8b67de0:"9930","4fb21e99":"9946","8875db2f":"9947",c1526b9f:"9968",f2a4091e:"9972"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>d=e[a]=[c,b]));c.push(d[2]=b);var f=t.p+t.u(a),r=new Error;t.l(f,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",r.name="ChunkLoadError",r.type=b,r.request=f,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,b,f=c[0],r=c[1],o=c[2],l=0;if(f.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var n=o(t)}for(a&&a(c);l<f.length;l++)b=f[l],t.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return t.O(n)},c=self.webpackChunkbook=self.webpackChunkbook||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();