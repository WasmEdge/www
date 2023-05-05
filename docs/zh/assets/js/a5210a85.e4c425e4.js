"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="8.5.3 Deploy with youki",l={unversionedId:"develop/deploy/oci-runtime/youki",id:"develop/deploy/oci-runtime/youki",title:"8.5.3 Deploy with youki",description:"youki is an OCI container runtime written in Rust. youki has WasmEdge baked in. This chapter will walk you through deploying Wasm images with youki.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/deploy/oci-runtime/youki.md",sourceDirName:"develop/deploy/oci-runtime",slug:"/develop/deploy/oci-runtime/youki",permalink:"/docs/zh/develop/deploy/oci-runtime/youki",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/deploy/oci-runtime/youki.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"8.5.2 Deploy with crun",permalink:"/docs/zh/develop/deploy/oci-runtime/crun"},next:{title:"8.5.4 Deploy with quark",permalink:"/docs/zh/develop/deploy/oci-runtime/quark"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"853-deploy-with-youki"},"8.5.3 Deploy with youki"),(0,r.kt)("p",null,"youki is an OCI container runtime written in Rust. youki has WasmEdge baked in. This chapter will walk you through deploying Wasm images with youki."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build and configure youki with WasmEdge support")),(0,r.kt)("p",null,"We will use ubuntu 20.04 as an example. For other OS, please ",(0,r.kt)("a",{parentName:"p",href:"https://containers.github.io/youki/user/basic_setup.html"},"see here"),"."),(0,r.kt)("p",null,"Run the following command line to build and install youki on your machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install   \\\n      pkg-config         \\\n      libsystemd-dev     \\\n      libdbus-glib-1-dev \\\n      build-essential    \\\n      libelf-dev \\\n      libseccomp-dev \\\n      libclang-dev\n")),(0,r.kt)("p",null,"Next, configure, build, and install a ",(0,r.kt)("inlineCode",{parentName:"p"},"youki")," binary with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/containers/youki.git\ngo into the cloned directory\ncd youki\nmake youki-dev \n./youki -h \n./scripts/build.sh -o . -r -f wasm-wasmedge\nexport LD_LIBRARY_PATH=$HOME/.wasmedge/lib\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../build-and-run/install"},"Install WasmEdge"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," from youki to run Wasm modules."))),(0,r.kt)("p",null,"To run a webassembly module with youki, the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),' has to include either runc.oci.handler or module.wasm.image/variant=compat". It also needs you to specify a valid .wasm (webassembly binary) or .wat (webassembly test) module as entrypoint for the container.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"ociVersion": "1.0.2-dev",\n"annotations": {\n    "run.oci.handler": "wasm"\n},\n"process": {\n    "args": [\n        "wasi_example_main.wasm",\n        ],\n')),(0,r.kt)("h2",{id:"run-a-simple-webassembly-app"},"Run a simple WebAssembly app"),(0,r.kt)("p",null,"Now we can run a simple WebAssembly app. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples/blob/main/simple_wasi_app.md"},"A separate article")," explains how to compile, package, and publish the WebAssembly program as a container image to Docker hub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ctr i pull docker.io/wasmedge/example-wasi:latest\n")),(0,r.kt)("p",null,"Run the example with Youki and Podman."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman --runtime /PATH/WHARE/YOU/BUILT/WITH/WASM-WASMEDGE/youki run /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"That's it."))}c.isMDXComponent=!0}}]);