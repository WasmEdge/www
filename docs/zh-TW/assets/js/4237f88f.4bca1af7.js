"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:4},s="Component Model",i={unversionedId:"start/wasmedge/component_model",id:"start/wasmedge/component_model",title:"Component Model",description:"The component model for WASM would dramatically improve WASM module\u2019s reusability and composability. It will allow better access from one WASM module to other modules and systems, including the operating system APIs (e.g., networking).",source:"@site/docs/start/wasmedge/component_model.md",sourceDirName:"start/wasmedge",slug:"/start/wasmedge/component_model",permalink:"/docs/zh-TW/start/wasmedge/component_model",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/wasmedge/component_model.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"startSidebar",previous:{title:"Other Extensions",permalink:"/docs/zh-TW/start/wasmedge/extensions/unique_extensions"},next:{title:"Comparison",permalink:"/docs/zh-TW/start/wasmedge/comparison"}},l={},m=[],c={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-model"},"Component Model"),(0,r.kt)("p",null,"The component model for WASM would dramatically improve WASM module\u2019s reusability and composability. It will allow better access from one WASM module to other modules and systems, including the operating system APIs (e.g., networking)."),(0,r.kt)("p",null,"WasmEdge is already committed to supporting and implementing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/component-model"},"the component model proposal"),". See the related issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/issues/1892"},"here"),"."),(0,r.kt)("p",null,"After the support for the component model is done, WasmEdge could be integrated by Spin and Spiderlightning."))}d.isMDXComponent=!0}}]);