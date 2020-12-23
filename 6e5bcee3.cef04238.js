(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return n?c.a.createElement(m,l(l({ref:t},s),{},{components:n})):c.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),o=(n(0),n(104)),r={title:"RPC Package",author:"Claude Barde"},l={unversionedId:"rpc_package",id:"rpc_package",isDocsHomePage:!1,title:"RPC Package",description:"Taquito RPC Package Documentation",source:"@site/../docs/rpc_package.md",slug:"/rpc_package",permalink:"/docs/rpc_package",version:"current",sidebar:"docs",previous:{title:"Web3js/Taquito differences",permalink:"/docs/web3js_taquito"},next:{title:"RPC nodes",permalink:"/docs/rpc_nodes"}},i=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Full documentation",id:"full-documentation",children:[]}],s={rightToc:i};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taquito RPC Package Documentation"),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The RPC client package can be used to query the RPC API of your chosen node. The higher-level ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/modules/_taquito_rpc.html"}),Object(o.b)("inlineCode",{parentName:"a"},"@taquito/taquito"))," package builds on this RPC package, in general, you won't need to use this package directly, but it is available for use should you want some specific data and bypass the higher level abstractions in Taquito."),Object(o.b)("p",null,"Methods in the RPC package map one-to-one to the corresponding Tezos RPC API endpoints. All responses from the RPC are returns with TypeScript types. It doesn't do any other parsing or compositions at this level."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Initializing the RPC client\n\nimport { RpcClient } from '@taquito/rpc';\n\nconst client = new RpcClient('https://carthagenet.smartpy.io', 'NetXjD3HPJJjmcd');\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RpcClient")," constructor takes the URL of the node you want to use and the chain ID."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* Fetching the balance of an account\n * using the client set up above */\n\nconst balance = await client.getBalance('tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb');\nconsole.log('-- Balance:', balance.toNumber());\n")),Object(o.b)("p",null,"The balance is returned as a ",Object(o.b)("inlineCode",{parentName:"p"},"BigNumber")," and must be converted to a number to output it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets head block\nconst block = await client.getBlock();\nconsole.log('-- Head block:', block);\n")),Object(o.b)("p",null,"You can use the RPC client to get the head block information."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets head block hash\nconst blockHash = await client.getBlockHash();\nconsole.log('-- Head block hash:', blockHash);\n")),Object(o.b)("p",null,"If it is the head block hash you are looking for, you can easily get it with the ",Object(o.b)("inlineCode",{parentName:"p"},"getBlockHash")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets constants\nconst constants = await client.getConstants();\nconsole.log('-- Constants:', constants);\n")),Object(o.b)("p",null,"This method returns some blockchain constants pertaining for example to the gas limits or the block information."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets contract\nconst contractExample = 'KT1PJnTttEsEFFaHeLnbKJmzwfxuVvEBkq1b';\nconst contract = await client.getContract(contractExample);\nconsole.log('-- Contract:', contract);\n")),Object(o.b)("p",null,"This method returns the balance of the contract, the code and the storage."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets contract entrypoints\nconst entrypoints = await client.getEntrypoints(contractExample);\nconsole.log('-- Entrypoints:', entrypoints);\n")),Object(o.b)("p",null,"You can also get a list of the contract entrypoints as an object whose keys are the entrypoint names and whose values are the expected parameters in JSON format."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets contract script\nconst script = await client.getScript(contractExample);\nconsole.log('-- Contract script:', script);\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getScript")," method returns the script of the contract as a 3 key/value pair object: a key for the parameter, a key for the storage and a key for the code."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// gets contract storage\nconst storage = await client.getStorage(contractExample);\nconsole.log('-- Contract storage:', storage);\n")),Object(o.b)("p",null,"You also have access to the storage of the contract using the ",Object(o.b)("inlineCode",{parentName:"p"},"getStorage")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// packs data\nconst packedData = await client.packData({ data: { string: 'test' }, type: { prim: 'string' } });\nconsole.log('-- Packed data:', packedData);\n")),Object(o.b)("p",null,"You can simulate the ",Object(o.b)("inlineCode",{parentName:"p"},"PACK")," instruction from Michelson with the ",Object(o.b)("inlineCode",{parentName:"p"},"packData")," method."),Object(o.b)("h2",{id:"full-documentation"},"Full documentation"),Object(o.b)("p",null,"You can find the full documentation at the following address: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_rpc.rpcclient.html"}),"https://tezostaquito.io/typedoc/classes/","_","taquito_rpc.rpcclient.html")))}p.isMDXComponent=!0}}]);