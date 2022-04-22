import{c as K,a,b as h,d as p,e as n,i as J,f as Q,g as U,h as X,u as Y,j as E,k as Z,l as B,m as A,n as ee,o as oe,p as f,r as m,N as te,q as re,_ as ae,s as ne,t as de,v as d,w as l,x as le,y as i}from"./index.fcf8bebb.js";var ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeSize:"18px"};const se=e=>{const{primaryColor:c,borderRadius:u,lineHeight:o,fontSize:b,cardColor:g,textColor2:t,textColor1:r,dividerColor:s,fontWeightStrong:v,closeColor:x,closeColorHover:C,closeColorPressed:z,modalColor:F,boxShadow1:y,popoverColor:S,actionColor:_}=e;return Object.assign(Object.assign({},ie),{lineHeight:o,color:g,colorModal:F,colorPopover:S,colorTarget:c,colorEmbedded:_,textColor:t,titleTextColor:r,borderColor:s,actionColor:_,titleFontWeight:v,closeColor:x,closeColorHover:C,closeColorPressed:z,fontSizeSmall:b,fontSizeMedium:b,fontSizeLarge:b,fontSizeHuge:b,boxShadow:y,borderRadius:u})},ce={name:"Card",common:K,self:se};var ue=ce,be=a([h("card",`
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
 `,[a("&:target","border-color: var(--n-color-target);")]),p("action-segmented",[a(">",[n("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("content-segmented, content-soft-segmented",[a(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("footer-segmented, footer-soft-segmented",[a(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),J(h("card",{background:"var(--n-color-modal)"})),Q(h("card",{background:"var(--n-color-popover)"})),h("card",[U({background:"var(--n-color-modal)"})])]);const ge={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},pe=Object.assign(Object.assign({},E.props),ge);var $=X({name:"Card",props:pe,setup(e){const c=()=>{const{onClose:v}=e;v&&re(v)},{inlineThemeDisabled:u,mergedClsPrefixRef:o,mergedRtlRef:b}=Y(e),g=E("Card","-card",be,ue,e,o),t=Z("Card",b,o),r=B(()=>{const{size:v}=e,{self:{color:x,colorModal:C,colorTarget:z,textColor:F,titleTextColor:y,titleFontWeight:S,borderColor:_,actionColor:R,borderRadius:T,closeColor:k,closeColorHover:w,closeColorPressed:O,lineHeight:L,closeSize:j,boxShadow:P,colorPopover:D,colorEmbedded:M,[A("padding",v)]:H,[A("fontSize",v)]:N,[A("titleFontSize",v)]:V},common:{cubicBezierEaseInOut:W}}=g.value,{top:I,left:G,bottom:q}=ee(H);return{"--n-bezier":W,"--n-border-radius":T,"--n-color":e.embedded?M:x,"--n-color-modal":C,"--n-color-popover":D,"--n-color-target":z,"--n-text-color":F,"--n-line-height":L,"--n-action-color":R,"--n-title-text-color":y,"--n-title-font-weight":S,"--n-close-color":k,"--n-close-color-hover":w,"--n-close-color-pressed":O,"--n-border-color":_,"--n-box-shadow":P,"--n-padding-top":I,"--n-padding-bottom":q,"--n-padding-left":G,"--n-font-size":N,"--n-title-font-size":V,"--n-close-size":j}}),s=u?oe("card",B(()=>e.size[0]),r,e):void 0;return{rtlEnabled:t,mergedClsPrefix:o,mergedTheme:g,handleCloseClick:c,cssVars:u?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:e,bordered:c,hoverable:u,mergedClsPrefix:o,rtlEnabled:b,onRender:g,$slots:t}=this;return g==null||g(),f("div",{class:[`${o}-card`,this.themeClass,{[`${o}-card--rtl`]:b,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:c,[`${o}-card--hoverable`]:u}],style:this.cssVars,role:this.role},m(t.cover,r=>r&&f("div",{class:`${o}-card-cover`,role:"none"},r)),m(t.header,r=>r||this.title||this.closable?f("div",{class:`${o}-card-header`,style:this.headerStyle},f("div",{class:`${o}-card-header__main`,role:"heading"},r||[this.title]),m(t["header-extra"],s=>s&&f("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},s)),this.closable?f(te,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick}):null):null),m(t.default,r=>r&&f("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),m(t.footer,r=>r&&[f("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),m(t.action,r=>r&&f("div",{class:`${o}-card__action`,role:"none"},r)))}});const fe={components:{NCard:$},setup(){return{changeRoute:c=>{const{type:u}=c.target.parentNode.dataset;u&&le.push({path:`${u}`})}}}},ve=i(" \u5173\u4E8EThreejs\u7684\u57FA\u672C\u6982\u5FF5 "),he=i(" \u6E32\u67D3\u5668 WebGLRenderer"),me=i(" \u573A\u666F Scene"),_e=i(" \u76F8\u673A Camera"),xe=i("\u8F68\u9053\u63A7\u5236\u5668 OrbitControls"),Ce=i(" \u7ACB\u65B9\u76F8\u673A CubeCamera"),ze=i(" \u6B63\u4EA4\u76F8\u673A OrthographicCamera "),Fe=i(" \u900F\u89C6\u76F8\u673A PerspectiveCamera "),ye=i(" \u57FA\u7840\u7EBF\u6761\u6750\u8D28 LineBasicMaterial "),Se=i(" \u865A\u7EBF\u6750\u8D28 LineDashedMaterial "),Ae=i(" \u52A0\u8F7D\u6A21\u578B ObjLoader "),Be=i(" \u573A\u666F\u5207\u6362 SceneSelect "),Ee=i("\u968F\u673A\u4E09\u89D2\u5F62"),$e=i("\u968F\u673A\u6B63\u65B9\u4F53");function Re(e,c,u,o,b,g){const t=$;return ne(),de("div",{class:"container",onClickCapture:c[0]||(c[0]=(...r)=>o.changeRoute&&o.changeRoute(...r))},[d(t,{title:"Three.js\u57FA\u7840\u6982\u5FF5",hoverable:"","data-type":"BasicInfo"},{default:l(()=>[ve]),_:1}),d(t,{title:"\u6E32\u67D3\u5668",hoverable:"","data-type":"WebGLRenderer"},{default:l(()=>[he]),_:1}),d(t,{title:"\u573A\u666F",hoverable:"","data-type":"Scene"},{default:l(()=>[me]),_:1}),d(t,{title:"\u76F8\u673A",hoverable:"","data-type":"Camera"},{default:l(()=>[_e]),_:1}),d(t,{title:"\u8F68\u9053\u63A7\u5236\u5668",hoverable:"","data-type":"OrbitControls"},{default:l(()=>[xe]),_:1}),d(t,{title:"\u7ACB\u65B9\u76F8\u673A",hoverable:"","data-type":"CubeCamera"},{default:l(()=>[Ce]),_:1}),d(t,{title:"\u6B63\u4EA4\u76F8\u673A",hoverable:"","data-type":"OrthographicCamera"},{default:l(()=>[ze]),_:1}),d(t,{title:"\u900F\u89C6\u76F8\u673A",hoverable:"","data-type":"PerspectiveCamera"},{default:l(()=>[Fe]),_:1}),d(t,{title:"\u57FA\u7840\u7EBF\u6761\u6750\u8D28",hoverable:"","data-type":"LineBasicMaterial"},{default:l(()=>[ye]),_:1}),d(t,{title:"\u865A\u7EBF\u6750\u8D28",hoverable:"","data-type":"LineDashedMaterial"},{default:l(()=>[Se]),_:1}),d(t,{title:"\u52A0\u8F7D\u6A21\u578B ObjLoader",hoverable:"","data-type":"ObjLoader"},{default:l(()=>[Ae]),_:1}),d(t,{title:"\u573A\u666F\u5207\u6362",hoverable:"","data-type":"SceneSelect"},{default:l(()=>[Be]),_:1}),d(t,{title:"\u968F\u673A\u4E09\u89D2\u5F62",hoverable:"","data-type":"TrangleAngle"},{default:l(()=>[Ee]),_:1}),d(t,{title:"\u968F\u673A\u6B63\u65B9\u4F53",hoverable:"","data-type":"RandomBox"},{default:l(()=>[$e]),_:1})],32)}var ke=ae(fe,[["render",Re]]);export{ke as default};
