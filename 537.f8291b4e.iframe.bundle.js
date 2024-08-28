"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[537],{"./src/components/Heading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  overflow-wrap: break-word;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PhotoGrid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>PhotoGrid});var react=__webpack_require__("./node_modules/react/index.js"),colors=__webpack_require__("./src/utils/colors.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getDimension=(dimension,index)=>"string"==typeof dimension?dimension:"number"==typeof dimension?`${dimension}px`:dimension(index),animationWave=styled_components_browser_esm.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Skeleton=styled_components_browser_esm.Ay.div`
  display: grid;
  gap: ${_ref=>{let{gap}=_ref;return gap}}px;
`,Shape=styled_components_browser_esm.Ay.div`
  ${_ref2=>{let{mainColor}=_ref2;return styled_components_browser_esm.AH`
    background: linear-gradient(-45deg, ${mainColor}, ${colors.J.GS100}, ${mainColor});
  `}}

  background-size: 300% 300%;
  animation: ${animationWave} 2s ease-in-out infinite alternate;
  ${_ref3=>{let{index,$width,$height}=_ref3;return styled_components_browser_esm.AH`
    width: ${getDimension($width,index)};
    height: ${getDimension($height,index)};
  `}}

  ${_ref4=>{let{variant}=_ref4;return"circle"===variant&&styled_components_browser_esm.AH`
      border-radius: 50%;
    `}}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton_Skeleton=(0,react.forwardRef)(((_ref,ref)=>{let{count=1,variant="rectangle",width="100%",height="auto",gap=8,mainColor=colors.J.GS400,...props}=_ref;const shapesCount=new Array(count).fill(0).map(((_,i)=>`shape-${i}`));return(0,jsx_runtime.jsx)(Skeleton,{ref,gap,...props,children:shapesCount.map(((key,index)=>(0,jsx_runtime.jsx)(Shape,{index,variant,$width:width,$height:height,mainColor,"data-testid":"Skeleton.Shape",children:"‌"},key)))})}));try{Skeleton_Skeleton.displayName="Skeleton",Skeleton_Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"Dimension"}},height:{defaultValue:{value:"auto"},description:"",name:"height",required:!1,type:{name:"Dimension"}},gap:{defaultValue:{value:"8"},description:"",name:"gap",required:!1,type:{name:"number"}},mainColor:{defaultValue:{value:"#E3E2E1"},description:"",name:"mainColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton_Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const ImagesContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  max-width: 558px;
`,Image=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,MainImageContainer=styled_components_browser_esm.Ay.div`
  width: 430px;
  height: 527px;
  position: relative;
`,Loader=(0,styled_components_browser_esm.Ay)(Skeleton_Skeleton)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;

  ${_ref=>{let{visible}=_ref;return!visible&&styled_components_browser_esm.AH`
      opacity: 0;
    `}}
`,TopImageContainer=styled_components_browser_esm.Ay.div`
  width: 145px;
  position: absolute;
  display: block;
`,BottomImageContainer=styled_components_browser_esm.Ay.div`
  width: 160px;
  position: absolute;
  display: block;
`,Footer=styled_components_browser_esm.Ay.footer`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.24px;

  color: ${colors.J.GS1000};

  a {
    text-decoration-line: underline;
  }

  position: absolute;
  top: 100%;
  left: 132px;

  padding: 16px 20px;
`,Container=styled_components_browser_esm.Ay.div`
  padding: 32px 28px 76px 28px;

  ${_ref2=>{let{variant}=_ref2;return 1===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        display: none;
      }

      ${BottomImageContainer} {
        display: none;
      }

      ${Footer} {
        left: 0;
        width: 100%;
        padding: 12px 0;
      }
    `}};

  ${_ref3=>{let{variant}=_ref3;return 2===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        top: -32px;
        right: -28px;
      }

      ${BottomImageContainer} {
        bottom: -76px;
        left: -28px;
      }

      ${Footer} {
        left: 132px;
      }
    `}};

  ${_ref4=>{let{variant}=_ref4;return 3===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        right: auto;
        left: -28px;
        top: -41px;
        width: 160px;
      }

      ${BottomImageContainer} {
        left: auto;
        right: -28px;
        width: 145px;
        height: 195px;
        bottom: -68px;
      }

      ${Footer} {
        left: auto;
        right: 116px;
        text-align: right;
      }
    `}};

  ${_ref5=>{let{variant}=_ref5;return 4===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        top: -48px;
        right: -55px;
      }

      ${BottomImageContainer} {
        bottom: -92px;
        left: 55px;
      }

      ${Footer} {
        left: 205px;
      }
    `}};

  ${_ref6=>{let{variant}=_ref6;return 5===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        right: auto;
        left: -55px;
        top: -48px;
        width: 128px;
      }

      ${BottomImageContainer} {
        left: auto;
        right: 35px;
        width: 180px;
        bottom: -111px;
      }

      ${Footer} {
        left: auto;
        right: 216px;
        text-align: right;
        padding-top: 19px;
        padding-left: 0;
        padding-right: 15px;
      }
    `}};

  ${_ref7=>{let{variant}=_ref7;return 6===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        right: auto;
        top: -28px;
        left: -56px;
      }

      ${BottomImageContainer} {
        left: 70px;
        bottom: -76px;
        height: 198px;
      }

      ${Footer} {
        left: 230px;
      }
    `}};

  ${_ref8=>{let{variant}=_ref8;return 7===variant&&styled_components_browser_esm.AH`
      ${TopImageContainer} {
        right: auto;
        height: 100px;
        width: 100px;
        top: -25px;
        left: -43px;
      }

      ${BottomImageContainer} {
        left: auto;
        right: -24px;
        bottom: -80px;
        width: 187px;
      }

      ${Footer} {
        left: auto;
        right: 167px;
        text-align: right;
        padding-top: 16px;
        padding-left: 0;
        padding-right: 16px;
      }
    `}};
`,PhotoGrid=_ref=>{let{variant=1,isLoading,mainImage,topImage,bottomImage,footer}=_ref;const staticAssets=void 0!==isLoading,[mainImageLoaded,setMainImageLoaded]=(0,react.useState)(staticAssets),[topImageLoaded,setTopImageLoaded]=(0,react.useState)(staticAssets),[bottomImageLoaded,setBottomImageLoaded]=(0,react.useState)(staticAssets);return(0,jsx_runtime.jsx)(Container,{variant,children:(0,jsx_runtime.jsxs)(ImagesContainer,{children:[(0,jsx_runtime.jsxs)(MainImageContainer,{children:[(0,jsx_runtime.jsx)(Image,{src:mainImage,onLoad:()=>setMainImageLoaded(!0)}),(0,jsx_runtime.jsx)(Loader,{visible:isLoading||!mainImageLoaded})]}),topImage&&(0,jsx_runtime.jsxs)(TopImageContainer,{children:[(0,jsx_runtime.jsx)(Image,{src:topImage,onLoad:()=>setTopImageLoaded(!0)}),(0,jsx_runtime.jsx)(Loader,{visible:isLoading||!topImageLoaded})]}),bottomImage&&(0,jsx_runtime.jsxs)(BottomImageContainer,{children:[(0,jsx_runtime.jsx)(Image,{src:bottomImage,onLoad:()=>setBottomImageLoaded(!0)}),(0,jsx_runtime.jsx)(Loader,{visible:isLoading||!bottomImageLoaded})]}),footer&&(0,jsx_runtime.jsx)(Footer,{children:footer})]})})};try{PhotoGrid.displayName="PhotoGrid",PhotoGrid.__docgenInfo={description:"",displayName:"PhotoGrid",props:{variant:{defaultValue:{value:"1"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"}]}},mainImage:{defaultValue:null,description:"",name:"mainImage",required:!1,type:{name:"string"}},topImage:{defaultValue:null,description:"",name:"topImage",required:!1,type:{name:"string"}},bottomImage:{defaultValue:null,description:"",name:"bottomImage",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PhotoGrid/PhotoGrid.tsx#PhotoGrid"]={docgenInfo:PhotoGrid.__docgenInfo,name:"PhotoGrid",path:"src/components/PhotoGrid/PhotoGrid.tsx#PhotoGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/keycloak-theme/login/Template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>login_Template});var Helmet=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),login_kcContext=__webpack_require__("./src/keycloak-theme/login/kcContext.tsx");__webpack_require__("./node_modules/react/index.js");const logo=__webpack_require__.p+"static/media/logo.bf9bb7f7bdf09e69faf7d3fad1e563ce.svg";var routing=__webpack_require__("./src/routing.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoints=__webpack_require__("./src/utils/breakpoints.ts"),colors=__webpack_require__("./src/utils/colors.ts");const Container=styled_components_browser_esm.Ay.nav`
  position: fixed;
  width: 100vw;
  height: 48px;
  left: 0;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.J.GS0};
  z-index: 1;

  ${(0,breakpoints.HP)("laptop")} {
    height: 64px;
    padding: 0 32px;
  }
`,LogoLink=styled_components_browser_esm.Ay.a`
  position: relative;
  width: 120px;

  ${(0,breakpoints.HP)("laptop")} {
    width: 140px;
    top: -5px;
  }
`,Logo=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`,LinksContainer=styled_components_browser_esm.Ay.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`,Link=styled_components_browser_esm.Ay.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;

  &:hover {
    color: ${colors.J.B500};
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ua=window.navigator.userAgent,isWebView=["iOSFourthwall","AndroidFourthwall"].some((footprint=>ua.includes(footprint))),WebViewHide=_ref=>{let{children}=_ref;return isWebView?null:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};try{WebViewHide.displayName="WebViewHide",WebViewHide.__docgenInfo={description:"",displayName:"WebViewHide",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WebViewHide.tsx#WebViewHide"]={docgenInfo:WebViewHide.__docgenInfo,name:"WebViewHide",path:"src/components/WebViewHide.tsx#WebViewHide"})}catch(__react_docgen_typescript_loader_error){}const client=new URLSearchParams(window.location.search).get("client_id")||"",isMobileClient=()=>["ios-app","android-app"].includes(client),Navbar=_ref=>{var _kcContext$fwUrl,_kcContext$fwUrl2;let{link}=_ref;const{kcContext}=(0,login_kcContext.gB)(),getLink={login:{href:(null===(_kcContext$fwUrl=kcContext.fwUrl)||void 0===_kcContext$fwUrl?void 0:_kcContext$fwUrl.loginUrl)||void 0,label:"Log in"},startForFree:{href:(null===(_kcContext$fwUrl2=kcContext.fwUrl)||void 0===_kcContext$fwUrl2?void 0:_kcContext$fwUrl2.getStartedUrl)||void 0,label:"Start for free"}};return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsxs)(WebViewHide,{children:[(0,jsx_runtime.jsx)(LogoLink,{href:routing.D.homepage,style:{pointerEvents:isMobileClient()?"none":void 0},children:(0,jsx_runtime.jsx)(Logo,{src:logo})}),(()=>{if(!link)return null;if("startForFree"===link&&isMobileClient())return null;const linkProps=getLink[link];return(0,jsx_runtime.jsx)(LinksContainer,{children:(0,jsx_runtime.jsx)(Link,{href:linkProps.href,children:linkProps.label})})})()]})})};try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"enum",value:[{value:'"login"'},{value:'"startForFree"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navbar/Navbar.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/components/Navbar/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}const Template_styled_Container=styled_components_browser_esm.Ay.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`,Content=styled_components_browser_esm.Ay.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 96px 20px 48px;
  max-width: 1124px;

  ${(0,breakpoints.HP)("laptop")} {
    height: 100%;
    padding: 64px;
    justify-content: space-between;
    min-height: 890px;
  }
`,MainContent=styled_components_browser_esm.Ay.div`
  width: 384px;
`,AsideContent=styled_components_browser_esm.Ay.div`
  display: none;
  width: 486px;
  padding: 48px 0;
  align-items: center;
  justify-content: center;

  ${(0,breakpoints.HP)("laptop")} {
    display: flex;
  }
`;var PhotoGrid=__webpack_require__("./src/components/PhotoGrid/index.ts");const phil_main_namespaceObject=__webpack_require__.p+"651b446d6b1bb6b2218b.webp",phil_top_namespaceObject=__webpack_require__.p+"5ad92ebfed41674c00c5.webp",phil_bottom_namespaceObject=__webpack_require__.p+"4d66568d3cc097eec351.webp",ellen_brian_main_namespaceObject=__webpack_require__.p+"80e64b5aee3e4d91fc97.webp",ellen_brian_top_namespaceObject=__webpack_require__.p+"480a898a0bc3de3c2c58.webp",ellen_brian_bottom_namespaceObject=__webpack_require__.p+"c62bb7e8d3d5de1f1dc9.webp",charlotte_main_namespaceObject=__webpack_require__.p+"8834eeb0e24e1214ad8d.webp",charlotte_top_namespaceObject=__webpack_require__.p+"2b8cc867b7fee12048f8.webp",charlotte_bottom_namespaceObject=__webpack_require__.p+"db5a09382285523e0324.webp",stevie_main_namespaceObject=__webpack_require__.p+"de7a7e21516ec48837fd.webp",stevie_top_namespaceObject=__webpack_require__.p+"cc4d0d5eb46f0e262408.webp",stevie_bottom_namespaceObject=__webpack_require__.p+"89dc6620331d56b978b3.webp",will_neff_main_namespaceObject=__webpack_require__.p+"68858bb88eb356fc2c32.webp",will_neff_bottom_namespaceObject=__webpack_require__.p+"f4485eff4bdef25c6e49.webp",getFooter=(name,href,siteName,extraNote)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[name," powers",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href,target:"_blank",rel:"nofollow noreferrer",children:siteName})," ","with Fourthwall."," ",extraNote?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("br",{})," ",extraNote]}):null]}),photoGridProps={"Philip DeFranco":{variant:2,mainImage:phil_main_namespaceObject,topImage:phil_top_namespaceObject,bottomImage:phil_bottom_namespaceObject,footer:getFooter("Philip DeFranco","https://beautifulbastard.com/","beautifulbastard.com")},"Ellen & Brian":{variant:5,mainImage:ellen_brian_main_namespaceObject,topImage:ellen_brian_top_namespaceObject,bottomImage:ellen_brian_bottom_namespaceObject,footer:getFooter("Ellen & Brian","https://ellenandbrian.com/","ellenandbrian.com","Photography by Ellen & Brian")},"Charlotte Dobre":{variant:3,mainImage:charlotte_main_namespaceObject,topImage:charlotte_top_namespaceObject,bottomImage:charlotte_bottom_namespaceObject,footer:getFooter("Charlotte Dobre","https://shop.charlottedobre.net/","shop.charlottedobre.net")},Stevie:{variant:6,mainImage:stevie_main_namespaceObject,topImage:stevie_top_namespaceObject,bottomImage:stevie_bottom_namespaceObject,footer:getFooter("Stevie","https://steviecreations.com/","steviecreations.com")},"Will Neff":{variant:7,mainImage:will_neff_main_namespaceObject,bottomImage:will_neff_bottom_namespaceObject,footer:getFooter("Will Neff","https://neffsauce.com/","neffsauce.com","Photography by Martin Wong")}},CreatorPhotoGrid=_ref=>{let{creator}=_ref;return(0,jsx_runtime.jsx)(PhotoGrid.B,{...photoGridProps[creator]})};try{CreatorPhotoGrid.displayName="CreatorPhotoGrid",CreatorPhotoGrid.__docgenInfo={description:"",displayName:"CreatorPhotoGrid",props:{creator:{defaultValue:null,description:"",name:"creator",required:!0,type:{name:"enum",value:[{value:'"Philip DeFranco"'},{value:'"Ellen & Brian"'},{value:'"Charlotte Dobre"'},{value:'"Stevie"'},{value:'"Will Neff"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CreatorPhotoGrid/CreatorPhotoGrid.tsx#CreatorPhotoGrid"]={docgenInfo:CreatorPhotoGrid.__docgenInfo,name:"CreatorPhotoGrid",path:"src/components/CreatorPhotoGrid/CreatorPhotoGrid.tsx#CreatorPhotoGrid"})}catch(__react_docgen_typescript_loader_error){}const Template=_ref=>{let{title,children,link="login",creator="Ellen & Brian",asideContent}=_ref;return(0,jsx_runtime.jsxs)(Template_styled_Container,{children:[(0,jsx_runtime.jsx)(Helmet.m,{title:`${title} | Fourthwall`}),(0,jsx_runtime.jsx)(Navbar,{link}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(AsideContent,{children:asideContent||(0,jsx_runtime.jsx)(CreatorPhotoGrid,{creator})}),(0,jsx_runtime.jsx)(MainContent,{children})]})]})},login_Template=Template;try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:{value:"login"},description:"",name:"link",required:!1,type:{name:"enum",value:[{value:'"login"'},{value:'"startForFree"'}]}},creator:{defaultValue:{value:"Ellen & Brian"},description:"",name:"creator",required:!1,type:{name:"enum",value:[{value:'"Philip DeFranco"'},{value:'"Ellen & Brian"'},{value:'"Charlotte Dobre"'},{value:'"Stevie"'},{value:'"Will Neff"'}]}},asideContent:{defaultValue:null,description:"",name:"asideContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/keycloak-theme/login/Template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/keycloak-theme/login/Template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=537.f8291b4e.iframe.bundle.js.map