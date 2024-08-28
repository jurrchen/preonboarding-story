"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[604],{"./src/components/BaseContent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  padding: 0;

  color: ${_ref=>{let{appearance}=_ref;return{base:"#10110D",secondary:"#6F6F69"}[appearance]}};
  font-size: ${_ref2=>{let{size}=_ref2;return`${{base:16,small:14}[size]}px`}};

  a {
    text-decoration: underline;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseContent=_ref=>{let{children,appearance="base",size="base"}=_ref;return(0,jsx_runtime.jsx)(Container,{appearance,size,children})};try{BaseContent.displayName="BaseContent",BaseContent.__docgenInfo={description:"",displayName:"BaseContent",props:{appearance:{defaultValue:{value:"base"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseContent/BaseContent.tsx#BaseContent"]={docgenInfo:BaseContent.__docgenInfo,name:"BaseContent",path:"src/components/BaseContent/BaseContent.tsx#BaseContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Description/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Description});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Description=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Description.displayName="Description",Description.__docgenInfo={description:"",displayName:"Description",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Description/Description.tsx#Description"]={docgenInfo:Description.__docgenInfo,name:"Description",path:"src/components/Description/Description.tsx#Description"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TryAnotherWay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>TryAnotherWay});var _BaseContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/BaseContent/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TryAnotherWay=_ref=>{let{loginAction}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form",{id:"kc-select-try-another-way-form",action:loginAction,method:"post",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_BaseContent__WEBPACK_IMPORTED_MODULE_0__.J,{appearance:"secondary",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"#",id:"try-another-way",onClick:()=>(document.forms["kc-select-try-another-way-form"].submit(),!1),children:"Try another way"})]})})};try{TryAnotherWay.displayName="TryAnotherWay",TryAnotherWay.__docgenInfo={description:"",displayName:"TryAnotherWay",props:{loginAction:{defaultValue:null,description:"",name:"loginAction",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TryAnotherWay.tsx#TryAnotherWay"]={docgenInfo:TryAnotherWay.__docgenInfo,name:"TryAnotherWay",path:"src/components/TryAnotherWay.tsx#TryAnotherWay"})}catch(__react_docgen_typescript_loader_error){}},"./src/keycloak-theme/login/pages/LoginOtp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pages_LoginOtp});var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx"),Template=__webpack_require__("./src/keycloak-theme/login/Template.tsx"),Heading=__webpack_require__("./src/components/Heading/index.ts"),Input=__webpack_require__("./src/components/Input/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),Description=__webpack_require__("./src/components/Description/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.Ay.div`
  position: relative;

  input {
    opacity: 0;

    position: absolute;
    top: 13px;
    left: 13px;
    transform: translate(-50%, -50%);
  }

  label {
    display: grid;
    gap: 12px;
    grid-template-columns: auto 1fr;
    align-items: center;

    cursor: pointer;

    &::before {
      display: block;
      content: '';

      width: 24px;
      height: 24px;
      border: 1px solid #cdccca;
      border-radius: 50%;

      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==');
      background-position: center;
      background-repeat: no-repeat;
    }

    &:hover {
      &::before {
        border-color: #6f6f69;
      }
    }
  }

  &:has(input:checked) {
    label {
      &::before {
        background-color: #0042ff;
        border-color: #0042ff;
      }
    }
  }
`,Radio=_ref=>{let{id,name,label,required=!1,checked,onChange}=_ref;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("input",{id,type:"radio",name,value:id,required,checked,onChange}),(0,jsx_runtime.jsx)("label",{htmlFor:id,children:label})]})};try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var TryAnotherWay=__webpack_require__("./src/components/TryAnotherWay.tsx");const TITLE="Verify your login",pages_LoginOtp=()=>{const{kcContext}=(0,login_kcContext.gB)(),{register,watch,setValue}=(0,index_esm.mN)(),{otpLogin,url,auth}=kcContext,{userOtpCredentials}=otpLogin;return(0,jsx_runtime.jsx)(Template.A,{title:TITLE,children:(0,jsx_runtime.jsx)("form",{action:url.loginAction,method:"post",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Heading.D,{children:TITLE})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Description.V,{children:(0,jsx_runtime.jsx)("p",{children:"We don't recognize this device. Please enter a one time code from your authenticator app to log in:"})})}),userOtpCredentials.length>1&&(0,jsx_runtime.jsx)("div",{style:{display:"grid",gap:12},children:userOtpCredentials.map((otpCredential=>(0,jsx_runtime.jsx)(Radio,{id:otpCredential.id,name:"selectedCredentialId",label:otpCredential.userLabel,required:!0,checked:watch("selectedCredentialId")===otpCredential.id,onChange:()=>setValue("selectedCredentialId",otpCredential.id)},otpCredential.id)))}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Input.p,{label:"One-time code",name:"otp",autocomplete:"off",register,value:watch("otp"),required:!0})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.$,{name:"login",type:"submit",value:"doLogIn",fullwidth:!0,size:"large",children:"Sign in"})}),(null==auth?void 0:auth.showTryAnotherWayLink)&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(TryAnotherWay.U,{loginAction:url.loginAction})})]})})})}}}]);
//# sourceMappingURL=604.27fda20f.iframe.bundle.js.map