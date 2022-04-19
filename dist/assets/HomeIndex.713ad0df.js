import{c as K,a,b as h,d as p,e as n,i as J,f as Q,g as U,h as X,u as Y,j as $,k as Z,l as B,m as A,n as ee,o as oe,p as f,r as m,N as te,q as re,_ as ae,s as ne,t as de,v as l,w as i,x as le,y as s}from"./index.10dd6c38.js";var ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeSize:"18px"};const se=e=>{const{primaryColor:c,borderRadius:u,lineHeight:o,fontSize:b,cardColor:g,textColor2:t,textColor1:r,dividerColor:d,fontWeightStrong:v,closeColor:C,closeColorHover:_,closeColorPressed:z,modalColor:y,boxShadow1:S,popoverColor:F,actionColor:x}=e;return Object.assign(Object.assign({},ie),{lineHeight:o,color:g,colorModal:y,colorPopover:F,colorTarget:c,colorEmbedded:x,textColor:t,titleTextColor:r,borderColor:d,actionColor:x,titleFontWeight:v,closeColor:C,closeColorHover:_,closeColorPressed:z,fontSizeSmall:b,fontSizeMedium:b,fontSizeLarge:b,fontSizeHuge:b,boxShadow:S,borderRadius:u})},ce={name:"Card",common:K,self:se};var ue=ce,be=a([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),p("content-segmented",[a(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),p("content-soft-segmented",[a(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),p("footer-segmented",[a(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),p("footer-soft-segmented",[a(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),a(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[a("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[a("img",`
 display: block;
 width: 100%;
 `)]),p("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),p("action-segmented",[a(">",[n("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("content-segmented, content-soft-segmented",[a(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("footer-segmented, footer-soft-segmented",[a(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),J(h("card",{background:"var(--n-color-modal)"})),Q(h("card",{background:"var(--n-color-popover)"})),h("card",[U({background:"var(--n-color-modal)"})])]);const ge={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},pe=Object.assign(Object.assign({},$.props),ge);var E=X({name:"Card",props:pe,setup(e){const c=()=>{const{onClose:v}=e;v&&re(v)},{inlineThemeDisabled:u,mergedClsPrefixRef:o,mergedRtlRef:b}=Y(e),g=$("Card","-card",be,ue,e,o),t=Z("Card",b,o),r=B(()=>{const{size:v}=e,{self:{color:C,colorModal:_,colorTarget:z,textColor:y,titleTextColor:S,titleFontWeight:F,borderColor:x,actionColor:R,borderRadius:T,closeColor:k,closeColorHover:w,closeColorPressed:O,lineHeight:L,closeSize:j,boxShadow:P,colorPopover:M,colorEmbedded:D,[A("padding",v)]:H,[A("fontSize",v)]:N,[A("titleFontSize",v)]:V},common:{cubicBezierEaseInOut:W}}=g.value,{top:I,left:G,bottom:q}=ee(H);return{"--n-bezier":W,"--n-border-radius":T,"--n-color":e.embedded?D:C,"--n-color-modal":_,"--n-color-popover":M,"--n-color-target":z,"--n-text-color":y,"--n-line-height":L,"--n-action-color":R,"--n-title-text-color":S,"--n-title-font-weight":F,"--n-close-color":k,"--n-close-color-hover":w,"--n-close-color-pressed":O,"--n-border-color":x,"--n-box-shadow":P,"--n-padding-top":I,"--n-padding-bottom":q,"--n-padding-left":G,"--n-font-size":N,"--n-title-font-size":V,"--n-close-size":j}}),d=u?oe("card",B(()=>e.size[0]),r,e):void 0;return{rtlEnabled:t,mergedClsPrefix:o,mergedTheme:g,handleCloseClick:c,cssVars:u?void 0:r,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:c,hoverable:u,mergedClsPrefix:o,rtlEnabled:b,onRender:g,$slots:t}=this;return g==null||g(),f("div",{class:[`${o}-card`,this.themeClass,{[`${o}-card--rtl`]:b,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:c,[`${o}-card--hoverable`]:u}],style:this.cssVars,role:this.role},m(t.cover,r=>r&&f("div",{class:`${o}-card-cover`,role:"none"},r)),m(t.header,r=>r||this.title||this.closable?f("div",{class:`${o}-card-header`,style:this.headerStyle},f("div",{class:`${o}-card-header__main`,role:"heading"},r||[this.title]),m(t["header-extra"],d=>d&&f("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},d)),this.closable?f(te,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick}):null):null),m(t.default,r=>r&&f("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),m(t.footer,r=>r&&[f("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),m(t.action,r=>r&&f("div",{class:`${o}-card__action`,role:"none"},r)))}});const fe={components:{NCard:E},setup(){return{changeRoute:c=>{const{type:u}=c.target.parentNode.dataset;u&&le.push({path:`${u}`})}}}},ve=s(" \u5173\u4E8EThreejs\u7684\u57FA\u672C\u6982\u5FF5 "),he=s(" \u6E32\u67D3\u5668 WebGLRenderer"),me=s(" \u573A\u666F Scene"),xe=s(" \u76F8\u673A Camera"),Ce=s("\u8F68\u9053\u63A7\u5236\u5668 OrbitControls"),_e=s(" \u7ACB\u65B9\u76F8\u673A CubeCamera"),ze=s(" \u6B63\u4EA4\u76F8\u673A OrthographicCamera "),ye=s(" \u900F\u89C6\u76F8\u673A PerspectiveCamera "),Se=s(" \u57FA\u7840\u7EBF\u6761\u6750\u8D28 LineBasicMaterial "),Fe=s(" \u865A\u7EBF\u6750\u8D28 LineDashedMaterial "),Ae=s(" \u52A0\u8F7D\u6A21\u578B ObjLoader ");function Be(e,c,u,o,b,g){const t=E;return ne(),de("div",{class:"container",onClickCapture:c[0]||(c[0]=(...r)=>o.changeRoute&&o.changeRoute(...r))},[l(t,{title:"Three.js\u57FA\u7840\u6982\u5FF5",hoverable:"","data-type":"BasicInfo"},{default:i(()=>[ve]),_:1}),l(t,{title:"\u6E32\u67D3\u5668",hoverable:"","data-type":"WebGLRenderer"},{default:i(()=>[he]),_:1}),l(t,{title:"\u573A\u666F",hoverable:"","data-type":"Scene"},{default:i(()=>[me]),_:1}),l(t,{title:"\u76F8\u673A",hoverable:"","data-type":"Camera"},{default:i(()=>[xe]),_:1}),l(t,{title:"\u8F68\u9053\u63A7\u5236\u5668",hoverable:"","data-type":"OrbitControls"},{default:i(()=>[Ce]),_:1}),l(t,{title:"\u7ACB\u65B9\u76F8\u673A",hoverable:"","data-type":"CubeCamera"},{default:i(()=>[_e]),_:1}),l(t,{title:"\u6B63\u4EA4\u76F8\u673A",hoverable:"","data-type":"OrthographicCamera"},{default:i(()=>[ze]),_:1}),l(t,{title:"\u900F\u89C6\u76F8\u673A",hoverable:"","data-type":"PerspectiveCamera"},{default:i(()=>[ye]),_:1}),l(t,{title:"\u57FA\u7840\u7EBF\u6761\u6750\u8D28",hoverable:"","data-type":"LineBasicMaterial"},{default:i(()=>[Se]),_:1}),l(t,{title:"\u865A\u7EBF\u6750\u8D28",hoverable:"","data-type":"LineDashedMaterial"},{default:i(()=>[Fe]),_:1}),l(t,{title:"\u52A0\u8F7D\u6A21\u578B ObjLoader",hoverable:"","data-type":"ObjLoader"},{default:i(()=>[Ae]),_:1})],32)}var Ee=ae(fe,[["render",Be]]);export{Ee as default};
