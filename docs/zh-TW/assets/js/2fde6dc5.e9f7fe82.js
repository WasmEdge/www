"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4},i="OpenVINO Backend",l={unversionedId:"develop/rust/wasinn/openvino",id:"develop/rust/wasinn/openvino",title:"OpenVINO Backend",description:"We will use this example project to show how to make AI inference with an OpenVINO model in WasmEdge and Rust.",source:"@site/docs/develop/rust/wasinn/openvino.md",sourceDirName:"develop/rust/wasinn",slug:"/develop/rust/wasinn/openvino",permalink:"/docs/zh-TW/develop/rust/wasinn/openvino",draft:!1,editUrl:"https://github.com/wasmedge/docs/blob/main/docs/develop/rust/wasinn/openvino.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"TensorFlow Lite Backend",permalink:"/docs/zh-TW/develop/rust/wasinn/tensorflow_lite"},next:{title:"TensorFlow Plug-in For WasmEdge",permalink:"/docs/zh-TW/develop/rust/wasinn/tf_plugin"}},s={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Build and run",id:"build-and-run",level:2},{value:"Improve performance",id:"improve-performance",level:2},{value:"Understand the code",id:"understand-the-code",level:2},{value:"More Examples",id:"more-examples",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openvino-backend"},"OpenVINO Backend"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-mobilenet-image"},"this example project")," to show how to make AI inference with an OpenVINO model in WasmEdge and Rust."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/develop/rust/setup"},"regular WasmEdge and Rust requirements"),", please make sure that you have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh-TW/start/install#wasi-nn-plug-in-with-openvino-backend"},"Wasi-NN plugin with OpenVINO installed"),"."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"Because the example already includes a compiled WASM file from the Rust code, we could use WasmEdge CLI to execute the example directly. First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples")," repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples/openvino-mobilenet-image/\n")),(0,r.kt)("p",null,"Download the model files in OpenVINO format and then run the inference application in WasmEdge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# download the fixture files (OpenVINO model files)\n./download_mobilenet.sh\nwasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.xml mobilenet.bin input.jpg\n")),(0,r.kt)("p",null,"If everything goes well, you should have the terminal output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Read graph XML, size in bytes: 143525\nRead graph weights, size in bytes: 13956476\nLoaded graph into wasi-nn with ID: 0\nCreated wasi-nn execution context with ID: 0\nRead input tensor, size in bytes: 602112\nExecuted graph inference\n   1.) [954](0.9789)banana\n   2.) [940](0.0074)spaghetti squash\n   3.) [951](0.0014)lemon\n   4.) [969](0.0005)eggnog\n   5.) [942](0.0005)butternut squash\n")),(0,r.kt)("h2",{id:"build-and-run"},"Build and run"),(0,r.kt)("p",null,"Let's build the wasm file from the rust source code. First, git clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmEdge-WASINN-examples")," repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/WasmEdge-WASINN-examples.git\ncd WasmEdge-WASINN-examples/openvino-mobilenet-image/rust/\n")),(0,r.kt)("p",null,"Second, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to build the template project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"The output WASM file is ",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-wasi/release/wasmedge-wasinn-example-mobilenet-image.wasm"),". Download the OpenVINO model files. Next, use WasmEdge to load the OpenVINO model and then use it to classify objects in your image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./download_mobilenet.sh\nwasmedge --dir .:. wasmedge-wasinn-example-mobilenet-image.wasm mobilenet.xml mobilenet.bin input.jpg\n")),(0,r.kt)("p",null,"You can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"input.jpg")," with your image file."),(0,r.kt)("h2",{id:"improve-performance"},"Improve performance"),(0,r.kt)("p",null,"You can make the inference program run faster by AOT compiling the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," file first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge compile wasmedge-wasinn-example-mobilenet.wasm out.wasm\nwasmedge --dir .:. out.wasm mobilenet.xml mobilenet.bin input.jpg\n")),(0,r.kt)("h2",{id:"understand-the-code"},"Understand the code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-mobilenet-image/rust/src/main.rs"},"main.rs")," is the full example Rust source. First, read the image file and OpenVINO model file names from the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<String> = env::args().collect();\nlet model_xml_name: &str = &args[1]; // File name for the model xml\nlet model_bin_name: &str = &args[2]; // File name for the weights\nlet image_name: &str = &args[3]; // File name for the input image\n")),(0,r.kt)("p",null,"We use a helper function called ",(0,r.kt)("inlineCode",{parentName:"p"},"image_to_tensor()")," to convert the input image into tensor data (the tensor type is ",(0,r.kt)("inlineCode",{parentName:"p"},"F32"),"). Now we can load the model, feed the tensor array from the image to the model, and get the inference output tensor array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// load model\nlet graph = GraphBuilder::new(\n    GraphEncoding::Openvino,\n    ExecutionTarget::CPU\n).build_from_files([model_xml_path, model_bin_path])?;\nlet mut context = graph.init_execution_context()?;\n\n// Load a tensor that precisely matches the graph input tensor\nlet input_dims = vec![1, 3, 224, 224];\nlet tensor_data = image_to_tensor(image_name.to_string(), 224, 224);\ncontext.set_input(0, TensorType::F32, &input_dims, tensor_data)?;\n\n// Execute the inference.\ncontext.compute()?;\n\n// Retrieve the output.\nlet mut output_buffer = vec![0f32; 1001];\nlet size_in_bytes = context.get_output(0, &mut output_buffer)?;\n")),(0,r.kt)("p",null,"In the above code, ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphEncoding::Openvino")," means using the OpenVINO backend, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionTarget::CPU")," means running the computation on the CPU. Finally, we sort the output and then print the top-5 classification results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let results = sort_results(&output_buffer);\nfor i in 0..5 {\n    println!(\n        "   {}.) [{}]({:.4}){}",\n        i + 1,\n        results[i].0,\n        results[i].1,\n        imagenet_classes::IMAGENET_CLASSES[results[i].0]\n    );\n}\n')),(0,r.kt)("h2",{id:"more-examples"},"More Examples"),(0,r.kt)("p",null,"There is also an example that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-WASINN-examples/tree/master/openvino-road-segmentation-adas/rust"},"using OpenVINO to do road segmentation ADAS"),". Welcome to give it a try. You are also welcome to contribute your own examples."))}d.isMDXComponent=!0}}]);