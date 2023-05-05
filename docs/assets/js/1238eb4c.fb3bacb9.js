"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,p=d["".concat(o,".").concat(b)]||d[b]||m[b]||s;return a?n.createElement(p,l(l({ref:t},u),{},{components:a})):n.createElement(p,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:6},l="2.2.6 Build on RISC-V 64",i={unversionedId:"contribute/source/os/riscv64",id:"contribute/source/os/riscv64",title:"2.2.6 Build on RISC-V 64",description:"Prepare the Environment",source:"@site/docs/contribute/source/os/riscv64.md",sourceDirName:"contribute/source/os",slug:"/contribute/source/os/riscv64",permalink:"/docs/contribute/source/os/riscv64",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/os/riscv64.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"contributeSidebar",previous:{title:"2.2.5 Build on OpenWRT",permalink:"/docs/contribute/source/os/openwrt"},next:{title:"2.2.7 Build on OpenHarmony",permalink:"/docs/contribute/source/os/openharmony"}},o={},c=[{value:"Prepare the Environment",id:"prepare-the-environment",level:2},{value:"Install and run RISCV-Lab",id:"install-and-run-riscv-lab",level:3},{value:"Build WasmEdge",id:"build-wasmedge",level:2},{value:"Get Source code",id:"get-source-code",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Compile",id:"compile",level:3},{value:"Test",id:"test",level:2},{value:"Execute the wasmedge tool",id:"execute-the-wasmedge-tool",level:3},{value:"Execute the wasmedgec tool",id:"execute-the-wasmedgec-tool",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"226-build-on-risc-v-64"},"2.2.6 Build on RISC-V 64"),(0,r.kt)("h2",{id:"prepare-the-environment"},"Prepare the Environment"),(0,r.kt)("p",null,"This tutorial is based on Ubuntu 22.04 host, and WasmEdge uses the ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/tinylab/riscv-lab"},"RISCV-Lab")," which provide Ubuntu 22.04 system with riscv64 architecture. Here users can use their own riscv64 environment."),(0,r.kt)("h3",{id:"install-and-run-riscv-lab"},"Install and run RISCV-Lab"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/tinylab/cloud-lab.git\ncd cloud-lab\nLOGIN=bash tools/docker/run riscv-lab\n")),(0,r.kt)("p",null,"Note that it will take a long time to pull the image here."),(0,r.kt)("h2",{id:"build-wasmedge"},"Build WasmEdge"),(0,r.kt)("h3",{id:"get-source-code"},"Get Source code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@riscv-lab:/labs/riscv-lab$ git clone https://github.com/WasmEdge/WasmEdge.git\nubuntu@riscv-lab:/labs/riscv-lab$ cd WasmEdge\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"WasmEdge requires LLVM 12 at least and you may need to install these following dependencies by yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@riscv-lab:/labs/riscv-lab$ sudo apt-get update\nubuntu@riscv-lab:/labs/riscv-lab$ sudo apt install -y software-properties-common cmake libboost-all-dev\nubuntu@riscv-lab:/labs/riscv-lab$ sudo apt install -y llvm-12-dev liblld-12-dev\n")),(0,r.kt)("h3",{id:"compile"},"Compile"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute/source/build_from_src#cmake-building-options"},"here")," for the descriptions of all CMake options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@riscv-lab:/labs/riscv-lab$ cd WasmEdge\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge$ mkdir -p build && cd build\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/build$ cmake -DCMAKE_BUILD_TYPE=Release .. && make -j\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("h3",{id:"execute-the-wasmedge-tool"},"Execute the wasmedge tool"),(0,r.kt)("p",null,"For the pure WebAssembly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool will execute it in interpreter mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/build$ sudo make install\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/build$ cd ../examples/wasm\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ wasmedge -v\nwasmedge version 0.12.0-alpha.1-13-g610cc21f\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ wasmedge --reactor fibonacci.wasm fib 10\n89\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ wasmedge --reactor add.wasm add 2 2\n4\n")),(0,r.kt)("h3",{id:"execute-the-wasmedgec-tool"},"Execute the wasmedgec tool"),(0,r.kt)("p",null,"To improve the performance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," can compile WebAssembly into native machine code. After compiling with the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," AOT compiler, the wasmedge tool can execute the WASM in AOT mode which is much faster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ wasmedgec fibonacci.wasm fibonacci_aot.wasm\n[2023-02-01 22:39:15.807] [info] compile start\n[2023-02-01 22:39:15.857] [info] verify start\n[2023-02-01 22:39:15.866] [info] optimize start\n[2023-02-01 22:39:16.188] [info] codegen start\n[2023-02-01 22:39:16.403] [info] output start\n[2023-02-01 22:39:16.559] [info] compile done\n[2023-02-01 22:39:16.565] [info] output start\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ time wasmedge --reactor fibonacci_aot.wasm fib 30\n1346269\nreal    0m0.284s\nuser    0m0.282s\nsys     0m0.005s\nubuntu@riscv-lab:/labs/riscv-lab/WasmEdge/examples/wasm$ time wasmedge --reactor fibonacci.wasm fib 30\n1346269\nreal    0m1.814s\nuser    0m1.776s\nsys     0m0.016s\n")))}d.isMDXComponent=!0}}]);