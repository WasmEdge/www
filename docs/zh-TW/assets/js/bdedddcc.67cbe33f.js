"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(g,s(s({ref:t},p),{},{components:r})):o.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:4},s="Troubleshooting Guide",i={unversionedId:"start/troubleshooting_guide",id:"start/troubleshooting_guide",title:"Troubleshooting Guide",description:"This guide aims to provide solutions to common problems you may encounter when using WasmEdge, helping you to troubleshoot effectively and get back to your development work as quickly as possible.",source:"@site/docs/start/troubleshooting_guide.md",sourceDirName:"start",slug:"/start/troubleshooting_guide",permalink:"/docs/zh-TW/start/troubleshooting_guide",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/start/troubleshooting_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"startSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/zh-TW/start/faq"},next:{title:"What is WasmEdge",permalink:"/docs/zh-TW/category/what-is-wasmedge"}},l={},u=[{value:"Installation Issues",id:"installation-issues",level:2},{value:"Runtime Errors",id:"runtime-errors",level:2},{value:"Performance Issues",id:"performance-issues",level:2},{value:"Contributing to WasmEdge",id:"contributing-to-wasmedge",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting-guide"},"Troubleshooting Guide"),(0,n.kt)("p",null,"This guide aims to provide solutions to common problems you may encounter when using WasmEdge, helping you to troubleshoot effectively and get back to your development work as quickly as possible."),(0,n.kt)("h2",{id:"installation-issues"},"Installation Issues"),(0,n.kt)("p",null,"If you encounter errors during the installation process, make sure to check the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Platform"),": Make sure you are running a ",(0,n.kt)("a",{parentName:"p",href:"https://wasmedge.org/docs/start/install/"},"supported operating system and architecture"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dependencies"),": Ensure that all necessary dependencies are installed and up-to-date. This includes the correct versions of your compiler, build system (like CMake), and any libraries that WasmEdge depends on.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Environment"),": Check your environment variables and paths. Some issues can be caused by incorrect paths or missing environment variables."))),(0,n.kt)("h2",{id:"runtime-errors"},"Runtime Errors"),(0,n.kt)("p",null,"Runtime errors can occur for a variety of reasons. Here are some common causes and solutions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Incorrect Usage"),": If you're getting errors when executing a Wasm file, make sure that you're using the wasmedge command correctly. Check the ",(0,n.kt)("a",{parentName:"p",href:"https://wasmedge.org/docs/start/build-and-run/cli/"},"CLI documentation")," to make sure you're using the correct syntax and options.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Incompatible Wasm Files"),": Not all Wasm files are compatible with WasmEdge. If the Wasm file uses features or instructions that are not supported by WasmEdge, it may fail to execute. Make sure the Wasm file is compatible with WasmEdge.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Plugin Issues"),": If you're using plugins and they're causing issues, make sure the plugins are correctly installed and configured. Check the ",(0,n.kt)("a",{parentName:"p",href:"https://wasmedge.org/docs/category/wasmedge-plugin-system"},"plugin documentation")," for any specific requirements or known issues."))),(0,n.kt)("h2",{id:"performance-issues"},"Performance Issues"),(0,n.kt)("p",null,"If WasmEdge is running slowly or consuming too much memory, consider the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optimization"),": Make sure you're using the ",(0,n.kt)("a",{parentName:"p",href:"https://wasmedge.org/docs/start/build-and-run/aot/"},"AOT compiler")," if performance is a concern. The AOT compiler can significantly speed up the execution of Wasm files.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Memory Usage"),": If memory usage is too high, consider whether the Wasm file or the data it's processing is too large. You may need to optimize the Wasm file or adjust the way it processes data."))),(0,n.kt)("h2",{id:"contributing-to-wasmedge"},"Contributing to WasmEdge"),(0,n.kt)("p",null,"If you're having trouble contributing to WasmEdge, make sure to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Follow the Contribution Guidelines"),": Ensure that your contributions follow the ",(0,n.kt)("a",{parentName:"p",href:"https://wasmedge.org/docs/contribute/"},"guidelines"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Understand the Code"),": Make sure you have a good understanding of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge"},"WasmEdge codebase")," before making changes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test Your Changes"),": Always test your changes before submitting a pull request. This can help catch issues early and make the review process smoother."))),(0,n.kt)("p",null,"If any of the above steps do not help you, you should ask about your problem in Wasmedge's ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/h4KDyB8XTt"},"discord server")," for furthur help."))}c.isMDXComponent=!0}}]);