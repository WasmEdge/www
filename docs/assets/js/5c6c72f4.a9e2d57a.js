"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return r?a.createElement(y,o(o({ref:t},p),{},{components:r})):a.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:1},o="MySQL driver",i={unversionedId:"develop/rust/database/my_sql_driver",id:"develop/rust/database/my_sql_driver",title:"MySQL driver",description:"The database connection is necessary for today's enterprise development. WasmEdge provides a MySQL driver for Rust developers, enabling developers to build database applications in Rust and then running in WasmEdge.",source:"@site/docs/develop/rust/database/my_sql_driver.md",sourceDirName:"develop/rust/database",slug:"/develop/rust/database/my_sql_driver",permalink:"/docs/develop/rust/database/my_sql_driver",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/database/my_sql_driver.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Database drivers",permalink:"/docs/category/database-drivers"},next:{title:"PostgreSQL driver",permalink:"/docs/develop/rust/database/postgres_driver"}},l={},d=[{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mysql-driver"},"MySQL driver"),(0,n.kt)("p",null,"The database connection is necessary for today's enterprise development. WasmEdge provides a MySQL driver for Rust developers, enabling developers to build database applications in Rust and then running in WasmEdge."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before we start, ensure ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/rust/setup"},"you have Rust and WasmEdge installed"),". If you are connecting to a remote MySQL database using TLS, you will need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/start/install#tls-plug-in"},"install the TLS plugin")," for WasmEdge as well.")),(0,n.kt)("h2",{id:"run-the-example"},"Run the example"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge-db-examples/tree/main/mysql_async"},"wasmedge-db-example/mysql_async")," is a MySQL connector example written in Rust."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/WasmEdge/wasmedge-db-examples\ncd wasmedge-db-examples/mysql_async\n\n# Compile the rust code into WASM\ncargo build --target wasm32-wasi --release\n\n# Execute MySQL statements against a MySQL database at mysql://user:passwd@127.0.0.1:3306\nwasmedge --env "DATABASE_URL=mysql://user:passwd@127.0.0.1:3306/mysql" target/wasm32-wasi/release/crud.wasm\n')),(0,n.kt)("p",null,"To use TLS, you will need to turn on the ",(0,n.kt)("inlineCode",{parentName:"p"},"default-rustls")," feature in ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'mysql_async_wasi = { version = "0.31", features = [ "default-rustls" ] }\n')),(0,n.kt)("p",null,"Then, run the application as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# Execute MySQL statements against an AWS RDS database that requires TLS\nwasmedge --env "DATABASE_SSL=1" --env "DATABASE_URL=mysql://user:passwd@mydb.123456789012.us-east-1.rds.amazonaws.com:3306/mysql" crud.wasm\n')),(0,n.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Work in Progress")))}c.isMDXComponent=!0}}]);