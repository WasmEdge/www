"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="WebAssembly SIMD Example in C",s={unversionedId:"develop/c/simd",id:"develop/c/simd",title:"WebAssembly SIMD Example in C",description:"128-bit packed Single Instruction Multiple Data (SIMD) instructions provide simultaneous computations over packed data in just one instruction. It's commonly used to improve performance for multimedia applications. With the SIMD proposal, the modules can benefit from using these commonly used instructions in modern hardware to gain more speedup.",source:"@site/docs/develop/c/simd.md",sourceDirName:"develop/c",slug:"/develop/c/simd",permalink:"/docs/develop/c/simd",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/c/simd.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"Thread",permalink:"/docs/develop/c/threads"},next:{title:"Bpf userspace program example with wasm_bpf plugin",permalink:"/docs/develop/c/bpf"}},l={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile the C-SIMD application to Wasm-SIMD binary with emcc",id:"compile-the-c-simd-application-to-wasm-simd-binary-with-emcc",level:2},{value:"Run with WasmEdge",id:"run-with-wasmedge",level:2},{value:"Ahead-of-Time mode",id:"ahead-of-time-mode",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webassembly-simd-example-in-c"},"WebAssembly SIMD Example in C"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://webassembly.github.io/simd/core/syntax/instructions.html#simd-instructions"},"128-bit packed Single Instruction Multiple Data (SIMD)")," instructions provide simultaneous computations over packed data in just one instruction. It's commonly used to improve performance for multimedia applications. With the SIMD proposal, the modules can benefit from using these commonly used instructions in modern hardware to gain more speedup."),(0,a.kt)("p",null,"If you are interested in enabling the SIMD proposal will improve how much performance of the applications, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm32-wasi-benchmark"},"wasm32-wasi benchmark")," for more information. In our benchmark, the Mandelbrot Set application can have ",(0,a.kt)("strong",{parentName:"p"},"2.65x")," speedup."),(0,a.kt)("p",null,"We modified the Mandelbrot Set example from our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm32-wasi-benchmark/blob/master/src/mandelbrot.c"},"wasm32-wasi benchmark project"),". We will use this as an example in this article."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before we started, make sure you have installed the following software:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../build-and-run/install"},"Install WasmEdge"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Emscripten, a toolchain for compiling C/C++ to WebAssembly. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/emscripten-core/emsdk"},"emcc official repository")," for the detailed instructions."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/emscripten-core/emsdk.git\ncd emsdk\n./emsdk install latest\n./emsdk activate latest\nsource ./emsdk_env.sh\n")),(0,a.kt)("h2",{id:"compile-the-c-simd-application-to-wasm-simd-binary-with-emcc"},"Compile the C-SIMD application to Wasm-SIMD binary with emcc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"emcc -g -Oz --llvm-lto 1 -s STANDALONE_WASM -s INITIAL_MEMORY=32MB -s MAXIMUM_MEMORY=4GB \\\n  -mmutable-globals \\\n  -mnontrapping-fptoint \\\n  -msign-ext \\\n  mandelbrot-simd.c -o mandelbrot-simd.wasm\n")),(0,a.kt)("h2",{id:"run-with-wasmedge"},"Run with WasmEdge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge mandelbrot-simd.wasm 15000\n")),(0,a.kt)("h2",{id:"ahead-of-time-mode"},"Ahead-of-Time mode"),(0,a.kt)("p",null,"With WasmEdge's AoT compiler, you will get higher performance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Compile wasm-simd with wasmedge aot compiler\n$ wasmedge compile mandelbrot-simd.wasm mandelbrot-simd-out.wasm\n# Run the native binary with wasmedge\n$ wasmedge mandelbrot-simd-out.wasm 15000\n")))}d.isMDXComponent=!0}}]);