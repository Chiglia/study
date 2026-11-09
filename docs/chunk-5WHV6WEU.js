import{A as ct,B as w,C as Se,E as xe,a as Rt,b as lt,c as ue,d as pe,e as Wt,f as be,g as he,h as Ut,i as ge,j as fe,k as me,l as bt,m as kt,n as It,o as Pt,p as dt,q as ye,r as ve,s as Ce,t as _e,u as Et,v as L,x as qt,z as st}from"./chunk-LNYU2C6W.js";import{m as jt,n as Ht}from"./chunk-FUTYN3I2.js";import{$ as S,Aa as U,Ba as St,Ca as B,D as mt,Da as D,E as te,Ea as re,F as yt,Ga as xt,H as vt,Ha as m,I as ee,Ia as V,Ja as rt,K as et,Ka as Lt,L as q,M as ne,N as f,O as at,P as Ct,Qa as se,R as b,Ra as N,U as _t,Ua as Ot,V as Ft,X as P,Y as $,Ya as K,Z as R,_ as Z,_a as x,a as h,aa as y,ab as ae,b as ft,bb as k,c as Jt,cb as le,ea as W,eb as wt,fb as de,gb as Tt,ib as A,jb as pt,kb as zt,la as d,ma as E,na as T,oa as nt,pa as Mt,qa as $t,qb as ce,ra as At,sa as ot,ta as it,tb as Vt,ua as X,v as I,w as M,wa as oe,x as H,xa as ie,ya as v,z as u,za as Y}from"./chunk-BXRXAJF7.js";function J(...o){if(o){let s=[];for(let t=0;t<o.length;t++){let n=o[t];if(!n)continue;let e=typeof n;if(e==="string"||e==="number")s.push(n);else if(e==="object"){let i=Array.isArray(n)?[J(...n)]:Object.entries(n).map(([r,a])=>a?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(" ").trim()}}var Je=Object.defineProperty,we=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,Te=(o,s,t)=>s in o?Je(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,ke=(o,s)=>{for(var t in s||(s={}))tn.call(s,t)&&Te(o,t,s[t]);if(we)for(var t of we(s))en.call(s,t)&&Te(o,t,s[t]);return o};function Ie(...o){if(o){let s=[];for(let t=0;t<o.length;t++){let n=o[t];if(!n)continue;let e=typeof n;if(e==="string"||e==="number")s.push(n);else if(e==="object"){let i=Array.isArray(n)?[Ie(...n)]:Object.entries(n).map(([r,a])=>a?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(" ").trim()}}function nn(o){return typeof o=="function"&&"call"in o&&"apply"in o}function on({skipUndefined:o=!1},...s){return s?.reduce((t,n={})=>{for(let e in n){let i=n[e];if(!(o&&i===void 0))if(e==="style")t.style=ke(ke({},t.style),n.style);else if(e==="class"||e==="className")t[e]=Ie(t[e],n[e]);else if(nn(i)){let r=t[e];t[e]=r?(...a)=>{r(...a),i(...a)}:i}else t[e]=i}return t},{})}function Qt(...o){return on({skipUndefined:!1},...o)}var Bt={};function ht(o="pui_id_"){return Object.hasOwn(Bt,o)||(Bt[o]=0),Bt[o]++,`${o}${Bt[o]}`}var Pe=(()=>{class o extends w{name="common";static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Q=new H("PARENT_INSTANCE"),F=(()=>{class o{document=u(yt);platformId=u(Ct);el=u(at);injector=u(te);cd=u(ae);renderer=u(_t);config=u(Se);$parentInstance=u(Q,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=u(Pe);baseStyle=u(w);scopedStyleEl;parent=this.$params.parent;cn=J;_themeScopedListener;themeChangeListenerMap=new Map;dt=x();unstyled=x();pt=x();ptOptions=x();$attrSelector=ht("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=et(void 0);directiveUnstyled=et(void 0);$unstyled=K(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=K(()=>It(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>It(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||It(t,this.$params))}get $style(){return h(h({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){q(t=>{this.document&&!zt(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener("_themeScopedListener")})}),q(t=>{this.document&&!zt(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),t(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...n){return me(t)?t(...n):Qt(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n="",e={}){return ye(t,n,e)}_hook(t,...n){if(!this.$hostName){let e=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);e?.(...n),i?.(...n)}}_load(){ct.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ct.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);bt(t)&&this.baseStyle.load(t,h({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ct.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ct.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!st.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:e,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,h({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,h({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(h({name:"global-style"},this.$styleOptions),i),st.setLoadedStyleName("common")}if(!st.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,h({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(h({name:`${this.$style?.name}-style`},this.$styleOptions),n),st.setLoadedStyleName(this.$style?.name)}if(!st.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,h({name:"layer-order",first:!0},this.$styleOptions)),st.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},e=this.$style?.load(n,h({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=e?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,n=()=>{}){this._offThemeChangeListener(t),ct.clearLoadedStyleNames();let e=n.bind(this);this.themeChangeListenerMap.set(t,e),qt.on("theme:change",e)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(qt.off("theme:change",this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},n="",e={},i=!0){let r=/./g.test(n)&&!!e[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},p=i?r?this._useGlobalPT(this._getPTClassValue,n,e):this._useDefaultPT(this._getPTClassValue,n,e):void 0,c=r?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,ft(h({},e),{global:p||{}})),g=this._getPTDatasets(n);return a||!a&&c?l?this._mergeProps(l,p,c,g):h(h(h({},p),c),g):h(h({},c),g)}_getPTDatasets(t=""){let n="data-pc-",e=t==="root"&&bt(this.$pt()?.["data-pc-section"]);return t!=="transition"&&ft(h({},t==="root"&&ft(h({[`${n}name`]:dt(e?this.$pt()?.["data-pc-section"]:this.$name)},e&&{[`${n}extend`]:dt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:dt(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,n,e){let i=this._getOptionValue(t,n,e);return Pt(i)||ve(i)?{class:i}:i}_getPT(t,n="",e){let i=(r,a=!1)=>{let l=e?e(r):r,p=dt(n),c=dt(this.$hostName||this.$name);return(a?p!==c?l?.[p]:void 0:l?.[p])??l};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)}_usePT(t,n,e,i){let r=a=>n?.call(this,a,e,i);if(t?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},p=r(t.originalValue),c=r(t.value);return p===void 0&&c===void 0?void 0:Pt(c)?c:Pt(p)?p:a||!a&&c?l?this._mergeProps(l,p,c):h(h({},p),c):c}return r(t)}_useGlobalPT(t,n,e){return this._usePT(this.$globalPT,t,n,e)}_useDefaultPT(t,n,e){return this._usePT(this.$defaultPT,t,n,e)}ptm(t="",n={}){return this._getPTValue(this.$pt(),t,h(h({},this.$params),n))}ptms(t,n={}){return t.reduce((e,i)=>(e=Qt(e,this.ptm(i,n))||{},e),{})}ptmo(t={},n="",e={}){return this._getPTValue(t,n,h({instance:this},e),!1)}cx(t,n={}){return this.$unstyled()?void 0:J(this._getOptionValue(this.$style.classes,t,h(h({},this.$params),n)))}sx(t="",n=!0,e={}){if(n){let i=this._getOptionValue(this.$style.inlineStyles,t,h(h({},this.$params),e)),r=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,h(h({},this.$params),e));return h(h({},r),i)}}static \u0275fac=function(n){return new(n||o)};static \u0275dir=R({type:o,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[N([Pe,w]),ne]})}return o})();var Ee=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let e=n.trim().split(" ");for(let i=0;i<e.length;i++)t.classList.add(e[i])}else{let e=n.split(" ");for(let i=0;i<e.length;i++)t.className+=" "+e[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(e=>e.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,e=0;for(var i=0;i<n.length;i++){if(n[i]==t)return e;n[i].nodeType==1&&e++}return-1}static indexWithinGroup(t,n){let e=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<e.length;r++){if(e[r]==t)return i;e[r].attributes&&e[r].attributes[n]&&e[r].nodeType==1&&i++}return-1}static appendOverlay(t,n,e="self"){e!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,e="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${o.getOuterWidth(n)}px`),e==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,e=!0){let i=tt=>{if(tt)return getComputedStyle(tt).getPropertyValue("position")==="relative"?tt:i(tt.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),p=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),g=this.getViewport(),_=i(t)?.getBoundingClientRect()||{top:-1*p,left:-1*c},z,G,gt="top";l.top+a+r.height>g.height?(z=l.top-_.top-r.height,gt="bottom",l.top+z<0&&(z=-1*l.top)):(z=a+l.top-_.top,gt="top");let Kt=l.left+r.width-g.width,Ke=l.left-_.left;if(r.width>g.width?G=(l.left-_.left)*-1:Kt>0?G=Ke-Kt:G=l.left-_.left,t.style.top=z+"px",t.style.left=G+"px",t.style.transformOrigin=gt,e){let tt=ue(/-anchor-gutter$/)?.value;t.style.marginTop=gt==="bottom"?`calc(${tt??"2px"} * -1)`:tt??""}}static absolutePosition(t,n,e=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,a=i.width,l=n.offsetHeight,p=n.offsetWidth,c=n.getBoundingClientRect(),g=this.getWindowScrollTop(),O=this.getWindowScrollLeft(),_=this.getViewport(),z,G;c.top+l+r>_.height?(z=c.top+g-r,t.style.transformOrigin="bottom",z<0&&(z=g)):(z=l+c.top+g,t.style.transformOrigin="top"),c.left+a>_.width?G=Math.max(0,c.left+O+p-a):G=c.left+O,t.style.top=z+"px",t.style.left=G+"px",e&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let e=this.getParents(t),i=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of e){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let p=l.split(",");for(let c of p){let g=this.findSingle(a,c);g&&r(g)&&n.push(g)}}a.nodeType!==9&&r(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,g=t.scrollTop,O=t.clientHeight,_=this.getOuterHeight(n);c<0?t.scrollTop=g+c:c+_>O&&(t.scrollTop=g+c-O+_)}static fadeIn(t,n){t.style.opacity=0;let e=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-e)/n,t.style.opacity=i,e=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var e=1,i=50,r=n,a=i/r;let l=setInterval(()=>{e=e-a,e<=0&&(e=0,clearInterval(l)),t.style.opacity=e},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var e=Element.prototype,i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let e=t.offsetWidth;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,e=getComputedStyle(t);return n+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),n}static width(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,e=getComputedStyle(t);return n+=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),n}static getOuterHeight(t,n){let e=t.offsetHeight;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}static getHeight(t){let n=t.offsetHeight,e=getComputedStyle(t);return n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),n}static getViewport(){let t=window,n=document,e=n.documentElement,i=n.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||i.clientWidth,a=t.innerHeight||e.clientHeight||i.clientHeight;return{width:r,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let e=t.parentNode;if(!e)throw"Can't replace element";return e.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var e=t.indexOf("Trident/");if(e>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let e=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=e,e}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,e){t[n].apply(t,e)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let e=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let r of e){let a=getComputedStyle(r);this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,n=""){let e=this.findSingle(t,this.getFocusableSelectorString(n));if(e){let i=getComputedStyle(e);if(this.isVisible(e)&&i.display!="none"&&i.visibility!="hidden")return e}return null}static getFirstFocusableElement(t,n=""){let e=this.getFocusableElements(t,n);return e.length>0?e[0]:null}static getLastFocusableElement(t,n){let e=this.getFocusableElements(t,n);return e.length>0?e[e.length-1]:null}static getNextFocusableElement(t,n=!1){let e=o.getFocusableElements(t),i=0;if(e&&e.length>0){let r=e.indexOf(e[0].ownerDocument.activeElement);n?r==-1||r===0?i=e.length-1:i=r-1:r!=-1&&r!==e.length-1&&(i=r+1)}return e[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let e=typeof t;if(e==="string")return document.querySelector(t);if(e==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let e=t.getAttribute(n);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...e){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...e),i}}static setAttribute(t,n="",e){this.isElement(t)&&e!==null&&e!==void 0&&t.setAttribute(n,e)}static setAttributes(t,n={}){if(this.isElement(t)){let e=(i,r)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((l,p)=>{if(p!=null){let c=typeof p;if(c==="string"||c==="number")l.push(p);else if(c==="object"){let g=Array.isArray(p)?e(i,p):Object.entries(p).map(([O,_])=>i==="style"&&(_||_===0)?`${O.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${_}`:_?O:void 0);l=g.length?l.concat(g.filter(O=>!!O)):l}}return l},a)};Object.entries(n).forEach(([i,r])=>{if(r!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(e("class",r))].join(" ").trim():i==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return o})();var Be=(()=>{class o extends F{autofocus=!1;focused=!1;platformId=u(Ct);document=u(yt);host=u(at);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){pt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ee.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275dir=R({type:o,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[S]})}return o})();var C=(()=>{class o{el;renderer;pBind=x(void 0);_attrs=et(void 0);attrs=K(()=>this._attrs()||this.pBind());styles=K(()=>this.attrs()?.style);classes=K(()=>J(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,q(()=>{let a=this.attrs()||{},{style:e,class:i}=a,r=Jt(a,["style","class"]);for(let[l,p]of Object.entries(r))if(l.startsWith("on")&&typeof p=="function"){let c=l.slice(2).toLowerCase();if(!this.listeners.some(g=>g.eventName===c)){let g=this.renderer.listen(this.el.nativeElement,c,p);this.listeners.push({eventName:c,unlisten:g})}}else p==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,p.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=p))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){kt(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(n){return new(n||o)(Ft(at),Ft(_t))};static \u0275dir=R({type:o,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,e){n&2&&(xt(e.styles()),m(e.classes()))},inputs:{pBind:[1,"pBind"]}})}return o})(),ut=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=$({type:o});static \u0275inj=M({})}return o})();var De=`
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
`;var rn=`
    ${De}

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
`,sn={root:({instance:o})=>{let s=typeof o.value=="function"?o.value():o.value,t=typeof o.size=="function"?o.size():o.size,n=typeof o.badgeSize=="function"?o.badgeSize():o.badgeSize,e=typeof o.severity=="function"?o.severity():o.severity;return["p-badge p-component",{"p-badge-circle":bt(s)&&String(s).length===1,"p-badge-dot":fe(s),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":e==="info","p-badge-success":e==="success","p-badge-warn":e==="warn","p-badge-danger":e==="danger","p-badge-secondary":e==="secondary","p-badge-contrast":e==="contrast"}]}},Ne=(()=>{class o extends w{name="badge";style=rn;classes=sn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var Fe=new H("BADGE_INSTANCE");var Gt=(()=>{class o extends F{componentName="Badge";$pcBadge=u(Fe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=x();badgeSize=x();size=x();severity=x();value=x();badgeDisabled=x(!1,{transform:k});_componentStyle=u(Ne);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,e){n&2&&(W("data-p",e.dataP),m(e.cn(e.cx("root"),e.styleClass())),re("display",e.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[N([Ne,{provide:Fe,useExisting:o},{provide:Q,useExisting:o}]),Z([C]),S],decls:1,vars:1,template:function(n,e){n&1&&V(0),n&2&&rt(e.value())},dependencies:[A,L,ut],encapsulation:2,changeDetection:0})}return o})(),Me=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=$({type:o});static \u0275inj=M({imports:[Gt,L,L]})}return o})();var ln=["*"],dn={root:"p-fluid"},$e=(()=>{class o extends w{name="fluid";classes=dn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var Ae=new H("FLUID_INSTANCE"),Le=(()=>{class o extends F{componentName="Fluid";$pcFluid=u(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=u($e);static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,e){n&2&&m(e.cx("root"))},features:[N([$e,{provide:Ae,useExisting:o},{provide:Q,useExisting:o}]),Z([C]),S],ngContentSelectors:ln,decls:1,vars:0,template:function(n,e){n&1&&(Y(),U(0))},dependencies:[A],encapsulation:2,changeDetection:0})}return o})();var cn=["*"],un=`
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
`,Oe=(()=>{class o extends w{name="baseicon";css=un;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ze=(()=>{class o extends F{spin=!1;_componentStyle=u(Oe);getClassNames(){return J("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,e){n&2&&m(e.getClassNames())},inputs:{spin:[2,"spin","spin",k]},features:[N([Oe]),S],ngContentSelectors:cn,decls:1,vars:0,template:function(n,e){n&1&&(Y(),U(0))},encapsulation:2,changeDetection:0})}return o})();var pn=["data-p-icon","spinner"],Ve=(()=>{class o extends ze{pathId;onInit(){this.pathId="url(#"+ht()+")"}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["","data-p-icon","spinner"]],features:[S],attrs:pn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,e){n&1&&(mt(),Mt(0,"g"),At(1,"path",0),$t(),Mt(2,"defs")(3,"clipPath",1),At(4,"rect",2),$t()()),n&2&&(W("clip-path",e.pathId),b(3),oe("id",e.pathId))},encapsulation:2})}return o})();var je=`
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
`;var bn=`
    ${je}

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
`,hn={root:"p-ink"},He=(()=>{class o extends w{name="ripple";style=bn;classes=hn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var Re=(()=>{class o extends F{componentName="Ripple";zone=u(ee);_componentStyle=u(He);animationListener;mouseDownListener;timeout;constructor(){super(),q(()=>{pt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&lt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Wt(n)&&!Ut(n)){let a=Math.max(pe(this.el.nativeElement),he(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let e=be(this.el.nativeElement),i=t.pageX-e.left+this.document.body.scrollTop-Ut(n)/2,r=t.pageY-e.top+this.document.body.scrollLeft-Wt(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",i+"px"),!this.$unstyled()&&Rt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&lt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&lt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&lt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ge(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||o)};static \u0275dir=R({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[N([He]),S]})}return o})();var We=`
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
`;var fn=["content"],mn=["loadingicon"],yn=["icon"],vn=["*"],Qe=(o,s)=>({class:o,pt:s});function Cn(o,s){o&1&&X(0)}function _n(o,s){if(o&1&&nt(0,"span",7),o&2){let t=v(3);m(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),d("pBind",t.ptm("loadingIcon")),W("aria-hidden",!0)}}function Sn(o,s){if(o&1&&(mt(),nt(0,"svg",8)),o&2){let t=v(3);m(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),d("pBind",t.ptm("loadingIcon"))("spin",!0),W("aria-hidden",!0)}}function xn(o,s){if(o&1&&(ot(0),y(1,_n,1,4,"span",3)(2,Sn,1,5,"svg",6),it()),o&2){let t=v(2);b(),d("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),b(),d("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function wn(o,s){}function Tn(o,s){if(o&1&&y(0,wn,0,0,"ng-template",9),o&2){let t=v(2);d("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function kn(o,s){if(o&1&&(ot(0),y(1,xn,3,2,"ng-container",2)(2,Tn,1,1,null,5),it()),o&2){let t=v();b(),d("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),b(),d("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ot(3,Qe,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function In(o,s){if(o&1&&nt(0,"span",7),o&2){let t=v(2);m(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),d("pBind",t.ptm("icon")),W("data-p",t.dataIconP)}}function Pn(o,s){}function En(o,s){if(o&1&&y(0,Pn,0,0,"ng-template",9),o&2){let t=v(2);d("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Bn(o,s){if(o&1&&(ot(0),y(1,In,1,4,"span",3)(2,En,1,1,null,5),it()),o&2){let t=v();b(),d("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),b(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ot(3,Qe,t.cx("icon"),t.ptm("icon")))}}function Dn(o,s){if(o&1&&(E(0,"span",7),V(1),T()),o&2){let t=v();m(t.cx("label")),d("pBind",t.ptm("label")),W("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),b(),rt(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Nn(o,s){if(o&1&&nt(0,"p-badge",10),o&2){let t=v();d("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var Fn={root:({instance:o})=>["p-button p-component",{"p-button-icon-only":o.hasIcon&&!o.label&&!o.buttonProps?.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant==="text"||o.buttonProps?.text||o.buttonProps?.variant==="text","p-button-outlined":o.outlined||o.variant==="outlined"||o.buttonProps?.outlined||o.buttonProps?.variant==="outlined","p-button-sm":o.size==="small"||o.buttonProps?.size==="small","p-button-lg":o.size==="large"||o.buttonProps?.size==="large","p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:o})=>["p-button-icon",{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos==="left"||o.buttonProps?.iconPos==="left")&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos==="right"||o.buttonProps?.iconPos==="right")&&o.label||o.buttonProps?.label,"p-button-icon-top":(o.iconPos==="top"||o.buttonProps?.iconPos==="top")&&o.label||o.buttonProps?.label,"p-button-icon-bottom":(o.iconPos==="bottom"||o.buttonProps?.iconPos==="bottom")&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx("icon")).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Ue=(()=>{class o extends w{name="button";style=We;classes=Fn;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var qe=new H("BUTTON_INSTANCE");var Zt=(()=>{class o extends F{componentName="Button";hostName="";$pcButton=u(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(C,{self:!0});_componentStyle=u(Ue);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=x(void 0,{transform:k});onClick=new vt;onFocus=new vt;onBlur=new vt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(Le,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["p-button"]],contentQueries:function(n,e,i){if(n&1&&St(i,fn,5)(i,mn,5)(i,yn,5)(i,Et,4),n&2){let r;B(r=D())&&(e.contentTemplate=r.first),B(r=D())&&(e.loadingIconTemplate=r.first),B(r=D())&&(e.iconTemplate=r.first),B(r=D())&&(e.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",k],raised:[2,"raised","raised",k],rounded:[2,"rounded","rounded",k],text:[2,"text","text",k],plain:[2,"plain","plain",k],outlined:[2,"outlined","outlined",k],link:[2,"link","link",k],tabindex:[2,"tabindex","tabindex",le],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",k],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",k],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[N([Ue,{provide:qe,useExisting:o},{provide:Q,useExisting:o}]),Z([C]),S],ngContentSelectors:vn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,e){n&1&&(Y(),E(0,"button",0),ie("click",function(r){return e.onClick.emit(r)})("focus",function(r){return e.onFocus.emit(r)})("blur",function(r){return e.onBlur.emit(r)}),U(1),y(2,Cn,1,0,"ng-container",1)(3,kn,3,6,"ng-container",2)(4,Bn,3,6,"ng-container",2)(5,Dn,2,6,"span",3)(6,Nn,1,4,"p-badge",4),T()),n&2&&(m(e.cn(e.cx("root"),e.styleClass,e.buttonProps==null?null:e.buttonProps.styleClass)),d("ngStyle",e.style||(e.buttonProps==null?null:e.buttonProps.style))("disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("pAutoFocus",e.autofocus||(e.buttonProps==null?null:e.buttonProps.autofocus))("pBind",e.ptm("root")),W("type",e.type||(e.buttonProps==null?null:e.buttonProps.type))("aria-label",e.ariaLabel||(e.buttonProps==null?null:e.buttonProps.ariaLabel))("tabindex",e.tabindex||(e.buttonProps==null?null:e.buttonProps.tabindex))("data-p",e.dataP)("data-p-disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("data-p-severity",e.severity||(e.buttonProps==null?null:e.buttonProps.severity)),b(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),b(),d("ngIf",e.loading||(e.buttonProps==null?null:e.buttonProps.loading)),b(),d("ngIf",!(e.loading||e.buttonProps!=null&&e.buttonProps.loading)),b(),d("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.label||(e.buttonProps==null?null:e.buttonProps.label))),b(),d("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.badge||(e.buttonProps==null?null:e.buttonProps.badge))))},dependencies:[A,wt,Tt,de,Re,Be,Ve,Me,Gt,L,C],encapsulation:2,changeDetection:0})}return o})(),Xt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=$({type:o});static \u0275inj=M({imports:[A,Zt,L,L]})}return o})();var Ge=`
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
`;var $n=["header"],An=["title"],Ln=["subtitle"],On=["content"],zn=["footer"],Vn=["*",[["p-header"]],[["p-footer"]]],jn=["*","p-header","p-footer"];function Hn(o,s){o&1&&X(0)}function Rn(o,s){if(o&1&&(E(0,"div",1),U(1,1),y(2,Hn,1,0,"ng-container",2),T()),o&2){let t=v();m(t.cx("header")),d("pBind",t.ptm("header")),b(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Wn(o,s){if(o&1&&(ot(0),V(1),it()),o&2){let t=v(2);b(),rt(t.header)}}function Un(o,s){o&1&&X(0)}function qn(o,s){if(o&1&&(E(0,"div",1),y(1,Wn,2,1,"ng-container",3)(2,Un,1,0,"ng-container",2),T()),o&2){let t=v();m(t.cx("title")),d("pBind",t.ptm("title")),b(),d("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),b(),d("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Qn(o,s){if(o&1&&(ot(0),V(1),it()),o&2){let t=v(2);b(),rt(t.subheader)}}function Gn(o,s){o&1&&X(0)}function Zn(o,s){if(o&1&&(E(0,"div",1),y(1,Qn,2,1,"ng-container",3)(2,Gn,1,0,"ng-container",2),T()),o&2){let t=v();m(t.cx("subtitle")),d("pBind",t.ptm("subtitle")),b(),d("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),b(),d("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Xn(o,s){o&1&&X(0)}function Yn(o,s){o&1&&X(0)}function Kn(o,s){if(o&1&&(E(0,"div",1),U(1,2),y(2,Yn,1,0,"ng-container",2),T()),o&2){let t=v();m(t.cx("footer")),d("pBind",t.ptm("footer")),b(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Jn=`
    ${Ge}

    .p-card {
        display: block;
    }
`,to={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ze=(()=>{class o extends w{name="card";style=Jn;classes=to;static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var Xe=new H("CARD_INSTANCE"),eo=(()=>{class o extends F{componentName="Card";$pcCard=u(Xe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(C,{self:!0});_componentStyle=u(Ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){kt(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(n=>{this.el.nativeElement.style[n]=t[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=et(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=f(o)))(e||o)}})();static \u0275cmp=P({type:o,selectors:[["p-card"]],contentQueries:function(n,e,i){if(n&1&&St(i,Ce,5)(i,_e,5)(i,$n,4)(i,An,4)(i,Ln,4)(i,On,4)(i,zn,4)(i,Et,4),n&2){let r;B(r=D())&&(e.headerFacet=r.first),B(r=D())&&(e.footerFacet=r.first),B(r=D())&&(e.headerTemplate=r.first),B(r=D())&&(e.titleTemplate=r.first),B(r=D())&&(e.subtitleTemplate=r.first),B(r=D())&&(e.contentTemplate=r.first),B(r=D())&&(e.footerTemplate=r.first),B(r=D())&&(e.templates=r)}},hostVars:4,hostBindings:function(n,e){n&2&&(xt(e._style()),m(e.cn(e.cx("root"),e.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[N([Ze,{provide:Xe,useExisting:o},{provide:Q,useExisting:o}]),Z([C]),S],ngContentSelectors:jn,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,e){n&1&&(Y(Vn),y(0,Rn,3,4,"div",0),E(1,"div",1),y(2,qn,3,5,"div",0)(3,Zn,3,5,"div",0),E(4,"div",1),U(5),y(6,Xn,1,0,"ng-container",2),T(),y(7,Kn,3,4,"div",0),T()),n&2&&(d("ngIf",e.headerFacet||e.headerTemplate||e._headerTemplate),b(),m(e.cx("body")),d("pBind",e.ptm("body")),b(),d("ngIf",e.header||e.titleTemplate||e._titleTemplate),b(),d("ngIf",e.subheader||e.subtitleTemplate||e._subtitleTemplate),b(),m(e.cx("content")),d("pBind",e.ptm("content")),b(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),b(),d("ngIf",e.footerFacet||e.footerTemplate||e._footerTemplate))},dependencies:[A,wt,Tt,L,ut,C],encapsulation:2,changeDetection:0})}return o})(),Yt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=$({type:o});static \u0275inj=M({imports:[eo,L,ut,L,ut]})}return o})();var Nt=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=$({type:o});static \u0275inj=M({imports:[A,jt,Ht,Vt,Xt,Yt,A,jt,Ht,Vt,Xt,Yt]})};function no(o,s){if(o&1&&(E(0,"div",1)(1,"h1",2),V(2,"404"),T(),E(3,"p",3),V(4),T(),E(5,"p",4),V(6),T(),nt(7,"p-button",5),T()),o&2){let t=s.$implicit;b(4),Lt(" ",t("errors.pageNotFound.title")," "),b(2),Lt(" ",t("errors.pageNotFound.description")," "),b(),d("label",se(t("common.backToHome")))}}var Ye=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=P({type:o,selectors:[["app-page-not-found"]],decls:1,vars:0,consts:[["class","flex flex-col items-center justify-center min-h-[80vh] px-4 text-center",4,"transloco"],[1,"flex","flex-col","items-center","justify-center","min-h-[80vh]","px-4","text-center"],[1,"text-9xl","font-black","text-primary/20","select-none"],[1,"text-2xl","md:text-3xl","font-bold","mt-4","text-surface-900","dark:text-surface-0"],[1,"text-surface-600","dark:text-surface-400","mt-2","mb-8","max-w-md"],["routerLink","/","icon","pi pi-home","severity","primary",3,"label"]],template:function(t,n){t&1&&y(0,no,8,4,"div",0)},dependencies:[Nt,ce,Zt,xe],encapsulation:2})};export{Ye as PageNotFound};
