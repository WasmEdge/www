"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},s="TensorFlow Lite Backend",o={unversionedId:"develop/rust/wasinn/tensorflow_lite",id:"develop/rust/wasinn/tensorflow_lite",title:"TensorFlow Lite Backend",description:"We will use this example project to show how to make AI inference with a TensorFlow Lite model in WasmEdge and Rust.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/develop/rust/wasinn/tensorflow_lite.md",sourceDirName:"develop/rust/wasinn",slug:"/develop/rust/wasinn/tensorflow_lite",permalink:"/docs/zh/develop/rust/wasinn/tensorflow_lite",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/wasinn/tensorflow_lite.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"OpenVINO Backend",permalink:"/docs/zh/develop/rust/wasinn/openvino"},next:{title:"PyTorch Backend",permalink:"/docs/zh/develop/rust/wasinn/pytorch"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Build and run",id:"build-and-run",level:2},{value:"Improve performance",id:"improve-performance",level:2},{value:"Understand the code",id:"understand-the-code",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tensorflow-lite-backend"},"TensorFlow Lite Backend"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/tflite-birds_v1-image"},"this example project")," to show how to make AI inference with a TensorFlow Lite model in WasmEdge and Rust."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/develop/rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/start/install#wasi-nn-plug-in-with-tensorflow-lite-backend"},"WASI-NN plugin with TensorFlow Lite installed"),"."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"Because the example already includes a compiled WASM file from the Rust code, we could use WasmEdge CLI to execute the example directly. First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples")," repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples/tflite-birds_v1-image/\n")),(0,r.kt)("p",null,"Run the inference application in WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-tflite-bird-image.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n")),(0,r.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Read graph weights, size in bytes: 3561598\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 150528\nExecuted graph inference\n   1.) [166](198)Aix galericulata\n   2.) [158](2)Coccothraustes coccothraustes\n   3.) [34](1)Gallus gallus domesticus\n   4.) [778](1)Sitta europaea\n   5.) [819](1)Anas platyrhynchos\n")),(0,r.kt)("h2",{id:"build-and-run"},"Build and run"),(0,r.kt)("p",null,"Let's build the wasm file from the rust source code. First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples")," repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples/tflite-birds_v1-image/rust/\n")),(0,r.kt)("p",null,"Second, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to build the example project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"The output WASM file is ",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-tflite-bird-image.wasm"),". Next, let's use WasmEdge to load the Tensorflow Lite model and then use it to classify objects in your image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge-wasinn-example-tflite-bird-image.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n")),(0,r.kt)("p",null,"You can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"bird.jpg")," with your image file."),(0,r.kt)("h2",{id:"improve-performance"},"Improve performance"),(0,r.kt)("p",null,"You can make the inference program run faster by AOT compiling the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," file first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge compile wasmedge-wasinn-example-tflite-bird-image.wasm out.wasm\nwasmedge --dir .:. out.wasm lite-model_aiy_vision_classifier_birds_V1_3.tflite bird.jpg\n")),(0,r.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/blob/master/tflite-birds_v1-image/rust/tflite-bird/src/main.rs"},"main.rs")," is the complete example Rust source. First, read the image file and Tensorflow Lite (tflite) model file names from the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_bin_name: &str = &args[1]; // File name for the TFLite model\nlet image_name: &str = &args[2]; // File name for the input image\n")),(0,r.kt)("p",null,"We use a helper function called ",(0,r.kt)("inlineCode",{parentName:"p"},"image_to_tensor()")," to convert the input image into tensor data (the tensor type is ",(0,r.kt)("inlineCode",{parentName:"p"},"U8"),"). Now we can load the model, feed the tensor array from the image to the model, and get the inference output tensor array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet weights = fs::read(model_bin_name)?;\nlet graph = GraphBuilder::new(\n    GraphEncoding::TensorflowLite,\n    ExecutionTarget::CPU,\n).build_from_bytes(&[&weights])?;\nlet mut ctx = graph.init_execution_context()?;\n\n// Load a tensor that precisely matches the graph input tensor\nlet tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\nctx.set_input(0, TensorType::U8, &[1, 224, 224, 3], &tensor_data)?;\n\n// Execute the inference.\nctx.compute().unwrap();\n\n// Retrieve the output.\nlet mut output_buffer = vec![0u8; imagenet_classes::AIY_BIRDS_V1.len()];\n_ = ctx.get_output(0, &mut output_buffer)?;\n")),(0,r.kt)("p",null,"In the above code, ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphEncoding::TensorflowLite")," means using the PyTorch backend, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionTarget::CPU")," means running the computation on the CPU. Finally, we sort the output and then print the top-5 classification results. Finally, we sort the output and then print the top-5 classification results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n    println!(\n        "   {}.) [{}]({:.4}){}",\n        i + 1,\n        results[i].0,\n        results[i].1,\n        imagenet_classes::AIY_BIRDS_V1[results[i].0]\n    );\n}\n')))}c.isMDXComponent=!0}}]);