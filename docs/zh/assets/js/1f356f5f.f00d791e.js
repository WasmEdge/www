"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var m=2;m<i;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1,displayed_sidebar:"startSidebar"},s="\u5f00\u59cb\u4f7f\u7528 WasmEdge",o={unversionedId:"start/overview",id:"start/overview",title:"\u5f00\u59cb\u4f7f\u7528 WasmEdge",description:"WasmEdge \u662f\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u7684 WebAssembly \u8fd0\u884c\u65f6\uff0c\u9002\u7528\u4e8e\u4e91\u539f\u751f\u3001\u8fb9\u7f18\u548c\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u3002\u5b83\u652f\u6301\u65e0\u670d\u52a1\u5668\u5e94\u7528\u3001\u5d4c\u5165\u5f0f\u51fd\u6570\u3001\u5fae\u670d\u52a1\u3001UDF\u3001\u667a\u80fd\u5408\u7ea6\u548c\u7269\u8054\u7f51\u8bbe\u5907\u3002WasmEdge \u76ee\u524d\u662f CNCF\uff08Cloud Native Computing Foundation\uff09\u7684\u6c99\u76d2\u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start/overview.md",sourceDirName:"start",slug:"/start/overview",permalink:"/docs/zh/start/overview",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"startSidebar"},sidebar:"startSidebar",next:{title:"\u5b89\u88c5\u548c\u5378\u8f7d WasmEdge",permalink:"/docs/zh/start/install"}},l={},m=[],p={toc:m},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5f00\u59cb\u4f7f\u7528-wasmedge"},"\u5f00\u59cb\u4f7f\u7528 WasmEdge"),(0,n.kt)("p",null,"WasmEdge \u662f\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u7684 WebAssembly \u8fd0\u884c\u65f6\uff0c\u9002\u7528\u4e8e\u4e91\u539f\u751f\u3001\u8fb9\u7f18\u548c\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u3002\u5b83\u652f\u6301\u65e0\u670d\u52a1\u5668\u5e94\u7528\u3001\u5d4c\u5165\u5f0f\u51fd\u6570\u3001\u5fae\u670d\u52a1\u3001UDF\u3001\u667a\u80fd\u5408\u7ea6\u548c\u7269\u8054\u7f51\u8bbe\u5907\u3002WasmEdge \u76ee\u524d\u662f CNCF\uff08Cloud Native Computing Foundation\uff09\u7684\u6c99\u76d2\u9879\u76ee\u3002"),(0,n.kt)("p",null,"WasmEdge \u8fd0\u884c\u65f6\u4e3a\u5176\u5305\u542b\u7684 WebAssembly \u5b57\u8282\u7801\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u826f\u597d\u5b9a\u4e49\u7684\u6267\u884c\u6c99\u76d2\u73af\u5883\u3002\u8be5\u8fd0\u884c\u65f6\u63d0\u4f9b\u4e86\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u8d44\u6e90\uff08\u4f8b\u5982\u6587\u4ef6\u7cfb\u7edf\u3001\u5957\u63a5\u5b57\u3001\u73af\u5883\u53d8\u91cf\u3001\u8fdb\u7a0b\uff09\u548c\u5185\u5b58\u7a7a\u95f4\u7684\u9694\u79bb\u548c\u4fdd\u62a4\u3002WasmEdge \u6700\u91cd\u8981\u7684\u4f7f\u7528\u573a\u666f\u662f\u5c06\u7528\u6237\u5b9a\u4e49\u7684\u6216\u793e\u533a\u8d21\u732e\u7684\u4ee3\u7801\u4f5c\u4e3a\u8f6f\u4ef6\u4ea7\u54c1\u4e2d\u7684\u63d2\u4ef6\uff08\u4f8b\u5982 SaaS\u3001\u6570\u636e\u5e93\u3001\u8fb9\u7f18\u8282\u70b9\uff0c\u751a\u81f3\u533a\u5757\u94fe\u8282\u70b9\uff09\u5b89\u5168\u5730\u6267\u884c\u3002\u5b83\u4f7f\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u3001\u4f9b\u5e94\u5546\u3001\u63d0\u4f9b\u8005\u548c\u793e\u533a\u6210\u5458\u80fd\u591f\u6269\u5c55\u548c\u5b9a\u5236\u8f6f\u4ef6\u4ea7\u54c1\u3002"),(0,n.kt)("p",null,"\u672c\u7ae0\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5\u5e76\u5f00\u59cb\u4f7f\u7528 WasmEdge\u3002"),(0,n.kt)("p",null,"\u6db5\u76d6\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/start/install"},"\u5b89\u88c5\u548c\u5378\u8f7d WasmEdge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/getting-started-with-wasmEdge"},"\u5165\u95e8\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd ",(0,n.kt)("a",{parentName:"li",href:"/category/what-is-wasmedge"},"WasmEdge \u8fd0\u884c\u65f6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/running-with-wasmedge"},"\u8fd0\u884c WasmEdge"))),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 WasmEdge \u8fdb\u884c\u9ad8\u7ea7\u7f16\u7a0b\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/develop/overview"},"\u5f00\u53d1 WASM \u5e94\u7528\u7a0b\u5e8f"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/embed/overview"},"\u5728\u5e94\u7528\u4e2d\u5d4c\u5165 WasmEdge"),"\uff0c\u6216\u5411 WasmEdge ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/contribute/overview"},"\u8fdb\u884c\u8d21\u732e")," \u7684\u6307\u5357\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\u6216\u6709\u4efb\u4f55\u53cd\u9988\uff0c\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8054\u7cfb\u6211\u4eec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord \u804a\u5929")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"\u521b\u5efa GitHub \u95ee\u9898\u4ee5\u83b7\u53d6\u6280\u672f\u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"\u63d0\u4ea4 GitHub \u8ba8\u8bba")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"\u5728 Twitter \u5173\u6ce8 @realwasmedge"),"\n\u5bf9\u4e8e\u4f7f\u7528 WasmEdge \u8fdb\u884c\u9ad8\u7ea7\u7f16\u7a0b\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/overview"},"\u5f00\u53d1 WASM \u5e94\u7528\u7a0b\u5e8f"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/embed/overview"},"\u5728\u5e94\u7528\u4e2d\u5d4c\u5165 WasmEdge"),"\uff0c\u6216\u5411 WasmEdge ",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/contribute/overview"},"\u8fdb\u884c\u8d21\u732e")," \u7684\u6307\u5357\u3002")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\u6216\u6709\u4efb\u4f55\u53cd\u9988\uff0c\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8054\u7cfb\u6211\u4eec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/U4B5sFTkFc"},"Discord \u804a\u5929")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues"},"\u521b\u5efa GitHub \u95ee\u9898\u4ee5\u83b7\u53d6\u6280\u672f\u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/discussions"},"\u63d0\u4ea4 GitHub \u8ba8\u8bba")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/realwasmedge"},"\u5728 Twitter \u5173\u6ce8 @realwasmedge"))))}c.isMDXComponent=!0}}]);