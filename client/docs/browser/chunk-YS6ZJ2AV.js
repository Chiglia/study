import{a as Qe,c as Fe,d as Ae,e as je}from"./chunk-DWBKQ7C3.js";import{a as O,c as Se,f as Pe}from"./chunk-6DPWGFIM.js";import{a as Ne,b as Ve}from"./chunk-YLLWQRMN.js";import{b as Z,c as ee,g as z,l as qe,m as Oe,o as De}from"./chunk-DYWDQBM2.js";import{$ as l,Aa as q,Ba as ye,C as pe,Cc as Y,E as s,Ga as W,Ia as y,J as P,Ja as oe,K as j,Ka as he,La as Ce,M as R,Ma as we,N as $,O as h,Oa as f,Q as _,Qa as ke,R as me,S as ue,T as x,U as b,Ua as D,V as ge,Va as Te,X as ne,Y as ie,Ya as ze,Z as c,_ as r,_a as J,aa as g,ab as K,bb as Me,cb as U,ea as _e,fa as xe,ga as Q,ha as M,ja as T,k as F,ka as a,l as N,la as be,lb as Ie,m as V,ma as fe,mb as Ee,n as C,na as L,o as w,p as k,pa as I,q as ce,qa as E,t as de,ta as ve,tb as Be,tc as X,ua as H,uc as S,va as G,w as A,xa as v,ya as d,z as B,za as m}from"./chunk-7DPC2OBD.js";import{a as te}from"./chunk-7CGTOI24.js";var Re=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var et=["container"],tt=["icon"],nt=["closeicon"],it=["*"],ot=t=>({closeCallback:t});function st(t,o){t&1&&Q(0)}function at(t,o){if(t&1&&h(0,st,1,0,"ng-container",4),t&2){let e=a();c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function rt(t,o){if(t&1&&g(0,"i",1),t&2){let e=a();v(e.cn(e.cx("icon"),e.icon)),c("pBind",e.ptm("icon")),_("data-p",e.dataP)}}function lt(t,o){t&1&&Q(0)}function ct(t,o){if(t&1&&h(0,lt,1,0,"ng-container",5),t&2){let e=a();c("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",y(2,ot,e.closeCallback))}}function dt(t,o){if(t&1&&g(0,"span",9),t&2){let e=a(3);c("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,pe),_("data-p",e.dataP)}}function pt(t,o){if(t&1&&(r(0,"div"),h(1,dt,1,4,"span",8),l()),t&2){let e=a(2);s(),c("ngIf",!e.escape)}}function mt(t,o){if(t&1&&(r(0,"span",7),d(1),l()),t&2){let e=a(3);c("pBind",e.ptm("text"))("ngClass",e.cx("text")),_("data-p",e.dataP),s(),m(e.text)}}function ut(t,o){if(t&1&&h(0,mt,2,4,"span",10),t&2){let e=a(2);c("ngIf",e.escape&&e.text)}}function gt(t,o){if(t&1&&(h(0,pt,2,1,"div",6)(1,ut,1,1,"ng-template",null,0,we),r(3,"span",7),fe(4),l()),t&2){let e=ve(2),i=a();c("ngIf",!i.escape)("ngIfElse",e),s(3),c("pBind",i.ptm("text"))("ngClass",i.cx("text")),_("data-p",i.dataP)}}function _t(t,o){if(t&1&&g(0,"i",7),t&2){let e=a(2);v(e.cn(e.cx("closeIcon"),e.closeIcon)),c("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),_("data-p",e.dataP)}}function xt(t,o){t&1&&Q(0)}function bt(t,o){if(t&1&&h(0,xt,1,0,"ng-container",4),t&2){let e=a(2);c("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function ft(t,o){if(t&1&&(ce(),g(0,"svg",14)),t&2){let e=a(2);v(e.cx("closeIcon")),c("pBind",e.ptm("closeIcon")),_("data-p",e.dataP)}}function vt(t,o){if(t&1){let e=M();r(0,"button",11),T("click",function(n){w(e);let p=a();return k(p.close(n))}),x(1,_t,1,5,"i",12),x(2,bt,1,1,"ng-container"),x(3,ft,1,4,":svg:svg",13),l()}if(t&2){let e=a();v(e.cx("closeButton")),c("pBind",e.ptm("closeButton")),_("aria-label",e.closeAriaLabel)("data-p",e.dataP),s(),b(e.closeIcon?1:-1),s(),b(e.closeIconTemplate||e._closeIconTemplate?2:-1),s(),b(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var yt={root:({instance:t})=>["p-message p-component p-message-"+t.severity,t.variant&&"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},$e=(()=>{class t extends Y{name="message";style=Re;classes=yt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Le=new V("MESSAGE_INSTANCE"),se=(()=>{class t extends ee{componentName="Message";_componentStyle=C($e);bindDirectiveInstance=C(z,{self:!0});$pcMessage=C(Le,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=ke(void 0);computedMotionOptions=f(()=>te(te({},this.ptm("motion")),this.motionOptions()));onClose=new de;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=A(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=P({type:t,selectors:[["p-message"]],contentQueries:function(i,n,p){if(i&1&&L(p,et,4)(p,tt,4)(p,nt,4)(p,X,4),i&2){let u;I(u=E())&&(n.containerTemplate=u.first),I(u=E())&&(n.iconTemplate=u.first),I(u=E())&&(n.closeIconTemplate=u.first),I(u=E())&&(n.templates=u)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(i,n){i&1&&(me(function(){return"p-message-enter-active"}),ue(function(){return"p-message-leave-active"})),i&2&&(_("data-p",n.dataP),v(n.cn(n.cx("root"),n.styleClass)),G("p-message-leave-active",!n.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",D],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",D],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[W([$e,{provide:Le,useExisting:t},{provide:Z,useExisting:t}]),R([z]),$],ngContentSelectors:it,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(i,n){i&1&&(be(),r(0,"div",1)(1,"div",1),x(2,at,1,1,"ng-container"),x(3,rt,1,4,"i",2),x(4,ct,1,4,"ng-container")(5,gt,5,5),x(6,vt,4,8,"button",3),l()()),i&2&&(v(n.cx("contentWrapper")),c("pBind",n.ptm("contentWrapper")),_("data-p",n.dataP),s(),v(n.cx("content")),c("pBind",n.ptm("content")),_("data-p",n.dataP),s(),b(n.iconTemplate||n._iconTemplate?2:-1),s(),b(n.icon?3:-1),s(),b(n.containerTemplate||n._containerTemplate?4:5),s(2),b(n.closable?6:-1))},dependencies:[U,ze,J,K,Qe,qe,S,z,Fe],encapsulation:2,changeDetection:0})}return t})(),Ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=N({imports:[se,S,S]})}return t})();var We=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Ct=["content"],wt=t=>({$implicit:t});function kt(t,o){if(t&1&&(r(0,"div"),d(1),l()),t&2){let e=a(2);H("display",e.value!=null&&e.value!==0?"flex":"none"),s(),ye("",e.value,"",e.unit)}}function Tt(t,o){t&1&&Q(0)}function zt(t,o){if(t&1&&(r(0,"div",2)(1,"div",2),h(2,kt,2,4,"div",3)(3,Tt,1,0,"ng-container",4),l()()),t&2){let e=a();v(e.cn(e.cx("value"),e.valueStyleClass)),H("width",e.value+"%")("display","flex")("background",e.color),c("pBind",e.ptm("value")),_("data-p",e.dataP),s(),v(e.cx("label")),c("pBind",e.ptm("label")),_("data-p",e.dataP),s(),c("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",y(17,wt,e.value))}}function Mt(t,o){if(t&1&&g(0,"div",2),t&2){let e=a();v(e.cn(e.cx("value"),e.valueStyleClass)),H("background",e.color),c("pBind",e.ptm("value")),_("data-p",e.dataP)}}var It={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.mode=="determinate","p-progressbar-indeterminate":t.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},Je=(()=>{class t extends Y{name="progressbar";style=We;classes=It;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Ke=new V("PROGRESSBAR_INSTANCE"),ae=(()=>{class t extends ee{componentName="ProgressBar";$pcProgressBar=C(Ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=C(z,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=C(Je);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=P({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,p){if(i&1&&L(p,Ct,4)(p,X,4),i&2){let u;I(u=E())&&(n.contentTemplate=u.first),I(u=E())&&(n.templates=u)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(i,n){i&2&&(_("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("aria-level",n.value+n.unit)("data-p",n.dataP),v(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:[2,"value","value",Te],showValue:[2,"showValue","showValue",D],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[W([Je,{provide:Ke,useExisting:t},{provide:Z,useExisting:t}]),R([z]),$],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&h(0,zt,4,19,"div",0)(1,Mt,1,6,"div",1),i&2&&(c("ngIf",n.mode==="determinate"),s(),c("ngIf",n.mode==="indeterminate"))},dependencies:[U,J,K,S,z],encapsulation:2,changeDetection:0})}return t})(),Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=N({imports:[ae,S,S]})}return t})();var le=t=>["/test",t],St=(t,o)=>({answered:t,total:o}),re=t=>({count:t}),Bt=t=>({answer:t}),Pt=(t,o)=>({correct:t,total:o}),Qt=t=>({date:t}),qt=(t,o)=>o.id;function Ot(t,o){if(t&1){let e=M();r(0,"button",8),T("click",function(){w(e);let n=a(2);return k(n.cancelSession())}),l()}if(t&2){let e=a().$implicit,i=a();c("text",!0)("label",e("quiz.cancelTest"))("disabled",i.store.blocked())}}function Dt(t,o){if(t&1&&(r(0,"p-message",15)(1,"span")(2,"strong",18),d(3),l(),d(4),l()()),t&2){let e=a(3).$implicit;c("closable",!1),s(3),m(e("quiz.reviewTitle")),s(),q(" ",e("quiz.reviewDescription")," ")}}function Ft(t,o){if(t&1&&(r(0,"span",30),d(1),g(2,"i",32),l()),t&2){let e=a(5).$implicit;s(),q(" ",e("quiz.correct")," ")}}function Nt(t,o){if(t&1&&(r(0,"span",30),d(1),g(2,"i",33),l()),t&2){let e=a(5).$implicit;s(),q(" ",e("quiz.yourAnswer")," ")}}function Vt(t,o){t&1&&g(0,"span",31)}function At(t,o){if(t&1){let e=M();r(0,"button",27),T("click",function(){let n=w(e).$index,p=a().$implicit,u=a(4);return k(u.store.answer(n,p.id))}),r(1,"span",28),d(2),l(),r(3,"span",29),d(4),l(),x(5,Ft,3,1,"span",30)(6,Nt,3,1,"span",30)(7,Vt,1,0,"span",31),l()}if(t&2){let e=o.$implicit,i=o.$index,n=a().$implicit,p=a(4);G("answer-correct",p.selected(n.id)!==null&&i===n.correct)("answer-wrong",p.selected(n.id)===i&&i!==n.correct),c("disabled",p.selected(n.id)!==null||p.store.blocked()),s(2),m("ABCDEF"[i]),s(2),m(e),s(),b(p.selected(n.id)!==null&&i===n.correct?5:p.selected(n.id)===i?6:7)}}function jt(t,o){if(t&1&&(r(0,"p-message",26)(1,"span")(2,"strong",34),d(3),l(),r(4,"p",35),d(5),l()()()),t&2){let e=a().$implicit,i=a(3).$implicit,n=a();c("severity",n.selected(e.id)===e.correct?"success":"warn")("icon",n.selected(e.id)===e.correct?"pi pi-check-circle":"pi pi-info-circle")("closable",!1),s(3),m(n.selected(e.id)===e.correct?i("quiz.right"):i("quiz.wrong")),s(2),m(n.selected(e.id)===e.correct?i("quiz.rightFeedback"):i("quiz.correctAnswer",y(5,Bt,e.options[e.correct])))}}function Rt(t,o){if(t&1&&(r(0,"p-card",16)(1,"div",19),g(2,"p-tag",20),r(3,"span"),d(4),l()(),r(5,"h2",21),d(6),l(),r(7,"p",22),d(8),l(),r(9,"div",23),ne(10,At,8,8,"button",24,ge),l(),r(12,"div",25),x(13,jt,6,7,"p-message",26),l()()),t&2){let e=o.$implicit,i=a(3).$implicit,n=a();s(2),c("value",n.categories.includes(e.category)?i("categories."+e.category):e.category),s(2),m(i("quiz.remaining",y(6,re,n.remaining()))),s(2),m(e.text),s(2),m(n.reviewing()?i("quiz.reviewInstruction"):i("quiz.instruction")),s(),_("aria-label",i("quiz.answerOptions")),s(),ie(e.options),s(3),b(n.selected(e.id)!==null?13:-1)}}function $t(t,o){if(t&1){let e=M();r(0,"div",17)(1,"button",36),T("click",function(){w(e);let n=a(4);return k(n.reviewEarlier())}),l(),r(2,"button",37),T("click",function(){w(e);let n=a(4);return k(n.leaveReview())}),l()()}if(t&2){let e=a(3).$implicit,i=a();s(),c("text",!0)("label",e("quiz.back"))("disabled",!i.canReviewEarlier()),s(),c("label",e("quiz.backToCurrent"))}}function Lt(t,o){if(t&1){let e=M();r(0,"div",17)(1,"button",36),T("click",function(){w(e);let n=a(4);return k(n.reviewPrevious())}),l(),r(2,"div",38)(3,"button",39),T("click",function(){w(e);let n=a(4);return k(n.next())}),l()()()}if(t&2){let e=a(3).$implicit,i=a();s(),c("text",!0)("label",e("quiz.back"))("disabled",!i.reviewableQuestions().length),s(2),c("label",i.pageComplete()?e("quiz.seeResult"):e("quiz.next"))("disabled",i.store.blocked())}}function Ht(t,o){if(t&1&&(r(0,"section",9)(1,"div",10)(2,"span",11),g(3,"i",12),d(4),l(),r(5,"strong",13),d(6),l()(),g(7,"p-progressbar",14),x(8,Dt,5,3,"p-message",15),ne(9,Rt,14,8,"p-card",16,qt),x(11,$t,3,4,"div",17)(12,Lt,4,5,"div",17),l()),t&2){let e=a(),i=a().$implicit,n=a();s(4),q(" ",i("quiz.inProgress")," "),s(2),m(i("quiz.answers",oe(7,St,n.answered(),e.questions.length))),s(),c("value",n.progress())("showValue",!1),_("aria-label",i("quiz.answeredQuestions")),s(),b(n.reviewing()?8:-1),s(),ie(n.displayedQuestions()),s(2),b(n.reviewing()?11:12)}}function Gt(t,o){if(t&1&&x(0,Ht,13,10,"section",9),t&2){let e=a(2);b(e.displayedQuestions().length?0:-1)}}function Wt(t,o){if(t&1){let e=M();r(0,"button",59),T("click",function(){w(e);let n=a(3);return k(n.store.retryIncorrect())}),l()}if(t&2){let e=a(2).$implicit,i=a();c("label",e("quiz.retryIncorrect"))("disabled",i.store.blocked())}}function Jt(t,o){if(t&1&&(r(0,"p-card",7)(1,"div",40),g(2,"i",41),l(),r(3,"span",42),d(4),l(),r(5,"h2",43),d(6),l(),r(7,"p",44),d(8),l(),r(9,"div",45),d(10),r(11,"span",46),d(12,"%"),l()(),r(13,"p",47)(14,"strong",48),d(15),l()(),r(16,"div",49)(17,"span",50),g(18,"i",51),d(19),l(),r(20,"span",52),g(21,"i",53),d(22),l()(),r(23,"p",54),d(24),he(25,"date"),l(),r(26,"div",55),x(27,Wt,1,2,"button",56),g(28,"a",57),l(),r(29,"p",58),d(30),l()()),t&2){let e,i=o,n=a().$implicit,p=a();s(4),m(n("quiz.resultEyebrow")),s(2),m(n("quiz.completedTitle")),s(2),m(n("quiz.completedDescription")),s(2),q(" ",p.score()),s(5),m(n("quiz.correctCount",oe(16,Pt,i.correct,i.total))),s(4),m(n("quiz.correctAnswers",y(19,re,i.correct))),s(3),m(n("quiz.wrongAnswers",y(21,re,i.total-i.correct))),s(2),m(n("quiz.lastTest",y(23,Qt,Ce(25,13,i.date,"dd/MM/yyyy, HH:mm")))),s(3),b(i.incorrectQuestionIds!=null&&i.incorrectQuestionIds.length?27:-1),s(),c("outlined",!0)("label",n("quiz.test"))("routerLink",y(25,le,(e=p.store.active())==null?null:e.id)),s(2),m(n("quiz.continueTip"))}}function Kt(t,o){if(t&1&&(r(0,"p-card",7)(1,"div",40),g(2,"i",60),l(),r(3,"span",42),d(4),l(),r(5,"h2",43),d(6),l(),r(7,"p",44),d(8),l(),r(9,"div",55),g(10,"a",61),l()()),t&2){let e,i=a().$implicit,n=a();s(4),m(i("quiz.startEyebrow")),s(2),m(i("quiz.prepareTitle")),s(2),m(i("quiz.prepareDescription")),s(2),c("label",i("quiz.openTest"))("routerLink",y(5,le,(e=n.store.active())==null?null:e.id))}}function Ut(t,o){if(t&1&&(_e(0),r(1,"div",1)(2,"div",2),g(3,"a",3),x(4,Ot,1,3,"button",4),l(),r(5,"h1",5),d(6),l(),r(7,"p",6),d(8),l()(),x(9,Gt,1,1)(10,Jt,31,27,"p-card",7)(11,Kt,11,7,"p-card",7),xe()),t&2){let e,i,n,p=o.$implicit,u=a();s(3),c("text",!0)("label",p("quiz.continueLater"))("routerLink",y(7,le,(e=u.store.active())==null?null:e.id)),s(),b(u.store.session()?4:-1),s(2),m((i=u.store.active())==null?null:i.name),s(2),m(p("quiz.description")),s(),b((n=u.store.session())?9:(n=u.result())?10:11,n)}}var Xe=class t{store=C(Pe);router=C(Ie);categories=Se;visibleQuestions=f(()=>{let o=this.store.session();return o?o.queue.slice(0,O(o)).map(e=>o.questions.find(i=>i.id===e)).filter(e=>e!==void 0):[]});remaining=f(()=>{let o=this.store.session();return o?o.questions.length-Object.keys(o.answers).length:0});reviewEnd=A(null);reviewableQuestions=f(()=>{let o=this.store.session(),e=new Set(this.visibleQuestions().map(i=>i.id));return o?Object.keys(o.answers).filter(i=>!e.has(i)).map(i=>o.questions.find(n=>n.id===i)).filter(i=>i!==void 0):[]});reviewing=f(()=>this.reviewEnd()!==null);reviewedQuestions=f(()=>{let o=this.store.session(),e=this.reviewEnd();return!o||e===null?[]:this.reviewableQuestions().slice(Math.max(0,e-O(o)),e)});displayedQuestions=f(()=>this.reviewing()?this.reviewedQuestions():this.visibleQuestions());canReviewEarlier=f(()=>{let o=this.store.session();return o!==null&&(this.reviewEnd()??0)>O(o)});pageComplete=f(()=>{let o=this.store.session();return!!o&&o.queue.every(e=>Object.hasOwn(o.answers,e))});reviewPrevious(){let o=this.reviewableQuestions().length;o&&this.reviewEnd.set(o)}reviewEarlier(){let o=this.store.session(),e=this.reviewEnd();o&&e!==null&&this.reviewEnd.set(Math.max(O(o),e-O(o)))}leaveReview(){this.reviewEnd.set(null)}cancelSession(){let o=this.store.active()?.id;o&&this.store.cancelSession()&&this.router.navigate(["/test",o])}next(){this.leaveReview(),this.store.next()}selected(o){let e=this.store.session()?.answers;return e&&Object.hasOwn(e,o)?e[o]:null}answered=f(()=>Object.keys(this.store.session()?.answers??{}).length);progress=f(()=>{let o=this.store.session()?.questions.length??0;return o?Math.round(this.answered()/o*100):0});result=f(()=>this.store.results().at(-1));score=f(()=>{let o=this.result();return o?Math.round(o.correct/o.total*100):0});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=P({type:t,selectors:[["app-quiz"]],decls:1,vars:0,consts:[[4,"transloco"],[1,"mb-[35px]"],[1,"flex","items-center","justify-between","gap-5","max-md:gap-2"],["pButton","","icon","pi pi-arrow-left","severity","secondary",3,"text","label","routerLink"],["pButton","","icon","pi pi-times","severity","danger",1,"text-[11px]",3,"text","label","disabled"],[1,"my-3","text-[clamp(24px,2.4vw,33px)]","tracking-[-1px]","max-md:text-[26px]"],[1,"text-[13px]","leading-[1.7]","text-[var(--muted)]"],[1,"result-card","mx-auto","my-[35px]","block","max-w-[720px]","text-center"],["pButton","","icon","pi pi-times","severity","danger",1,"text-[11px]",3,"click","text","label","disabled"],[1,"mx-auto","max-w-[800px]"],[1,"mb-3","flex","items-center","justify-between","text-[11px]"],[1,"text-[9px]","font-[650]","tracking-[1px]","text-[#947bb6]"],[1,"pi","pi-bolt","mr-[5px]"],[1,"font-medium","text-[var(--muted)]"],[1,"mb-[25px]","block",3,"value","showValue"],["severity","info","icon","pi pi-eye","role","status",1,"mb-[18px]","block",3,"closable"],[1,"test-card","block"],[1,"mt-[27px]","flex","items-center","justify-between","gap-[15px]","border-t","border-[var(--border)]","pt-[23px]","max-md:gap-2.5"],[1,"block","text-xs"],[1,"flex","items-center","justify-between","gap-3","text-[10px]","text-[#a297b0]"],["severity","secondary",3,"value"],[1,"mb-2","mt-6","break-words","text-[25px]","leading-normal","tracking-[-0.5px]","max-md:text-[21px]"],[1,"mb-[26px]","mt-0","text-xs","text-[var(--muted)]"],["role","group",1,"grid","gap-3"],[1,"answer-option","flex","w-full","items-center","gap-[13px]","rounded-[9px]","border","border-[var(--border)]","bg-white","p-[15px]","text-left","text-[var(--ink)]","max-md:gap-[9px]","max-md:p-3",3,"answer-correct","answer-wrong","disabled"],["aria-live","polite"],[1,"mt-[21px]","block",3,"severity","icon","closable"],[1,"answer-option","flex","w-full","items-center","gap-[13px]","rounded-[9px]","border","border-[var(--border)]","bg-white","p-[15px]","text-left","text-[var(--ink)]","max-md:gap-[9px]","max-md:p-3",3,"click","disabled"],[1,"answer-letter","grid","h-[30px]","w-[30px]","shrink-0","place-items-center","rounded-md","bg-[#f6f3fa]","text-xs","text-[#a292b7]"],[1,"flex-1","break-words","text-[13px]"],[1,"answer-status","flex","items-center","gap-2","text-[10px]"],[1,"h-4","w-4","shrink-0","rounded-full","border","border-[#ded7e8]"],[1,"pi","pi-check-circle","text-base"],[1,"pi","pi-times-circle","text-base"],[1,"text-xs"],[1,"mb-0","mt-[7px]","break-words","text-[11px]","leading-[1.6]"],["pButton","","icon","pi pi-arrow-left",1,"max-md:flex-1",3,"click","text","label","disabled"],["pButton","","icon","pi pi-arrow-right","iconPos","right",1,"max-md:flex-1",3,"click","label"],[1,"flex","items-center","justify-end","max-md:flex-1"],["pButton","","icon","pi pi-arrow-right","iconPos","right",1,"max-md:w-full",3,"click","label","disabled"],[1,"mx-auto","mb-[25px]","grid","h-[75px]","w-[75px]","place-items-center","rounded-full","border-[9px]","border-[#faf7fe]","bg-[#ede5fa]","text-[#a082c8]"],[1,"pi","pi-trophy","text-[26px]"],[1,"eyebrow"],[1,"my-[15px]","text-[26px]","tracking-[-0.6px]","max-md:text-[23px]"],[1,"muted"],[1,"mt-[25px]","text-[76px]","font-bold","tracking-[-4px]","text-[var(--purple)]"],[1,"text-[30px]","tracking-[-1px]"],[1,"text-sm","text-[var(--muted)]"],[1,"text-[var(--ink)]"],[1,"mt-[22px]","flex","justify-center","gap-[25px]","text-xs"],[1,"text-[#6aab88]"],[1,"pi","pi-check-circle","mr-1.5"],[1,"text-[#c08787]"],[1,"pi","pi-times-circle","mr-1.5"],[1,"my-[25px]","text-[10px]","text-[#b0a7bb]"],[1,"my-[25px]","flex","justify-center","gap-3","max-md:flex-col"],["pButton","",3,"label","disabled"],["pButton","",3,"outlined","label","routerLink"],[1,"my-[21px]","text-center","text-[11px]","leading-[1.8]","text-[#a196af]","max-md:text-[10px]"],["pButton","",3,"click","label","disabled"],[1,"pi","pi-folder","text-[26px]"],["pButton","",3,"label","routerLink"]],template:function(e,i){e&1&&h(0,Ut,12,9,"ng-container",0)},dependencies:[Ee,Be,De,Oe,Ve,Ne,Ge,se,Ue,ae,je,Ae,Me],styles:[".test-card[_ngcontent-%COMP%]  .p-card{border:1px solid var(--border);border-radius:15px}.test-card[_ngcontent-%COMP%]  .p-card-body{padding:33px}.test-card[_ngcontent-%COMP%] + .test-card[_ngcontent-%COMP%]{margin-top:18px}.answer-option[_ngcontent-%COMP%]{transition:background .15s,border-color .15s}.answer-option[_ngcontent-%COMP%]:hover:not(:disabled){background:#f9f6ff;border-color:#b7a0dd}.answer-option[_ngcontent-%COMP%]:disabled{opacity:1;cursor:default}.answer-correct[_ngcontent-%COMP%]{border-color:#98cbb0;color:#3a8b61;background:#f0f8f3}.answer-correct[_ngcontent-%COMP%]   .answer-letter[_ngcontent-%COMP%]{background:#e0f0e5;color:#579875}.answer-wrong[_ngcontent-%COMP%]{border-color:#e1a3a3;color:#b95454;background:#fff4f3}.answer-wrong[_ngcontent-%COMP%]   .answer-letter[_ngcontent-%COMP%]{background:#f9e1df;color:#b96565}.result-card[_ngcontent-%COMP%]  .p-card{border:1px solid var(--border);border-radius:16px}.result-card[_ngcontent-%COMP%]  .p-card-body{padding:45px 30px 25px}@media(max-width:760px){.test-card[_ngcontent-%COMP%]  .p-card-body{padding:23px 18px}.answer-status[_ngcontent-%COMP%]{font-size:0;gap:0}.result-card[_ngcontent-%COMP%]  .p-card-body{padding:30px 20px}}"]})};export{Xe as Quiz};
