"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Upgrade to WasmEdge 0.13.0",s={unversionedId:"embed/c/reference/upgrade_to_0.13.0",id:"embed/c/reference/upgrade_to_0.13.0",title:"Upgrade to WasmEdge 0.13.0",description:"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the 0.12.1 to the 0.13.0 version.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/embed/c/reference/upgrade_to_0.13.0.md",sourceDirName:"embed/c/reference",slug:"/embed/c/reference/upgrade_to_0.13.0",permalink:"/docs/zh/embed/c/reference/upgrade_to_0.13.0",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/c/reference/upgrade_to_0.13.0.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"embedSidebar",previous:{title:"C API 0.13.1 Documentation",permalink:"/docs/zh/embed/c/reference/latest"},next:{title:"C API 0.12.1 Documentation",permalink:"/docs/zh/embed/c/reference/0.12.x"}},d={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Set data and its finalizer into a module instance when creation",id:"set-data-and-its-finalizer-into-a-module-instance-when-creation",level:2},{value:"Unified WasmEdge CLI",id:"unified-wasmedge-cli",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-to-wasmedge-0130"},"Upgrade to WasmEdge 0.13.0"),(0,r.kt)("p",null,"Due to the WasmEdge C API breaking changes, this document shows the guideline for programming with WasmEdge C API to upgrade from the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.12.1")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.13.0")," version."),(0,r.kt)("p",null,"In this version, there are only new features. Developers can build their original source with this WasmEdge version directly."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduced new API for setting data and its finalizer into module instances when creation."),(0,r.kt)("p",{parentName:"li"},"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ModuleInstanceCreateWithData()")," API to set the host data and its finalizer into the module instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Asynchronously invoking WASM function by executor."),(0,r.kt)("p",{parentName:"li"},"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_ExecutorAsyncInvoke()")," API to execute a WASM function asynchronously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unified WasmEdge CLI."),(0,r.kt)("p",{parentName:"li"},"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_Driver_UniTool()")," API to trigger the unified WasmEdge CLI."))),(0,r.kt)("h2",{id:"set-data-and-its-finalizer-into-a-module-instance-when-creation"},"Set data and its finalizer into a module instance when creation"),(0,r.kt)("p",null,"Besides setting host data into a host function, developers can set and move ownership of host data into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Module")," instance context with its finalizer. This may be useful when implementing the plug-ins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Struct definition. */\ntypedef struct Point {\n  int X;\n  int Y;\n} Point;\n\n/* Host function body definition. */\nWasmEdge_Result Print(void *Data,\n                      const WasmEdge_CallingFrameContext *CallFrameCxt,\n                      const WasmEdge_Value *In, WasmEdge_Value *Out) {\n  Point *P = (Point *)In;\n  printf("Point: (%d, %d)\\n", P->X, P->Y);\n  return WasmEdge_Result_Success;\n}\n\n/* Finalizer definition. */\nvoid PointFinalizer(void *Data) {\n  if (Data) {\n    free((Point *)Data);\n  }\n}\n\n/* Create a module instance with host data and its finalizer. */\nWasmEdge_String ExportName = WasmEdge_StringCreateByCString("module");\nPoint *Data = (Point *)malloc(sizeof(Point));\nData->X = 5;\nData->Y = -5;\nWasmEdge_ModuleInstanceContext *HostModCxt =\n    WasmEdge_ModuleInstanceCreateWithData(ExportName, Data, PointFinalizer);\n/*\n * When the `HostModCxt` being destroyed, the finalizer will be invoked and the\n * `Data` will be its argument.\n */\nWasmEdge_StringDelete(ExportName);\n')),(0,r.kt)("h2",{id:"unified-wasmedge-cli"},"Unified WasmEdge CLI"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge_Driver_UniTool()")," API presents the same function as running the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/start/build-and-run/cli"},(0,r.kt)("inlineCode",{parentName:"a"},"wasmedge")," tool"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <wasmedge/wasmedge.h>\n#include <stdio.h>\nint main(int argc, const char *argv[]) {\n  /* Run the WasmEdge unified tool. */\n  /* (Within both runtime and AOT compiler) */\n  return WasmEdge_Driver_UniTool(argc, argv);\n}\n")))}m.isMDXComponent=!0}}]);