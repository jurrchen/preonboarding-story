"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[571],{"./src/components/BackButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BackButton});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgArrowShort(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M7.75 12.125L1.75 6.5L7.75 0.875",stroke:"#6F6F69",strokeWidth:1.5})))}const ForwardRef=react.forwardRef(SvgArrowShort);__webpack_require__.p;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts"),ButtonClean=__webpack_require__("./src/components/ButtonClean/index.ts");const Container=(0,styled_components_browser_esm.Ay)(ButtonClean.I)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.J.GS600};
  text-decoration: none;
  align-self: flex-start;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BackButton=_ref=>{let{label="Back",href,disabled,onClick}=_ref;return(0,jsx_runtime.jsxs)(Container,{href,onClick:(()=>{if(!href)return onClick||(()=>history.back())})(),disabled,children:[(0,jsx_runtime.jsx)(ForwardRef,{})," ",label]})};try{BackButton.displayName="BackButton",BackButton.__docgenInfo={description:"",displayName:"BackButton",props:{label:{defaultValue:{value:"Back"},description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BackButton/BackButton.tsx#BackButton"]={docgenInfo:BackButton.__docgenInfo,name:"BackButton",path:"src/components/BackButton/BackButton.tsx#BackButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BaseContent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  padding: 0;

  color: ${_ref=>{let{appearance}=_ref;return{base:"#10110D",secondary:"#6F6F69"}[appearance]}};
  font-size: ${_ref2=>{let{size}=_ref2;return`${{base:16,small:14}[size]}px`}};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseContent=_ref=>{let{children,appearance="base",size="base"}=_ref;return(0,jsx_runtime.jsx)(Container,{appearance,size,children})};try{BaseContent.displayName="BaseContent",BaseContent.__docgenInfo={description:"",displayName:"BaseContent",props:{appearance:{defaultValue:{value:"base"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseContent/BaseContent.tsx#BaseContent"]={docgenInfo:BaseContent.__docgenInfo,name:"BaseContent",path:"src/components/BaseContent/BaseContent.tsx#BaseContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormLayout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>FormLayout});var Button=__webpack_require__("./src/components/Button/index.ts"),Input=__webpack_require__("./src/components/Input/index.ts"),Loader=__webpack_require__("./src/components/Loader/index.ts"),BackButton=__webpack_require__("./src/components/BackButton/index.ts"),Heading=__webpack_require__("./src/components/Heading/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts");const Form=styled_components_browser_esm.Ay.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: calc(100vw - 48px);
  width: 384px;
  position: relative;
  gap: 24px;

  h1 {
    margin: 0;
  }
`,HeadingContainer=styled_components_browser_esm.Ay.div`
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Content=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,LoadingWrapper=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.J.GS100}80;
  z-index: 1;
`;var BaseContent=__webpack_require__("./src/components/BaseContent/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormLayout=_ref=>{let{id,analytics,isLoading,isSubmitting,title,children,description,submitButtonLabel="Continue",noSubmit,withBackButton,error,backHref,onBack,onSubmit,onSubmitClick}=_ref;return(0,jsx_runtime.jsxs)(Form,{id,"data-analytics":analytics,onSubmit:noSubmit?void 0:onSubmit,noValidate:!0,children:[(0,jsx_runtime.jsxs)(HeadingContainer,{children:[withBackButton&&(0,jsx_runtime.jsx)(BackButton.o,{href:backHref,disabled:isLoading||isSubmitting,onClick:onBack}),(0,jsx_runtime.jsx)(Heading.D,{children:title}),description&&(0,jsx_runtime.jsx)(BaseContent.J,{children:description})]}),(0,jsx_runtime.jsx)(Content,{children}),!noSubmit&&(0,jsx_runtime.jsx)(Button.$,{type:"submit",isLoading:isSubmitting,disabled:isLoading,size:"large",fullwidth:!0,onClick:onSubmitClick||void 0,children:submitButtonLabel}),!!error&&(0,jsx_runtime.jsx)(Input.p.Error,{children:error}),isLoading&&(0,jsx_runtime.jsx)(LoadingWrapper,{id:"form-loader",children:(0,jsx_runtime.jsx)(Loader.a,{})})]})};try{FormLayout.displayName="FormLayout",FormLayout.__docgenInfo={description:"",displayName:"FormLayout",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isSubmitting:{defaultValue:null,description:"",name:"isSubmitting",required:!1,type:{name:"boolean"}},analytics:{defaultValue:null,description:"",name:"analytics",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},noSubmit:{defaultValue:null,description:"",name:"noSubmit",required:!1,type:{name:"boolean"}},submitButtonLabel:{defaultValue:{value:"Continue"},description:"",name:"submitButtonLabel",required:!1,type:{name:"string"}},withBackButton:{defaultValue:null,description:"",name:"withBackButton",required:!1,type:{name:"boolean"}},backHref:{defaultValue:null,description:"",name:"backHref",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},onSubmitClick:{defaultValue:null,description:"",name:"onSubmitClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormLayout/FormLayout.tsx#FormLayout"]={docgenInfo:FormLayout.__docgenInfo,name:"FormLayout",path:"src/components/FormLayout/FormLayout.tsx#FormLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProductImage/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ProductImage});var PhotoGrid=__webpack_require__("./src/components/PhotoGrid/index.ts");const default_product_namespaceObject=__webpack_require__.p+"85c2e13329cd503f98d4.webp";var login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProductImage=()=>{var _kcContext$customImgS;const{kcContext}=(0,login_kcContext.gB)();return(0,jsx_runtime.jsx)(PhotoGrid.B,{mainImage:null!==(_kcContext$customImgS=kcContext.customImgSrc)&&void 0!==_kcContext$customImgS?_kcContext$customImgS:default_product_namespaceObject,footer:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The average Fourthwall creator makes more than $400 a month. ",(0,jsx_runtime.jsx)("br",{}),"Top sellers earn millions per year."]})})}},"./src/keycloak-theme/login/pages/PreOnboarding.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_PreOnboarding});var react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");const focusInputByName=name=>{const input=document.querySelector(`[name="${name}"]`);input&&input.focus()};var instagram=__webpack_require__("./src/components/PreOnboardingForm/assets/instagram.svg"),tiktok=__webpack_require__("./src/components/PreOnboardingForm/assets/tiktok.svg"),twitch=__webpack_require__("./src/components/PreOnboardingForm/assets/twitch.svg");const twitter=__webpack_require__.p+"static/media/twitter.6e799955123b8e6530a7a9d7b40ee121.svg";var yt=__webpack_require__("./src/components/PreOnboardingForm/assets/yt.svg");const PLATFORM_OPTIONS=[{label:"YouTube",value:"youtube",image:yt.A,searchable:!0},{label:"Twitch",value:"twitch",image:twitch.A,searchable:!0},{label:"Instagram",value:"instagram",image:instagram.A,searchable:!1},{label:"TikTok",value:"tiktok",image:tiktok.A,searchable:!0},{label:"X (Twitter)",value:"twitter",image:twitter,searchable:!1},{label:"Other",value:"other",searchable:!1}],CHANNEL_LABEL={youtube:"YouTube channel",twitch:"Twitch channel",instagram:"Instagram username or account",tiktok:"TikTok channel",twitter:"X username or account",other:"website"},CHANNEL_TOOLTIP_EXAMPLES={youtube:"youtube.com/c/MKBHD or youtube.com/channel/UCtdcc_5nSUk",twitch:"twitch.tv/qtcinderella",instagram:"instagram.com/phillydefranco",tiktok:"tiktok.com/@kallmekris",twitter:"twitter.com/PhillyD"},DEFAULT_URL_REGEX=/^(?:https?:\/\/)?(?:www\.)?[\w.-]+\.\w{2,}(?:\/\S*)?$/i,PlatformURLValidation={youtube:{regex:/^(https?:\/\/)?(www\.)?(youtube\.com)\/(@)?(?<handle>[\w._-]+)(\S+)?$/,message:"You must type valid YouTube channel URL."},twitch:{regex:/^(https?:\/\/)?(www\.)?(twitch\.tv)\/(?<handle>[\w._-]+)(\S+)?$/,message:"You must type valid Twitch channel URL."},instagram:{regex:/^(https?:\/\/)?(www\.)?(instagram\.com\/)(?<handle>[\w._-]+)(\S+)?$/,message:"You must type valid Instagram account URL."},tiktok:{regex:/^(https?:\/\/)?(www\.)?(tiktok\.com)\/(@)?(?<handle>[\w._-]+)(\S+)?$/,message:"You must type valid TikTok channel URL."},twitter:{regex:/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/(@)?(?<handle>[\w._-]+)(\S+)?$/,message:"You must type valid X account URL."},other:{regex:DEFAULT_URL_REGEX,message:"You must type valid URL."}},isSocialPlatformSearchable=platform=>{var _PLATFORM_OPTIONS$fin;return!(null===(_PLATFORM_OPTIONS$fin=PLATFORM_OPTIONS.find((option=>option.value===platform)))||void 0===_PLATFORM_OPTIONS$fin||!_PLATFORM_OPTIONS$fin.searchable)};var FormLayout=__webpack_require__("./src/components/FormLayout/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.form`
  width: 0;
  height: 0;
  opacity: 0;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HiddenForm=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(0,jsx_runtime.jsx)(Container,{ref,...props,children})}));try{HiddenForm.displayName="HiddenForm",HiddenForm.__docgenInfo={description:"",displayName:"HiddenForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HiddenForm/HiddenForm.tsx#HiddenForm"]={docgenInfo:HiddenForm.__docgenInfo,name:"HiddenForm",path:"src/components/HiddenForm/HiddenForm.tsx#HiddenForm"})}catch(__react_docgen_typescript_loader_error){}var arrow_short_down_path,Input=__webpack_require__("./src/components/Input/index.ts");function arrow_short_down_extends(){return arrow_short_down_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},arrow_short_down_extends.apply(null,arguments)}function SvgArrowShortDown(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",arrow_short_down_extends({width:18,height:16,viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,arrow_short_down_path||(arrow_short_down_path=react.createElement("path",{d:"M1.5 4L9 12L16.5 4",stroke:"#6F6F69",strokeWidth:1.5})))}const arrow_short_down_ForwardRef=react.forwardRef(SvgArrowShortDown);__webpack_require__.p;var colors=__webpack_require__("./src/utils/colors.ts");const styled_Container=styled_components_browser_esm.Ay.div`
  position: relative;
  height: 56px;
  background: ${colors.J.GS0};

  ${_ref=>{let{error}=_ref;return error&&styled_components_browser_esm.AH`
      & > select,
      & > p {
        color: ${colors.J.R300};
      }
    `}};
`,SelectInput=styled_components_browser_esm.Ay.select`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding-left: 16px;
  padding-right: 42px;
  padding-top: 18px;
  border: 1px solid ${colors.J.GS500};
  font-size: 16px;
  border-radius: 0;
  appearance: none;
  background: none;
  color: ${colors.J.GS1000};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.J.GS1000};
  }

  &:disabled {
    cursor: default;
    opacity: 1;
    background: ${colors.J.GS200};
    border: 1px solid ${colors.J.GS500};
  }

  ${_ref2=>{let{withPrefix}=_ref2;return withPrefix&&styled_components_browser_esm.AH`
      padding-left: 40px;
    `}};
`,styled_Input=styled_components_browser_esm.Ay.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,SelectArrow=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`,Prefix=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  padding-top: 18px;
  max-width: 18px;
`,Select=_ref=>{let{options,label,name,errors,defaultValue,disabled=!1,value,register,rules,prefix,...props}=_ref;const hasError=!(!errors||!errors[name]),hasValue=!(null==value||!value.length)||!(null==defaultValue||!defaultValue.length);return(0,jsx_runtime.jsxs)(styled_Container,{error:hasError,children:[(0,jsx_runtime.jsxs)(styled_Input,{"aria-hidden":"true",children:[!!prefix&&(0,jsx_runtime.jsx)(Prefix,{children:prefix}),(0,jsx_runtime.jsx)(Input.p.Label,{hasValue,children:label}),(0,jsx_runtime.jsx)(SelectArrow,{children:(0,jsx_runtime.jsx)(arrow_short_down_ForwardRef,{})})]}),(0,jsx_runtime.jsx)(SelectInput,{disabled,name,defaultValue,withPrefix:!!prefix,...props,...register&&register(name,rules),children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("option",{hidden:!0,disabled:!0,value:""}),options.map((item=>{var _item$key;return(0,jsx_runtime.jsx)("option",{value:item.value,disabled:item.disabled,children:item.label},null!==(_item$key=item.key)&&void 0!==_item$key?_item$key:item.value)}))]})})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 12 more ...; deps: string | string[]; }>"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegister<TFormValues>"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"Partial<DeepMap<TFormValues, FieldError>>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}const FlagWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  border: 1px solid ${colors.J.GS300};

  svg {
    width: inherit;
  }
`;var index_es5_min=__webpack_require__("./node_modules/countries-list/dist/index.es5.min.js"),index_es5_min_default=__webpack_require__.n(index_es5_min),hasFlag=__webpack_require__("./node_modules/country-flag-icons/modules/hasFlag.js"),_3x2=__webpack_require__("./node_modules/country-flag-icons/modules/react/3x2/index.js");const CountrySelect=_ref=>{let{value,...props}=_ref;const countries=Object.entries(index_es5_min_default().countries).sort(((_ref,_ref2)=>{let[,valueA]=_ref,[,valueB]=_ref2;return valueA.name<valueB.name?-1:valueA.name>valueB.name?1:0})).map((_ref3=>{let[code,country]=_ref3;return{value:code,label:country.name}}));return(0,jsx_runtime.jsx)(Select,{defaultValue:"US",options:countries,prefix:(()=>{const FlagComponent=(countryCode=>{if((0,hasFlag.A)(countryCode))return _3x2.Ay[countryCode]})(value);if(FlagComponent)return(0,jsx_runtime.jsx)(FlagWrapper,{children:(0,jsx_runtime.jsx)(FlagComponent,{})})})(),value,...props})};try{CountrySelect.displayName="CountrySelect",CountrySelect.__docgenInfo={description:"",displayName:"CountrySelect",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegister<TFormValues>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 12 more ...; deps: string | string[]; }>"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"Partial<DeepMap<TFormValues, FieldError>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CountrySelect/CountrySelect.tsx#CountrySelect"]={docgenInfo:CountrySelect.__docgenInfo,name:"CountrySelect",path:"src/components/CountrySelect/CountrySelect.tsx#CountrySelect"})}catch(__react_docgen_typescript_loader_error){}var _rect,tick_path;function tick_extends(){return tick_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tick_extends.apply(null,arguments)}function SvgTick(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",tick_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_rect||(_rect=react.createElement("rect",{width:16,height:16,rx:8,fill:"#10110D"})),tick_path||(tick_path=react.createElement("path",{d:"M4.25 8.5L7.25 11L11.75 5",stroke:"#FDFCFB",strokeWidth:2})))}const tick_ForwardRef=react.forwardRef(SvgTick),TileSelect_styled_Container=(__webpack_require__.p,styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  background-color: ${colors.J.GS500};
  border: 1px solid ${colors.J.GS500};
  grid-gap: 1px;

  ${_ref=>{let{error}=_ref;return error&&styled_components_browser_esm.AH`
      background-color: ${colors.J.R300};
      border-color: ${colors.J.R300};
    `}};
`),OptionTickImage=(0,styled_components_browser_esm.Ay)(tick_ForwardRef)`
  position: absolute;
  top: 5px;
  left: 5px;
`,OptionImageContainer=styled_components_browser_esm.Ay.div`
  margin-right: 8px;
`,OptionImage=styled_components_browser_esm.Ay.img`
  display: block;
  width: 24px;
  height: 24px;
  -webkit-user-drag: none;
`,OptionLabel=styled_components_browser_esm.Ay.label`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline-offset: -1px;

  height: 56px;
  background: ${colors.J.GS0};

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  position: relative;

  ${_ref2=>{let{disabled}=_ref2;return disabled&&styled_components_browser_esm.AH`
      background: ${colors.J.GS200};
      pointer-events: none;
    `}};

  ${_ref3=>{let{active,disabled}=_ref3;return active&&styled_components_browser_esm.AH`
      z-index: 1;
      outline: 2px solid ${disabled?colors.J.GS600:colors.J.GS1000};

      ${OptionTickImage} {
        display: block;
      }
    `}};
`,OptionInput=styled_components_browser_esm.Ay.input``,Label=styled_components_browser_esm.Ay.label`
  & > span {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.J.GS600};
  }
`,TileSelect=_ref=>{let{name,error,label,options,disabled=!1,value,onChange}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:(0,jsx_runtime.jsx)("span",{children:label})}),(0,jsx_runtime.jsx)(TileSelect_styled_Container,{error:!!error,children:options.map((option=>{const id=`${name}.${option.value}`;return(0,jsx_runtime.jsxs)(OptionLabel,{htmlFor:id,tabIndex:0,disabled,active:option.value===value,onKeyPress:event=>((event,value)=>{"Enter"===event.key&&onChange(value)})(event,option.value),children:[(0,jsx_runtime.jsx)(OptionInput,{id,type:"radio",name,value:option.value,"data-selected":option.value===value,hidden:!0,onClick:()=>{onChange(option.value)}}),option.value===value&&(0,jsx_runtime.jsx)(OptionTickImage,{}),option.image&&(0,jsx_runtime.jsx)(OptionImageContainer,{children:(0,jsx_runtime.jsx)(OptionImage,{src:option.image,alt:option.label})}),(0,jsx_runtime.jsx)("div",{children:option.label})]},option.value)}))}),!!error&&(0,jsx_runtime.jsx)(Input.p.Error,{children:error})]})};try{TileSelect.displayName="TileSelect",TileSelect.__docgenInfo={description:"",displayName:"TileSelect",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TileSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TileSelect/TileSelect.tsx#TileSelect"]={docgenInfo:TileSelect.__docgenInfo,name:"TileSelect",path:"src/components/TileSelect/TileSelect.tsx#TileSelect"})}catch(__react_docgen_typescript_loader_error){}var search_path;function search_extends(){return search_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},search_extends.apply(null,arguments)}function SvgSearch(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",search_extends({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,search_path||(search_path=react.createElement("path",{d:"M10.8174 10.8144L16.5 16.5M6.95713 12.4143C9.97102 12.4143 12.4143 9.97102 12.4143 6.95713C12.4143 3.94324 9.97102 1.5 6.95713 1.5C3.94324 1.5 1.5 3.94324 1.5 6.95713C1.5 9.97102 3.94324 12.4143 6.95713 12.4143Z",stroke:"#6F6F69",strokeWidth:1.5})))}const search_ForwardRef=react.forwardRef(SvgSearch),LabelWrapper=(__webpack_require__.p,styled_components_browser_esm.Ay.div`
  margin-top: 8px;
  margin-bottom: -4px;
`),styled_Label=styled_components_browser_esm.Ay.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`,EmptyState=styled_components_browser_esm.Ay.div`
  font-size: 16px;
  line-height: 150%;

  span {
    font-size: 14px;
    color: ${colors.J.GS600};
    font-weight: 500;
  }
`,SearchedChannelImage=styled_components_browser_esm.Ay.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;var useSearchChannel=__webpack_require__("./src/components/PreOnboardingForm/components/Form/hooks/useSearchChannel.ts"),SocialNetworkLink=__webpack_require__("./src/components/PreOnboardingForm/components/SocialNetworkLink/index.ts"),ButtonClean=__webpack_require__("./src/components/ButtonClean/index.ts"),AutoCompleteInput=__webpack_require__("./src/components/AutoCompleteInput/index.ts"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),Image=__webpack_require__("./src/components/Image/index.ts"),regexp=__webpack_require__("./src/utils/regexp.ts");const ALLOWED_CHARACTERS=/^[a-zA-Z0-9 §!@#$%^&*()_+-=\[\]{};':"|,./\\?`~ÁÄÂÀÃÅĄČÇĆĎĘÉĚËÈÊẼĔȆĞÍÌÎÏİŁŃŇÑÓÖÒÔÕØŘŔŚŠŞŤÚŮÜÙÛÝŸŽŻŹáäâàãåąčçćďęéěëèêẽĕȇğíìîïıłńňñóöòôõøðřŕśšşťúůüùûýÿžżźþÞĐđßÆa]*$/,Form=_ref=>{var _defaultValues$search;let{defaultValues,error,onSubmit}=_ref;const{kcContext}=(0,login_kcContext.gB)(),[alphanumericName,setAlphanumericName]=(0,react.useState)(""),[manualChannel,setManualChannel]=(0,react.useState)(!1),{selectedChannel,searchValue,options,socialNetworkError,isLoading:isSearchLoading,onSearch,onSelect}=(0,useSearchChannel.T)({initialSearchParams:null!=defaultValues&&defaultValues.platform&&null!=defaultValues&&null!==(_defaultValues$search=defaultValues.searchedChannel)&&void 0!==_defaultValues$search&&_defaultValues$search.name?{platformValue:defaultValues.platform,searchValue:defaultValues.searchedChannel.name}:void 0}),{register,formState:{errors,isSubmitted,isSubmitting,submitCount,isDirty,isValid},control,watch,handleSubmit,reset,setValue,setError,trigger,clearErrors}=(0,index_esm.mN)({defaultValues,mode:"onSubmit"}),socialNetworksOptions=options.map((option=>({value:option.handle,component:(0,jsx_runtime.jsx)(SocialNetworkLink.C,{name:option.name,img:option.imageUrl})})))||[],values={platform:watch("platform"),channelUrl:watch("channelUrl"),searchedChannel:watch("searchedChannel"),name:watch("name"),location:watch("location")};(0,react.useEffect)((()=>{setAlphanumericName(values.name.replace(/[^0-9A-Z]+/gi,""))}),[values.name]);const isPlatformSearchable=isSocialPlatformSearchable(values.platform),setSearchChannelInputError=()=>{!isPlatformSearchable||socialNetworkError||manualChannel||setError("searchedChannel",{message:"Please select a channel from search results."})},handlePaste=event=>{const value=event.clipboardData.getData("text/plain");if(setValue("searchedChannel",null),value.length&&DEFAULT_URL_REGEX.test(value)){for(const platform of PLATFORM_OPTIONS){var _PlatformURLValidatio;const regex=null===(_PlatformURLValidatio=PlatformURLValidation[platform.value])||void 0===_PlatformURLValidatio?void 0:_PlatformURLValidatio.regex;if(value.match(regex)){setValue("platform",platform.value);return void(isSocialPlatformSearchable(platform.value)&&!manualChannel&&!socialNetworkError&&(onSearch({platformValue:platform.value,searchValue:value}),event.preventDefault()))}}setValue("platform","other"),setValue("channelUrl",value)}};(0,react.useEffect)((()=>{setTimeout((()=>focusInputByName("name")),0)}),[]),(0,react.useEffect)((()=>{errors&&(errors.name?focusInputByName("name"):errors.searchedChannel&&isPlatformSearchable?focusInputByName("searchedChannel"):errors.channelUrl&&focusInputByName("channelUrl"))}),[submitCount]),(0,react.useEffect)((()=>{isEqual_default()(defaultValues,values)||reset(defaultValues,{keepDirtyValues:!0})}),[defaultValues]),(0,react.useEffect)((()=>{(manualChannel||socialNetworkError)&&(clearErrors("searchedChannel"),focusInputByName("channelUrl"))}),[socialNetworkError,manualChannel]),(0,react.useEffect)((()=>{selectedChannel&&(setValue("searchedChannel",selectedChannel),setValue("channelUrl",""),clearErrors("searchedChannel"))}),[selectedChannel]),(0,react.useEffect)((()=>{clearErrors(isPlatformSearchable?"channelUrl":"searchedChannel")}),[isPlatformSearchable]),(0,react.useEffect)((()=>{setValue("searchedChannel",null),isPlatformSearchable&&onSearch({platformValue:values.platform,searchValue}),isSubmitted&&(setSearchChannelInputError(),(!isPlatformSearchable||socialNetworkError||manualChannel)&&trigger("channelUrl")),setTimeout((()=>focusInputByName(!isPlatformSearchable||socialNetworkError||manualChannel?"channelUrl":"searchedChannel")),0)}),[values.platform]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(FormLayout.H,{title:"Tell us about yourself",withBackButton:!0,backHref:kcContext.fwUrl.getStartedUrl,error,isSubmitting,onSubmit:handleSubmit(onSubmit),onSubmitClick:()=>{values.searchedChannel||setSearchChannelInputError()},children:[(0,jsx_runtime.jsx)(Input.p,{name:"name",label:"Your name/nickname",errors,register,value:values.name,isSubmitted,disabled:isSubmitting,tooltip:"This will be visible to your community, so use the name or nickname you use publicly.",maxLength:100,rules:{required:"Name/nickname is required.",minLength:{value:3,message:"Name/nickname must be at least 3 characters long."},maxLength:{value:100,message:"Name/nickname must not be longer than 100 characters."},pattern:{value:regexp.a0,message:"Name/nickname contains invalid characters: <>."},validate:value=>{if(!ALLOWED_CHARACTERS.test(value)){const invalidCharacters=[];for(let i=0;i<value.length;i++)ALLOWED_CHARACTERS.test(value[i])||" "===value[i]||invalidCharacters.includes(value[i])||invalidCharacters.push(value[i]);return invalidCharacters.length>0?`Name/nickname contains invalid characters: ${invalidCharacters.slice(0,8).join(" ")}`:"Name/nickname contains invalid characters."}if(values.name.length>=3&&alphanumericName.length<3)return"Name/nickname must contain at least 3 alphanumeric characters."}}}),(0,jsx_runtime.jsx)(CountrySelect,{label:"Your location",name:"location",disabled:isSubmitting,value:values.location,register}),(0,jsx_runtime.jsx)(LabelWrapper,{children:(0,jsx_runtime.jsx)(styled_Label,{children:"Where does your audience find you?"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_esm.xI,{control,rules:{required:{value:!0,message:"Platform is required."}},name:"platform",render:_ref2=>{var _errors$platform;let{field:{onChange,value,name}}=_ref2;return(0,jsx_runtime.jsx)(TileSelect,{options:[...PLATFORM_OPTIONS],disabled:isSubmitting,error:null===(_errors$platform=errors.platform)||void 0===_errors$platform?void 0:_errors$platform.message,name,value,onChange})}})}),(()=>{if(!values.platform)return null;const patternRules="other"===values.platform?{value:PlatformURLValidation.other.regex,message:PlatformURLValidation.other.message}:{};return!isPlatformSearchable||socialNetworkError||manualChannel?(0,jsx_runtime.jsx)(Input.p,{name:"channelUrl",label:`Your ${CHANNEL_LABEL[values.platform]} URL`,value:values.channelUrl,register,errors,disabled:isSubmitting,tooltip:`Enter your ${"other"===values.platform?"website URL.":`username or full channel URL, such as ${CHANNEL_TOOLTIP_EXAMPLES[values.platform]}.`} Understanding who you are helps us make better recommendations!`,rules:{required:{value:!0,message:"This field is required."},pattern:patternRules},onPaste:handlePaste}):(0,jsx_runtime.jsx)(AutoCompleteInput.R,{name:"searchedChannel",label:`${values.searchedChannel?"Selected ":"Search your "} ${CHANNEL_LABEL[values.platform]}`,leftContent:values.searchedChannel?(0,jsx_runtime.jsx)(SearchedChannelImage,{children:(0,jsx_runtime.jsx)(Image._,{src:values.searchedChannel.imageUrl,alt:values.searchedChannel.name})}):(0,jsx_runtime.jsx)(search_ForwardRef,{}),isLoading:isSearchLoading,options:socialNetworksOptions,searchValue,errors,disabled:isSubmitting,emptyState:(0,jsx_runtime.jsxs)(EmptyState,{children:["No channels found. ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("span",{children:["Try different search term or"," ",(0,jsx_runtime.jsx)(ButtonClean.I,{onClick:()=>setManualChannel(!0),children:"type URL manually"}),"."]})]}),tooltip:"Search your channel name.\n          Understanding who you are helps us make better recommendations!",onChangeSearchValue:value=>{onSearch({platformValue:values.platform,searchValue:value}),setValue("searchedChannel",null)},onOptionSelect:onSelect,onPaste:handlePaste})})()]}),(0,jsx_runtime.jsxs)(HiddenForm,{id:"preonboarding-form",action:null===(_kcContext$url=kcContext.url)||void 0===_kcContext$url?void 0:_kcContext$url.registrationAction,method:"post",children:[(0,jsx_runtime.jsx)("input",{name:"creatorName",type:"hidden",value:values.name}),(0,jsx_runtime.jsx)("input",{name:"creatorLocation",type:"hidden",value:values.location}),(0,jsx_runtime.jsx)("input",{name:"platform",type:"hidden",value:values.platform}),(0,jsx_runtime.jsx)("input",{name:"channelUrl",type:"hidden",value:values.searchedChannel?values.searchedChannel.channelUrl:values.channelUrl}),(0,jsx_runtime.jsx)("input",{name:"channelHandle",type:"hidden",value:values.searchedChannel?values.searchedChannel.channelUrl:""}),(0,jsx_runtime.jsx)("input",{name:"channelName",type:"hidden",value:values.searchedChannel?values.searchedChannel.name:""})]})]});var _kcContext$url};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"FormValues"}},manualChannel:{defaultValue:null,description:"",name:"manualChannel",required:!1,type:{name:"boolean"}},platformSelectLabel:{defaultValue:null,description:"",name:"platformSelectLabel",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: FormValues) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PreOnboardingForm/components/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/PreOnboardingForm/components/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}var es=__webpack_require__("./node_modules/react-query/es/index.js"),ApiBase=__webpack_require__("./src/services/ApiBase.ts");class GeolocationApiModel extends ApiBase.W{constructor(){super(...arguments),this.getGeolocation=()=>this.get("")}}const GeolocationApiClient=new GeolocationApiModel({development:"https://sandbox-shop.staging.fourthwall.com/platform/geo.json",production:"https://sandbox-shop.fourthwall.com/platform/geo.json"}),useDefaultValues=()=>{var _kcContext$preonboard,_kcContext$preonboard2,_kcContext$preonboard3,_kcContext$preonboard4,_kcContext$preonboard5,_kcContext$preonboard6,_kcContext$preonboard7,_kcContext$preonboard8,_geolocationQuery$dat,_geolocationQuery$dat2;const{kcContext}=(0,login_kcContext.gB)(),{geolocationQuery}=(options={retry:!1},{geolocationQuery:(0,es.useQuery)("geolocationQuery",(async()=>{const{data}=await GeolocationApiClient.getGeolocation();return data}),options)});var options;const isInitialPlatformSearchable=!(null===(_kcContext$preonboard=kcContext.preonboarding)||void 0===_kcContext$preonboard||!_kcContext$preonboard.platform)&&isSocialPlatformSearchable(kcContext.preonboarding.platform);return{name:(null===(_kcContext$preonboard2=kcContext.preonboarding)||void 0===_kcContext$preonboard2?void 0:_kcContext$preonboard2.creatorName)||"",platform:(null===(_kcContext$preonboard3=kcContext.preonboarding)||void 0===_kcContext$preonboard3?void 0:_kcContext$preonboard3.platform)||"",searchedChannel:isInitialPlatformSearchable?{handle:(null===(_kcContext$preonboard4=kcContext.preonboarding)||void 0===_kcContext$preonboard4?void 0:_kcContext$preonboard4.channelHandle)||"",imageUrl:"",name:(null===(_kcContext$preonboard5=kcContext.preonboarding)||void 0===_kcContext$preonboard5?void 0:_kcContext$preonboard5.channelName)||"",channelUrl:(null===(_kcContext$preonboard6=kcContext.preonboarding)||void 0===_kcContext$preonboard6?void 0:_kcContext$preonboard6.channelUrl)||""}:null,channelUrl:(null===(_kcContext$preonboard7=kcContext.preonboarding)||void 0===_kcContext$preonboard7?void 0:_kcContext$preonboard7.channelUrl)||"",location:(null===(_kcContext$preonboard8=kcContext.preonboarding)||void 0===_kcContext$preonboard8?void 0:_kcContext$preonboard8.creatorLocation)||(null==geolocationQuery||null===(_geolocationQuery$dat=geolocationQuery.data)||void 0===_geolocationQuery$dat||null===(_geolocationQuery$dat2=_geolocationQuery$dat.geo)||void 0===_geolocationQuery$dat2?void 0:_geolocationQuery$dat2.country)||"US"}},PreOnboardingForm=()=>{const defaultValues=useDefaultValues();return(0,jsx_runtime.jsx)(Form,{defaultValues,onSubmit:()=>{const preonboardingForm=document.getElementById("preonboarding-form");preonboardingForm&&preonboardingForm.submit()}})};var Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),ProductImage=__webpack_require__("./src/components/ProductImage/index.ts");const pages_PreOnboarding=()=>{const{kcContext}=(0,login_kcContext.gB)();return(0,jsx_runtime.jsx)(Template.A,{title:"Tell us about yourself",creator:"Philip DeFranco",asideContent:"PRODUCT"===kcContext.registrationType?(0,jsx_runtime.jsx)(ProductImage.X,{}):void 0,children:(0,jsx_runtime.jsx)(PreOnboardingForm,{})})}},"./src/utils/regexp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TB:()=>EMAIL_REGEXP,_t:()=>URL_REGEX,a0:()=>HTML_TAGS_REGEXP});const EMAIL_REGEXP=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,HTML_TAGS_REGEXP=/^[^<>]+$/,URL_REGEX=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~@+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i")}}]);
//# sourceMappingURL=571.44fc9409.iframe.bundle.js.map