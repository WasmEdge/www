"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4760],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71100:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:5},o="\u5bf9\u6bd4",i={unversionedId:"start/wasmedge/comparison",id:"start/wasmedge/comparison",title:"\u5bf9\u6bd4",description:"WebAssembly \u4e0e Docker \u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start/wasmedge/comparison.md",sourceDirName:"start/wasmedge",slug:"/start/wasmedge/comparison",permalink:"/docs/zh/start/wasmedge/comparison",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/wasmedge/comparison.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"startSidebar",previous:{title:"\u7ec4\u4ef6\u6a21\u578b",permalink:"/docs/zh/start/wasmedge/component_model"},next:{title:"Running with WasmEdge",permalink:"/docs/zh/category/running-with-wasmedge"}},m={},p=[{value:"WebAssembly \u4e0e Docker \u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f",id:"webassembly-\u4e0e-docker-\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48",level:2},{value:"Native clients\uff08NaCl\uff09\u3001\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u548c WebAssembly \u4e4b\u95f4\u6709\u4f55\u533a\u522b\uff1f",id:"native-clientsnacl\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u548c-webassembly-\u4e4b\u95f4\u6709\u4f55\u533a\u522b",level:2},{value:"WebAssembly \u4e0e eBPF \u6709\u4f55\u533a\u522b\uff1f",id:"webassembly-\u4e0e-ebpf-\u6709\u4f55\u533a\u522b",level:2}],s={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,r.kt)("h2",{id:"webassembly-\u4e0e-docker-\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48"},"WebAssembly \u4e0e Docker \u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u8bf7\u67e5\u770b\u6211\u4eec\u7684\u4fe1\u606f\u56fe\u8868 ",(0,r.kt)("a",{parentName:"p",href:"https://wasmedge.org/wasm_docker/"},"WebAssembly vs. Docker"),"\u3002\u5728\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u539f\u751f\u5e94\u7528\u4e2d\uff0cWebAssembly \u4e0e Docker \u5e76\u9a7e\u9f50\u9a71\u3002"),(0,r.kt)("h2",{id:"native-clientsnacl\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u548c-webassembly-\u4e4b\u95f4\u6709\u4f55\u533a\u522b"},"Native clients\uff08NaCl\uff09\u3001\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u548c WebAssembly \u4e4b\u95f4\u6709\u4f55\u533a\u522b\uff1f"),(0,r.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u4fbf\u6377\u7684\u8868\u683c\u8fdb\u884c\u5bf9\u6bd4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"NaCl"),(0,r.kt)("th",{parentName:"tr",align:null},"Application runtimes (eg Node ","&"," Python)"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker-like container"),(0,r.kt)("th",{parentName:"tr",align:null},"WebAssembly"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource footprint"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Isolation"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Safety"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Portability"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language and framework choice"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"OK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ease of use"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"OK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manageability"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"Poor"),(0,r.kt)("td",{parentName:"tr",align:null},"Great"),(0,r.kt)("td",{parentName:"tr",align:null},"Great")))),(0,r.kt)("h2",{id:"webassembly-\u4e0e-ebpf-\u6709\u4f55\u533a\u522b"},"WebAssembly \u4e0e eBPF \u6709\u4f55\u533a\u522b\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eBPF")," \u662f\u9002\u7528\u4e8e\u7f51\u7edc\u6216\u5b89\u5168\u76f8\u5173\u4efb\u52a1\u7684 Linux \u5185\u6838\u7a7a\u95f4\u865a\u62df\u673a\u7684\u5b57\u8282\u7801\u683c\u5f0f\u3002\u800c WebAssembly \u662f\u9002\u7528\u4e8e\u4e1a\u52a1\u5e94\u7528\u7684\u7528\u6237\u7a7a\u95f4\u865a\u62df\u673a\u7684\u5b57\u8282\u7801\u683c\u5f0f\u3002",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/codex/ebpf-and-webassembly-whose-vm-reigns-supreme-c2861ce08f89"},"\u70b9\u51fb\u6b64\u5904\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f"),"\u3002"))}d.isMDXComponent=!0}}]);