"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1044],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3},o="Embed the WASM app into your Go Host app",s={unversionedId:"embed/quick-start/embed-wasm-apps-go",id:"embed/quick-start/embed-wasm-apps-go",title:"Embed the WASM app into your Go Host app",description:"In the previous chapter, we learned how to create a WASM app using Rust and wasmedge-bindgen tool. In this chapter, I will walk you through how to embed the compiled WASM app into your Go Host app.",source:"@site/docs/embed/quick-start/embed-wasm-apps-go.md",sourceDirName:"embed/quick-start",slug:"/embed/quick-start/embed-wasm-apps-go",permalink:"/docs/embed/quick-start/embed-wasm-apps-go",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/embed/quick-start/embed-wasm-apps-go.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"embedSidebar",previous:{title:"Create a WASM app using Rust and wasmedge-bindgen",permalink:"/docs/embed/quick-start/wasm-app-in-rust"},next:{title:"Passing Complex Data",permalink:"/docs/category/passing-complex-data"}},l={},p=[{value:"The Go Host Application",id:"the-go-host-application",level:2},{value:"Run the WASM app from your Go Host",id:"run-the-wasm-app-from-your-go-host",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embed-the-wasm-app-into-your-go-host-app"},"Embed the WASM app into your Go Host app"),(0,a.kt)("p",null,"In the previous chapter, we learned how to create a WASM app using Rust and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge-bindgen")," tool. In this chapter, I will walk you through how to embed the compiled WASM app into your Go Host app."),(0,a.kt)("h2",{id:"the-go-host-application"},"The Go Host Application"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/wasmedge-bindgen/go_BindgenFuncs/bindgen_funcs.go"},"Go host application"),", you can create and set up the WasmEdge VM using the WasmEdge Go SDK."),(0,a.kt)("p",null,"However, instead of calling ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.Instantiate()"),", you should now call ",(0,a.kt)("inlineCode",{parentName:"p"},"bindgen.Instantiate(vm)")," to instantiate the VM and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"bindgen")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  // Expected Args[0]: program name (./bindgen_funcs)\n  // Expected Args[1]: wasm file (rust_bindgen_funcs_lib.wasm))\n\n  wasmedge.SetLogErrorLevel()\n  var conf = wasmedge.NewConfigure(wasmedge.WASI)\n  var vm = wasmedge.NewVMWithConfig(conf)\n  var wasi = vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],     // The args\n    os.Environ(),    // The envs\n    []string{".:."}, // The mapping preopens\n  )\n  vm.LoadWasmFile(os.Args[1])\n  vm.Validate()\n\n  // Instantiate the bindgen and vm\n  bg := bindgen.Instantiate(vm)\n')),(0,a.kt)("p",null,"Next, you can call any ",(0,a.kt)("inlineCode",{parentName:"p"},"[wasmedge_bindgen]")," annotated functions in the VM via the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindgen")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  // create_line: string, string, string -> string (inputs are JSON stringified)\n  res, err := bg.Execute("create_line", "{\\"x\\":2.5,\\"y\\":7.8}", "{\\"x\\":2.5,\\"y\\":5.8}", "A thin red line")\n  if err == nil {\n    fmt.Println("Run bindgen -- create_line:", string(res))\n  } else {\n    fmt.Println("Run bindgen -- create_line FAILED", err)\n  }\n\n  // say: string -> string\n  res, err = bg.Execute("say", "bindgen funcs test")\n  if err == nil {\n    fmt.Println("Run bindgen -- say:", string(res))\n  } else {\n    fmt.Println("Run bindgen -- say FAILED")\n  }\n\n  // obfusticate: string -> string\n  res, err = bg.Execute("obfusticate", "A quick brown fox jumps over the lazy dog")\n  if err == nil {\n    fmt.Println("Run bindgen -- obfusticate:", string(res))\n  } else {\n    fmt.Println("Run bindgen -- obfusticate FAILED")\n  }\n\n  // lowest_common_multiple: i32, i32 -> i32\n  res, err = bg.Execute("lowest_common_multiple", int32(123), int32(2))\n  if err == nil {\n    num, _ := strconv.ParseInt(string(res), 10, 32)\n    fmt.Println("Run bindgen -- lowest_common_multiple:", num)\n  } else {\n    fmt.Println("Run bindgen -- lowest_common_multiple FAILED")\n  }\n\n  // sha3_digest: array -> array\n  res, err = bg.Execute("sha3_digest", []byte("This is an important message"))\n  if err == nil {\n    fmt.Println("Run bindgen -- sha3_digest:", res)\n  } else {\n    fmt.Println("Run bindgen -- sha3_digest FAILED")\n  }\n\n  // keccak_digest: array -> array\n  res, err = bg.Execute("keccak_digest", []byte("This is an important message"))\n  if err == nil {\n    fmt.Println("Run bindgen -- keccak_digest:", res)\n  } else {\n    fmt.Println("Run bindgen -- keccak_digest FAILED")\n  }\n\n  bg.Release()\n  vm.Release()\n  conf.Release()\n}\n')),(0,a.kt)("h2",{id:"run-the-wasm-app-from-your-go-host"},"Run the WASM app from your Go Host"),(0,a.kt)("p",null,"Before that, maker sure you have ",(0,a.kt)("a",{parentName:"p",href:"/docs/embed/quick-start/install"},"installed Go, WasmEdge, and WasmEdge Go SDK"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd rust_bindgen_funcs\ngo build\n./bindgen_funcs rust_bindgen_funcs_lib.wasm\n")),(0,a.kt)("p",null,"The standard output of this example will be the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Run bindgen -- create_line: {"points":[{"x":1.5,"y":3.8},{"x":2.5,"y":5.8}],"valid":true,"length":2.2360682,"desc":"A thin red line"}\nRun bindgen -- say: hello bindgen funcs test\nRun bindgen -- obfusticate: N dhvpx oebja sbk whzcf bire gur ynml qbt\nRun bindgen -- lowest_common_multiple: 246\nRun bindgen -- sha3_digest: [87 27 231 209 189 105 251 49 159 10 211 250 15 159 154 181 43 218 26 141 56 199 25 45 60 10 20 163 54 211 195 203]\nRun bindgen -- keccak_digest: [126 194 241 200 151 116 227 33 216 99 159 22 107 3 177 169 216 191 114 156 174 193 32 159 246 228 245 133 52 75 55 27]\n')),(0,a.kt)("p",null,"That's it. Next let's dive into how to pass complex data from host applications to the WASM app."))}c.isMDXComponent=!0}}]);