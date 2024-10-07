"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[983],{"./packages/block-editor/src/components/block-edit/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>DEFAULT_BLOCK_EDIT_CONTEXT,Q2:()=>Provider,Qs:()=>blockBindingsKey,Z8:()=>useBlockEditContext,f0:()=>isPreviewModeKey,hP:()=>blockEditingModeKey,hh:()=>mayDisplayControlsKey,tL:()=>mayDisplayParentControlsKey});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const mayDisplayControlsKey=Symbol("mayDisplayControls"),mayDisplayParentControlsKey=Symbol("mayDisplayParentControls"),blockEditingModeKey=Symbol("blockEditingMode"),blockBindingsKey=Symbol("blockBindings"),isPreviewModeKey=Symbol("isPreviewMode"),DEFAULT_BLOCK_EDIT_CONTEXT={name:"",isSelected:!1},Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_BLOCK_EDIT_CONTEXT),{Provider}=Context;function useBlockEditContext(){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context)}},"./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatioTool});var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/select-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_use_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/block-editor/src/components/use-settings/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AspectRatioTool({panelId,value,onChange=()=>{},options,defaultValue="auto",hasValue,isShownByDefault=!0}){const displayValue=null!=value?value:"auto",[defaultRatios,themeRatios,showDefaultRatios]=(0,_use_settings__WEBPACK_IMPORTED_MODULE_2__.r)("dimensions.aspectRatios.default","dimensions.aspectRatios.theme","dimensions.defaultAspectRatios"),themeOptions=themeRatios?.map((({name,ratio})=>({label:name,value:ratio}))),defaultOptions=defaultRatios?.map((({name,ratio})=>({label:name,value:ratio}))),aspectRatioOptions=[{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Original","Aspect ratio option for dimensions control"),value:"auto"},...showDefaultRatios?defaultOptions:[],...themeOptions||[],{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Custom","Aspect ratio option for dimensions control"),value:"custom",disabled:!0,hidden:!0}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{hasValue:hasValue||(()=>displayValue!==defaultValue),label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),onDeselect:()=>onChange(void 0),isShownByDefault,panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),value:displayValue,options:null!=options?options:aspectRatioOptions,onChange,size:"__unstable-large",__nextHasNoMarginBottom:!0})})}AspectRatioTool.displayName="AspectRatioTool",AspectRatioTool.__docgenInfo={description:"@typedef {Object} AspectRatioToolProps\n@property {string}                       [panelId]          ID of the panel this tool is associated with.\n@property {string}                       [value]            Current aspect ratio value.\n@property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.\n@property {SelectControlProps[]}         [options]          Aspect ratio options.\n@property {string}                       [defaultValue]     Default aspect ratio value.\n@property {boolean}                      [isShownByDefault] Whether the tool is shown by default.",methods:[],displayName:"AspectRatioTool",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},defaultValue:{defaultValue:{value:"'auto'",computed:!1},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/block-editor/src/components/dimensions-tool/scale-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ScaleTool});var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_SCALE_OPTIONS=[{value:"fill",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Fill","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by stretching the content.")},{value:"contain",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Contain","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit the content to the space without clipping.")},{value:"cover",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Cover","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by clipping what doesn't fit.")},{value:"none",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("None","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")},{value:"scale-down",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Scale down","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")}];function ScaleTool({panelId,value,onChange,options=DEFAULT_SCALE_OPTIONS,defaultValue=DEFAULT_SCALE_OPTIONS[0].value,isShownByDefault=!0}){const displayValue=null!=value?value:"fill",scaleHelp=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>options.reduce(((acc,option)=>(acc[option.value]=option.help,acc)),{})),[options]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isShownByDefault,hasValue:()=>displayValue!==defaultValue,onDeselect:()=>onChange(defaultValue),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{__nextHasNoMarginBottom:!0,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isBlock:!0,help:scaleHelp[displayValue],value:displayValue,onChange,size:"__unstable-large",children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Z,{...option},option.value)))})})}ScaleTool.displayName="ScaleTool",ScaleTool.__docgenInfo={description:"A tool to select the CSS object-fit property for the image.\n\n@param {ScaleToolProps} props\n\n@return {import('react').ReactElement} The scale tool.",methods:[],displayName:"ScaleTool",props:{options:{defaultValue:{value:"[\n\t{\n\t\tvalue: 'fill',\n\t\tlabel: _x( 'Fill', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fill the space by stretching the content.' ),\n\t},\n\t{\n\t\tvalue: 'contain',\n\t\tlabel: _x( 'Contain', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fit the content to the space without clipping.' ),\n\t},\n\t{\n\t\tvalue: 'cover',\n\t\tlabel: _x( 'Cover', 'Scale option for dimensions control' ),\n\t\thelp: __( \"Fill the space by clipping what doesn't fit.\" ),\n\t},\n\t{\n\t\tvalue: 'none',\n\t\tlabel: _x( 'None', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'\n\t\t),\n\t},\n\t{\n\t\tvalue: 'scale-down',\n\t\tlabel: _x( 'Scale down', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'\n\t\t),\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SCALE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/block-editor/src/components/dimensions-tool/width-height-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>WidthHeightTool});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/unit-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SingleColumnToolsPanelItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{target:"ef8pe3d0"})({name:"957xgf",styles:"grid-column:span 1"});function WidthHeightTool({panelId,value={},onChange=()=>{},units,isShownByDefault=!0}){var _value$width,_value$height;const width="auto"===value.width?"":null!==(_value$width=value.width)&&void 0!==_value$width?_value$width:"",height="auto"===value.height?"":null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:"",onDimensionChange=dimension=>nextDimension=>{const nextValue={...value};nextDimension?nextValue[dimension]=nextDimension:delete nextValue[dimension],onChange(nextValue)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),isShownByDefault,hasValue:()=>""!==width,onDeselect:onDimensionChange("width"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:width,onChange:onDimensionChange("width"),size:"__unstable-large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),isShownByDefault,hasValue:()=>""!==height,onDeselect:onDimensionChange("height"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:height,onChange:onDimensionChange("height"),size:"__unstable-large"})})]})}WidthHeightTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {WidthHeightToolProps} props The component props.\n\n@return {import('react').ReactElement} The width and height tool.",methods:[],displayName:"WidthHeightTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/block-editor/src/components/use-settings/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>useSettings});var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),_block_edit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/block-edit/context.js"),_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block-editor/src/store/index.js"),_lock_unlock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-editor/src/lock-unlock.js");function useSettings(...paths){const{clientId=null}=(0,_block_edit__WEBPACK_IMPORTED_MODULE_1__.Z8)();return(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.Z)((select=>(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.U)(select(_store__WEBPACK_IMPORTED_MODULE_0__.h)).getBlockSettings(clientId,...paths)),[clientId,...paths])}},"./packages/components/build-module/panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>panel});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const panel_header=function PanelHeader({label,children}){return(0,jsx_runtime.jsxs)("div",{className:"components-panel__header",children:[label&&(0,jsx_runtime.jsx)("h2",{children:label}),children]})};const panel=(0,react.forwardRef)((function UnforwardedPanel({header,className,children},ref){const classNames=(0,clsx.Z)(className,"components-panel");return(0,jsx_runtime.jsxs)("div",{className:classNames,ref,children:[header&&(0,jsx_runtime.jsx)(panel_header,{label:header}),children]})}))},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,"aria-label":optionLabel,ref,children:label})}))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useRadioStore});var UVQLZ7T5=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js"),_2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),D7EIQZAU=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js"),EQQLU3CG=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js"),PBFD2E7P=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),_3YLGPPWQ=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");function createRadioStore(_a={}){var _a2,props=(0,_3YLGPPWQ.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,D7EIQZAU.t)((0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},props),{focusLoop:(0,PBFD2E7P.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},composite.getState()),{value:(0,PBFD2E7P.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,EQQLU3CG.MT)(initialState,composite,props.store);return(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)((0,_3YLGPPWQ.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_2GXGCHW6.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,UVQLZ7T5.b)(store,update,props),(0,_2GXGCHW6.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,x:()=>useRadio});var _SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadio2(_a){var _b=_a,{store,name,value,checked}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves,activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange,onClick,onFocus}),props=(0,_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store,clickOnEnter:!nativeRadio},props)),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.Nq)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props))})),Radio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.X$)((0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Radio2(props){const htmlProps=useRadio(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)})))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hz:()=>useRadioProviderContext,Wh:()=>useRadioContext,o:()=>RadioScopedContextProvider});var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js").re)([_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js"),_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadioGroup2(_a){var _b=_a,{store}=_b,props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),RadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function RadioGroup2(props){const htmlProps=useRadioGroup(props);return(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/block-editor/src/components/dimensions-tool/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),panel=__webpack_require__("./packages/components/build-module/panel/index.js"),component=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),aspect_ratio_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"),scale_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/scale-tool.js"),width_height_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/width-height-tool.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DimensionsTool({panelId,value={},onChange=()=>{},aspectRatioOptions,defaultAspectRatio="auto",scaleOptions,defaultScale="fill",unitsOptions,tools=["aspectRatio","widthHeight","scale"]}){const width=void 0===value.width||"auto"===value.width?null:value.width,height=void 0===value.height||"auto"===value.height?null:value.height,aspectRatio=void 0===value.aspectRatio||"auto"===value.aspectRatio?null:value.aspectRatio,scale=void 0===value.scale||"fill"===value.scale?null:value.scale,[lastScale,setLastScale]=(0,react.useState)(scale),[lastAspectRatio,setLastAspectRatio]=(0,react.useState)(aspectRatio),aspectRatioValue=width&&height?"custom":lastAspectRatio,showScaleControl=aspectRatio||width&&height;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[tools.includes("aspectRatio")&&(0,jsx_runtime.jsx)(aspect_ratio_tool.Z,{panelId,options:aspectRatioOptions,defaultValue:defaultAspectRatio,value:aspectRatioValue,onChange:nextAspectRatio=>{const nextValue={...value};setLastAspectRatio(nextAspectRatio="auto"===nextAspectRatio?null:nextAspectRatio),nextAspectRatio?nextValue.aspectRatio=nextAspectRatio:delete nextValue.aspectRatio,nextAspectRatio?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,"custom"!==nextAspectRatio&&width&&height&&delete nextValue.height,onChange(nextValue)}}),tools.includes("widthHeight")&&(0,jsx_runtime.jsx)(width_height_tool.Z,{panelId,units:unitsOptions,value:{width,height},onChange:({width:nextWidth,height:nextHeight})=>{const nextValue={...value};nextHeight="auto"===nextHeight?null:nextHeight,(nextWidth="auto"===nextWidth?null:nextWidth)?nextValue.width=nextWidth:delete nextValue.width,nextHeight?nextValue.height=nextHeight:delete nextValue.height,nextWidth&&nextHeight?delete nextValue.aspectRatio:lastAspectRatio&&(nextValue.aspectRatio=lastAspectRatio),lastAspectRatio||!!nextWidth==!!nextHeight?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,onChange(nextValue)}}),tools.includes("scale")&&showScaleControl&&(0,jsx_runtime.jsx)(scale_tool.Z,{panelId,options:scaleOptions,defaultValue:defaultScale,value:lastScale,onChange:nextScale=>{const nextValue={...value};setLastScale(nextScale="fill"===nextScale?null:nextScale),nextScale?nextValue.scale=nextScale:delete nextValue.scale,onChange(nextValue)}})]})}const dimensions_tool=DimensionsTool;DimensionsTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {DimensionsControlsProps} props The component props.\n\n@return {Element} The dimensions controls.",methods:[],displayName:"DimensionsTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},defaultAspectRatio:{defaultValue:{value:"'auto'",computed:!1},required:!1},defaultScale:{defaultValue:{value:"'fill'",computed:!1},required:!1},tools:{defaultValue:{value:"[ 'aspectRatio', 'widthHeight', 'scale' ]",computed:!1},required:!1}}};const index_story={title:"BlockEditor (Private APIs)/DimensionsTool",component:dimensions_tool,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}},parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool",badges:[]}},EMPTY_OBJECT={},Default=({panelId,onChange,...props})=>{const[value,setValue]=(0,react.useState)(EMPTY_OBJECT);return(0,jsx_runtime.jsx)(panel.Z,{children:(0,jsx_runtime.jsx)(component.Z,{label:"Dimensions",panelId,resetAll:()=>{setValue(EMPTY_OBJECT),onChange(EMPTY_OBJECT)},children:(0,jsx_runtime.jsx)(dimensions_tool,{panelId,onChange:nextValue=>{setValue(nextValue),onChange(nextValue)},value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  panelId,\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState(EMPTY_OBJECT);\n  const resetAll = () => {\n    setValue(EMPTY_OBJECT);\n    onChange(EMPTY_OBJECT);\n  };\n  return <Panel>\n            <ToolsPanel label="Dimensions" panelId={panelId} resetAll={resetAll}>\n                <DimensionsTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChange(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}',...Default.parameters?.docs?.source}}}}}]);