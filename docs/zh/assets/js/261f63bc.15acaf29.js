"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6711],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const l={sidebar_position:5},a="Build WasmEdge With WasmEdge-Tensorflow Plug-in",i={unversionedId:"contribute/source/plugin/tensorflow",id:"contribute/source/plugin/tensorflow",title:"Build WasmEdge With WasmEdge-Tensorflow Plug-in",description:"Prerequisites",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contribute/source/plugin/tensorflow.md",sourceDirName:"contribute/source/plugin",slug:"/contribute/source/plugin/tensorflow",permalink:"/docs/zh/contribute/source/plugin/tensorflow",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/contribute/source/plugin/tensorflow.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge With WasmEdge-Image Plug-in",permalink:"/docs/zh/contribute/source/plugin/image"},next:{title:"Build WasmEdge With WasmEdge-TensorflowLite Plug-in",permalink:"/docs/zh/contribute/source/plugin/tensorflowlite"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build WasmEdge with WasmEdge-Tensorflow Plug-in",id:"build-wasmedge-with-wasmedge-tensorflow-plug-in-1",level:2},{value:"Install the TensorFlow Dependency",id:"install-the-tensorflow-dependency",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-wasmedge-with-wasmedge-tensorflow-plug-in"},"Build WasmEdge With WasmEdge-Tensorflow Plug-in"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The prerequisites of the WasmEdge-Tensorflow plug-in is the same as the WasmEdge building environment on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/linux"},"Linux platforms")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/os/macos"},"MacOS platforms"),"."),(0,o.kt)("h2",{id:"build-wasmedge-with-wasmedge-tensorflow-plug-in-1"},"Build WasmEdge with WasmEdge-Tensorflow Plug-in"),(0,o.kt)("p",null,"To enable the WasmEdge WasmEdge-Tensorflow, developers need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/contribute/source/build_from_src"},"building the WasmEdge from source")," with the cmake option ",(0,o.kt)("inlineCode",{parentName:"p"},"-DWASMEDGE_PLUGIN_TENSORFLOW=On"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/wasmedge/source/folder>\ncmake -GNinja -Bbuild -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_PLUGIN_TENSORFLOW=On\ncmake --build build\n# For the WasmEdge-Tensorflow plug-in, you should install this project.\ncmake --install build\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the built ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool cannot find the WasmEdge-Tensorflow plug-in, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMEDGE_PLUGIN_PATH")," environment variable to the plug-in installation path (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/"),", or the built plug-in path ",(0,o.kt)("inlineCode",{parentName:"p"},"build/plugins/wasmedge_tensorflow/"),") to try to fix this issue.")),(0,o.kt)("p",null,"Then you will have an executable ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," and the WasmEdge-Tensorflow plug-in under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/wasmedge/libwasmedgePluginWasmEdgeTensorflow.so")," after installation."),(0,o.kt)("h2",{id:"install-the-tensorflow-dependency"},"Install the TensorFlow Dependency"),(0,o.kt)("p",null,"Installing the necessary ",(0,o.kt)("inlineCode",{parentName:"p"},"libtensorflow_cc.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libtensorflow_framework.so")," on both ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms, we recommend the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L -O --remote-name-all https://github.com/second-state/WasmEdge-tensorflow-deps/releases/download/TF-2.12.0-CC/WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\n# For the Linux aarch64 platforms, please use the `WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-manylinux2014_aarch64.tar.gz`.\n# For the MacOS x86_64 platforms, please use the `WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-darwin_x86_64.tar.gz`.\n# For the MacOS arm64 platforms, please use the `WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-darwin_arm64.tar.gz`.\ntar -zxf WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\nrm -f WasmEdge-tensorflow-deps-TF-TF-2.12.0-CC-manylinux2014_x86_64.tar.gz\n")),(0,o.kt)("p",null,"The shared library will be extracted in the current directory ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflow_cc.so.2.12.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflow_framework.so.2.12.0")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," platforms, or ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflow_cc.2.12.0.dylib")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./libtensorflow_framework.2.12.0.dylib")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After building the plug-in, you can also find these shared libraries under the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/_deps/wasmedge_tensorflow_lib_tf-src/")," directory.")),(0,o.kt)("p",null,"Then you can move the library to the installation path and create the symbolic link:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflow_cc.so.2.12.0 /usr/local/lib\nmv libtensorflow_framework.so.2.12.0 /usr/local/lib\nln -s libtensorflow_cc.so.2.12.0 /usr/local/lib/libtensorflow_cc.so.2\nln -s libtensorflow_cc.so.2 /usr/local/lib/libtensorflow_cc.so\nln -s libtensorflow_framework.so.2.12.0 /usr/local/lib/libtensorflow_framework.so.2\nln -s libtensorflow_framework.so.2 /usr/local/lib/libtensorflow_framework.so\n")),(0,o.kt)("p",null,"If on ",(0,o.kt)("inlineCode",{parentName:"p"},"MacOS")," platforms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv libtensorflow_cc.2.12.0.dylib /usr/local/lib\nmv libtensorflow_framework.2.12.0.dylib /usr/local/lib\nln -s libtensorflow_cc.2.12.0.dylib /usr/local/lib/libtensorflow_cc.2.dylib\nln -s libtensorflow_cc.2.dylib /usr/local/lib/libtensorflow_cc.dylib\nln -s libtensorflow_framework.2.12.0.dylib /usr/local/lib/libtensorflow_framework.2.dylib\nln -s libtensorflow_framework.2.dylib /usr/local/lib/libtensorflow_framework.dylib\n")),(0,o.kt)("p",null,"Or create the symbolic link in the current directory and set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=$(pwd):${LD_LIBRARY_PATH}"),"."))}p.isMDXComponent=!0}}]);