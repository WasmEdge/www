"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Develop WasmEdge Plug-in in Rust SDK with witc",l={unversionedId:"contribute/plugin/develop_plugin_rustsdk",id:"contribute/plugin/develop_plugin_rustsdk",title:"Develop WasmEdge Plug-in in Rust SDK with witc",description:"Once you complete C++ plugin code, you can use witc to generate Rust Plugin SDK",source:"@site/docs/contribute/plugin/develop_plugin_rustsdk.md",sourceDirName:"contribute/plugin",slug:"/contribute/plugin/develop_plugin_rustsdk",permalink:"/docs/zh-TW/contribute/plugin/develop_plugin_rustsdk",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/plugin/develop_plugin_rustsdk.md",tags:[],version:"current",frontMatter:{},sidebar:"contributeSidebar",previous:{title:"Develop WasmEdge Plug-in in C++ API",permalink:"/docs/zh-TW/contribute/plugin/develop_plugin_cpp"},next:{title:"Testing",permalink:"/docs/zh-TW/contribute/test"}},u={},p=[{value:"Example wasmedge_opencvmini",id:"example-wasmedge_opencvmini",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"develop-wasmedge-plug-in-in-rust-sdk-with-witc"},"Develop WasmEdge Plug-in in Rust SDK with witc"),(0,i.kt)("p",null,"Once you complete C++ plugin code, you can use witc",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," to generate Rust Plugin SDK"),(0,i.kt)("h2",{id:"example-wasmedge_opencvmini"},"Example wasmedge_opencvmini"),(0,i.kt)("p",null,"Consider you get a file ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmedge_opencvmini.wit")," with below content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wit"},"imdecode: func(buf: list<u8>) -> u32\nimshow: func(window-name: string, mat-key: u32) -> unit\nwaitkey: func(delay: u32) -> unit\n")),(0,i.kt)("p",null,"Using witc can generate Rust plugin code for it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"witc plugin wasmedge_opencvmini.wit\n")),(0,i.kt)("p",null,"Now, you will create a SDK crate by"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cargo new --lib opencvmini-sdk && cd opencvmini-sdk\n")),(0,i.kt)("p",null,"witc put rust code to stdout, therefore, you might like to create a new module file for generated code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"witc plugin wasmedge_opencvmini.wit > src/generated.rs\n")),(0,i.kt)("p",null,"Finally, you write down ",(0,i.kt)("inlineCode",{parentName:"p"},"mod generated")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," to access the code, and write some wrappers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"mod generated;\n\npub fn imdecode(buf: &[u8]) -> u32 {\n    unsafe { generated::imdecode(buf.as_ptr(), buf.len()) }\n}\npub fn imshow(window_name: &str, mat_key: u32) -> () {\n    unsafe { generated::imshow(window_name.as_ptr(), window_name.len(), mat_key) }\n}\npub fn waitkey(delay: u32) -> () {\n    unsafe { generated::waitkey(delay) }\n}\n")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/second-state/witc"},"https://github.com/second-state/witc"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);