"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="WasmEdge On Smart Devices",s={unversionedId:"embed/use-case/wasm-smart-devices",id:"embed/use-case/wasm-smart-devices",title:"WasmEdge On Smart Devices",description:"Smart device apps could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e, the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, OTA upgradability, and developer productivity. WasmEdge runs on the following device OSes.",source:"@site/docs/embed/use-case/wasm-smart-devices.md",sourceDirName:"embed/use-case",slug:"/embed/use-case/wasm-smart-devices",permalink:"/docs/zh-TW/embed/use-case/wasm-smart-devices",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/use-case/wasm-smart-devices.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"embedSidebar",previous:{title:"wasm-nginx-module",permalink:"/docs/zh-TW/embed/use-case/wasm-nginx"},next:{title:"Serverless Software-As-A-Service Functions",permalink:"/docs/zh-TW/embed/use-case/serverless-saas"}},c={},d=[],l={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wasmedge-on-smart-devices"},"WasmEdge On Smart Devices"),(0,a.kt)("p",null,"Smart device apps could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e, the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, OTA upgradability, and developer productivity. WasmEdge runs on the following device OSes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/category/build-and-run-wasmedge-on-android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/openharmony"},"OpenHarmony")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/raspberrypi"},"Raspberry Pi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh-TW/contribute/source/os/sel4"},"The seL4 RTOS"))),(0,a.kt)("p",null,"With WasmEdge on both the device and the edge server, we can support ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/ssr"},"isomorphic Server-Side Rendering (SSR)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/build-and-run/docker_wasm#deploy-the-microservice-example"},"microservices")," for rich-client mobile applications that is both portable and upgradable."))}p.isMDXComponent=!0}}]);