"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:1},o="\u4f7f\u7528\u6848\u4f8b",i={unversionedId:"start/usage/use-cases",id:"start/usage/use-cases",title:"\u4f7f\u7528\u6848\u4f8b",description:"\u7531\u4e8e WasmEdge \u5177\u5907 AOT\uff08Ahead of Time\uff09\u7f16\u8bd1\u5668\u4f18\u5316\uff0c\u662f\u5f53\u4eca\u5e02\u573a\u4e0a\u6700\u5feb\u7684 WebAssembly \u8fd0\u884c\u65f6\u4e4b\u4e00\u3002\u56e0\u6b64\uff0c\u5728\u8fb9\u7f18\u8ba1\u7b97\u3001\u6c7d\u8f66\u884c\u4e1a\u3001Jamstack\u3001\u65e0\u670d\u52a1\u5668\u67b6\u6784\u3001SaaS\u3001\u670d\u52a1\u7f51\u683c\uff0c\u751a\u81f3\u533a\u5757\u94fe\u5e94\u7528\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start/usage/use-cases.md",sourceDirName:"start/usage",slug:"/start/usage/use-cases",permalink:"/docs/zh/start/usage/use-cases",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/usage/use-cases.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"startSidebar",previous:{title:"WasmEdge Use-cases",permalink:"/docs/zh/category/wasmedge-use-cases"},next:{title:"WasmEdge \u5728\u667a\u80fd\u8bbe\u5907\u4e0a",permalink:"/docs/zh/start/usage/wasm-smart-devices"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("p",null,"\u7531\u4e8e WasmEdge \u5177\u5907 AOT\uff08Ahead of Time\uff09\u7f16\u8bd1\u5668\u4f18\u5316\uff0c\u662f\u5f53\u4eca\u5e02\u573a\u4e0a\u6700\u5feb\u7684 WebAssembly \u8fd0\u884c\u65f6\u4e4b\u4e00\u3002\u56e0\u6b64\uff0c\u5728\u8fb9\u7f18\u8ba1\u7b97\u3001\u6c7d\u8f66\u884c\u4e1a\u3001Jamstack\u3001\u65e0\u670d\u52a1\u5668\u67b6\u6784\u3001SaaS\u3001\u670d\u52a1\u7f51\u683c\uff0c\u751a\u81f3\u533a\u5757\u94fe\u5e94\u7528\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u73b0\u4ee3 Web \u5e94\u7528\u7a0b\u5e8f\u5177\u6709\u4e30\u5bcc\u7684\u7528\u6237\u754c\u9762\uff0c\u8fd9\u4e9b\u754c\u9762\u5728\u6d4f\u89c8\u5668\u548c/\u6216\u8fb9\u7f18\u4e91\u4e0a\u6e32\u67d3\u3002WasmEdge \u4e0e\u6d41\u884c\u7684 Web UI \u6846\u67b6\uff08\u5982 React\u3001Vue\u3001Yew \u548c Percy\uff09\u5408\u4f5c\uff0c\u652f\u6301\u8fb9\u7f18\u670d\u52a1\u5668\u4e0a\u7684\u540c\u6784 ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/embed/use-case/ssr-modern-ui"},"\u670d\u52a1\u5668\u7aef\u6e32\u67d3\uff08SSR\uff09")," \u529f\u80fd\u3002\u5b83\u8fd8\u53ef\u4ee5\u652f\u6301\u5728\u8fb9\u7f18\u4e91\u4e0a\u4e3a Unity3D \u52a8\u753b\u548c AI \u751f\u6210\u7684\u4ea4\u4e92\u5f0f\u89c6\u9891\u8fdb\u884c\u670d\u52a1\u5668\u7aef\u6e32\u67d3\uff0c\u7528\u4e8e Web \u5e94\u7528\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WasmEdge \u4e3a\u5fae\u670d\u52a1\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u5b89\u5168\u4e14\u9ad8\u6027\u80fd\u7684\u8fd0\u884c\u65f6\u3002\u5b83\u4e0e Dapr \u7b49\u5e94\u7528\u670d\u52a1\u6846\u67b6\u4ee5\u53ca Kubernetes \u7b49\u670d\u52a1\u7f16\u6392\u5668\u5b8c\u5168\u517c\u5bb9\u3002WasmEdge \u5fae\u670d\u52a1\u53ef\u4ee5\u5728\u8fb9\u7f18\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\uff0c\u5e76\u4e14\u53ef\u4ee5\u8bbf\u95ee\u5206\u5e03\u5f0f\u7f13\u5b58\uff0c\u4ee5\u652f\u6301\u73b0\u4ee3 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u65e0\u72b6\u6001\u548c\u6709\u72b6\u6001\u4e1a\u52a1\u903b\u8f91\u529f\u80fd\u3002\u53e6\u5916\u76f8\u5173\u7684\u6709\uff1a\u516c\u5171\u4e91\u4e2d\u7684\u65e0\u670d\u52a1\u5668\u51fd\u6570\u5373\u670d\u52a1\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/category/serverless-platforms"},"\u65e0\u670d\u52a1\u5668 SaaS\uff08\u8f6f\u4ef6\u5373\u670d\u52a1\uff09")," \u51fd\u6570\u4f7f\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u8fd0\u8425\u81ea\u5df1\u7684 API \u56de\u8c03\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u6269\u5c55\u548c\u81ea\u5b9a\u4e49\u5176 SaaS \u4f53\u9a8c\u3002\u65e0\u670d\u52a1\u5668\u51fd\u6570\u53ef\u4ee5\u5d4c\u5165\u5230 SaaS \u4e2d\uff0c\u6216\u8005\u9a7b\u7559\u5728\u4e0e SaaS \u670d\u52a1\u5668\u76f8\u90bb\u7684\u8fb9\u7f18\u670d\u52a1\u5668\u4e0a\u3002\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u7b80\u5355\u5730\u4e0a\u4f20\u51fd\u6570\u6765\u54cd\u5e94 SaaS \u4e8b\u4ef6\u6216\u8fde\u63a5 SaaS API\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/zh/start/usage/wasm-smart-devices"},"\u667a\u80fd\u8bbe\u5907\u5e94\u7528")," \u53ef\u4ee5\u5c06 WasmEdge \u5d4c\u5165\u4e3a\u4e2d\u95f4\u4ef6\u8fd0\u884c\u65f6\uff0c\u7528\u4e8e\u5728 UI \u4e0a\u5448\u73b0\u4ea4\u4e92\u5f0f\u5185\u5bb9\u3001\u8fde\u63a5\u539f\u751f\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5e76\u8bbf\u95ee\u4e13\u95e8\u7684\u786c\u4ef6\u529f\u80fd\uff08\u4f8b\u5982\uff0c\u7528\u4e8e AI \u63a8\u65ad\u7684 GPU\uff09\u3002\u4e0e\u672c\u5730\u7f16\u8bd1\u7684\u673a\u5668\u7801\u76f8\u6bd4\uff0cWasmEdge \u8fd0\u884c\u65f6\u7684\u4f18\u52bf\u5305\u62ec\u5b89\u5168\u6027\u3001\u5b89\u5168\u6027\u3001\u53ef\u79fb\u690d\u6027\u3001\u53ef\u7ba1\u7406\u6027\u548c\u5f00\u53d1\u8005\u751f\u4ea7\u529b\u3002WasmEdge \u53ef\u5728 Android\u3001OpenHarmony \u548c seL4 RTOS \u8bbe\u5907\u4e0a\u8fd0\u884c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WasmEdge \u53ef\u4ee5\u652f\u6301\u9ad8\u6027\u80fd\u7684\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff08DSL\uff09\uff0c\u6216\u8005\u4f5c\u4e3a\u4e00\u4e2a\u4e91\u539f\u751f\u7684 JavaScript \u8fd0\u884c\u65f6\uff0c\u901a\u8fc7\u5d4c\u5165 JS \u6267\u884c\u5f15\u64ce\u6216\u89e3\u91ca\u5668\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5229\u7528\u8bf8\u5982 ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/develop/deploy/kubernetes/kubernetes-containerd-crun"},"Kubernetes"),"\u3001Docker \u548c CRI-O \u7b49\u5bb9\u5668\u5de5\u5177\u6765\u90e8\u7f72\u3001\u7ba1\u7406\u548c\u8fd0\u884c\u8f7b\u91cf\u7ea7\u7684 WebAssembly \u5e94\u7528\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WasmEdge \u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u63d2\u5165\u5230\u73b0\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u6216\u5e73\u53f0\u4e2d\u3002"))),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5bf9 WasmEdge \u6709\u4efb\u4f55\u597d\u7684\u60f3\u6cd5\uff0c\u8bf7\u6beb\u4e0d\u72b9\u8c6b\u5730\u5f00\u542f\u4e00\u4e2a GitHub \u95ee\u9898\uff0c\u6211\u4eec\u4e00\u8d77\u8ba8\u8bba\u3002"))}m.isMDXComponent=!0}}]);