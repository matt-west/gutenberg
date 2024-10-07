(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2900:"tooltip-stories-index-story",3134:"custom-select-control-v2-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3394:"composite-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3840:"components-font-family-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4214:"composite-legacy-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7319:"components-dataviews-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8567:"components-dataform-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9837:"components-text-alignment-control-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{58:"1050ab9f",81:"d57d51d5",88:"3d3fa3f7",109:"690b0156",127:"eb8c4364",139:"ab889980",175:"e286e4ab",204:"3847e260",243:"515a3108",309:"e356558c",408:"bf72a401",545:"82ae330b",575:"24f97b12",698:"906f86f9",738:"f915518b",772:"ade9f2ef",808:"201d26b2",869:"ff7ebec5",891:"22b97c75",951:"73d04415",970:"9103d383",983:"c5fda365",1057:"cbdc3e47",1101:"9f088113",1199:"8435a082",1202:"6226dc48",1339:"ef6a101b",1599:"b2af9bb5",1629:"26e5c34e",1638:"3de50147",1656:"2eb63a1b",1791:"b2fc1bc4",1802:"46a8febe",1821:"51858051",1960:"1d94b66f",1995:"21f890f1",1998:"81630e8a",2057:"d2bed04d",2141:"c27b2f37",2184:"3c489fdf",2211:"98fcc1d2",2376:"5e41b529",2419:"53beb0f4",2598:"7de55dea",2643:"b24edeaa",2769:"cb1c5b0a",2773:"53da914b",2845:"242b7b21",2865:"a585ba59",2900:"03ff273a",2907:"da754e0f",2942:"ed2d571e",3049:"68d43a54",3051:"a9774754",3109:"e898b954",3134:"1b172d0d",3218:"8bfab944",3244:"dafcc21b",3267:"233de90b",3291:"48630530",3394:"2e7d513a",3417:"60e082c4",3421:"f9a945b4",3426:"c352302a",3517:"966a3bf1",3540:"8ecb744f",3614:"4ede23f4",3616:"da943961",3658:"190fba74",3659:"f7a1b879",3732:"afa3075a",3754:"40eff8b9",3772:"16078289",3788:"da77ff85",3795:"2b87cde7",3813:"ebda484f",3840:"f83993b2",3933:"c8d241bd",3953:"df551eb5",3985:"6797362c",4081:"0e5e01cc",4149:"4e5e2bc7",4204:"cd1f5674",4214:"dd6e1f66",4317:"68dad135",4325:"89b7ed1b",4355:"439d30c3",4520:"ff4f79f3",4593:"48d1c459",4595:"a3184dc2",4649:"75cdc02c",4662:"b83c9823",4666:"e7777c48",4671:"514058e8",4706:"33631827",4762:"0eb186de",4770:"b6e9226c",4798:"ec6c5a64",4831:"8b886765",4836:"091ba8b0",4895:"4d91b133",4972:"bf7a4221",5008:"698ba59c",5100:"e330f8b6",5106:"3cd1600f",5121:"24367767",5128:"00455daf",5151:"8718f238",5166:"d5b2b0d2",5175:"9bf329cb",5194:"33ccb85e",5230:"d7f776d3",5273:"f7534de6",5284:"7c7b643c",5309:"65430f48",5325:"c20aa02f",5367:"a7c10047",5585:"57e32b3e",5619:"666ba372",5719:"8e912b87",5735:"cb69d770",5739:"8bc8cb38",5745:"44c148a7",5825:"45f24617",5828:"166ccc51",5850:"2d03e434",5891:"abc63866",5942:"9e1d94ee",6005:"9edbb10e",6104:"268297f9",6126:"bdea3407",6180:"6821d61d",6246:"93c896be",6260:"2e664960",6265:"1482ffe0",6321:"974dcda5",6510:"8eb044a4",6605:"c3983d7f",6607:"7f6cc1f8",6610:"1145dedb",6662:"27b874cb",6751:"71cbbb69",6758:"775d982c",6764:"72c79dec",6869:"c7c952aa",6883:"4189f07d",6932:"95a3328f",6939:"52bf6225",7076:"2216fc66",7114:"00b8373d",7131:"8f67f8ed",7137:"59a0a3d3",7143:"f4786e38",7152:"9b5087f8",7196:"82a107ec",7211:"51f8a9e4",7238:"3018f12d",7306:"07d22d29",7319:"6e9d0d71",7351:"9db2d174",7463:"2609d3e7",7552:"42dad171",7577:"5b00513c",7637:"38bc28a7",7707:"c0278aee",7716:"47629bee",7752:"c794a751",7833:"ee88556b",7844:"82e4c36b",7849:"ce6cc2b3",7875:"aee0d64d",7975:"ec176b6e",8035:"b7df4a5f",8040:"5da69138",8067:"cfb0bd93",8075:"4578696f",8108:"7e20df93",8147:"32f3a43f",8169:"c7e92d15",8176:"edb59ad7",8297:"697166db",8372:"4747844d",8435:"da917c84",8518:"13ebb350",8567:"dbad4155",8587:"b5b211f7",8605:"971f4915",8628:"65f68c95",8631:"16ed70bf",8633:"7b1bc147",8673:"9aaf5b76",8748:"51ad54aa",8751:"27e7c6e0",8768:"d4f498b4",8772:"02ddf352",8773:"60918068",8797:"23690913",8821:"cfb712d5",8836:"b36dc7dc",8896:"d60b5c23",8917:"78257928",8918:"6ab27368",8930:"d82dc85a",8953:"86a31dab",8958:"3a459991",8971:"286d024b",9e3:"fcbd826c",9003:"c5752d01",9115:"c4c064fd",9119:"a99577ac",9170:"b4a68099",9189:"2df09e06",9244:"4c556834",9273:"f6abe5e9",9370:"3913c448",9379:"60e12792",9390:"7a848764",9395:"94bf92a0",9433:"1a3e1619",9475:"9cf98a37",9501:"74846ebe",9696:"2673def5",9722:"cb1f5bee",9734:"c3bb6c32",9812:"8bd1f385",9828:"7a49d71b",9837:"e8af4ccf",9901:"a2bd2ec8",9943:"c5a5a95b",9980:"bbd112fe"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();