"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[7493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:2},a="4.3.1 Server",i={unversionedId:"develop/rust/http_service/server",id:"develop/rust/http_service/server",title:"4.3.1 Server",description:"In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous. In this chapter, we will cover simple HTTP servers based on the wrap API, as well as low level hyper and socket APIs.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/http_service/server.md",sourceDirName:"develop/rust/http_service",slug:"/develop/rust/http_service/server",permalink:"/docs/zh/develop/rust/http_service/server",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/http_service/server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"4.3.1 Client",permalink:"/docs/zh/develop/rust/http_service/client"},next:{title:"4.4 Socket networking",permalink:"/docs/zh/category/44-socket-networking"}},l={},p=[{value:"The simple approach",id:"the-simple-approach",level:2},{value:"The hyper API",id:"the-hyper-api",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"431-server"},"4.3.1 Server"),(0,o.kt)("p",null,"In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. By its very nature, the HTTP server is always asynchronous. In this chapter, we will cover simple HTTP servers based on the wrap API, as well as low level hyper and socket APIs."),(0,o.kt)("p",null,"For HTTP clients in WasmEdge, please see ",(0,o.kt)("a",{parentName:"p",href:"client"},"the previous chapter"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,o.kt)("a",{parentName:"p",href:"../../rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,o.kt)("h2",{id:"the-simple-approach"},"The simple approach"),(0,o.kt)("p",null,"You could use the warp API to create an asynchronous HTTP server. Here are some examples. First, you will need to import the WasmEdge adapted warp crate, which uses a special version of single threaded Tokio that is adapted for WebAssembly."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Work in Progress")),(0,o.kt)("h2",{id:"the-hyper-api"},"The hyper API"),(0,o.kt)("p",null,"The warp crate is convenient to use. But often times, developers need access lower level APIs. The hyper crate is an excellent HTTP library for that. Here are some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/tree/main/server"},"examples"),". First, you will need to import the WasmEdge adapted hyper crate, which uses a special version of single threaded Tokio that is adapted for WebAssembly."),(0,o.kt)("p",null,"Just add the following line to your Cargo.toml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[dependencies]\nhyper_wasi = "0.15.0"\n')),(0,o.kt)("p",null,"The example below shows an HTTP server that echoes back any incoming request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'async fn echo(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {\n    match (req.method(), req.uri().path()) {\n        // Serve some instructions at /\n        (&Method::GET, "/") => Ok(Response::new(Body::from(\n            "Try POSTing data to /echo such as: `curl localhost:8080/echo -XPOST -d \'hello world\'`",\n        ))),\n\n        // Simply echo the body back to the client.\n        (&Method::POST, "/echo") => Ok(Response::new(req.into_body())),\n\n        (&Method::POST, "/echo/reversed") => {\n            let whole_body = hyper::body::to_bytes(req.into_body()).await?;\n\n            let reversed_body = whole_body.iter().rev().cloned().collect::<Vec<u8>>();\n            Ok(Response::new(Body::from(reversed_body)))\n        }\n\n        // Return the 404 Not Found for other routes.\n        _ => {\n            let mut not_found = Response::default();\n            *not_found.status_mut() = StatusCode::NOT_FOUND;\n            Ok(not_found)\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can build and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server/"},"the example")," in WasmEdge as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Git clone or fork the example repo\n$ git clone https://github.com/WasmEdge/wasmedge_hyper_demo.git\n$ cd wasmedge_hyper_demo/server\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/wasmedge_hyper_server.wasm target/wasm32-wasi/release/wasmedge_hyper_server.wasm\n\n# Run the example\nwasmedge target/wasm32-wasi/release/wasmedge_hyper_server.wasm\n")))}d.isMDXComponent=!0}}]);