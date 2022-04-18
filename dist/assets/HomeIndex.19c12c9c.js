import{c as K,a,b as h,d as u,e as n,i as J,f as Q,g as U,h as X,u as Y,j as B,k as Z,l as A,m as $,n as ee,o as oe,p as b,r as m,N as te,q as re,_ as ae,s as ne,t as de,v as p,w as f,x as le,y as v}from"./index.b2b3a63b.js";var ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeSize:"18px"};const se=e=>{const{primaryColor:l,borderRadius:i,lineHeight:o,fontSize:s,cardColor:c,textColor2:r,textColor1:t,dividerColor:d,fontWeightStrong:g,closeColor:C,closeColorHover:_,closeColorPressed:z,modalColor:S,boxShadow1:y,popoverColor:F,actionColor:x}=e;return Object.assign(Object.assign({},ie),{lineHeight:o,color:c,colorModal:S,colorPopover:F,colorTarget:l,colorEmbedded:x,textColor:r,titleTextColor:t,borderColor:d,actionColor:x,titleFontWeight:g,closeColor:C,closeColorHover:_,closeColorPressed:z,fontSizeSmall:s,fontSizeMedium:s,fontSizeLarge:s,fontSizeHuge:s,boxShadow:y,borderRadius:i})},ce={name:"Card",common:K,self:se};var ue=ce,be=a([h("card",`
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
 `,[u("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),u("content-segmented",[a(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),u("content-soft-segmented",[a(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),u("footer-segmented",[a(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),u("footer-soft-segmented",[a(">",[n("footer",`
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
 `)]),u("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),u("action-segmented",[a(">",[n("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),u("content-segmented, content-soft-segmented",[a(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),u("footer-segmented, footer-soft-segmented",[a(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),J(h("card",{background:"var(--n-color-modal)"})),Q(h("card",{background:"var(--n-color-popover)"})),h("card",[U({background:"var(--n-color-modal)"})])]);const ge={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},pe=Object.assign(Object.assign({},B.props),ge);var R=X({name:"Card",props:pe,setup(e){const l=()=>{const{onClose:g}=e;g&&re(g)},{inlineThemeDisabled:i,mergedClsPrefixRef:o,mergedRtlRef:s}=Y(e),c=B("Card","-card",be,ue,e,o),r=Z("Card",s,o),t=A(()=>{const{size:g}=e,{self:{color:C,colorModal:_,colorTarget:z,textColor:S,titleTextColor:y,titleFontWeight:F,borderColor:x,actionColor:T,borderRadius:k,closeColor:w,closeColorHover:E,closeColorPressed:O,lineHeight:P,closeSize:j,boxShadow:H,colorPopover:L,colorEmbedded:M,[$("padding",g)]:N,[$("fontSize",g)]:V,[$("titleFontSize",g)]:W},common:{cubicBezierEaseInOut:I}}=c.value,{top:D,left:G,bottom:q}=ee(N);return{"--n-bezier":I,"--n-border-radius":k,"--n-color":e.embedded?M:C,"--n-color-modal":_,"--n-color-popover":L,"--n-color-target":z,"--n-text-color":S,"--n-line-height":P,"--n-action-color":T,"--n-title-text-color":y,"--n-title-font-weight":F,"--n-close-color":w,"--n-close-color-hover":E,"--n-close-color-pressed":O,"--n-border-color":x,"--n-box-shadow":H,"--n-padding-top":D,"--n-padding-bottom":q,"--n-padding-left":G,"--n-font-size":V,"--n-title-font-size":W,"--n-close-size":j}}),d=i?oe("card",A(()=>e.size[0]),t,e):void 0;return{rtlEnabled:r,mergedClsPrefix:o,mergedTheme:c,handleCloseClick:l,cssVars:i?void 0:t,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:l,hoverable:i,mergedClsPrefix:o,rtlEnabled:s,onRender:c,$slots:r}=this;return c==null||c(),b("div",{class:[`${o}-card`,this.themeClass,{[`${o}-card--rtl`]:s,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:l,[`${o}-card--hoverable`]:i}],style:this.cssVars,role:this.role},m(r.cover,t=>t&&b("div",{class:`${o}-card-cover`,role:"none"},t)),m(r.header,t=>t||this.title||this.closable?b("div",{class:`${o}-card-header`,style:this.headerStyle},b("div",{class:`${o}-card-header__main`,role:"heading"},t||[this.title]),m(r["header-extra"],d=>d&&b("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},d)),this.closable?b(te,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick}):null):null),m(r.default,t=>t&&b("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},t)),m(r.footer,t=>t&&[b("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},t)]),m(r.action,t=>t&&b("div",{class:`${o}-card__action`,role:"none"},t)))}});const fe={components:{NCard:R},setup(){return{changeRoute:l=>{const{type:i}=l.target.parentNode.dataset;i&&le.push({path:`${i}`})}}}},ve=v(" \u5173\u4E8EThreejs\u7684\u57FA\u672C\u6982\u5FF5 "),he=v(" \u6E32\u67D3\u5668 WebGLRenderer"),me=v(" \u573A\u666F Scene"),xe=v(" \u76F8\u673A Camera"),Ce=v("\u8F68\u9053\u63A7\u5236\u5668 OrbitControls"),_e=v(" \u7ACB\u65B9\u76F8\u673A CubeCamera"),ze=v(" \u6B63\u4EA4\u76F8\u673A OrthographicCamera "),Se=v(" \u900F\u89C6\u76F8\u673A PerspectiveCamera ");function ye(e,l,i,o,s,c){const r=R;return ne(),de("div",{class:"container",onClickCapture:l[0]||(l[0]=(...t)=>o.changeRoute&&o.changeRoute(...t))},[p(r,{title:"Three.js\u57FA\u7840\u6982\u5FF5",hoverable:"","data-type":"BasicInfo"},{default:f(()=>[ve]),_:1}),p(r,{title:"\u6E32\u67D3\u5668",hoverable:"","data-type":"WebGLRenderer"},{default:f(()=>[he]),_:1}),p(r,{title:"\u573A\u666F",hoverable:"","data-type":"Scene"},{default:f(()=>[me]),_:1}),p(r,{title:"\u76F8\u673A",hoverable:"","data-type":"Camera"},{default:f(()=>[xe]),_:1}),p(r,{title:"\u8F68\u9053\u63A7\u5236\u5668",hoverable:"","data-type":"OrbitControls"},{default:f(()=>[Ce]),_:1}),p(r,{title:"\u7ACB\u65B9\u76F8\u673A",hoverable:"","data-type":"CubeCamera"},{default:f(()=>[_e]),_:1}),p(r,{title:"\u6B63\u4EA4\u76F8\u673A",hoverable:"","data-type":"OrthographicCamera"},{default:f(()=>[ze]),_:1}),p(r,{title:"\u900F\u89C6\u76F8\u673A",hoverable:"","data-type":"PerspectiveCamera"},{default:f(()=>[Se]),_:1})],32)}var $e=ae(fe,[["render",ye]]);export{$e as default};
