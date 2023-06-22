"use strict";(self.webpackChunkmeu_site=self.webpackChunkmeu_site||[]).push([[691],{3204:function(e){const a=/[\p{Lu}]/u,t=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,c=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,n=new RegExp("^"+s.source),i=new RegExp(s.source+c.source,"gu"),l=new RegExp("\\d+"+c.source,"gu"),d=(e,c)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(c={pascalCase:!1,preserveConsecutiveUppercase:!1,...c},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===c.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(c.locale),d=!1===c.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(c.locale);if(1===e.length)return c.pascalCase?d(e):s(e);return e!==s(e)&&(e=((e,r,c)=>{let s=!1,n=!1,i=!1;for(let l=0;l<e.length;l++){const d=e[l];s&&a.test(d)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,i=n,n=!0,l++):n&&i&&t.test(d)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=n,n=!1,s=!0):(s=r(d)===d&&c(d)!==d,i=n,n=c(d)===d&&r(d)!==d)}return e})(e,s,d)),e=e.replace(n,""),e=c.preserveConsecutiveUppercase?((e,a)=>(r.lastIndex=0,e.replace(r,(e=>a(e)))))(e,s):s(e),c.pascalCase&&(e=d(e.charAt(0))+e.slice(1)),((e,a)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,t)=>a(t))).replace(l,(e=>a(e)))))(e,d)};e.exports=d,e.exports.default=d},8032:function(e,a,t){t.d(a,{L:function(){return f},M:function(){return k},P:function(){return x},S:function(){return M},_:function(){return i},a:function(){return n},b:function(){return o},g:function(){return b},h:function(){return l}});var r=t(7294),c=(t(3204),t(5697)),s=t.n(c);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)a.indexOf(t=s[r])>=0||(c[t]=e[t]);return c}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,a,t){const r={};let c="gatsby-image-wrapper";return"fixed"===t?(r.width=e,r.height=a):"constrained"===t&&(c="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:c,"data-gatsby-image-wrapper":"",style:r}}function o(e,a,t,r,c){return void 0===c&&(c={}),n({},t,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},c,{opacity:a?1:0})})}function b(e,a,t,r,c,s,i,l){const d={};s&&(d.backgroundColor=s,"fixed"===t?(d.width=r,d.height=c,d.backgroundColor=s,d.position="relative"):("constrained"===t||"fullWidth"===t)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),i&&(d.objectFit=i),l&&(d.objectPosition=l);const o=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:a?0:1,transition:"opacity 500ms linear"},d)});return o}const m=["children"],p=function(e){let{layout:a,width:t,height:c}=e;return"fullWidth"===a?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:c/t*100+"%"}}):"constrained"===a?r.createElement("div",{style:{maxWidth:t,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+c+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:a}=e,t=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,n({},t)),a,null)},g=["src","srcSet","loading","alt","shouldLoad"],u=["fallback","sources","shouldLoad"],w=function(e){let{src:a,srcSet:t,loading:c,alt:s="",shouldLoad:l}=e,d=i(e,g);return r.createElement("img",n({},d,{decoding:"async",loading:c,src:l?a:void 0,"data-src":l?void 0:a,srcSet:l?t:void 0,"data-srcset":l?void 0:t,alt:s}))},h=function(e){let{fallback:a,sources:t=[],shouldLoad:c=!0}=e,s=i(e,u);const l=s.sizes||(null==a?void 0:a.sizes),d=r.createElement(w,n({},s,a,{sizes:l,shouldLoad:c}));return t.length?r.createElement("picture",null,t.map((e=>{let{media:a,srcSet:t,type:s}=e;return r.createElement("source",{key:a+"-"+s+"-"+t,type:s,media:a,srcSet:c?t:void 0,"data-srcset":c?void 0:t,sizes:l})})),d):d};var y;w.propTypes={src:c.string.isRequired,alt:c.string.isRequired,sizes:c.string,srcSet:c.string,shouldLoad:c.bool},h.displayName="Picture",h.propTypes={alt:c.string.isRequired,shouldLoad:c.bool,fallback:c.exact({src:c.string.isRequired,srcSet:c.string,sizes:c.string}),sources:c.arrayOf(c.oneOfType([c.exact({media:c.string.isRequired,type:c.string,sizes:c.string,srcSet:c.string.isRequired}),c.exact({media:c.string,type:c.string.isRequired,sizes:c.string,srcSet:c.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:a}=e,t=i(e,v);return a?r.createElement(h,n({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):r.createElement("div",n({},t))};x.displayName="Placeholder",x.propTypes={fallback:c.string,sources:null==(y=h.propTypes)?void 0:y.sources,alt:function(e,a,t){return e[a]?new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(h,n({},e)),r.createElement("noscript",null,r.createElement(h,n({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=h.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,a,t){for(var r=arguments.length,c=new Array(r>3?r-3:0),n=3;n<r;n++)c[n-3]=arguments[n];return e.alt||""===e.alt?s().string.apply(s(),[e,a,t].concat(c)):new Error('The "alt" prop is required in '+t+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:s().object.isRequired,alt:C},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],L=new Set;let I,O;const D=function(e){let{as:a="div",image:c,style:s,backgroundColor:o,className:b,class:m,onStartLoad:p,onLoad:f,onError:g}=e,u=i(e,_);const{width:w,height:h,layout:y}=c,v=d(w,h,y),{style:x,className:k}=v,E=i(v,z),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(c.images)),[c.images]);m&&(b=m);const C=function(e,a,t){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+t/a*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+a+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+t+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,w,h);return(0,r.useEffect)((()=>{I||(I=t.e(731).then(t.bind(t,6731)).then((e=>{let{renderImageToString:a,swapPlaceholderImage:t}=e;return O=a,{renderImageToString:a,swapPlaceholderImage:t}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function a(){e.removeEventListener("load",a),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(S);if(O&&L.has(S))return;let a,r;return I.then((e=>{let{renderImageToString:t,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=t(n({isLoading:!0,isLoaded:L.has(S),image:c},u)),L.has(S)||(a=requestAnimationFrame((()=>{N.current&&(r=i(N.current,S,L,s,p,f,g))}))))})),()=>{a&&cancelAnimationFrame(a),r&&r()}}),[c]),(0,r.useLayoutEffect)((()=>{L.has(S)&&O&&(N.current.innerHTML=O(n({isLoading:L.has(S),isLoaded:L.has(S),image:c},u)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[c]),(0,r.createElement)(a,n({},E,{style:n({},x,s,{backgroundColor:o}),className:k+(b?" "+b:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(D,e):null}));T.propTypes=j,T.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(a){let{src:t,__imageData:c,__error:s}=a,l=i(a,q);return s&&console.warn(s),c?r.createElement(e,n({image:c},l)):(console.warn("Image not loaded",t),null)}}const R=A((function(e){let{as:a="div",className:t,class:c,style:s,image:l,loading:m="lazy",imgClassName:p,imgStyle:g,backgroundColor:u,objectFit:w,objectPosition:h}=e,y=i(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;c&&(t=c),g=n({objectFit:w,objectPosition:h,backgroundColor:u},g);const{width:v,height:C,layout:j,images:_,placeholder:z,backgroundColor:L}=l,I=d(v,C,j),{style:O,className:D}=I,T=i(I,N),q={fallback:void 0,sources:[]};return _.fallback&&(q.fallback=n({},_.fallback,{srcSet:_.fallback.srcSet?S(_.fallback.srcSet):void 0})),_.sources&&(q.sources=_.sources.map((e=>n({},e,{srcSet:S(e.srcSet)})))),r.createElement(a,n({},T,{style:n({},O,s,{backgroundColor:u}),className:D+(t?" "+t:"")}),r.createElement(f,{layout:j,width:v,height:C},r.createElement(x,n({},b(z,!1,j,v,C,L,w,h))),r.createElement(k,n({"data-gatsby-image-ssr":"",className:p},y,o("eager"===m,!1,q,m,g)))))})),J=function(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),c=2;c<t;c++)r[c-2]=arguments[c];return"fullWidth"!==e.layout||"width"!==a&&"height"!==a||!e[a]?s().number.apply(s(),[e,a].concat(r)):new Error('"'+a+'" '+e[a]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:J,height:J,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const M=A(T);M.displayName="StaticImage",M.propTypes=F},4324:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(7294),c=t(8032),s=t(8193);var n=()=>r.createElement("section",{className:"relative w-min"},r.createElement("div",{className:"animate-rotate relative items-center justify-center h-[25rem] w-[25rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement("div",{className:"absolute animate-rotate-back -top-[10%] left-[10%] h-[8rem] w-[8rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/react.png",alt:"react logo",className:" drop-shadow-2xl",__imageData:t(5908)})),r.createElement("div",{className:"absolute animate-rotate-back top-[10%] left-[80%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/typescript.png",alt:"typescript logo",className:" drop-shadow-2xl",__imageData:t(8494)})),r.createElement("div",{className:"absolute animate-rotate-back top-[70%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full "},r.createElement(c.S,{src:"./../../images/react-native.png",alt:"react-native logo",className:" drop-shadow-2xl",__imageData:t(5174)})),r.createElement("div",{className:"absolute animate-rotate-back top-[75%] left-[70%] h-[6rem] w-[6rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/redux.png",alt:"redux logo",className:" drop-shadow-2xl",__imageData:t(8188)}))),r.createElement("div",{className:"absolute h-[8rem] w-[8rem] bg-[#f9f9f9] dark:bg-white shadow-md rounded-full p-6 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"},r.createElement(c.S,{src:"./../../images/javascript.png",alt:"tailwind logo",__imageData:t(1005)})));var i=()=>r.createElement("section",{className:"relative w-min"},r.createElement("div",{className:"animate-rotate relative items-center justify-center h-[20rem] w-[20rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement("div",{className:"absolute animate-rotate-back -top-[15%] left-[40%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/sass.png",alt:"sass logo",className:" drop-shadow-2xl",__imageData:t(2886)})),r.createElement("div",{className:"absolute animate-rotate-back top-[70%]  h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full "},r.createElement(c.S,{src:"./../../images/tailwind.png",alt:"tailwind logo",className:" drop-shadow-2xl",__imageData:t(9332)})),r.createElement("div",{className:"absolute animate-rotate-back top-[75%] left-[70%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/styled-components.png",alt:"styled-components logo",className:" drop-shadow-2xl",__imageData:t(2984)}))),r.createElement("div",{className:"absolute h-[8rem] w-[8rem] bg-darkwhite dark:bg-white shadow-input rounded-full p-4 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"},r.createElement(c.S,{src:"./../../images/css3.png",alt:"tailwind logo",__imageData:t(3183)})));var l=()=>r.createElement("section",{className:"relative w-min"},r.createElement("div",{className:"animate-rotate relative items-center justify-center h-[15rem] w-[15rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement("div",{className:"absolute  top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/git.png",alt:"git logo",className:" drop-shadow-2xl animate-rotate-back",__imageData:t(1893)})),r.createElement("div",{className:"absolute  top-[50%] left-0  -translate-x-[50%]  h-[8rem] w-[8rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full "},r.createElement(c.S,{src:"./../../images/mysql.png",alt:"mysql logo",className:" drop-shadow-2xl animate-rotate-back",__imageData:t(7627)})),r.createElement("div",{className:"absolute  top-[50%] left-[100%] -translate-x-[50%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full"},r.createElement(c.S,{src:"./../../images/docker.png",alt:"docker logo",className:" drop-shadow-2xl animate-rotate-back",__imageData:t(592)})))),d=t(1883);var o=()=>r.createElement("section",{className:"flex flex-col lg:flex-row w-full h-fit font-sora"},r.createElement("section",{className:"flex items-center justify-center xl:justify-normal h-[50rem] sm:h-[65rem] w-full lg:border-r-2 border-b-2 border-slate-200 dark:border-[#363636] border-dashed"},r.createElement("div",{className:"relative flex flex-col gap-8 w-[85%] sm:w-[76%] xl:ml-[11rem]"},r.createElement("h1",{className:"text-primary-h sm:text-header"},"HEY!"," ",r.createElement("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"},"I'm Awdrey"),", A"," ",r.createElement("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"},"FRONT-END"," ")," ","DEVELOPER BASED IN",r.createElement("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"}," ","BRAZIL")),r.createElement("p",{className:"text-base my-4"},"By being a Front-End developer basically means that I can create beautiful and attractive screens 😳..."),r.createElement("div",{className:"flex justify-between sm:justify-normal gap-6 text-base"},r.createElement(d.Link,{to:"/#contact",className:"w-full sm:w-fit"},r.createElement("button",{className:" px-8 sm:px-12 w-full sm:w-fit py-4 text-[1.4rem] sm:text-base bg-[#171717] hover:bg-darkwhite hover:text-darkgray dark:bg-transparent border dark:border-gray-border border-darkwhite  dark:hover:bg-darkwhite  dark:hover:text-darkgray text-white rounded-full duration-300",onClick:()=>{}},"Contact Me!")),r.createElement("a",{target:"_blank",href:"https://github.com/AwdreyCandido"},r.createElement("div",{className:"h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300"},r.createElement(s.idJ,null))),r.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/awdrey-candido-67b381221/"},r.createElement("div",{className:"h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300"},r.createElement(s.Rti,null))),r.createElement("a",{target:"_blank",href:"https://www.instagram.com/awdrey.candido/?next=%2F"},r.createElement("div",{className:"h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300"},r.createElement(s.Bpw,null)))))),r.createElement("section",{className:"relative flex items-center justify-center h-[65rem] border-b-2 border-b-slate-200 dark:border-b-[#363636] border-dashed w-full"},r.createElement("div",null,r.createElement(c.S,{className:"relative h-[35rem] w-[35rem] md:h-[45rem] md:w-[45rem] xl:-left-[10%] bg-[#e2e2e2] object-cover grayscale dark:grayscale-0 dark:bg-white rounded-full",src:"./../../images/perfil.jpg",alt:"my profile photo",__imageData:t(4096)})),r.createElement("div",{className:"h-[9rem] w-[9rem] scale-[.7] sm:scale-100 absolute  top-[10%] right-[35%] sm:top-[5%]"},r.createElement(n,null)),r.createElement("div",{className:"h-[8rem] w-[8rem] scale-[.7] sm:scale-100 absolute left-[10%] top-[20%]"},r.createElement(l,null)),r.createElement("div",{className:"h-[14rem] w-[14rem] scale-[.7] sm:scale-100 p-4 absolute right-[40%] top-[65%]"},r.createElement(i,null))));var b=()=>r.createElement("section",{id:"projects",className:" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-12 md:px-[10rem]"},r.createElement("h1",{className:"text-header text-center sm:text-start mb-4"},"I've been working on"),r.createElement("section",{className:"grid place-content-center lg:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] w-full "},r.createElement("figure",{className:" xl:col-span-2 w-full mt-[5rem]"},r.createElement(d.Link,{to:"/projects/gestor-politico-mangrover"},r.createElement("div",{className:"relative border-2 border-dashed border-slate-200 dark:border-gray-border w-full h-[40rem] rounded-3xl overflow-hidden"},r.createElement(c.S,{src:"./../../images/gpm.png",alt:"gpm crm page",className:"w-full h-full object-cover duration-300 hover:scale-105",__imageData:t(653)}))),r.createElement("p",{className:"mt-6"},"Development"),r.createElement("h2",{className:"text-primary-h"},"Gestor Político Mangrover")),r.createElement("figure",{className:"w-full mt-[5rem]"},r.createElement(d.Link,{to:"/projects/landing-mangrover"},r.createElement("div",{className:"relative h-[40rem] border-2 border-dashed overflow-hidden border-slate-200 dark:border-gray-border w-full rounded-3xl"},r.createElement(c.S,{src:"./../../images/mangrover-site.png",alt:"mangrover landing page",className:"w-full h-full object-cover duration-300 hover:scale-105",__imageData:t(9134)}))),r.createElement("p",{className:"mt-6"},"Development"),r.createElement("h2",{className:"text-primary-h"},"Site Mangrover"))));var m=()=>r.createElement("section",{id:"about",className:"flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-12 md:px-[10rem]"},r.createElement("h1",{className:"text-header  mb-4"},"Who am I?"),r.createElement("section",{className:"flex flex-col xl:flex-row  w-full items-center xl:justify-between"},r.createElement("div",{className:"flex flex-col gap-8 mt-[5rem] text-base w-full lg:w-[80%] xl:w-[65%]"},r.createElement("p",null,"My name is Awdrey Candido 😎. I am 22 years old, I live In Pernambuco, Brazil and I'm a self-taught Front-End developer. At the moment I'm a college student of Information Systems at Universidade Federal Rural de Pernambuco."),r.createElement("p",null,"I've started to learn about this incredible world of technology with the C programming language, but after some more research, I found myself in love with the Front-End way to live 😁. But recently I was flirting with native mobile development with Kotlin, You can see it in my Github, so let's see where it goes."),r.createElement("p",null,"More about me? As any developer I don't live without coffee, I have a strange addiction with cats and Elvis songs... Uhhh, you only wanna know about software? It is secret 🤫, but I can tell more if you're really interested. Just contact me!")),r.createElement("div",{className:"relative self-center mt-[8rem] xl:mt-0"},r.createElement("div",{className:"w-[35rem] sm:scale-[1.2] bg-[#e2e2e2] overflow-hidden dark:bg-white rounded-3xl"},r.createElement(c.S,{src:"./../../images/cats.jpeg",alt:"me and some cats",className:"object-cover w-[35rem] grayscale dark:grayscale-0",__imageData:t(2772)})),r.createElement("div",{className:"absolute w-[40rem] left-[5%] top-[25%] -z-10 h-[20rem] border-2 border-dashed border-slate-200 dark:border-gray-border rounded-3xl"})))),p=t(1726);var f=()=>r.createElement(p.Z,null,r.createElement(o,null),r.createElement(b,null),r.createElement(m,null));var g=()=>r.createElement(f,null)},8494:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0878c8","images":{"fallback":{"src":"/static/f3d918e3af45cdd0a8a82951366198b2/ccc41/typescript.png","srcSet":"/static/f3d918e3af45cdd0a8a82951366198b2/bf8e1/typescript.png 128w,\\n/static/f3d918e3af45cdd0a8a82951366198b2/acb7c/typescript.png 256w,\\n/static/f3d918e3af45cdd0a8a82951366198b2/ccc41/typescript.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/f3d918e3af45cdd0a8a82951366198b2/6766a/typescript.webp 128w,\\n/static/f3d918e3af45cdd0a8a82951366198b2/22bfc/typescript.webp 256w,\\n/static/f3d918e3af45cdd0a8a82951366198b2/d689f/typescript.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},3183:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6529d41350c881a6958a0357d314a643/ccc41/css3.png","srcSet":"/static/6529d41350c881a6958a0357d314a643/bf8e1/css3.png 128w,\\n/static/6529d41350c881a6958a0357d314a643/acb7c/css3.png 256w,\\n/static/6529d41350c881a6958a0357d314a643/ccc41/css3.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/6529d41350c881a6958a0357d314a643/6766a/css3.webp 128w,\\n/static/6529d41350c881a6958a0357d314a643/22bfc/css3.webp 256w,\\n/static/6529d41350c881a6958a0357d314a643/d689f/css3.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},5174:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3b3fe6a87e95f34c45eb3144358c8a8f/ccc41/react-native.png","srcSet":"/static/3b3fe6a87e95f34c45eb3144358c8a8f/bf8e1/react-native.png 128w,\\n/static/3b3fe6a87e95f34c45eb3144358c8a8f/acb7c/react-native.png 256w,\\n/static/3b3fe6a87e95f34c45eb3144358c8a8f/ccc41/react-native.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/3b3fe6a87e95f34c45eb3144358c8a8f/6766a/react-native.webp 128w,\\n/static/3b3fe6a87e95f34c45eb3144358c8a8f/22bfc/react-native.webp 256w,\\n/static/3b3fe6a87e95f34c45eb3144358c8a8f/d689f/react-native.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},9134:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/017493ed3796176d10206a9762509dfb/f71d6/mangrover-site.png","srcSet":"/static/017493ed3796176d10206a9762509dfb/6bcdf/mangrover-site.png 233w,\\n/static/017493ed3796176d10206a9762509dfb/5159a/mangrover-site.png 465w,\\n/static/017493ed3796176d10206a9762509dfb/f71d6/mangrover-site.png 930w","sizes":"(min-width: 930px) 930px, 100vw"},"sources":[{"srcSet":"/static/017493ed3796176d10206a9762509dfb/cd746/mangrover-site.webp 233w,\\n/static/017493ed3796176d10206a9762509dfb/76552/mangrover-site.webp 465w,\\n/static/017493ed3796176d10206a9762509dfb/592c9/mangrover-site.webp 930w","type":"image/webp","sizes":"(min-width: 930px) 930px, 100vw"}]},"width":930,"height":898.9999999999999}')},2886:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8e76bcbadce8d96036264e6b41da3303/ccc41/sass.png","srcSet":"/static/8e76bcbadce8d96036264e6b41da3303/bf8e1/sass.png 128w,\\n/static/8e76bcbadce8d96036264e6b41da3303/acb7c/sass.png 256w,\\n/static/8e76bcbadce8d96036264e6b41da3303/ccc41/sass.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8e76bcbadce8d96036264e6b41da3303/6766a/sass.webp 128w,\\n/static/8e76bcbadce8d96036264e6b41da3303/22bfc/sass.webp 256w,\\n/static/8e76bcbadce8d96036264e6b41da3303/d689f/sass.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},1893:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3b39efcc2777248a44fe1246575d62f0/ccc41/git.png","srcSet":"/static/3b39efcc2777248a44fe1246575d62f0/bf8e1/git.png 128w,\\n/static/3b39efcc2777248a44fe1246575d62f0/acb7c/git.png 256w,\\n/static/3b39efcc2777248a44fe1246575d62f0/ccc41/git.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/3b39efcc2777248a44fe1246575d62f0/6766a/git.webp 128w,\\n/static/3b39efcc2777248a44fe1246575d62f0/22bfc/git.webp 256w,\\n/static/3b39efcc2777248a44fe1246575d62f0/d689f/git.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2984:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/4a28a016e4c87087c9eecbafdc947be4/ccc41/styled-components.png","srcSet":"/static/4a28a016e4c87087c9eecbafdc947be4/bf8e1/styled-components.png 128w,\\n/static/4a28a016e4c87087c9eecbafdc947be4/acb7c/styled-components.png 256w,\\n/static/4a28a016e4c87087c9eecbafdc947be4/ccc41/styled-components.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/4a28a016e4c87087c9eecbafdc947be4/6766a/styled-components.webp 128w,\\n/static/4a28a016e4c87087c9eecbafdc947be4/22bfc/styled-components.webp 256w,\\n/static/4a28a016e4c87087c9eecbafdc947be4/d689f/styled-components.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},653:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/7b4100d313c6189b8040b03a44443163/34fe8/gpm.png","srcSet":"/static/7b4100d313c6189b8040b03a44443163/9bec7/gpm.png 960w,\\n/static/7b4100d313c6189b8040b03a44443163/afa5c/gpm.png 1920w,\\n/static/7b4100d313c6189b8040b03a44443163/34fe8/gpm.png 3840w","sizes":"(min-width: 3840px) 3840px, 100vw"},"sources":[{"srcSet":"/static/7b4100d313c6189b8040b03a44443163/bde8a/gpm.webp 960w,\\n/static/7b4100d313c6189b8040b03a44443163/c512e/gpm.webp 1920w,\\n/static/7b4100d313c6189b8040b03a44443163/bab97/gpm.webp 3840w","type":"image/webp","sizes":"(min-width: 3840px) 3840px, 100vw"}]},"width":3840,"height":2160}')},2772:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#888888","images":{"fallback":{"src":"/static/68de1e14b43a5e706b9251c9d52918b4/f6810/cats.jpg","srcSet":"/static/68de1e14b43a5e706b9251c9d52918b4/eee8e/cats.jpg 400w,\\n/static/68de1e14b43a5e706b9251c9d52918b4/1e21a/cats.jpg 800w,\\n/static/68de1e14b43a5e706b9251c9d52918b4/f6810/cats.jpg 1600w","sizes":"(min-width: 1600px) 1600px, 100vw"},"sources":[{"srcSet":"/static/68de1e14b43a5e706b9251c9d52918b4/dff21/cats.webp 400w,\\n/static/68de1e14b43a5e706b9251c9d52918b4/b2a35/cats.webp 800w,\\n/static/68de1e14b43a5e706b9251c9d52918b4/e9d78/cats.webp 1600w","type":"image/webp","sizes":"(min-width: 1600px) 1600px, 100vw"}]},"width":1600,"height":900}')},8188:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/28b9ceea00ec5b7862d5495f7f7e1e3c/ccc41/redux.png","srcSet":"/static/28b9ceea00ec5b7862d5495f7f7e1e3c/bf8e1/redux.png 128w,\\n/static/28b9ceea00ec5b7862d5495f7f7e1e3c/acb7c/redux.png 256w,\\n/static/28b9ceea00ec5b7862d5495f7f7e1e3c/ccc41/redux.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/28b9ceea00ec5b7862d5495f7f7e1e3c/6766a/redux.webp 128w,\\n/static/28b9ceea00ec5b7862d5495f7f7e1e3c/22bfc/redux.webp 256w,\\n/static/28b9ceea00ec5b7862d5495f7f7e1e3c/d689f/redux.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},9332:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5bf2e8ba1832d2a2abb113bc61f511a5/ccc41/tailwind.png","srcSet":"/static/5bf2e8ba1832d2a2abb113bc61f511a5/bf8e1/tailwind.png 128w,\\n/static/5bf2e8ba1832d2a2abb113bc61f511a5/acb7c/tailwind.png 256w,\\n/static/5bf2e8ba1832d2a2abb113bc61f511a5/ccc41/tailwind.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/5bf2e8ba1832d2a2abb113bc61f511a5/6766a/tailwind.webp 128w,\\n/static/5bf2e8ba1832d2a2abb113bc61f511a5/22bfc/tailwind.webp 256w,\\n/static/5bf2e8ba1832d2a2abb113bc61f511a5/d689f/tailwind.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},4096:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080818","images":{"fallback":{"src":"/static/c9ead5c0971e1af9d9db78b771622fee/1eb4c/perfil.jpg","srcSet":"/static/c9ead5c0971e1af9d9db78b771622fee/f6fcd/perfil.jpg 320w,\\n/static/c9ead5c0971e1af9d9db78b771622fee/a962d/perfil.jpg 640w,\\n/static/c9ead5c0971e1af9d9db78b771622fee/1eb4c/perfil.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/c9ead5c0971e1af9d9db78b771622fee/dde70/perfil.webp 320w,\\n/static/c9ead5c0971e1af9d9db78b771622fee/18e38/perfil.webp 640w,\\n/static/c9ead5c0971e1af9d9db78b771622fee/a02e4/perfil.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":852}')},5908:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/deee9796a9983b97891d175459ecfbc9/ccc41/react.png","srcSet":"/static/deee9796a9983b97891d175459ecfbc9/bf8e1/react.png 128w,\\n/static/deee9796a9983b97891d175459ecfbc9/acb7c/react.png 256w,\\n/static/deee9796a9983b97891d175459ecfbc9/ccc41/react.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/deee9796a9983b97891d175459ecfbc9/6766a/react.webp 128w,\\n/static/deee9796a9983b97891d175459ecfbc9/22bfc/react.webp 256w,\\n/static/deee9796a9983b97891d175459ecfbc9/d689f/react.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},1005:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d848","images":{"fallback":{"src":"/static/f7bf4b61c5727e25fb4ea64a93564202/ccc41/javascript.png","srcSet":"/static/f7bf4b61c5727e25fb4ea64a93564202/bf8e1/javascript.png 128w,\\n/static/f7bf4b61c5727e25fb4ea64a93564202/acb7c/javascript.png 256w,\\n/static/f7bf4b61c5727e25fb4ea64a93564202/ccc41/javascript.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/f7bf4b61c5727e25fb4ea64a93564202/6766a/javascript.webp 128w,\\n/static/f7bf4b61c5727e25fb4ea64a93564202/22bfc/javascript.webp 256w,\\n/static/f7bf4b61c5727e25fb4ea64a93564202/d689f/javascript.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},7627:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1c69bb7de2f483e7bfca5546ec7964e7/ccc41/mysql.png","srcSet":"/static/1c69bb7de2f483e7bfca5546ec7964e7/bf8e1/mysql.png 128w,\\n/static/1c69bb7de2f483e7bfca5546ec7964e7/acb7c/mysql.png 256w,\\n/static/1c69bb7de2f483e7bfca5546ec7964e7/ccc41/mysql.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/1c69bb7de2f483e7bfca5546ec7964e7/6766a/mysql.webp 128w,\\n/static/1c69bb7de2f483e7bfca5546ec7964e7/22bfc/mysql.webp 256w,\\n/static/1c69bb7de2f483e7bfca5546ec7964e7/d689f/mysql.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},592:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0fa13f929867d2945c5b18ed75b76aca/ccc41/docker.png","srcSet":"/static/0fa13f929867d2945c5b18ed75b76aca/bf8e1/docker.png 128w,\\n/static/0fa13f929867d2945c5b18ed75b76aca/acb7c/docker.png 256w,\\n/static/0fa13f929867d2945c5b18ed75b76aca/ccc41/docker.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/0fa13f929867d2945c5b18ed75b76aca/6766a/docker.webp 128w,\\n/static/0fa13f929867d2945c5b18ed75b76aca/22bfc/docker.webp 256w,\\n/static/0fa13f929867d2945c5b18ed75b76aca/d689f/docker.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d6d776f22653e4e854ed.js.map