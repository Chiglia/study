import{A as xt,B as It,C as dt,D as ve,E as _e,F as Ce,G as De,H as At,I as $,K as Qt,M as at,N as ut,O as M,P as we,S as Se,a as Et,b as ue,c as Vt,d as O,e as gt,f as Ut,k as ce,m as zt,n as Gt,o as lt,p as pe,q as he,r as Wt,s as fe,t as ge,u as qt,v as me,w as be,x as ye,y as mt,z as Mt}from"./chunk-F2DT63SY.js";import{$a as K,Aa as ft,Ba as Dt,Bb as V,Cb as de,Ga as F,Ha as D,Ia as H,Ja as Y,K as x,Ka as w,L as C,La as y,N as B,P as c,Ra as U,Sa as d,Ta as T,U as vt,Ua as I,V as Pt,Va as it,W as _t,Wa as Bt,Xa as Ot,Ya as $t,Z as ht,Za as ot,_ as re,_a as rt,a as h,ab as se,b as pt,bb as Rt,c as oe,ca as X,cb as v,db as J,ea as W,eb as G,fa as Nt,fb as wt,ga as m,gb as k,hb as P,ia as nt,ib as ae,jb as St,kb as b,lb as z,ma as Ct,mb as st,nb as Lt,ob as le,pb as A,qb as jt,sa as f,tb as q,wb as E,yb as Ht}from"./chunk-V3KYSZPX.js";function tt(...i){if(i){let s=[];for(let t=0;t<i.length;t++){let n=i[t];if(!n)continue;let e=typeof n;if(e==="string"||e==="number")s.push(n);else if(e==="object"){let o=Array.isArray(n)?[tt(...n)]:Object.entries(n).map(([r,a])=>a?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}var nn=Object.defineProperty,Ee=Object.getOwnPropertySymbols,on=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,Ve=(i,s,t)=>s in i?nn(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,Me=(i,s)=>{for(var t in s||(s={}))on.call(s,t)&&Ve(i,t,s[t]);if(Ee)for(var t of Ee(s))rn.call(s,t)&&Ve(i,t,s[t]);return i};function xe(...i){if(i){let s=[];for(let t=0;t<i.length;t++){let n=i[t];if(!n)continue;let e=typeof n;if(e==="string"||e==="number")s.push(n);else if(e==="object"){let o=Array.isArray(n)?[xe(...n)]:Object.entries(n).map(([r,a])=>a?r:void 0);s=o.length?s.concat(o.filter(r=>!!r)):s}}return s.join(" ").trim()}}function sn(i){return typeof i=="function"&&"call"in i&&"apply"in i}function an({skipUndefined:i=!1},...s){return s?.reduce((t,n={})=>{for(let e in n){let o=n[e];if(!(i&&o===void 0))if(e==="style")t.style=Me(Me({},t.style),n.style);else if(e==="class"||e==="className")t[e]=xe(t[e],n[e]);else if(sn(o)){let r=t[e];t[e]=r?(...a)=>{r(...a),o(...a)}:o}else t[e]=o}return t},{})}function Zt(...i){return an({skipUndefined:!1},...i)}var Ft={};function bt(i="pui_id_"){return Object.hasOwn(Ft,i)||(Ft[i]=0),Ft[i]++,`${i}${Ft[i]}`}var Ie=(()=>{class i extends M{name="common";static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Q=new B("PARENT_INSTANCE"),N=(()=>{class i{document=c(_t);platformId=c(Ct);el=c(nt);injector=c(Pt);cd=c(Ht);renderer=c(ft);config=c(we);$parentInstance=c(Q,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=c(Ie);baseStyle=c(M);scopedStyleEl;parent=this.$params.parent;cn=tt;_themeScopedListener;themeChangeListenerMap=new Map;dt=E();unstyled=E();pt=E();ptOptions=E();$attrSelector=bt("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=X(void 0);directiveUnstyled=X(void 0);$unstyled=q(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=q(()=>xt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>xt(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||xt(t,this.$params))}get $style(){return h(h({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){W(t=>{this.document&&!Ut(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener("_themeScopedListener")})}),W(t=>{this.document&&!Ut(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),t(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...n){return ye(t)?t(...n):Zt(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n="",e={}){return ve(t,n,e)}_hook(t,...n){if(!this.$hostName){let e=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);e?.(...n),o?.(...n)}}_load(){ut.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ut.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);mt(t)&&this.baseStyle.load(t,h({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ut.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ut.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!at.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:e,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,h({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,h({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(h({name:"global-style"},this.$styleOptions),o),at.setLoadedStyleName("common")}if(!at.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,h({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(h({name:`${this.$style?.name}-style`},this.$styleOptions),n),at.setLoadedStyleName(this.$style?.name)}if(!at.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,h({name:"layer-order",first:!0},this.$styleOptions)),at.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},e=this.$style?.load(n,h({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=e?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,n=()=>{}){this._offThemeChangeListener(t),ut.clearLoadedStyleNames();let e=n.bind(this);this.themeChangeListenerMap.set(t,e),Qt.on("theme:change",e)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(Qt.off("theme:change",this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},n="",e={},o=!0){let r=/./g.test(n)&&!!e[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},p=o?r?this._useGlobalPT(this._getPTClassValue,n,e):this._useDefaultPT(this._getPTClassValue,n,e):void 0,u=r?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,pt(h({},e),{global:p||{}})),g=this._getPTDatasets(n);return a||!a&&u?l?this._mergeProps(l,p,u,g):h(h(h({},p),u),g):h(h({},u),g)}_getPTDatasets(t=""){let n="data-pc-",e=t==="root"&&mt(this.$pt()?.["data-pc-section"]);return t!=="transition"&&pt(h({},t==="root"&&pt(h({[`${n}name`]:dt(e?this.$pt()?.["data-pc-section"]:this.$name)},e&&{[`${n}extend`]:dt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:dt(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,n,e){let o=this._getOptionValue(t,n,e);return It(o)||_e(o)?{class:o}:o}_getPT(t,n="",e){let o=(r,a=!1)=>{let l=e?e(r):r,p=dt(n),u=dt(this.$hostName||this.$name);return(a?p!==u?l?.[p]:void 0:l?.[p])??l};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:o(t.originalValue),value:o(t.value)}:o(t,!0)}_usePT(t,n,e,o){let r=a=>n?.call(this,a,e,o);if(t?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},p=r(t.originalValue),u=r(t.value);return p===void 0&&u===void 0?void 0:It(u)?u:It(p)?p:a||!a&&u?l?this._mergeProps(l,p,u):h(h({},p),u):u}return r(t)}_useGlobalPT(t,n,e){return this._usePT(this.$globalPT,t,n,e)}_useDefaultPT(t,n,e){return this._usePT(this.$defaultPT,t,n,e)}ptm(t="",n={}){return this._getPTValue(this.$pt(),t,h(h({},this.$params),n))}ptms(t,n={}){return t.reduce((e,o)=>(e=Zt(e,this.ptm(o,n))||{},e),{})}ptmo(t={},n="",e={}){return this._getPTValue(t,n,h({instance:this},e),!1)}cx(t,n={}){return this.$unstyled()?void 0:tt(this._getOptionValue(this.$style.classes,t,h(h({},this.$params),n)))}sx(t="",n=!0,e={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,t,h(h({},this.$params),e)),r=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,h(h({},this.$params),e));return h(h({},r),o)}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=H({type:i,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[A([Ie,M]),Nt]})}return i})();var Ae=(()=>{class i{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let e=n.trim().split(" ");for(let o=0;o<e.length;o++)t.classList.add(e[o])}else{let e=n.split(" ");for(let o=0;o<e.length;o++)t.className+=" "+e[o]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(e=>e.split(" ").forEach(o=>this.removeClass(t,o)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,e=0;for(var o=0;o<n.length;o++){if(n[o]==t)return e;n[o].nodeType==1&&e++}return-1}static indexWithinGroup(t,n){let e=t.parentNode?t.parentNode.childNodes:[],o=0;for(var r=0;r<e.length;r++){if(e[r]==t)return o;e[r].attributes&&e[r].attributes[n]&&e[r].nodeType==1&&o++}return-1}static appendOverlay(t,n,e="self"){e!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,e="self",o=!0){t&&n&&(o&&(t.style.minWidth=`${i.getOuterWidth(n)}px`),e==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,e=!0){let o=et=>{if(et)return getComputedStyle(et).getPropertyValue("position")==="relative"?et:o(et.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),p=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),g=this.getViewport(),S=o(t)?.getBoundingClientRect()||{top:-1*p,left:-1*u},j,Z,yt="top";l.top+a+r.height>g.height?(j=l.top-S.top-r.height,yt="bottom",l.top+j<0&&(j=-1*l.top)):(j=a+l.top-S.top,yt="top");let ie=l.left+r.width-g.width,en=l.left-S.left;if(r.width>g.width?Z=(l.left-S.left)*-1:ie>0?Z=en-ie:Z=l.left-S.left,t.style.top=j+"px",t.style.left=Z+"px",t.style.transformOrigin=yt,e){let et=pe(/-anchor-gutter$/)?.value;t.style.marginTop=yt==="bottom"?`calc(${et??"2px"} * -1)`:et??""}}static absolutePosition(t,n,e=!0){let o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=o.height,a=o.width,l=n.offsetHeight,p=n.offsetWidth,u=n.getBoundingClientRect(),g=this.getWindowScrollTop(),L=this.getWindowScrollLeft(),S=this.getViewport(),j,Z;u.top+l+r>S.height?(j=u.top+g-r,t.style.transformOrigin="bottom",j<0&&(j=g)):(j=l+u.top+g,t.style.transformOrigin="top"),u.left+a>S.width?Z=Math.max(0,u.left+L+p-a):Z=u.left+L,t.style.top=j+"px",t.style.left=Z+"px",e&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let e=this.getParents(t),o=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of e){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let p=l.split(",");for(let u of p){let g=this.findSingle(a,u);g&&r(g)&&n.push(g)}}a.nodeType!==9&&r(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),o=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,g=t.scrollTop,L=t.clientHeight,S=this.getOuterHeight(n);u<0?t.scrollTop=g+u:u+S>L&&(t.scrollTop=g+u-L+S)}static fadeIn(t,n){t.style.opacity=0;let e=+new Date,o=0,r=function(){o=+t.style.opacity.replace(",",".")+(new Date().getTime()-e)/n,t.style.opacity=o,e=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var e=1,o=50,r=n,a=o/r;let l=setInterval(()=>{e=e-a,e<=0&&(e=0,clearInterval(l)),t.style.opacity=e},o)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var e=Element.prototype,o=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(t,n)}static getOuterWidth(t,n){let e=t.offsetWidth;if(n){let o=getComputedStyle(t);e+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return e}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,e=getComputedStyle(t);return n+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),n}static width(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,e=getComputedStyle(t);return n+=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),n}static getOuterHeight(t,n){let e=t.offsetHeight;if(n){let o=getComputedStyle(t);e+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return e}static getHeight(t){let n=t.offsetHeight,e=getComputedStyle(t);return n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),n}static getViewport(){let t=window,n=document,e=n.documentElement,o=n.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||o.clientWidth,a=t.innerHeight||e.clientHeight||o.clientHeight;return{width:r,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let e=t.parentNode;if(!e)throw"Can't replace element";return e.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var e=t.indexOf("Trident/");if(e>0){var o=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let e=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=e,e}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,e){t[n].apply(t,e)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let e=this.find(t,this.getFocusableSelectorString(n)),o=[];for(let r of e){let a=getComputedStyle(r);this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(t,n=""){let e=this.findSingle(t,this.getFocusableSelectorString(n));if(e){let o=getComputedStyle(e);if(this.isVisible(e)&&o.display!="none"&&o.visibility!="hidden")return e}return null}static getFirstFocusableElement(t,n=""){let e=this.getFocusableElements(t,n);return e.length>0?e[0]:null}static getLastFocusableElement(t,n){let e=this.getFocusableElements(t,n);return e.length>0?e[e.length-1]:null}static getNextFocusableElement(t,n=!1){let e=i.getFocusableElements(t),o=0;if(e&&e.length>0){let r=e.indexOf(e[0].ownerDocument.activeElement);n?r==-1||r===0?o=e.length-1:o=r-1:r!=-1&&r!==e.length-1&&(o=r+1)}return e[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let e=typeof t;if(e==="string")return document.querySelector(t);if(e==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let e=t.getAttribute(n);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...e){if(t){let o=document.createElement(t);return this.setAttributes(o,n),o.append(...e),o}}static setAttribute(t,n="",e){this.isElement(t)&&e!==null&&e!==void 0&&t.setAttribute(n,e)}static setAttributes(t,n={}){if(this.isElement(t)){let e=(o,r)=>{let a=t?.$attrs?.[o]?[t?.$attrs?.[o]]:[];return[r].flat().reduce((l,p)=>{if(p!=null){let u=typeof p;if(u==="string"||u==="number")l.push(p);else if(u==="object"){let g=Array.isArray(p)?e(o,p):Object.entries(p).map(([L,S])=>o==="style"&&(S||S===0)?`${L.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?L:void 0);l=g.length?l.concat(g.filter(L=>!!L)):l}}return l},a)};Object.entries(n).forEach(([o,r])=>{if(r!=null){let a=o.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):o==="pBind"?this.setAttributes(t,r):(r=o==="class"?[...new Set(e("class",r))].join(" ").trim():o==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=r),t.setAttribute(o,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return i})();var Fe=(()=>{class i extends N{autofocus=!1;focused=!1;platformId=c(Ct);document=c(_t);host=c(nt);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){gt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ae.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275dir=H({type:i,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return i})();var _=(()=>{class i{el;renderer;pBind=E(void 0);_attrs=X(void 0);attrs=q(()=>this._attrs()||this.pBind());styles=q(()=>this.attrs()?.style);classes=q(()=>tt(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,W(()=>{let a=this.attrs()||{},{style:e,class:o}=a,r=oe(a,["style","class"]);for(let[l,p]of Object.entries(r))if(l.startsWith("on")&&typeof p=="function"){let u=l.slice(2).toLowerCase();if(!this.listeners.some(g=>g.eventName===u)){let g=this.renderer.listen(this.el.nativeElement,u,p);this.listeners.push({eventName:u,unlisten:g})}}else p==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,p.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=p))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Mt(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(n){return new(n||i)(Dt(nt),Dt(ft))};static \u0275dir=H({type:i,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,e){n&2&&(St(e.styles()),b(e.classes()))},inputs:{pBind:[1,"pBind"]}})}return i})(),ct=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({})}return i})();var Te=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ln=`
    ${Te}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,dn={root:({instance:i})=>{let s=typeof i.value=="function"?i.value():i.value,t=typeof i.size=="function"?i.size():i.size,n=typeof i.badgeSize=="function"?i.badgeSize():i.badgeSize,e=typeof i.severity=="function"?i.severity():i.severity;return["p-badge p-component",{"p-badge-circle":mt(s)&&String(s).length===1,"p-badge-dot":be(s),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":e==="info","p-badge-success":e==="success","p-badge-warn":e==="warn","p-badge-danger":e==="danger","p-badge-secondary":e==="secondary","p-badge-contrast":e==="contrast"}]}},ke=(()=>{class i extends M{name="badge";style=ln;classes=dn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Pe=new B("BADGE_INSTANCE");var Xt=(()=>{class i extends N{componentName="Badge";$pcBadge=c(Pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=E();badgeSize=E();size=E();severity=E();value=E();badgeDisabled=E(!1,{transform:V});_componentStyle=c(ke);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,e){n&2&&(U("data-p",e.dataP),b(e.cn(e.cx("root"),e.styleClass())),ae("display",e.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([ke,{provide:Pe,useExisting:i},{provide:Q,useExisting:i}]),Y([_]),w],decls:1,vars:1,template:function(n,e){n&1&&z(0),n&2&&st(e.value())},dependencies:[O,$,ct],encapsulation:2,changeDetection:0})}return i})(),Ne=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[Xt,$,$]})}return i})();var cn=["*"],pn={root:"p-fluid"},Be=(()=>{class i extends M{name="fluid";classes=pn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Oe=new B("FLUID_INSTANCE"),$e=(()=>{class i extends N{componentName="Fluid";$pcFluid=c(Oe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(Be);static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,e){n&2&&b(e.cx("root"))},features:[A([Be,{provide:Oe,useExisting:i},{provide:Q,useExisting:i}]),Y([_]),w],ngContentSelectors:cn,decls:1,vars:0,template:function(n,e){n&1&&(J(),G(0))},dependencies:[O],encapsulation:2,changeDetection:0})}return i})();var hn=["*"],fn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Re=(()=>{class i extends M{name="baseicon";css=fn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Le=(()=>{class i extends N{spin=!1;_componentStyle=c(Re);getClassNames(){return tt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,e){n&2&&b(e.getClassNames())},inputs:{spin:[2,"spin","spin",V]},features:[A([Re]),w],ngContentSelectors:hn,decls:1,vars:0,template:function(n,e){n&1&&(J(),G(0))},encapsulation:2,changeDetection:0})}return i})();var gn=["data-p-icon","spinner"],je=(()=>{class i extends Le{pathId;onInit(){this.pathId="url(#"+bt()+")"}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:gn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,e){n&1&&(vt(),Bt(0,"g"),$t(1,"path",0),Ot(),Bt(2,"defs")(3,"clipPath",1),$t(4,"rect",2),Ot()()),n&2&&(U("clip-path",e.pathId),f(3),se("id",e.pathId))},encapsulation:2})}return i})();var He=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var mn=`
    ${He}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,bn={root:"p-ink"},Ue=(()=>{class i extends M{name="ripple";style=mn;classes=bn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var ze=(()=>{class i extends N{componentName="Ripple";zone=c(re);_componentStyle=c(Ue);animationListener;mouseDownListener;timeout;constructor(){super(),W(()=>{gt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&lt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Wt(n)&&!qt(n)){let a=Math.max(he(this.el.nativeElement),ge(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let e=fe(this.el.nativeElement),o=t.pageX-e.left+this.document.body.scrollTop-qt(n)/2,r=t.pageY-e.top+this.document.body.scrollLeft-Wt(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&Gt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&lt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&lt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&lt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,me(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=H({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Ue]),w]})}return i})();var Ge=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var _n=["content"],Cn=["loadingicon"],Dn=["icon"],wn=["*"],Qe=(i,s)=>({class:i,pt:s});function Sn(i,s){i&1&&K(0)}function En(i,s){if(i&1&&it(0,"span",7),i&2){let t=v(3);b(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),d("pBind",t.ptm("loadingIcon")),U("aria-hidden",!0)}}function Vn(i,s){if(i&1&&(vt(),it(0,"svg",8)),i&2){let t=v(3);b(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),d("pBind",t.ptm("loadingIcon"))("spin",!0),U("aria-hidden",!0)}}function Mn(i,s){if(i&1&&(ot(0),y(1,En,1,4,"span",3)(2,Vn,1,5,"svg",6),rt()),i&2){let t=v(2);f(),d("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),f(),d("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function xn(i,s){}function In(i,s){if(i&1&&y(0,xn,0,0,"ng-template",9),i&2){let t=v(2);d("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function An(i,s){if(i&1&&(ot(0),y(1,Mn,3,2,"ng-container",2)(2,In,1,1,null,5),rt()),i&2){let t=v();f(),d("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),f(),d("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",jt(3,Qe,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function Fn(i,s){if(i&1&&it(0,"span",7),i&2){let t=v(2);b(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),d("pBind",t.ptm("icon")),U("data-p",t.dataIconP)}}function Tn(i,s){}function kn(i,s){if(i&1&&y(0,Tn,0,0,"ng-template",9),i&2){let t=v(2);d("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Pn(i,s){if(i&1&&(ot(0),y(1,Fn,1,4,"span",3)(2,kn,1,1,null,5),rt()),i&2){let t=v();f(),d("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),f(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",jt(3,Qe,t.cx("icon"),t.ptm("icon")))}}function Nn(i,s){if(i&1&&(T(0,"span",7),z(1),I()),i&2){let t=v();b(t.cx("label")),d("pBind",t.ptm("label")),U("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),f(),st(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Bn(i,s){if(i&1&&it(0,"p-badge",10),i&2){let t=v();d("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var On={root:({instance:i})=>["p-button p-component",{"p-button-icon-only":i.hasIcon&&!i.label&&!i.buttonProps?.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading||i.buttonProps?.loading,"p-button-link":i.link||i.buttonProps?.link,[`p-button-${i.severity||i.buttonProps?.severity}`]:i.severity||i.buttonProps?.severity,"p-button-raised":i.raised||i.buttonProps?.raised,"p-button-rounded":i.rounded||i.buttonProps?.rounded,"p-button-text":i.text||i.variant==="text"||i.buttonProps?.text||i.buttonProps?.variant==="text","p-button-outlined":i.outlined||i.variant==="outlined"||i.buttonProps?.outlined||i.buttonProps?.variant==="outlined","p-button-sm":i.size==="small"||i.buttonProps?.size==="small","p-button-lg":i.size==="large"||i.buttonProps?.size==="large","p-button-plain":i.plain||i.buttonProps?.plain,"p-button-fluid":i.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:i})=>["p-button-icon",{[`p-button-icon-${i.iconPos||i.buttonProps?.iconPos}`]:i.label||i.buttonProps?.label,"p-button-icon-left":(i.iconPos==="left"||i.buttonProps?.iconPos==="left")&&i.label||i.buttonProps?.label,"p-button-icon-right":(i.iconPos==="right"||i.buttonProps?.iconPos==="right")&&i.label||i.buttonProps?.label,"p-button-icon-top":(i.iconPos==="top"||i.buttonProps?.iconPos==="top")&&i.label||i.buttonProps?.label,"p-button-icon-bottom":(i.iconPos==="bottom"||i.buttonProps?.iconPos==="bottom")&&i.label||i.buttonProps?.label},i.icon,i.buttonProps?.icon],spinnerIcon:({instance:i})=>Object.entries(i.cx("icon")).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},We=(()=>{class i extends M{name="button";style=Ge;classes=On;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var qe=new B("BUTTON_INSTANCE");var Yt=(()=>{class i extends N{componentName="Button";hostName="";$pcButton=c(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});_componentStyle=c(We);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=E(void 0,{transform:V});onClick=new ht;onFocus=new ht;onBlur=new ht;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=c($e,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["p-button"]],contentQueries:function(n,e,o){if(n&1&&wt(o,_n,5)(o,Cn,5)(o,Dn,5)(o,At,4),n&2){let r;k(r=P())&&(e.contentTemplate=r.first),k(r=P())&&(e.loadingIconTemplate=r.first),k(r=P())&&(e.iconTemplate=r.first),k(r=P())&&(e.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",V],raised:[2,"raised","raised",V],rounded:[2,"rounded","rounded",V],text:[2,"text","text",V],plain:[2,"plain","plain",V],outlined:[2,"outlined","outlined",V],link:[2,"link","link",V],tabindex:[2,"tabindex","tabindex",de],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",V],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",V],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([We,{provide:qe,useExisting:i},{provide:Q,useExisting:i}]),Y([_]),w],ngContentSelectors:wn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,e){n&1&&(J(),T(0,"button",0),Rt("click",function(r){return e.onClick.emit(r)})("focus",function(r){return e.onFocus.emit(r)})("blur",function(r){return e.onBlur.emit(r)}),G(1),y(2,Sn,1,0,"ng-container",1)(3,An,3,6,"ng-container",2)(4,Pn,3,6,"ng-container",2)(5,Nn,2,6,"span",3)(6,Bn,1,4,"p-badge",4),I()),n&2&&(b(e.cn(e.cx("root"),e.styleClass,e.buttonProps==null?null:e.buttonProps.styleClass)),d("ngStyle",e.style||(e.buttonProps==null?null:e.buttonProps.style))("disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("pAutoFocus",e.autofocus||(e.buttonProps==null?null:e.buttonProps.autofocus))("pBind",e.ptm("root")),U("type",e.type||(e.buttonProps==null?null:e.buttonProps.type))("aria-label",e.ariaLabel||(e.buttonProps==null?null:e.buttonProps.ariaLabel))("tabindex",e.tabindex||(e.buttonProps==null?null:e.buttonProps.tabindex))("data-p",e.dataP)("data-p-disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("data-p-severity",e.severity||(e.buttonProps==null?null:e.buttonProps.severity)),f(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),f(),d("ngIf",e.loading||(e.buttonProps==null?null:e.buttonProps.loading)),f(),d("ngIf",!(e.loading||e.buttonProps!=null&&e.buttonProps.loading)),f(),d("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.label||(e.buttonProps==null?null:e.buttonProps.label))),f(),d("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.badge||(e.buttonProps==null?null:e.buttonProps.badge))))},dependencies:[O,Et,Vt,ue,ze,Fe,je,Ne,Xt,$,_],encapsulation:2,changeDetection:0})}return i})(),Kt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[O,Yt,$,$]})}return i})();var Ze=new B("",{factory:()=>Jt}),Jt="always";var Rn=new B("");var Xe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({})}return i})();var te=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ze,useValue:t.callSetDisabledState??Jt}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[Xe]})}return i})(),ee=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Rn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Ze,useValue:t.callSetDisabledState??Jt}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[Xe]})}return i})();var Ye=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Ln=["header"],jn=["title"],Hn=["subtitle"],Un=["content"],zn=["footer"],Gn=["*",[["p-header"]],[["p-footer"]]],Wn=["*","p-header","p-footer"];function qn(i,s){i&1&&K(0)}function Qn(i,s){if(i&1&&(T(0,"div",1),G(1,1),y(2,qn,1,0,"ng-container",2),I()),i&2){let t=v();b(t.cx("header")),d("pBind",t.ptm("header")),f(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Zn(i,s){if(i&1&&(ot(0),z(1),rt()),i&2){let t=v(2);f(),st(t.header)}}function Xn(i,s){i&1&&K(0)}function Yn(i,s){if(i&1&&(T(0,"div",1),y(1,Zn,2,1,"ng-container",3)(2,Xn,1,0,"ng-container",2),I()),i&2){let t=v();b(t.cx("title")),d("pBind",t.ptm("title")),f(),d("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),f(),d("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Kn(i,s){if(i&1&&(ot(0),z(1),rt()),i&2){let t=v(2);f(),st(t.subheader)}}function Jn(i,s){i&1&&K(0)}function ti(i,s){if(i&1&&(T(0,"div",1),y(1,Kn,2,1,"ng-container",3)(2,Jn,1,0,"ng-container",2),I()),i&2){let t=v();b(t.cx("subtitle")),d("pBind",t.ptm("subtitle")),f(),d("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),f(),d("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ei(i,s){i&1&&K(0)}function ni(i,s){i&1&&K(0)}function ii(i,s){if(i&1&&(T(0,"div",1),G(1,2),y(2,ni,1,0,"ng-container",2),I()),i&2){let t=v();b(t.cx("footer")),d("pBind",t.ptm("footer")),f(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var oi=`
    ${Ye}

    .p-card {
        display: block;
    }
`,ri={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ke=(()=>{class i extends M{name="card";style=oi;classes=ri;static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Je=new B("CARD_INSTANCE"),si=(()=>{class i extends N{componentName="Card";$pcCard=c(Je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});_componentStyle=c(Ke);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){Mt(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(n=>{this.el.nativeElement.style[n]=t[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=X(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=m(i)))(e||i)}})();static \u0275cmp=F({type:i,selectors:[["p-card"]],contentQueries:function(n,e,o){if(n&1&&wt(o,Ce,5)(o,De,5)(o,Ln,4)(o,jn,4)(o,Hn,4)(o,Un,4)(o,zn,4)(o,At,4),n&2){let r;k(r=P())&&(e.headerFacet=r.first),k(r=P())&&(e.footerFacet=r.first),k(r=P())&&(e.headerTemplate=r.first),k(r=P())&&(e.titleTemplate=r.first),k(r=P())&&(e.subtitleTemplate=r.first),k(r=P())&&(e.contentTemplate=r.first),k(r=P())&&(e.footerTemplate=r.first),k(r=P())&&(e.templates=r)}},hostVars:4,hostBindings:function(n,e){n&2&&(St(e._style()),b(e.cn(e.cx("root"),e.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[A([Ke,{provide:Je,useExisting:i},{provide:Q,useExisting:i}]),Y([_]),w],ngContentSelectors:Wn,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,e){n&1&&(J(Gn),y(0,Qn,3,4,"div",0),T(1,"div",1),y(2,Yn,3,5,"div",0)(3,ti,3,5,"div",0),T(4,"div",1),G(5),y(6,ei,1,0,"ng-container",2),I(),y(7,ii,3,4,"div",0),I()),n&2&&(d("ngIf",e.headerFacet||e.headerTemplate||e._headerTemplate),f(),b(e.cx("body")),d("pBind",e.ptm("body")),f(),d("ngIf",e.header||e.titleTemplate||e._titleTemplate),f(),d("ngIf",e.subheader||e.subtitleTemplate||e._subtitleTemplate),f(),b(e.cx("content")),d("pBind",e.ptm("content")),f(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),f(),d("ngIf",e.footerFacet||e.footerTemplate||e._footerTemplate))},dependencies:[O,Et,Vt,$,ct,_],encapsulation:2,changeDetection:0})}return i})(),ne=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[si,$,ct,$,ct]})}return i})();var kt=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[O,te,ee,zt,Kt,ne,O,te,ee,zt,Kt,ne]})};function ai(i,s){if(i&1&&(T(0,"div",1)(1,"h1",2),z(2,"404"),I(),T(3,"p",3),z(4),I(),T(5,"p",4),z(6),I(),it(7,"p-button",5),I()),i&2){let t=s.$implicit;f(4),Lt(" ",t("errors.pageNotFound.title")," "),f(2),Lt(" ",t("errors.pageNotFound.description")," "),f(),d("label",le(t("common.backToHome")))}}var tn=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["app-page-not-found"]],decls:1,vars:0,consts:[["class","flex flex-col items-center justify-center min-h-[80vh] px-4 text-center",4,"transloco"],[1,"flex","flex-col","items-center","justify-center","min-h-[80vh]","px-4","text-center"],[1,"text-9xl","font-black","text-primary/20","select-none"],[1,"text-2xl","md:text-3xl","font-bold","mt-4","text-surface-900","dark:text-surface-0"],[1,"text-surface-600","dark:text-surface-400","mt-2","mb-8","max-w-md"],["routerLink","/","icon","pi pi-home","severity","primary",3,"label"]],template:function(t,n){t&1&&y(0,ai,8,4,"div",0)},dependencies:[kt,ce,Yt,Se],encapsulation:2})};export{tn as PageNotFound};
