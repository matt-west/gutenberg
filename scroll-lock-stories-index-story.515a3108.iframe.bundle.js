"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[243],{"./packages/components/src/scroll-lock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let previousScrollTop=0;function setLocked(locked){const scrollingElement=document.scrollingElement||document.body;locked&&(previousScrollTop=scrollingElement.scrollTop);const methodName=locked?"add":"remove";scrollingElement.classList[methodName]("lockscroll"),document.documentElement.classList[methodName]("lockscroll"),locked||(scrollingElement.scrollTop=previousScrollTop)}let lockCounter=0;function ScrollLock(){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0===lockCounter&&setLocked(!0),++lockCounter,()=>{1===lockCounter&&setLocked(!1),--lockCounter})),[]),null}const __WEBPACK_DEFAULT_EXPORT__=ScrollLock;try{ScrollLock.displayName="ScrollLock",ScrollLock.__docgenInfo={description:"ScrollLock is a content-free React component for declaratively preventing\nscroll bleed from modal UI to the page body. This component applies a\n`lockscroll` class to the `document.documentElement` and\n`document.scrollingElement` elements to stop the body from scrolling. When it\nis present, the lock is applied.\n\n```jsx\nimport { ScrollLock, Button } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyScrollLock = () => {\n  const [ isScrollLocked, setIsScrollLocked ] = useState( false );\n\n  const toggleLock = () => {\n    setIsScrollLocked( ( locked ) => ! locked ) );\n  };\n\n  return (\n    <div>\n      <Button variant=\"secondary\" onClick={ toggleLock }>\n        Toggle scroll lock\n      </Button>\n      { isScrollLocked && <ScrollLock /> }\n      <p>\n        Scroll locked:\n        <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>\n      </p>\n    </div>\n  );\n};\n```",displayName:"ScrollLock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/scroll-lock/index.tsx#ScrollLock"]={docgenInfo:ScrollLock.__docgenInfo,name:"ScrollLock",path:"packages/components/src/scroll-lock/index.tsx#ScrollLock"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/memize/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function memize(fn,options){var head,tail,size=0;function memoized(){var args,i,node=head,len=arguments.length;searchCache:for(;node;){if(node.args.length===arguments.length){for(i=0;i<len;i++)if(node.args[i]!==arguments[i]){node=node.next;continue searchCache}return node!==head&&(node===tail&&(tail=node.prev),node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=head,node.prev=null,head.prev=node,head=node),node.val}node=node.next}for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];return node={args,val:fn.apply(null,args)},head?(head.prev=node,node.next=head):tail=node,size===options.maxSize?(tail=tail.prev).next=null:size++,head=node,node.val}return options=options||{},memoized.clear=function(){head=null,tail=null,size=0},memoized}__webpack_require__.d(__webpack_exports__,{Z:()=>memize})},"./packages/components/src/scroll-lock/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/button/index.tsx"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/scroll-lock/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/ScrollLock",parameters:{sourceLink:"packages/components/src/scroll-lock",badges:[],controls:{hideNoControlsWarning:!0},docs:{canvas:{sourceState:"shown"}}}};function StripedBackground(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{backgroundColor:"#fff",backgroundImage:"linear-gradient(transparent 50%, rgba(0, 0, 0, 0.05) 50%)",backgroundSize:"50px 50px",height:3e3,position:"relative"},...props})}function ToggleContainer(props){const{children}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"sticky",top:0,padding:40,display:"flex",justifyContent:"center",textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children})})}StripedBackground.displayName="StripedBackground",ToggleContainer.displayName="ToggleContainer";const Default=()=>{const[isScrollLocked,setScrollLocked]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:1e3},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{overflow:"auto",height:240,border:"1px solid lightgray"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StripedBackground,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Start scrolling down. Once you scroll to the end of this container with the stripes, the rest of the page will continue scrolling. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:"ScrollLock"}),' prevents this "scroll bleed" from happening.']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToggleContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{variant:"primary",onClick:()=>setScrollLocked(!isScrollLocked),children:"Toggle Scroll Lock"}),isScrollLocked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Scroll locked:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:isScrollLocked?"Yes":"No"})]})]})]})})})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [isScrollLocked, setScrollLocked] = useState(false);\n  const toggleLock = () => setScrollLocked(!isScrollLocked);\n  return <div style={{\n    height: 1000\n  }}>\n            <div style={{\n      overflow: 'auto',\n      height: 240,\n      border: '1px solid lightgray'\n    }}>\n                <StripedBackground>\n                    <div>\n                        Start scrolling down. Once you scroll to the end of this\n                        container with the stripes, the rest of the page will\n                        continue scrolling. <code>ScrollLock</code> prevents\n                        this &quot;scroll bleed&quot; from happening.\n                    </div>\n                    <ToggleContainer>\n                        <Button variant=\"primary\" onClick={toggleLock}>\n                            Toggle Scroll Lock\n                        </Button>\n                        {isScrollLocked && <ScrollLock />}\n                        <p>\n                            Scroll locked:{' '}\n                            <strong>{isScrollLocked ? 'Yes' : 'No'}</strong>\n                        </p>\n                    </ToggleContainer>\n                </StripedBackground>\n            </div>\n        </div>;\n}",...Default.parameters?.docs?.source}}}}}]);