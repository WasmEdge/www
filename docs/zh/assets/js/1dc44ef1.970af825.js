"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||s;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_position:2},l="\u4f7f\u7528 Docker \u7684\u5feb\u901f\u5165\u95e8",o={unversionedId:"start/getting-started/quick_start_docker",id:"start/getting-started/quick_start_docker",title:"\u4f7f\u7528 Docker \u7684\u5feb\u901f\u5165\u95e8",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Docker Desktop \u4e2d\u5feb\u901f\u8fd0\u884c WasmEdge \u5e94\u7528\u3002\u7531\u4e8e\u6574\u4e2a\u5f00\u53d1\u548c\u8fd0\u884c\u73af\u5883\u90fd\u7531 Docker Desktop \u7ba1\u7406\uff0c\u56e0\u6b64\u6ca1\u6709\u989d\u5916\u7684\u4f9d\u8d56\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/start/getting-started/quick_start_docker.md",sourceDirName:"start/getting-started",slug:"/start/getting-started/quick_start_docker",permalink:"/docs/zh/start/getting-started/quick_start_docker",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/getting-started/quick_start_docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"startSidebar",previous:{title:"Linux \u4e0b\u7684\u5feb\u901f\u5165\u95e8",permalink:"/docs/zh/start/getting-started/quick_start"},next:{title:"\u5728 Red Hat \u4e0b\u7684\u5feb\u901f\u5165\u95e8",permalink:"/docs/zh/start/getting-started/quick_start_redhat"}},i={},p=[{value:"\u73af\u5883",id:"\u73af\u5883",level:2},{value:"\u8fd0\u884c\u72ec\u7acb\u7684 WASM \u5e94\u7528",id:"\u8fd0\u884c\u72ec\u7acb\u7684-wasm-\u5e94\u7528",level:2},{value:"\u8fd0\u884c HTTP \u670d\u52a1\u5668",id:"\u8fd0\u884c-http-\u670d\u52a1\u5668",level:2},{value:"\u8fd0\u884c\u57fa\u4e8e JavaScript \u7684\u670d\u52a1\u5668",id:"\u8fd0\u884c\u57fa\u4e8e-javascript-\u7684\u670d\u52a1\u5668",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(c,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4f7f\u7528-docker-\u7684\u5feb\u901f\u5165\u95e8"},"\u4f7f\u7528 Docker \u7684\u5feb\u901f\u5165\u95e8"),(0,n.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Docker Desktop \u4e2d\u5feb\u901f\u8fd0\u884c WasmEdge \u5e94\u7528\u3002\u7531\u4e8e\u6574\u4e2a\u5f00\u53d1\u548c\u8fd0\u884c\u73af\u5883\u90fd\u7531 Docker Desktop \u7ba1\u7406\uff0c\u56e0\u6b64\u6ca1\u6709\u989d\u5916\u7684\u4f9d\u8d56\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528 Docker Desktop\uff0c\u8bf7",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/start/getting-started/quick_start"},"\u4ece\u8fd9\u91cc\u5f00\u59cb"),"\u3002")),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u4ecb\u7ecd\u4ee5\u4e0b\u793a\u4f8b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-a-standalone-wasm-app"},"\u8fd0\u884c\u4e00\u4e2a\u72ec\u7acb\u7684 WASM \u5e94\u7528")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-an-http-server"},"\u8fd0\u884c\u4e00\u4e2a HTTP \u670d\u52a1\u5668")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-a-javascript-based-server"},"\u8fd0\u884c\u4e00\u4e2a\u57fa\u4e8e JavaScript \u7684\u670d\u52a1\u5668 (node.js)"))),(0,n.kt)("p",null,"\u5728\u6b64\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Docker \u547d\u4ee4\u8fd0\u884c WASM \u5bb9\u5668\u5e94\u7528\u3002\u5982\u679c\u4f60\u5bf9\u5982\u4f55\u4ece\u6e90\u4ee3\u7801\u6784\u5efa\u3001\u53d1\u5e03\u548c\u7ec4\u5408 WASM \u5bb9\u5668\u5e94\u7528\u611f\u5174\u8da3\uff0c\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/start/build-and-run/docker_wasm"},"Docker + wasm \u7ae0\u8282"),"\u3002"),(0,n.kt)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),(0,n.kt)("p",null,"\u4f60\u5fc5\u987b\u5b89\u88c5 Docker Desktop 4.15+\u3002\u786e\u4fdd\u5728 Docker Desktop \u4e2d\u542f\u7528\u4e86 containerd \u955c\u50cf\u5b58\u50a8\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker config",src:a(93282).Z,width:"2260",height:"922"})),(0,n.kt)("h2",{id:"\u8fd0\u884c\u72ec\u7acb\u7684-wasm-\u5e94\u7528"},"\u8fd0\u884c\u72ec\u7acb\u7684 WASM \u5e94\u7528"),(0,n.kt)("p",null,"Hello World \u793a\u4f8b\u662f\u4e00\u4e2a\u72ec\u7acb\u7684 Rust \u5e94\u7528\u7a0b\u5e8f\u3002\u5176\u6e90\u4ee3\u7801\u548c\u6784\u5efa\u8bf4\u660e\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"\u6b64\u5904"),"\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528 Docker \u6765\u8fd0\u884c\u5bb9\u5668\u5316\u7684 WASM \u5e94\u7528\u3002WASM \u5bb9\u5668\u955c\u50cf\u5b58\u50a8\u5728 Docker Hub \u4e2d\uff0c\u955c\u50cf\u5927\u5c0f\u4ec5\u4e3a 500KB\u3002\u8be5\u955c\u50cf\u53ef\u5728 Docker \u652f\u6301\u7684\u4efb\u4f55 OS \u548c CPU \u5e73\u53f0\u4e0a\u8fd0\u884c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/rust-example-hello:latest\nHello WasmEdge!\n")),(0,n.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5728 Rust \u4e2d\u521b\u5efa WASM \u5e94\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"WasmEdge \u7684\u57fa\u672c Rust \u793a\u4f8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust \u5f00\u53d1\u8005\u6307\u5357"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/pytorch"},"PyTorch"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/openvino"},"OpenVINO")," \u6216 ",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/wasinn/tensorflow_lite"},"Tensorflow Lite")," \u540e\u7aef\u7684 WASI-NN"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/http_service/client"},"HTTP \u548c HTTPS \u5ba2\u6237\u7aef")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/develop/rust/database/my_sql_driver"},"MySQL \u6570\u636e\u5e93\u5ba2\u6237\u7aef")),(0,n.kt)("li",{parentName:"ul"},"Redis \u5ba2\u6237\u7aef"),(0,n.kt)("li",{parentName:"ul"},"Kafka \u5ba2\u6237\u7aef")))),(0,n.kt)("h2",{id:"\u8fd0\u884c-http-\u670d\u52a1\u5668"},"\u8fd0\u884c HTTP \u670d\u52a1\u5668"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u662f\u4e00\u4e2a\u7528 Rust \u7f16\u5199\u7684\u72ec\u7acb\u7684 HTTP \u670d\u52a1\u5668\u3002\u5b83\u6f14\u793a\u4e86 Rust + WasmEdge \u4f5c\u4e3a\u8f7b\u91cf\u7ea7\u5fae\u670d\u52a1\u5806\u6808\u3002\u5176\u6e90\u4ee3\u7801\u548c\u6784\u5efa\u8bf4\u660e\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/server"},"\u6b64\u5904"),"\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528 Docker \u4ece Docker Hub \u62c9\u53d6\u5bb9\u5668\u955c\u50cf\uff08\u5927\u7ea6 800KB\uff09\uff0c\u7136\u540e\u5728 WasmEdge \u5bb9\u5668\u4e2d\u8fd0\u884c\u5b83\u3002\u8be5\u5bb9\u5668\u4f5c\u4e3a\u670d\u52a1\u5668\u542f\u52a8\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5c06\u5bb9\u5668\u7684\u7aef\u53e3 8080 \u6620\u5c04\u5230\u672c\u5730\u4e3b\u673a\u7684\u7aef\u53e3 8080\uff0c\u4ee5\u4fbf\u4ece WASM \u5bb9\u5668\u5916\u90e8\u8bbf\u95ee\u670d\u52a1\u5668\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -dp 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/rust-example-server:latest\nListening on http://0.0.0.0:8080\n")),(0,n.kt)("p",null,"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u4e2d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:8080/\nTry POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d 'hello world'`\n\n$ curl http://localhost:8080/echo -X POST -d \"Hello WasmEdge\"\nHello WasmEdge\n")),(0,n.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5728 Rust \u4e2d\u521b\u5efa WASM \u670d\u52a1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust \u5f00\u53d1\u8005\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge_hyper_demo"},"HTTP \u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/wasmedge-db-examples"},"\u6570\u636e\u5e93\u5e94\u7528\u7a0b\u5e8f\u793a\u4f8b")),(0,n.kt)("li",{parentName:"ul"},"Rust \u548c WasmEdge \u4e2d\u7684\u8f7b\u91cf\u7ea7\u5fae\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/microservice-rust-mysql"},"WasmEdge + Nginx + MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge + Kafka + MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"Dapr + WasmEdge"))))),(0,n.kt)("h2",{id:"\u8fd0\u884c\u57fa\u4e8e-javascript-\u7684\u670d\u52a1\u5668"},"\u8fd0\u884c\u57fa\u4e8e JavaScript \u7684\u670d\u52a1\u5668"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u662f\u4f7f\u7528 Node.js API \u7f16\u5199\u7684\u72ec\u7acb HTTP \u670d\u52a1\u5668\u3002\u5b83\u6f14\u793a\u4e86\u5c06 WasmEdge \u4f5c\u4e3a\u96f6\u4f9d\u8d56\u548c\u53ef\u79fb\u690d\u7684 Node.js \u5e94\u7528\u7684\u8f7b\u91cf\u7ea7\u8fd0\u884c\u65f6\u3002\u5176\u6e90\u4ee3\u7801\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/docker_wasm/server"},"\u6b64\u5904"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -dp 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm secondstate/node-example-server:latest\n... ...\n")),(0,n.kt)("p",null,"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u4e2d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:8080/echo -X POST -d "Hello WasmEdge"\nHello WasmEdge\n')),(0,n.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5728 WasmEdge \u4e2d\u8fd0\u884c JavaScript \u5e94\u7528\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs"},"WasmEdge QuickJS runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"AI \u63a8\u7406\u5e94\u7528\u793a\u4f8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/wasi_http_fetch.js"},"\u4f7f\u7528 fetch() \u7684 Web \u670d\u52a1\u5ba2\u6237\u7aef\u793a\u4f8b"))),(0,n.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/start/build-and-run/docker_wasm"},"\u4e86\u89e3\u6709\u5173\u5728 Docker \u4e2d\u6784\u5efa\u548c\u7ba1\u7406 WASM \u5bb9\u5668")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/rust-examples"},"WasmEdge \u7684\u57fa\u672c Rust \u793a\u4f8b")),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Docker Compose \u6784\u5efa\u548c Rust \u7684\u5fae\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-mysql-nginx"},"WasmEdge / MySQL / Nginx")," - \u793a\u4f8b\u4f7f\u7528\u9759\u6001 HTML \u524d\u7aef\u7684 Wasm-based Web \u5e94\u7528\uff0c\u4f7f\u7528 MySQL\uff08MariaDB\uff09\u6570\u636e\u5e93\u3002\u524d\u7aef\u8fde\u63a5\u5230\u4f7f\u7528 WasmEdge runtime \u8fd0\u884c\u7684\u7528 Rust \u7f16\u5199\u7684 WASM \u5fae\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker/awesome-compose/tree/master/wasmedge-kafka-mysql"},"WasmEdge / Kafka / MySQL")," - \u793a\u4f8b Wasm-based \u5fae\u670d\u52a1\u8ba2\u9605 Kafka\uff08Redpanda\uff09\u961f\u5217\u4e3b\u9898\uff0c\u5e76\u5c06\u4efb\u4f55\u4f20\u5165\u7684\u6d88\u606f\u8f6c\u6362\u5e76\u4fdd\u5b58\u5230 MySQL\uff08MariaDB\uff09\u6570\u636e\u5e93\u4e2d\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4f60\u559c\u6b22\u7684\u8bed\u8a00\u7f16\u5199 WASM \u5e94\u7528\uff0c\u6bd4\u5982 ",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-rust"},"Rust"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-cc"},"C/C++"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-javascript"},"JavaScript"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"/category/develop-wasm-apps-in-go"},"Go")," \u548c\u8bb8\u591a\u5176\u4ed6\u8bed\u8a00\u3002")))}u.isMDXComponent=!0},93282:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/docker_config-890db6e0357e96c3f39118d1a7bc843b.png"}}]);