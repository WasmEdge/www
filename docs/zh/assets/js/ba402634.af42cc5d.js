"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_position:1},o="MySQL driver",i={unversionedId:"develop/rust/database/my_sql_driver",id:"develop/rust/database/my_sql_driver",title:"MySQL driver",description:"The database connection is necessary for today's enterprise development. WasmEdge provides a MySQL driver for Rust developers, enabling developers to build database applications in Rust and then running in WasmEdge.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/database/my_sql_driver.md",sourceDirName:"develop/rust/database",slug:"/develop/rust/database/my_sql_driver",permalink:"/docs/zh/develop/rust/database/my_sql_driver",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/database/my_sql_driver.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Database drivers",permalink:"/docs/zh/category/database-drivers"},next:{title:"PostgreSQL driver",permalink:"/docs/zh/develop/rust/database/postgres_driver"}},l={},d=[{value:"Run the example",id:"run-the-example",level:2},{value:"Code explanation",id:"code-explanation",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mysql-driver"},"MySQL driver"),(0,n.kt)("p",null,"The database connection is necessary for today's enterprise development. WasmEdge provides a MySQL driver for Rust developers, enabling developers to build database applications in Rust and then running in WasmEdge."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before we start, ensure ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/develop/rust/setup"},"you have Rust and WasmEdge installed"),". If you are connecting to a remote MySQL database using TLS, you will need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/zh/start/install#tls-plug-in"},"install the TLS plugin")," for WasmEdge as well.")),(0,n.kt)("h2",{id:"run-the-example"},"Run the example"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge-db-examples/tree/main/mysql_async"},"wasmedge-db-example/mysql_async")," is a MySQL connector example written in Rust."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/WasmEdge/wasmedge-db-examples\ncd wasmedge-db-examples/mysql_async\n\n# Compile the rust code into WASM\ncargo build --target wasm32-wasi --release\n\n# Execute MySQL statements against a MySQL database at mysql://user:passwd@127.0.0.1:3306\nwasmedge --env "DATABASE_URL=mysql://user:passwd@127.0.0.1:3306/mysql" target/wasm32-wasi/release/crud.wasm\n')),(0,n.kt)("p",null,"To use TLS, you will need to turn on the ",(0,n.kt)("inlineCode",{parentName:"p"},"default-rustls")," feature in ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'mysql_async_wasi = { version = "0.31", features = [ "default-rustls" ] }\n')),(0,n.kt)("p",null,"Then, run the application as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'# Execute MySQL statements against an AWS RDS database that requires TLS\nwasmedge --env "DATABASE_SSL=1" --env "DATABASE_URL=mysql://user:passwd@mydb.123456789012.us-east-1.rds.amazonaws.com:3306/mysql" crud.wasm\n')),(0,n.kt)("h2",{id:"code-explanation"},"Code explanation"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Work in Progress")))}c.isMDXComponent=!0}}]);