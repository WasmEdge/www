"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,v=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Redis driver",s={unversionedId:"develop/rust/database/redis_driver",id:"develop/rust/database/redis_driver",title:"Redis driver",description:"WasmEdge provides a Redis driver for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/database/redis_driver.md",sourceDirName:"develop/rust/database",slug:"/develop/rust/database/redis_driver",permalink:"/docs/zh/develop/rust/database/redis_driver",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/database/redis_driver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"PostgreSQL driver",permalink:"/docs/zh/develop/rust/database/postgres_driver"},next:{title:"Dapr services",permalink:"/docs/zh/develop/rust/dapr"}},d={},l=[{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redis-driver"},"Redis driver"),(0,a.kt)("p",null,"WasmEdge provides a Redis driver for Rust developer, enabling developers to build database applications in Rust and then running in WasmEdge."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before we started, make sure ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/develop/rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge-db-examples/tree/main/redis"},"wasmedge-db-example/redis")," is a Redis connector example, written in Rust."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/WasmEdge/wasmedge-db-examples\ncd wasmedge-db-examples/redis\n\n# Compile the rust code into WASM\ncargo build --target wasm32-wasi --release\n\n# Execute Redis commend against a Redis instance at redis://localhost/\nwasmedge --env "REDIS_URL=redis://localhost/" target/wasm32-wasi/release/wasmedge-redis-client-examples.wasm\n')),(0,a.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Work in Progress")))}u.isMDXComponent=!0}}]);