"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1},o="Client",l={unversionedId:"develop/rust/http_service/client",id:"develop/rust/http_service/client",title:"Client",description:"WasmEdge allows Rust developers to use APIs they are already familiar with to access the Internet via the HTTP or HTTPS protocols. In this chapter, we will cover HTTP client APIs and libraries to access external web services from your WasmEdge app. For HTTP servers in WasmEdge, please see the next chapter.",source:"@site/docs/develop/rust/http_service/client.md",sourceDirName:"develop/rust/http_service",slug:"/develop/rust/http_service/client",permalink:"/docs/zh-TW/develop/rust/http_service/client",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/http_service/client.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"HTTP services",permalink:"/docs/zh-TW/category/http-services"},next:{title:"Server",permalink:"/docs/zh-TW/develop/rust/http_service/server"}},i={},p=[{value:"Asynchronous client with hyper",id:"asynchronous-client-with-hyper",level:2},{value:"Synchronous client with http_req",id:"synchronous-client-with-http_req",level:2},{value:"reqwest client",id:"reqwest-client",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("p",null,"WasmEdge allows Rust developers to use APIs they are already familiar with to access the Internet via the HTTP or HTTPS protocols. In this chapter, we will cover HTTP client APIs and libraries to access external web services from your WasmEdge app. For HTTP servers in WasmEdge, please see ",(0,a.kt)("a",{parentName:"p",href:"server"},"the next chapter"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before we started, make sure ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/setup"},"you have Rust and WasmEdge installed"),". In order to make HTTPS requests, you need to install the ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install#tls-plug-in"},"WasmEdge TLS plugin"),".")),(0,a.kt)("p",null,"We will discuss HTTP and HTTPS asynchronous clients with hyper, synchronous clients with http_req, and simple clients with reqwest. All of them are popular Rust crates for networking."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#asynchronous-client-with-hyper"},"Async client with hyper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#synchronous-client-with-http_req"},"Sync client with http_req")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#reqwest-client"},"reqwest client"))),(0,a.kt)("h2",{id:"asynchronous-client-with-hyper"},"Asynchronous client with hyper"),(0,a.kt)("p",null,"Asynchronous HTTP or HTTPS requests do not block the execution of the calling application. It allows an application to make multiple concurrent HTTP requests and to process responses as they are received. That enables high-performance networking applications in WasmEdge. The ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/hyper"},"hyper crate")," is a widely used Rust library to create HTTP and HTTPS networking applications."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Non-blocking I/O means that the application program can keep multiple connections open at the same time, and process data in and out of those connections as they come in. The program can either alternatingly poll those open connections or wait for incoming data to trigger async functions. That allows I/O intensive programs to run much faster even in a single-threaded environment.")),(0,a.kt)("p",null,"Build and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/"},"the hyper example")," in WasmEdge as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/wasmedge_hyper_demo\ncd wasmedge_hyper_demo/client\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/wasmedge_hyper_client.wasm wasmedge_hyper_client.wasm\n\n# Run the example\nwasmedge wasmedge_hyper_client.wasm\n")),(0,a.kt)("p",null,"In your Rust application, import ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/hyper_wasi"},"the WasmEdge adapted hyper crate"),", which uses a special version of single threaded Tokio that is adapted for WebAssembly. Just add the following line to your Cargo.toml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhyper_wasi = "0.15.0"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/client/src/main.rs"},"Rust example code")," below shows an HTTP or HTTPS GET request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'async fn fetch_url_return_str (url: hyper::Uri) -> Result<()> {\n    let client = Client::new();\n    let mut res = client.get(url).await?;\n\n    let mut resp_data = Vec::new();\n    while let Some(next) = res.data().await {\n        let chunk = next?;\n        resp_data.extend_from_slice(&chunk);\n    }\n    println!("{}", String::from_utf8_lossy(&resp_data));\n')),(0,a.kt)("p",null,"And here is an HTTP or HTTPS POST request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'async fn post_url_return_str (url: hyper::Uri, post_body: &\'static [u8]) -> Result<()> {\n    let client = Client::new();\n    let req = Request::builder()\n        .method(Method::POST)\n        .uri(url)\n        .body(Body::from(post_body))?;\n    let mut res = client.request(req).await?;\n\n    let mut resp_data = Vec::new();\n    while let Some(next) = res.data().await {\n        let chunk = next?;\n        resp_data.extend_from_slice(&chunk);\n    }\n    println!("{}", String::from_utf8_lossy(&resp_data));\n\n    Ok(())\n}\n')),(0,a.kt)("h2",{id:"synchronous-client-with-http_req"},"Synchronous client with http_req"),(0,a.kt)("p",null,"If your WasmEdge application only needs to make sequential requests to external web services, a synchronous client is easier to work with. It allows you to make a request, wait for the response, and move on once the response is fully received. You could use the http_req API to make simple synchronous HTTP requests. Build and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/http_req/"},"the example")," in WasmEdge as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/http_req\ncd http_req/\n\n# Build the Rust Code\ncargo build --target wasm32-wasi --release\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/get.wasm get.wasm\n\n# Run the example\nwasmedge get.wasm\n... ...\nwasmedge get_https.wasm\n... ...\n")),(0,a.kt)("p",null,"In your Rust application, import the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/http_req_wasi"},"http_req_wasi")," crate, which is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jayjamesjay/http_req"},"http_req")," at the API level. Just add the following line to your Cargo.toml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhttp_req_wasi  = "0.10"\n')),(0,a.kt)("p",null,"The example below shows an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/http_req/blob/master/examples/get.rs"},"HTTP GET request"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use http_req::request;\n\nfn main() {\n    let mut writer = Vec::new(); //container for body of a response\n    let res = request::get("http://eu.httpbin.org/get?msg=WasmEdge", &mut writer).unwrap();\n\n    println!("Status: {} {}", res.status_code(), res.reason());\n    println!("Headers {}", res.headers());\n    println!("{}", String::from_utf8_lossy(&writer));\n}\n')),(0,a.kt)("p",null,"And here is an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/http_req/blob/master/examples/post.rs"},"HTTP POST request"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use http_req::request;\n\nfn main() {\n    let mut writer = Vec::new(); //container for body of a response\n    const BODY: &[u8; 27] = b"field1=value1&field2=value2";\n    let res = request::post("http://eu.httpbin.org/post", BODY, &mut writer).unwrap();\n\n    println!("Status: {} {}", res.status_code(), res.reason());\n    println!("Headers {}", res.headers());\n    println!("{}", String::from_utf8_lossy(&writer));\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order to make HTTPS requests, you need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install#tls-plug-in"},"install the wasmedge_TLS plugin"),". You can then run the HTTPS ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/http_req/blob/master/examples/get_https.rs"},"GET")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/http_req/blob/master/examples/post_https.rs"},"POST")," examples in the example repo.")),(0,a.kt)("h2",{id:"reqwest-client"},"reqwest client"),(0,a.kt)("p",null,"The reqwest crate is another popular Rust library to create asynchronous HTTP clients. It is built on top of the hyper API. Many developers find it easier to use. Build and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_reqwest_demo/"},"the example")," in WasmEdge as follows."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our current adaptation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasmedge/reqwest"},"reqwest_wasi")," does not support HTTPS yet. You are welcome to contribute to the project!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/wasmedge_reqwest_demo\ncd wasmedge_reqwest_demo\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/wasmedge_reqwest_demo.wasm wasmedge_reqwest_demo.wasm\n\n# Run the example\nwasmedge wasmedge_reqwest_demo.wasm\n")),(0,a.kt)("p",null,"In your Rust application, import ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/hyper_wasi"},"the WasmEdge adapted hyper crate"),", which uses a special version of single threaded Tokio that is adapted for WebAssembly. Just add the following line to your Cargo.toml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nreqwest_wasi = { version = "0.11", features = ["json"] }\ntokio_wasi = { version = "1.21", features = ["full"] }\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_reqwest_demo/blob/main/src/main.rs"},"example Rust code")," below shows an HTTP GET request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let resp = reqwest::get("http://eu.httpbin.org/ip")\n        .await?\n        .json::<HashMap<String, String>>()\n        .await?;\n    println!("{:#?}", resp);\n    Ok(())\n}\n')),(0,a.kt)("p",null,"And here is an HTTP POST request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'    let client = reqwest::Client::new();\n\n    let res = client\n        .post("http://eu.httpbin.org/post")\n        .body("msg=WasmEdge")\n        .send()\n        .await?;\n    let body = res.text().await?;\n\n    println!("POST: {}", body);\n')))}m.isMDXComponent=!0}}]);