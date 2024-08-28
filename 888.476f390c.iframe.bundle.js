"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[888],{"./src/components/BackButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BackButton});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgArrowShort(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M7.75 12.125L1.75 6.5L7.75 0.875",stroke:"#6F6F69",strokeWidth:1.5})))}const ForwardRef=react.forwardRef(SvgArrowShort);__webpack_require__.p;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts"),ButtonClean=__webpack_require__("./src/components/ButtonClean/index.ts");const Container=(0,styled_components_browser_esm.Ay)(ButtonClean.I)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.J.GS600};
  text-decoration: none;
  align-self: flex-start;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BackButton=_ref=>{let{label="Back",href,disabled,onClick}=_ref;return(0,jsx_runtime.jsxs)(Container,{href,onClick:(()=>{if(!href)return onClick||(()=>history.back())})(),disabled,children:[(0,jsx_runtime.jsx)(ForwardRef,{})," ",label]})};try{BackButton.displayName="BackButton",BackButton.__docgenInfo={description:"",displayName:"BackButton",props:{label:{defaultValue:{value:"Back"},description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BackButton/BackButton.tsx#BackButton"]={docgenInfo:BackButton.__docgenInfo,name:"BackButton",path:"src/components/BackButton/BackButton.tsx#BackButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Description/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Description});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */

  p + p {
    margin-top: 8px;
  }

  ul {
    padding-left: 16px;
    list-style: disc;
  }

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Description=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Description.displayName="Description",Description.__docgenInfo={description:"",displayName:"Description",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Description/Description.tsx#Description"]={docgenInfo:Description.__docgenInfo,name:"Description",path:"src/components/Description/Description.tsx#Description"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Note/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Note});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/utils/colors.ts");const Container=styled_components_browser_esm.Ay.h1`
  font-size: 12px;
  line-height: 130%; /* 15.6px */
  letter-spacing: 0.24px;
  color: ${colors.J.GS600};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Note=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Note.displayName="Note",Note.__docgenInfo={description:"",displayName:"Note",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Note/Note.tsx#Note"]={docgenInfo:Note.__docgenInfo,name:"Note",path:"src/components/Note/Note.tsx#Note"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SimpleLayout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>SimpleLayout});var BackButton=__webpack_require__("./src/components/BackButton/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Inner=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimpleLayout=_ref=>{let{header,content,footer,withBackButton,backHref,onBack}=_ref;return(0,jsx_runtime.jsxs)(Container,{children:[header||withBackButton?(0,jsx_runtime.jsxs)(Inner,{children:[withBackButton&&(0,jsx_runtime.jsx)(BackButton.o,{href:backHref,onClick:onBack}),header&&(0,jsx_runtime.jsx)(Inner,{children:header})]}):null,content&&(0,jsx_runtime.jsx)(Inner,{children:content}),footer&&(0,jsx_runtime.jsx)(Inner,{children:footer})]})};try{SimpleLayout.displayName="SimpleLayout",SimpleLayout.__docgenInfo={description:"",displayName:"SimpleLayout",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},withBackButton:{defaultValue:null,description:"",name:"withBackButton",required:!1,type:{name:"boolean"}},backHref:{defaultValue:null,description:"",name:"backHref",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SimpleLayout/SimpleLayout.tsx#SimpleLayout"]={docgenInfo:SimpleLayout.__docgenInfo,name:"SimpleLayout",path:"src/components/SimpleLayout/SimpleLayout.tsx#SimpleLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/keycloak-theme/login/pages/MissingScopesOauth.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_MissingScopesOauth});var Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),Heading=__webpack_require__("./src/components/Heading/index.ts"),Description=__webpack_require__("./src/components/Description/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),Note=__webpack_require__("./src/components/Note/index.ts"),SimpleLayout=__webpack_require__("./src/components/SimpleLayout/index.ts");const yt_permission_namespaceObject=__webpack_require__.p+"ad4e228ad60329e92958.png";var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ImageWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  margin: 12px 0;
`,Image=styled_components_browser_esm.Ay.img`
  width: 100%;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FailedYoutubeSignup=()=>{var _kcContext$fwUrl;const{kcContext}=(0,login_kcContext.gB)();return(0,jsx_runtime.jsx)(SimpleLayout.n,{header:(0,jsx_runtime.jsx)(Heading.D,{children:"Sign up failed due to missing permission"}),content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Description.V,{children:(0,jsx_runtime.jsx)("p",{children:"During YouTube authentication process select a checkbox that allows Fourthwall to view your YouTube account. We only use essential data to create your account."})}),(0,jsx_runtime.jsx)(ImageWrapper,{children:(0,jsx_runtime.jsx)(Image,{src:yt_permission_namespaceObject,alt:"YouTube permissions"})})]}),footer:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{href:null===(_kcContext$fwUrl=kcContext.fwUrl)||void 0===_kcContext$fwUrl?void 0:_kcContext$fwUrl.getStartedUrl,children:"Back to sign up"})," ",(0,jsx_runtime.jsxs)(Note.L,{children:["If this problem still occurs"," ",(0,jsx_runtime.jsx)("a",{href:"mailto:support@fourthwall.com",children:"contact our support"}),"."]})]})})},pages_MissingScopesOauth=()=>(0,jsx_runtime.jsx)(Template.A,{title:"Sign up failed",children:(0,jsx_runtime.jsx)(FailedYoutubeSignup,{})})}}]);
//# sourceMappingURL=888.476f390c.iframe.bundle.js.map