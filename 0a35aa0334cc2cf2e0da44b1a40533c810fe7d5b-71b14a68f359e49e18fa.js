"use strict";(self.webpackChunkmeu_site=self.webpackChunkmeu_site||[]).push([[203],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),o=new RegExp(l.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,a,n)=>{let l=!1,s=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];l&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),l=!1,o=s,s=!0,i++):s&&o&&r.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=s,s=!1,l=!0):(l=a(c)===c&&n(c)!==c,o=s,s=n(c)===c&&a(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return x},P:function(){return w},S:function(){return H},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return m},h:function(){return i}});var a=r(7294),n=(r(3204),r(5697)),l=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(r=l[a])>=0||(n[r]=e[r]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function m(e,t,r,a,n,l,o,i){const c={};l&&(c.backgroundColor=l,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=o(e,u);return a.createElement(a.Fragment,null,a.createElement(p,s({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:n,alt:l="",shouldLoad:i}=e,c=o(e,f);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,alt:l}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,l=o(e,h);const i=l.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,s({},l,t,{sizes:i,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:l}=e;return a.createElement("source",{key:t+"-"+l+"-"+r,type:l,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:i})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,r=o(e,E);return t?a.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:l().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],O=new Set;let I,z;const A=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,h=o(e,S);const{width:b,height:y,layout:v}=n,E=c(b,y,v),{style:w,className:x}=E,k=o(E,T),N=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const L=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,b,y);return(0,a.useEffect)((()=>{I||(I=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(C);if(z&&O.has(C))return;let t,a;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=r(s({isLoading:!0,isLoaded:O.has(C),image:n},h)),O.has(C)||(t=requestAnimationFrame((()=>{N.current&&(a=o(N.current,C,O,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{O.has(C)&&z&&(N.current.innerHTML=z(s({isLoading:O.has(C),isLoaded:O.has(C),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},k,{style:s({},w,l,{backgroundColor:d}),className:x+(m?" "+m:""),ref:N,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},_=(0,a.memo)((function(e){return e.image?(0,a.createElement)(A,e):null}));_.propTypes=j,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:r,__imageData:n,__error:l}=t,i=o(t,q);return l&&console.warn(l),n?a.createElement(e,s({image:n},i)):(console.warn("Image not loaded",r),null)}}const R=P((function(e){let{as:t="div",className:r,class:n,style:l,image:i,loading:u="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,v=o(e,k);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=s({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:E,height:L,layout:j,images:S,placeholder:T,backgroundColor:O}=i,I=c(E,L,j),{style:z,className:A}=I,_=o(I,N),q={fallback:void 0,sources:[]};return S.fallback&&(q.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?C(S.fallback.srcSet):void 0})),S.sources&&(q.sources=S.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),a.createElement(t,s({},_,{style:s({},z,l,{backgroundColor:h}),className:A+(r?" "+r:"")}),a.createElement(g,{layout:j,width:E,height:L},a.createElement(w,s({},m(T,!1,j,E,L,O,b,y))),a.createElement(x,s({"data-gatsby-image-ssr":"",className:p},v,d("eager"===u,!1,q,u,f)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),M={src:l().string.isRequired,alt:L,width:W,height:W,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=M;const H=P(_);H.displayName="StaticImage",H.propTypes=M},1726:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(7294),n=r(9274);var l=()=>a.createElement("form",{className:"flex flex-col font-sora text-tertiary-h w-[80vw] lg:w-[60vw]  xl:w-[40vw] gap-20 ",action:"https://api.staticforms.xyz/submit",method:"post"},a.createElement("input",{type:"hidden",name:"accessKey",value:"c081665d-5081-4a3b-8aab-c698ece254c7"}),a.createElement("div",{className:"flex flex-col sm:flex-row justify-between gap-12"},a.createElement("div",{className:"flex flex-col gap-4 w-full"},a.createElement("label",null,"What's your name?"),a.createElement("input",{type:"text",name:"name",placeholder:"Your Name",required:!0,className:"focus:outline-none bg-transparent text-base px-4 py-2 border-b-2 border-slate-300"})),a.createElement("div",{className:"flex flex-col gap-4 w-full"},a.createElement("label",null,"Where can I reach you?"),a.createElement("input",{type:"text",name:"email",placeholder:"your@email.com",required:!0,className:"focus:outline-none bg-transparent text-base px-4 py-2 border-b-2 border-slate-300"}))),a.createElement("div",{className:"flex flex-col gap-4 w-full"},a.createElement("label",null,"What's your message?"),a.createElement("textarea",{name:"message",rows:2,maxLength:100,required:!0,placeholder:"Tell me...",className:"focus:outline-none bg-transparent text-base p-4 border-b-2 border-slate-300 resize-none"})),a.createElement("button",{className:"group py-3 text-primary-h font-medium flex justify-center items-center gap-4",type:"submit"},"Send it ",a.createElement(n.iHR,{className:"group-hover:translate-x-2 group-hover:-translate-y-3 stroke-[2.5] duration-300"})));var s=()=>a.createElement("section",{id:"contact",className:"flex flex-col font-sora xl:items-start gap-[5rem] mt-12 justify-between py-8 px-12 md:px-[10rem]"},a.createElement("h1",{className:"text-header  my-8 text-center sm:text-start"},"Let's work together?"),a.createElement("div",{className:" flex flex-col xl:flex-row items-center xl:items-start gap-[5rem] justify-between w-full"},a.createElement("h3",{className:"text-tertiary-h"},"Ask me anything or just say hi 👋..."),a.createElement(l,null))),o=r(8193),i=r(3854);var c=()=>a.createElement("section",{className:"flex flex-col w-full font-sora pb-[3rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed"},a.createElement("div",{className:"flex flex-col-reverse sm:flex-row gap-12 sm:gap-0 items-center w-full justify-between mt-[8rem] sm:px-16 pt-12 font-sora border-dashed border-t-2 border-t-slate-200 dark:border-t-[#363636] "},a.createElement("h4",{onClick:()=>{window.scrollTo(0,0)},className:"flex items-center gap-4 cursor-pointer"},a.createElement(i.oT$,{className:"text-[2rem]"}),"Awdrey"),a.createElement("p",null,"© 2023. Awdrey Candido"),a.createElement("div",{className:"flex gap-6 text-base"},a.createElement("a",{target:"_blank",href:"https://github.com/AwdreyCandido"},a.createElement("div",{className:"text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white"},a.createElement(o.idJ,null))),a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/awdrey-candido-67b381221/"},a.createElement("div",{className:"text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white"},a.createElement(o.Rti,null))),a.createElement("a",{target:"_blank",href:"https://www.instagram.com/awdrey.candido/?next=%2F"},a.createElement("div",{className:"text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white"},a.createElement(o.Bpw,null)))))),d=r(1883);var m=e=>a.createElement("button",{className:"px-12 py-3 bg-[#e7e7e7] dark:bg-transparent dark:hover:bg-darkwhite  dark:hover:text-darkgray border-darkwhite border rounded-full duration-300",onClick:e.onClick},e.title);var u=e=>a.createElement("label",{className:"relative inline-flex items-center cursor-pointer"},a.createElement("input",{onChange:e.onChange,type:"checkbox",value:"",className:"sr-only peer"}),a.createElement("div",{className:"w-[4.5rem] h-[2.5rem] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 peer-checked:bg-gray-border peer-checked:border"}),a.createElement(i.YGJ,{className:"absolute peer-checked:invisible peer-checked:translate-x-full top-[50%] -translate-y-[50%] left-[3px] bg-darkwhite border-gray-300 border rounded-full h-[1.8rem] w-[1.9rem] transition-all text-yellow-400 "}),a.createElement(i.Fxr,{className:"absolute invisible peer-checked:visible rounded-full h-[1.8rem] w-[1.9rem] top-[50%] -translate-y-[50%] translate-x-full left-[3px] bg-darkwhite text-darkgray"})),p=r(471);var g=()=>{const{0:e,1:t}=(0,a.useState)("light"),{0:r,1:n}=(0,a.useState)(!1);(0,a.useEffect)((()=>{"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[e]);const l=()=>{t("dark"===e?"light":"dark")},s=()=>{n(!r)};return a.createElement(a.Fragment,null,a.createElement("nav",{className:"flex items-center justify-between md:text-base px-16 py-6 font-sora border-b border-b-slate-200 dark:border-b-[#363636] "},a.createElement(d.Link,{to:"/"},a.createElement("h4",{className:"flex items-center gap-8"},a.createElement(i.oT$,{className:"text-[2.5rem]"}),"Awdrey")),a.createElement("button",{onClick:s,className:"inline sm:hidden text-[3rem] focus:ring-gray-border focus:ring-2 ring-inset-4 rounded-lg"},a.createElement(p.IlA,null)),a.createElement("ul",{className:"hidden sm:flex gap-6 md:gap-12"},a.createElement("li",{className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#projects",className:"peer bg-white dark:bg-darkgray"},"Projects"),a.createElement("div",{className:"bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 "})),a.createElement("li",{className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#about",className:"peer bg-white dark:bg-darkgray"},"About"),a.createElement("div",{className:"bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 "})),a.createElement("li",{onClick:function(){console.log("aa"),setTimeout((()=>{const e=document.getElementById("contact");null==e||e.scrollIntoView()}),300)},className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#contact",className:"peer bg-white dark:bg-darkgray"},"Contact"),a.createElement("div",{className:"bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 "}))),a.createElement("div",{className:"hidden sm:flex gap-8"},a.createElement(u,{onChange:l}),a.createElement(d.Link,{to:"/#contact"},a.createElement(m,{onClick:()=>{},title:"Contact Me!"})))),a.createElement(a.Fragment,null,r&&a.createElement("div",{onClick:s,className:"fixed top-0 z-10 h-screen w-full bg-transparent"}),a.createElement("nav",{className:"sm:hidden fixed top-0 font-sora z-[1000] p-8 text-quaternary-h duration-300 h-screen w-[50%] bg-darkwhite dark:bg-darkgray shadow-input "+(r?" translate-x-0":" -translate-x-full")}," ",a.createElement("div",{className:"flex items-center justify-between mb-8"}," ",a.createElement("h4",{className:"flex items-center gap-4"},a.createElement(i.oT$,{className:"text-[2.5rem]"}),"Awdrey"),a.createElement(u,{onChange:l})),a.createElement("hr",{className:"mb-8"}),a.createElement("ul",{className:"flex flex-col gap-6"},a.createElement("li",{onClick:s,className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#projects"},"Projects")),a.createElement("li",{onClick:s,className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#about"},"About")),a.createElement("li",{onClick:s,className:"relative hover:font-semibold duration-100"},a.createElement(d.Link,{to:"/#contact"},"Contact"))))))};var f=e=>{let{children:t}=e;return a.createElement("div",{className:"overflow-hidden"},a.createElement(g,null),t,a.createElement(s,null),a.createElement(c,null))}},4405:function(e,t,r){r.d(t,{w_:function(){return c}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function i(e){return e&&e.map((function(e,t){return a.createElement(e.tag,s({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return a.createElement(d,s({attr:s({},e.attr)},t),i(e.child))}}function d(e){var t=function(t){var r,n=e.attr,l=e.size,i=e.title,c=o(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=0a35aa0334cc2cf2e0da44b1a40533c810fe7d5b-71b14a68f359e49e18fa.js.map