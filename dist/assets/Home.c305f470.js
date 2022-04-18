import{i as oo,C as ro,F as me,q as to,c as R,r as A,w as no,o as Te,a as io,b as ze,p as He,d as Be,e as De,f as M,h,T as Ee,g as so,j as u,k as Ie,l as G,m as c,u as ge,t as Re,n as ao,s as lo,v as co,x as uo,y as fo,z as We,A as Fe,B as be,D as S,E as xe,G as ie,H as d,I as te,J as Ge,K as ho,L as bo,_ as po,M as se,N as ve,O as k,P as $e,Q as mo,R as go,S as K,U as xo,V as fe,W as vo,X as yo,Y as he,Z as Co}from"./index.d6db167b.js";function Me(e,...o){if(Array.isArray(e))e.forEach(n=>Me(n,...o));else return e(...o)}function ye(e){return e.some(o=>oo(o)?!(o.type===ro||o.type===me&&!ye(o.children)):!0)?e:null}function Se(e,o){const n=e&&ye(e());return o(n||null)}function wo(e){return!(e&&ye(e()))}const $o=/^(\d|\.)+$/,Pe=/(\d|\.)+/;function So(e,{c:o=1,offset:n=0,attachPx:s=!0}={}){if(typeof e=="number"){const t=(e+n)*o;return t===0?"0":`${t}px`}else if(typeof e=="string")if($o.test(e)){const t=(Number(e)+n)*o;return s?t===0?"0":`${t}px`:`${t}`}else{const t=Pe.exec(e);return t?e.replace(Pe,String((Number(t[0])+n)*o)):e}return e}function _e(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function Po(e,o){if(e===void 0)return!1;if(o){const{context:{ids:n}}=o;return n.has(e)}return to(e)!==null}function _o(e){const o=R(e),n=A(o.value);return no(o,s=>{n.value=s}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(s){e.set(s)}}}function ko(){const e=A(!1);return Te(()=>{e.value=!0}),io(e)}const ke=De("n-form-item");function To(e,{defaultSize:o="medium",mergedSize:n,mergedDisabled:s}={}){const t=ze(ke,null);He(ke,null);const a=R(n?()=>n(t):()=>{const{size:f}=e;if(f)return f;if(t){const{mergedSize:N}=t;if(N.value!==void 0)return N.value}return o}),g=R(s?()=>s(t):()=>{const{disabled:f}=e;return f!==void 0?f:t?t.disabled.value:!1}),i=R(()=>{const{status:f}=e;return f||(t==null?void 0:t.mergedValidationStatus.value)});return Be(()=>{t&&t.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:g,mergedStatusRef:i,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}var Le=M({name:"BaseIconSwitchTransition",setup(e,{slots:o}){const n=ko();return()=>h(Ee,{name:"icon-switch-transition",appear:n.value},o)}}),zo=M({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:o}){function n(i){e.width?i.style.maxWidth=`${i.offsetWidth}px`:i.style.maxHeight=`${i.offsetHeight}px`,i.offsetWidth}function s(i){e.width?i.style.maxWidth="0":i.style.maxHeight="0",i.offsetWidth;const{onLeave:f}=e;f&&f()}function t(i){e.width?i.style.maxWidth="":i.style.maxHeight="";const{onAfterLeave:f}=e;f&&f()}function a(i){if(i.style.transition="none",e.width){const f=i.offsetWidth;i.style.maxWidth="0",i.offsetWidth,i.style.transition="",i.style.maxWidth=`${f}px`}else if(e.reverse)i.style.maxHeight=`${i.offsetHeight}px`,i.offsetHeight,i.style.transition="",i.style.maxHeight="0";else{const f=i.offsetHeight;i.style.maxHeight="0",i.offsetWidth,i.style.transition="",i.style.maxHeight=`${f}px`}i.offsetWidth}function g(i){var f;e.width?i.style.maxWidth="":e.reverse||(i.style.maxHeight=""),(f=e.onAfterEnter)===null||f===void 0||f.call(e)}return()=>{const i=e.group?so:Ee;return h(i,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:a,onAfterEnter:g,onBeforeLeave:n,onLeave:s,onAfterLeave:t},o)}}});const{cubicBezierEaseInOut:Ho}=Ie;function pe({originalTransform:e="",left:o=0,top:n=0,transition:s=`all .3s ${Ho} !important`}={}){return[u("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:o,top:n,opacity:0}),u("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:o,top:n,opacity:1}),u("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:o,top:n,transition:s})]}var Bo=u([u("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),u("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),u("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),u("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),G("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[pe()]),c("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[c("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),c("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[c("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),c("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),c("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[pe({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Do=M({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){ge("-base-loading",Bo,Re(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:o,strokeWidth:n,stroke:s,scale:t}=this,a=o/t;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(Le,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:o-n/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:o-n/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:o-n/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),Eo=G("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Io=M({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ge("-base-wave",Eo,Re(e,"clsPrefix"));const o=A(null),n=A(!1);let s=null;return Be(()=>{s!==null&&window.clearTimeout(s)}),{active:n,selfRef:o,play(){s!==null&&(window.clearTimeout(s),n.value=!1,s=null),ao(()=>{var t;(t=o.value)===null||t===void 0||t.offsetHeight,n.value=!0,s=window.setTimeout(()=>{n.value=!1,s=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});function Ro(e,o,n){if(!o)return;const s=lo(),t=R(()=>{const{value:g}=o;if(!g)return;const i=g[e];if(!!i)return i}),a=()=>{uo(()=>{const{value:g}=n,i=`${g}${e}Rtl`;if(Po(i,s))return;const{value:f}=t;!f||f.style.mount({id:i,head:!0,anchorMetaName:fo,props:{bPrefix:g?`.${g}-`:void 0},ssr:s})})};return s?a():co(a),t}const{cubicBezierEaseInOut:j}=Ie;function Wo({duration:e=".2s",delay:o=".1s"}={}){return[u("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),u("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),u("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${j},
 max-width ${e} ${j} ${o},
 margin-left ${e} ${j} ${o},
 margin-right ${e} ${j} ${o};
 `),u("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${j} ${o},
 max-width ${e} ${j},
 margin-left ${e} ${j},
 margin-right ${e} ${j};
 `)]}function q(e){return We(e,[255,255,255,.16])}function ne(e){return We(e,[0,0,0,.12])}var Fo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const Go=e=>{const{heightTiny:o,heightSmall:n,heightMedium:s,heightLarge:t,borderRadius:a,fontSizeTiny:g,fontSizeSmall:i,fontSizeMedium:f,fontSizeLarge:N,opacityDisabled:Z,textColor2:z,textColor3:le,primaryColorHover:w,primaryColorPressed:B,borderColor:J,primaryColor:W,baseColor:p,infoColor:F,infoColorHover:T,infoColorPressed:l,successColor:m,successColorHover:P,successColorPressed:r,warningColor:D,warningColorHover:H,warningColorPressed:V,errorColor:E,errorColorHover:$,errorColorPressed:O,fontWeight:L,buttonColor2:Y,buttonColor2Hover:I,buttonColor2Pressed:x,fontWeightStrong:ee}=e;return Object.assign(Object.assign({},Fo),{heightTiny:o,heightSmall:n,heightMedium:s,heightLarge:t,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:g,fontSizeSmall:i,fontSizeMedium:f,fontSizeLarge:N,opacityDisabled:Z,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:Y,colorSecondaryHover:I,colorSecondaryPressed:x,colorTertiary:Y,colorTertiaryHover:I,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:I,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:z,textColorTertiary:le,textColorHover:w,textColorPressed:B,textColorFocus:w,textColorDisabled:z,textColorText:z,textColorTextHover:w,textColorTextPressed:B,textColorTextFocus:w,textColorTextDisabled:z,textColorGhost:z,textColorGhostHover:w,textColorGhostPressed:B,textColorGhostFocus:w,textColorGhostDisabled:z,border:`1px solid ${J}`,borderHover:`1px solid ${w}`,borderPressed:`1px solid ${B}`,borderFocus:`1px solid ${w}`,borderDisabled:`1px solid ${J}`,rippleColor:W,colorPrimary:W,colorHoverPrimary:w,colorPressedPrimary:B,colorFocusPrimary:w,colorDisabledPrimary:W,textColorPrimary:p,textColorHoverPrimary:p,textColorPressedPrimary:p,textColorFocusPrimary:p,textColorDisabledPrimary:p,textColorTextPrimary:W,textColorTextHoverPrimary:w,textColorTextPressedPrimary:B,textColorTextFocusPrimary:w,textColorTextDisabledPrimary:z,textColorGhostPrimary:W,textColorGhostHoverPrimary:w,textColorGhostPressedPrimary:B,textColorGhostFocusPrimary:w,textColorGhostDisabledPrimary:W,borderPrimary:`1px solid ${W}`,borderHoverPrimary:`1px solid ${w}`,borderPressedPrimary:`1px solid ${B}`,borderFocusPrimary:`1px solid ${w}`,borderDisabledPrimary:`1px solid ${W}`,rippleColorPrimary:W,colorInfo:F,colorHoverInfo:T,colorPressedInfo:l,colorFocusInfo:T,colorDisabledInfo:F,textColorInfo:p,textColorHoverInfo:p,textColorPressedInfo:p,textColorFocusInfo:p,textColorDisabledInfo:p,textColorTextInfo:F,textColorTextHoverInfo:T,textColorTextPressedInfo:l,textColorTextFocusInfo:T,textColorTextDisabledInfo:z,textColorGhostInfo:F,textColorGhostHoverInfo:T,textColorGhostPressedInfo:l,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:F,borderInfo:`1px solid ${F}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${l}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${F}`,rippleColorInfo:F,colorSuccess:m,colorHoverSuccess:P,colorPressedSuccess:r,colorFocusSuccess:P,colorDisabledSuccess:m,textColorSuccess:p,textColorHoverSuccess:p,textColorPressedSuccess:p,textColorFocusSuccess:p,textColorDisabledSuccess:p,textColorTextSuccess:m,textColorTextHoverSuccess:P,textColorTextPressedSuccess:r,textColorTextFocusSuccess:P,textColorTextDisabledSuccess:z,textColorGhostSuccess:m,textColorGhostHoverSuccess:P,textColorGhostPressedSuccess:r,textColorGhostFocusSuccess:P,textColorGhostDisabledSuccess:m,borderSuccess:`1px solid ${m}`,borderHoverSuccess:`1px solid ${P}`,borderPressedSuccess:`1px solid ${r}`,borderFocusSuccess:`1px solid ${P}`,borderDisabledSuccess:`1px solid ${m}`,rippleColorSuccess:m,colorWarning:D,colorHoverWarning:H,colorPressedWarning:V,colorFocusWarning:H,colorDisabledWarning:D,textColorWarning:p,textColorHoverWarning:p,textColorPressedWarning:p,textColorFocusWarning:p,textColorDisabledWarning:p,textColorTextWarning:D,textColorTextHoverWarning:H,textColorTextPressedWarning:V,textColorTextFocusWarning:H,textColorTextDisabledWarning:z,textColorGhostWarning:D,textColorGhostHoverWarning:H,textColorGhostPressedWarning:V,textColorGhostFocusWarning:H,textColorGhostDisabledWarning:D,borderWarning:`1px solid ${D}`,borderHoverWarning:`1px solid ${H}`,borderPressedWarning:`1px solid ${V}`,borderFocusWarning:`1px solid ${H}`,borderDisabledWarning:`1px solid ${D}`,rippleColorWarning:D,colorError:E,colorHoverError:$,colorPressedError:O,colorFocusError:$,colorDisabledError:E,textColorError:p,textColorHoverError:p,textColorPressedError:p,textColorFocusError:p,textColorDisabledError:p,textColorTextError:E,textColorTextHoverError:$,textColorTextPressedError:O,textColorTextFocusError:$,textColorTextDisabledError:z,textColorGhostError:E,textColorGhostHoverError:$,textColorGhostPressedError:O,textColorGhostFocusError:$,textColorGhostDisabledError:E,borderError:`1px solid ${E}`,borderHoverError:`1px solid ${$}`,borderPressedError:`1px solid ${O}`,borderFocusError:`1px solid ${$}`,borderDisabledError:`1px solid ${E}`,rippleColorError:E,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:ee})},Mo={name:"Button",common:Fe,self:Go};var Lo=Mo;const v="0!important",Ne="-1px!important";function X(e){return S(e+"-type",[u("& +",[G("button",{},[S(e+"-type",[c("border",{borderLeftWidth:v}),c("state-border",{left:Ne})])])])])}function U(e){return S(e+"-type",[u("& +",[G("button",[S(e+"-type",[c("border",{borderTopWidth:v}),c("state-border",{top:Ne})])])])])}var No=G("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[be("vertical",{flexDirection:"row"},[G("button",[u("&:first-child:not(:last-child)",`
 margin-right: ${v};
 border-top-right-radius: ${v};
 border-bottom-right-radius: ${v};
 `),u("&:last-child:not(:first-child)",`
 margin-left: ${v};
 border-top-left-radius: ${v};
 border-bottom-left-radius: ${v};
 `),u("&:not(:first-child):not(:last-child)",`
 margin-left: ${v};
 margin-right: ${v};
 border-radius: ${v};
 `),X("default"),S("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])]),S("vertical",{flexDirection:"column"},[G("button",[u("&:first-child:not(:last-child)",`
 margin-bottom: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-bottom-left-radius: ${v};
 border-bottom-right-radius: ${v};
 `),u("&:last-child:not(:first-child)",`
 margin-top: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-top-left-radius: ${v};
 border-top-right-radius: ${v};
 `),u("&:not(:first-child):not(:last-child)",`
 margin: ${v};
 border-radius: ${v};
 `),U("default"),S("ghost",[U("primary"),U("info"),U("success"),U("warning"),U("error")])])])]);const Ve=De("n-button-group"),Vo={size:{type:String,default:void 0},vertical:Boolean};M({name:"ButtonGroup",props:Vo,setup(e){const{mergedClsPrefixRef:o}=xe(e);return ge("-button-group",No,o),He(Ve,e),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:[`${e}-button-group`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});var Oo=u([G("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[S("color",[c("border",{borderColor:"var(--n-border-color)"}),S("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),be("disabled",[u("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),u("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),u("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),S("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),S("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),be("disabled",[u("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),u("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),u("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),S("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),S("loading",{"pointer-events":"none"}),G("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[S("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?u("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[G("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[pe({top:"50%",originalTransform:"translateY(-50%)"})]),Wo()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[u("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),S("block",`
 display: flex;
 width: 100%;
 `),S("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),S("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),u("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),u("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const jo=Object.assign(Object.assign({},ie.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],internalAutoFocus:Boolean}),Ao=M({name:"Button",props:jo,setup(e){const o=A(null),n=A(null),s=A(!1);Te(()=>{const{value:l}=o;l&&!e.disabled&&e.focusable&&e.internalAutoFocus&&l.focus({preventScroll:!0})});const t=_o(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),a=ze(Ve,{}),{mergedSizeRef:g}=To({},{defaultSize:"medium",mergedSize:l=>{const{size:m}=e;if(m)return m;const{size:P}=a;if(P)return P;const{mergedSize:r}=l||{};return r?r.value:"medium"}}),i=R(()=>e.focusable&&!e.disabled),f=l=>{var m;l.preventDefault(),!e.disabled&&i.value&&((m=o.value)===null||m===void 0||m.focus({preventScroll:!0}))},N=l=>{var m;if(!e.disabled&&!e.loading){const{onClick:P}=e;P&&Me(P,l),e.text||(m=n.value)===null||m===void 0||m.play()}},Z=l=>{switch(l.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;s.value=!1}},z=l=>{switch(l.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){l.preventDefault();return}s.value=!0}},le=()=>{s.value=!1},{inlineThemeDisabled:w,mergedClsPrefixRef:B,mergedRtlRef:J}=xe(e),W=ie("Button","-button",Oo,Lo,e,B),p=Ro("Button",J,B),F=R(()=>{const l=W.value,{common:{cubicBezierEaseInOut:m,cubicBezierEaseOut:P},self:r}=l,{rippleDuration:D,opacityDisabled:H,fontWeight:V,fontWeightStrong:E}=r,$=g.value,{dashed:O,type:L,ghost:Y,text:I,color:x,round:ee,circle:de,textColor:Q,secondary:Oe,tertiary:Ce,quaternary:je,strong:Ae}=e,Ke={"font-weight":Ae?E:V};let y={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const oe=L==="tertiary",we=L==="default",b=oe?"default":L;if(I){const C=Q||x,_=C||r[d("textColorText",b)];y={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":_,"--n-text-color-hover":C?q(C):r[d("textColorTextHover",b)],"--n-text-color-pressed":C?ne(C):r[d("textColorTextPressed",b)],"--n-text-color-focus":C?q(C):r[d("textColorTextHover",b)],"--n-text-color-disabled":C||r[d("textColorTextDisabled",b)]}}else if(Y||O){const C=Q||x;y={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||r[d("rippleColor",b)],"--n-text-color":C||r[d("textColorGhost",b)],"--n-text-color-hover":C?q(C):r[d("textColorGhostHover",b)],"--n-text-color-pressed":C?ne(C):r[d("textColorGhostPressed",b)],"--n-text-color-focus":C?q(C):r[d("textColorGhostHover",b)],"--n-text-color-disabled":C||r[d("textColorGhostDisabled",b)]}}else if(Oe){const C=we?r.textColor:oe?r.textColorTertiary:r[d("color",b)],_=x||C,re=L!=="default"&&L!=="tertiary";y={"--n-color":re?te(_,{alpha:Number(r.colorOpacitySecondary)}):r.colorSecondary,"--n-color-hover":re?te(_,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-pressed":re?te(_,{alpha:Number(r.colorOpacitySecondaryPressed)}):r.colorSecondaryPressed,"--n-color-focus":re?te(_,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-disabled":r.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":_,"--n-text-color-hover":_,"--n-text-color-pressed":_,"--n-text-color-focus":_,"--n-text-color-disabled":_}}else if(Ce||je){const C=we?r.textColor:oe?r.textColorTertiary:r[d("color",b)],_=x||C;Ce?(y["--n-color"]=r.colorTertiary,y["--n-color-hover"]=r.colorTertiaryHover,y["--n-color-pressed"]=r.colorTertiaryPressed,y["--n-color-focus"]=r.colorSecondaryHover,y["--n-color-disabled"]=r.colorTertiary):(y["--n-color"]=r.colorQuaternary,y["--n-color-hover"]=r.colorQuaternaryHover,y["--n-color-pressed"]=r.colorQuaternaryPressed,y["--n-color-focus"]=r.colorQuaternaryHover,y["--n-color-disabled"]=r.colorQuaternary),y["--n-ripple-color"]="#0000",y["--n-text-color"]=_,y["--n-text-color-hover"]=_,y["--n-text-color-pressed"]=_,y["--n-text-color-focus"]=_,y["--n-text-color-disabled"]=_}else y={"--n-color":x||r[d("color",b)],"--n-color-hover":x?q(x):r[d("colorHover",b)],"--n-color-pressed":x?ne(x):r[d("colorPressed",b)],"--n-color-focus":x?q(x):r[d("colorFocus",b)],"--n-color-disabled":x||r[d("colorDisabled",b)],"--n-ripple-color":x||r[d("rippleColor",b)],"--n-text-color":Q||(x?r.textColorPrimary:oe?r.textColorTertiary:r[d("textColor",b)]),"--n-text-color-hover":Q||(x?r.textColorHoverPrimary:r[d("textColorHover",b)]),"--n-text-color-pressed":Q||(x?r.textColorPressedPrimary:r[d("textColorPressed",b)]),"--n-text-color-focus":Q||(x?r.textColorFocusPrimary:r[d("textColorFocus",b)]),"--n-text-color-disabled":Q||(x?r.textColorDisabledPrimary:r[d("textColorDisabled",b)])};let ce={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};I?ce={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ce={"--n-border":r[d("border",b)],"--n-border-hover":r[d("borderHover",b)],"--n-border-pressed":r[d("borderPressed",b)],"--n-border-focus":r[d("borderFocus",b)],"--n-border-disabled":r[d("borderDisabled",b)]};const{[d("height",$)]:ue,[d("fontSize",$)]:Qe,[d("padding",$)]:qe,[d("paddingRound",$)]:Ye,[d("iconSize",$)]:Xe,[d("borderRadius",$)]:Ue,[d("iconMargin",$)]:Ze,waveOpacity:Je}=r,eo={"--n-width":de&&!I?ue:"initial","--n-height":I?"initial":ue,"--n-font-size":Qe,"--n-padding":de||I?"initial":ee?Ye:qe,"--n-icon-size":Xe,"--n-icon-margin":Ze,"--n-border-radius":I?"initial":de||ee?ue:Ue};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":m,"--n-bezier-ease-out":P,"--n-ripple-duration":D,"--n-opacity-disabled":H,"--n-wave-opacity":Je},Ke),y),ce),eo)}),T=w?Ge("button",R(()=>{let l="";const{dashed:m,type:P,ghost:r,text:D,color:H,round:V,circle:E,textColor:$,secondary:O,tertiary:L,quaternary:Y,strong:I}=e;m&&(l+="a"),r&&(l+="b"),D&&(l+="c"),V&&(l+="d"),E&&(l+="e"),O&&(l+="f"),L&&(l+="g"),Y&&(l+="h"),I&&(l+="i"),H&&(l+="j"+_e(H)),$&&(l+="k"+_e($));const{value:x}=g;return l+="l"+x[0],l+="m"+P[0],l}),F,e):void 0;return{selfElRef:o,waveElRef:n,mergedClsPrefix:B,mergedFocusable:i,mergedSize:g,showBorder:t,enterPressed:s,rtlEnabled:p,handleMousedown:f,handleKeydown:z,handleBlur:le,handleKeyup:Z,handleClick:N,customColorCssVars:R(()=>{const{color:l}=e;if(!l)return null;const m=q(l);return{"--n-border-color":l,"--n-border-color-hover":m,"--n-border-color-pressed":ne(l),"--n-border-color-focus":m,"--n-border-color-disabled":l}}),cssVars:w?void 0:F,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:o,onRender:n}=this;n==null||n();const s=Se(this.$slots.default,t=>t&&h("span",{class:`${e}-button__content`},t));return h(o,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&s,h(zo,{width:!0},{default:()=>Se(this.$slots.icon,t=>(this.loading||t)&&h("span",{class:`${e}-button__icon`,style:{margin:wo(this.$slots.default)?"0":""}},h(Le,null,{default:()=>this.loading?h(Do,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},t)})))}),this.iconPlacement==="left"&&s,this.text?null:h(Io,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var Ko=Ao;const Qo=e=>{const{textColorBase:o,opacity1:n,opacity2:s,opacity3:t,opacity4:a,opacity5:g}=e;return{color:o,opacity1Depth:n,opacity2Depth:s,opacity3Depth:t,opacity4Depth:a,opacity5Depth:g}},qo={name:"Icon",common:Fe,self:Qo};var Yo=qo,Xo=G("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[S("color-transition",{transition:"color .3s var(--n-bezier)"}),S("depth",{color:"var(--n-color)"},[u("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),u("svg",{height:"1em",width:"1em"})]);const Uo=M({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Object.assign(Object.assign({},ie.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=xe(e),s=ie("Icon","-icon",Xo,Yo,e,o),t=R(()=>{const{depth:g}=e,{common:{cubicBezierEaseInOut:i},self:f}=s.value;if(g!==void 0){const{color:N,[`opacity${g}Depth`]:Z}=f;return{"--n-bezier":i,"--n-color":N,"--n-opacity":Z}}return{"--n-bezier":i,"--n-color":"","--n-opacity":""}}),a=n?Ge("icon",R(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:o,mergedStyle:R(()=>{const{size:g,color:i}=e;return{fontSize:So(g),color:i}}),cssVars:n?void 0:t,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$parent:o,depth:n,mergedClsPrefix:s,component:t,onRender:a,themeClass:g}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&ho("icon","don't wrap `n-icon` inside `n-icon`"),a==null||a(),h("i",bo(this.$attrs,{role:"img",class:[`${s}-icon`,g,{[`${s}-icon--depth`]:n,[`${s}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?h(t):this.$slots)}});var Zo="/vite/assets/logo.03d6d6da.png";const ae=e=>(mo("data-v-40ff4643"),e=e(),go(),e),Jo=ae(()=>k("p",null,[K(" Recommended IDE setup: "),k("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),K(" + "),k("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),er=ae(()=>k("p",null,[K("See "),k("code",null,"README.md"),K(" for more information.")],-1)),or=ae(()=>k("p",null,[k("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),K(" | "),k("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),rr=ae(()=>k("p",null,[K(" Edit "),k("code",null,"components/HelloWorld.vue"),K(" to test hot module replacement. ")],-1)),tr=M({props:{msg:null},setup(e){const o=A(0);return(n,s)=>(se(),ve(me,null,[k("h1",null,$e(e.msg),1),Jo,er,or,k("button",{type:"button",onClick:s[0]||(s[0]=t=>o.value++)},"count is: "+$e(o.value),1),rr],64))}});var nr=po(tr,[["__scopeId","data-v-40ff4643"]]);const ir={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},sr=k("path",{d:"M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ar=k("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M288 336l80-80l-80-80"},null,-1),lr=k("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M80 256h272"},null,-1),dr=[sr,ar,lr];var cr=M({name:"LogInOutline",render:function(o,n){return se(),ve("svg",ir,dr)}});const ur=k("img",{alt:"Vue logo",src:Zo},null,-1),fr=K(" Default "),br=M({setup(e){return(o,n)=>{const s=Uo,t=Ko,a=xo("permission");return se(),ve(me,null,[ur,fe(nr,{msg:"Hello Vue 3 + TypeScript + Vite"}),vo((se(),yo(t,{tertiary:"",attr:"\u6D4B\u8BD5"},{icon:he(()=>[fe(s,null,{default:he(()=>[fe(Co(cr))]),_:1})]),default:he(()=>[fr]),_:1})),[[a,["\u641C\u7D22","\u91CD\u7F6E","\u6D4B\u8BD5"]]])],64)}}});export{br as default};
