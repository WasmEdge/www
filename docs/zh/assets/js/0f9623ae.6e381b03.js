"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(a),c=s,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||n;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:s,l[1]=p;for(var i=2;i<n;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var r=a(87462),s=(a(67294),a(3905));const n={sidebar_position:1},l="Linux \u4e0b\u7684\u5feb\u901f\u5165\u95e8",p={unversionedId:"start/getting-started/quick_start",id:"start/getting-started/quick_start",title:"Linux \u4e0b\u7684\u5feb\u901f\u5165\u95e8",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5730\u5728\u5e38\u89c4 Linux \u53d1\u884c\u7248\uff08\u4f8b\u5982 Ubuntu\u3001Debian\u3001Raspberry OS \u6216 Windows \u4e0a\u7684 WSL\uff09\u4e0a\u5b89\u88c5\u548c\u8fd0\u884c WasmEdge \u8fd0\u884c\u65f6\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u627e\u5230\u66f4\u5168\u9762\u548c\u5176\u4ed6\u7279\u5b9a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b89\u88c5\u8bf4\u660e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start/getting-started/quick_start.md",sourceDirName:"start/getting-started",slug:"/start/getting-started/quick_start",permalink:"/docs/zh/start/getting-started/quick_start",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/getting-started/quick_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"startSidebar",previous:{title:"Getting Started with WasmEdge",permalink:"/docs/zh/category/getting-started-with-wasmedge"},next:{title:"\u4f7f\u7528 Docker \u7684\u5feb\u901f\u5165\u95e8",permalink:"/docs/zh/start/getting-started/quick_start_docker"}},o={},i=[{value:"\u4f7f\u7528\u4e00\u884c\u6307\u4ee4\u5b89\u88c5 WasmEdge",id:"\u4f7f\u7528\u4e00\u884c\u6307\u4ee4\u5b89\u88c5-wasmedge",level:2},{value:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684 WASM \u5e94\u7528",id:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684-wasm-\u5e94\u7528",level:2},{value:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a HTTP \u670d\u52a1\u5668",id:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a-http-\u670d\u52a1\u5668",level:2},{value:"\u5982\u4f55\u8fd0\u884c\u57fa\u4e8e JavaScript \u7684\u670d\u52a1\u5668",id:"\u5982\u4f55\u8fd0\u884c\u57fa\u4e8e-javascript-\u7684\u670d\u52a1\u5668",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],m={toc:i},u="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"linux-\u4e0b\u7684\u5feb\u901f\u5165\u95e8"},"Linux \u4e0b\u7684\u5feb\u901f\u5165\u95e8"),(0,s.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5730\u5728\u5e38\u89c4 Linux \u53d1\u884c\u7248\uff08\u4f8b\u5982 Ubuntu\u3001Debian\u3001Raspberry OS \u6216 Windows \u4e0a\u7684 WSL\uff09\u4e0a\u5b89\u88c5\u548c\u8fd0\u884c WasmEdge \u8fd0\u884c\u65f6\u3002\u4f60\u53ef\u4ee5\u5728",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/start/install#install"},"\u6b64\u5904"),"\u627e\u5230\u66f4\u5168\u9762\u548c\u5176\u4ed6\u7279\u5b9a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b89\u88c5\u8bf4\u660e\u3002"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528 Docker Desktop 4.15 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u5219\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u90e8\u5206\uff0c\u53ef\u4ee5",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/start/getting-started/quick_start_docker"},"\u5728\u6b64\u5f00\u59cb"),"\u3002\u5bf9\u4e8e Fedora Linux / Red Hat Linux / OpenShift / Podman \u7528\u6237\uff0c\u53ef\u4ee5",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/start/getting-started/quick_start_redhat"},"\u5728\u6b64\u5f00\u59cb"),"\u3002")),(0,s.kt)("p",null,"\u6211\u4eec\u5c06\u6db5\u76d6\u4ee5\u4e0b\u793a\u4f8b\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-to-run-a-standalone-wasm-app"},"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684 WASM \u5e94\u7528")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-to-run-an-http-server"},"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a HTTP \u670d\u52a1\u5668")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-to-run-a-javascript-based-server"},"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a JavaScript \u670d\u52a1\u5668 (node.js)"))),(0,s.kt)("h2",{id:"\u4f7f\u7528\u4e00\u884c\u6307\u4ee4\u5b89\u88c5-wasmedge"},"\u4f7f\u7528\u4e00\u884c\u6307\u4ee4\u5b89\u88c5 WasmEdge"),(0,s.kt)("p",null,"\u5b89\u88c5 WasmEdge \u7684\u6700\u7b80\u5355\u65b9\u5f0f\u662f\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u4f60\u5e94\u8be5\u5177\u6709 root \u6216\u81f3\u5c11 ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo")," \u6743\u9650\u3002\u5728\u8fd0\u884c\u6b64\u547d\u4ee4\u4e4b\u524d\uff0c\u4f60\u7684\u7cfb\u7edf\u5e94\u8be5\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"git")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"curl"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | sudo bash -s -- -p /usr/local\n")),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709 root \u6216 ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo")," \u6743\u9650\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"$HOME/.wasmedge")," \u76ee\u5f55\u4e2d\u5b89\u88c5 WasmEdge\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n")),(0,s.kt)("h2",{id:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684-wasm-\u5e94\u7528"},"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684 WASM \u5e94\u7528"),(0,s.kt)("p",null,"Hello World \u793a\u4f8b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684 Rust \u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u7531",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/start/build-and-run/cli"},"WasmEdge CLI"),"\u6267\u884c\u3002\u5176\u6e90\u4ee3\u7801\u548c\u6784\u5efa\u8bf4\u660e\u53ef\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"\u6b64\u5904"),"\u627e\u5230\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/releases/latest/download/hello.wasm"},"\u6b64\u5904"),"\u4e0b\u8f7d hello.wasm \u6587\u4ef6\uff0c\u6216\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/rust-examples/releases/latest/download/hello.wasm\n")),(0,s.kt)("p",null,"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge")," \u547d\u4ee4\u6765\u8fd0\u884c\u7a0b\u5e8f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge hello.wasm\nHello WasmEdge!\n")),(0,s.kt)("p",null,"\u4f7f\u7528 AoT \u7f16\u8bd1\u5668 ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedgec")," \u53ef\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec hello.wasm hello_aot.wasm\n$ wasmedge hello_aot.wasm\nHello WasmEdge!\n")),(0,s.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u5982\u4f55\u5728 Rust \u4e2d\u521b\u5efa WASM \u5e94\u7528"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"WasmEdge \u7684\u57fa\u672c Rust \u793a\u4f8b")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust \u5f00\u53d1\u6307\u5357"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/pytorch"},"PyTorch"),", ",(0,s.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/openvino"},"OpenVINO")," \u6216 ",(0,s.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/tensorflow_lite"},"Tensorflow Lite")," \u540e\u7aef\u7684 WASI-NN"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/http_service/client"},"HTTP \u548c HTTPS \u5ba2\u6237\u7aef")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/database/my_sql_driver"},"MySQL \u6570\u636e\u5e93\u5ba2\u6237\u7aef")),(0,s.kt)("li",{parentName:"ul"},"Redis \u5ba2\u6237\u7aef"),(0,s.kt)("li",{parentName:"ul"},"Kafka \u5ba2\u6237\u7aef")))),(0,s.kt)("h2",{id:"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a-http-\u670d\u52a1\u5668"},"\u5982\u4f55\u8fd0\u884c\u4e00\u4e2a HTTP \u670d\u52a1\u5668"),(0,s.kt)("p",null,"\u6b64\u793a\u4f8b\u662f\u4e00\u4e2a\u4f7f\u7528 Rust \u7f16\u5199\u7684\u72ec\u7acb HTTP \u670d\u52a1\u5668\u3002\u5b83\u5c55\u793a\u4e86\u5c06 Rust + WasmEdge \u4f5c\u4e3a\u5fae\u670d\u52a1\u7684\u8f7b\u91cf\u7ea7\u6280\u672f\u6808\u3002\u5176\u6e90\u4ee3\u7801\u548c\u6784\u5efa\u8bf4\u660e\u53ef\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/server"},"\u6b64\u5904"),"\u627e\u5230\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/releases/latest/download/server.wasm"},"\u6b64\u5904"),"\u4e0b\u8f7d server.wasm \u6587\u4ef6\uff0c\u6216\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/rust-examples/releases/latest/download/server.wasm\n")),(0,s.kt)("p",null,"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge")," \u547d\u4ee4\u6765\u8fd0\u884c\u8be5\u7a0b\u5e8f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge server.wasm\nListening on http://0.0.0.0:8080\n")),(0,s.kt)("p",null,"\u4ece\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:8080/\nTry POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d 'hello world'`\n\n$ curl http://localhost:8080/echo -X POST -d \"Hello WasmEdge\"\nHello WasmEdge\n")),(0,s.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5728 Rust \u4e2d\u521b\u5efa WASM \u670d\u52a1"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust \u5f00\u53d1\u6307\u5357")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"HTTP \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"\u6570\u636e\u5e93\u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b")),(0,s.kt)("li",{parentName:"ul"},"Rust \u548c WasmEdge \u4e2d\u7684\u8f7b\u91cf\u7ea7\u5fae\u670d\u52a1",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"WasmEdge + Nginx + MySQL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge + Kafka + MySQL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"Dapr + WasmEdge"))))),(0,s.kt)("h2",{id:"\u5982\u4f55\u8fd0\u884c\u57fa\u4e8e-javascript-\u7684\u670d\u52a1\u5668"},"\u5982\u4f55\u8fd0\u884c\u57fa\u4e8e JavaScript \u7684\u670d\u52a1\u5668"),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u662f\u57fa\u4e8e Node.js API \u5e76\u4f7f\u7528 JavaScript \u7f16\u5199\u7684\u72ec\u7acb HTTP \u670d\u52a1\u5668\u3002\u5b83\u5c55\u793a\u4e86\u5982\u4f55\u5c06 WasmEdge \u4f5c\u4e3a Node.js \u5e94\u7528\u7a0b\u5e8f\u7684\u8f7b\u91cf\u7ea7\u8fd0\u884c\u65f6\u3002\u5176\u6e90\u4ee3\u7801\u53ef\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"\u6b64\u5904"),"\u627e\u5230\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm"},"\u6b64\u5904"),"\u4e0b\u8f7d wasmedge_quickjs.wasm \u6587\u4ef6\uff0c\u6216\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip"},"\u6b64\u5904"),"\u4e0b\u8f7d modules.zip \u6587\u4ef6\uff0c\u6216\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip\n")),(0,s.kt)("p",null,"\u5c06 modules.zip \u6587\u4ef6\u89e3\u538b\u5230\u5f53\u524d\u6587\u4ef6\u5939\uff0c\u4fdd\u5b58\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"./modules/"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"unzip modules.zip\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728",(0,s.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/docker_wasm/server/server.js"},"\u6b64\u5904"),"\u4e0b\u8f7d server.js \u6587\u4ef6\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/docker_wasm/server/server.js\n")),(0,s.kt)("p",null,"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge")," \u547d\u4ee4\u6765\u8fd0\u884c\u8be5\u7a0b\u5e8f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. wasmedge_quickjs.wasm server.js\nListening on 8080 ...\n")),(0,s.kt)("p",null,"\u4ece\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,s.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5728 WasmEdge \u4e2d\u8fd0\u884c JavaScript \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs"},"WasmEdge QuickJS runtime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"AI \u63a8\u7406\u5e94\u7528\u793a\u4f8b")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"\u4f7f\u7528 fetch() \u7684 Web \u670d\u52a1\u5ba2\u6237\u7aef\u793a\u4f8b"))),(0,s.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684",(0,s.kt)("a",{parentName:"li",href:"/docs/zh/start/build-and-run/cli"},"WasmEdge CLI\u9009\u9879"),"\u4ee5\u63a2\u7d22 WasmEdge \u7684\u529f\u80fd\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7528\u4f60\u559c\u6b22\u7684\u8bed\u8a00\u7f16\u5199 WASM \u5e94\u7528\uff0c\u5982 ",(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),"\u3001",(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),"\u3001",(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript"),"\u3001",(0,s.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-go"},"Go")," \u7b49\u5176\u4ed6\u8bed\u8a00\u3002")))}d.isMDXComponent=!0}}]);