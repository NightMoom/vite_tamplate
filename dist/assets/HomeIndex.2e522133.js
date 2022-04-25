import{c as K,a,b as h,d as p,e as i,i as J,f as Q,g as U,h as X,u as Y,j as E,k as Z,l as B,m as A,n as ee,o as oe,p as f,r as m,N as te,q as re,_ as ae,s as ne,t as de,v as n,w as d,x as le,y as l}from"./index.96ff67f4.js";var ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeSize:"18px"};const se=o=>{const{primaryColor:c,borderRadius:u,lineHeight:t,fontSize:b,cardColor:g,textColor2:e,textColor1:r,dividerColor:s,fontWeightStrong:v,closeColor:x,closeColorHover:C,closeColorPressed:F,modalColor:z,boxShadow1:y,popoverColor:S,actionColor:_}=o;return Object.assign(Object.assign({},ie),{lineHeight:t,color:g,colorModal:z,colorPopover:S,colorTarget:c,colorEmbedded:_,textColor:e,titleTextColor:r,borderColor:s,actionColor:_,titleFontWeight:v,closeColor:x,closeColorHover:C,closeColorPressed:F,fontSizeSmall:b,fontSizeMedium:b,fontSizeLarge:b,fontSizeHuge:b,boxShadow:y,borderRadius:u})},ce={name:"Card",common:K,self:se};var ue=ce,be=a([h("card",`
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
 `,[p("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),p("content-segmented",[a(">",[i("content",{paddingTop:"var(--n-padding-bottom)"})])]),p("content-soft-segmented",[a(">",[i("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),p("footer-segmented",[a(">",[i("footer",{paddingTop:"var(--n-padding-bottom)"})])]),p("footer-soft-segmented",[a(">",[i("footer",`
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
 `,[i("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),i("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),i("close",`
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),i("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),i("content","flex: 1;"),i("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[a("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),i("action",`
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
 `,[a("&:target","border-color: var(--n-color-target);")]),p("action-segmented",[a(">",[i("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("content-segmented, content-soft-segmented",[a(">",[i("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),p("footer-segmented, footer-soft-segmented",[a(">",[i("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),J(h("card",{background:"var(--n-color-modal)"})),Q(h("card",{background:"var(--n-color-popover)"})),h("card",[U({background:"var(--n-color-modal)"})])]);const ge={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},pe=Object.assign(Object.assign({},E.props),ge);var $=X({name:"Card",props:pe,setup(o){const c=()=>{const{onClose:v}=o;v&&re(v)},{inlineThemeDisabled:u,mergedClsPrefixRef:t,mergedRtlRef:b}=Y(o),g=E("Card","-card",be,ue,o,t),e=Z("Card",b,t),r=B(()=>{const{size:v}=o,{self:{color:x,colorModal:C,colorTarget:F,textColor:z,titleTextColor:y,titleFontWeight:S,borderColor:_,actionColor:R,borderRadius:T,closeColor:k,closeColorHover:w,closeColorPressed:O,lineHeight:L,closeSize:j,boxShadow:D,colorPopover:M,colorEmbedded:P,[A("padding",v)]:H,[A("fontSize",v)]:N,[A("titleFontSize",v)]:V},common:{cubicBezierEaseInOut:W}}=g.value,{top:I,left:G,bottom:q}=ee(H);return{"--n-bezier":W,"--n-border-radius":T,"--n-color":o.embedded?P:x,"--n-color-modal":C,"--n-color-popover":M,"--n-color-target":F,"--n-text-color":z,"--n-line-height":L,"--n-action-color":R,"--n-title-text-color":y,"--n-title-font-weight":S,"--n-close-color":k,"--n-close-color-hover":w,"--n-close-color-pressed":O,"--n-border-color":_,"--n-box-shadow":D,"--n-padding-top":I,"--n-padding-bottom":q,"--n-padding-left":G,"--n-font-size":N,"--n-title-font-size":V,"--n-close-size":j}}),s=u?oe("card",B(()=>o.size[0]),r,o):void 0;return{rtlEnabled:e,mergedClsPrefix:t,mergedTheme:g,handleCloseClick:c,cssVars:u?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{segmented:o,bordered:c,hoverable:u,mergedClsPrefix:t,rtlEnabled:b,onRender:g,$slots:e}=this;return g==null||g(),f("div",{class:[`${t}-card`,this.themeClass,{[`${t}-card--rtl`]:b,[`${t}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${t}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${t}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${t}-card--bordered`]:c,[`${t}-card--hoverable`]:u}],style:this.cssVars,role:this.role},m(e.cover,r=>r&&f("div",{class:`${t}-card-cover`,role:"none"},r)),m(e.header,r=>r||this.title||this.closable?f("div",{class:`${t}-card-header`,style:this.headerStyle},f("div",{class:`${t}-card-header__main`,role:"heading"},r||[this.title]),m(e["header-extra"],s=>s&&f("div",{class:`${t}-card-header__extra`,style:this.headerExtraStyle},s)),this.closable?f(te,{clsPrefix:t,class:`${t}-card-header__close`,onClick:this.handleCloseClick}):null):null),m(e.default,r=>r&&f("div",{class:`${t}-card__content`,style:this.contentStyle,role:"none"},r)),m(e.footer,r=>r&&[f("div",{class:`${t}-card__footer`,style:this.footerStyle,role:"none"},r)]),m(e.action,r=>r&&f("div",{class:`${t}-card__action`,role:"none"},r)))}});const fe={components:{NCard:$},setup(){return{changeRoute:c=>{const{type:u}=c.target.parentNode.dataset;u&&le.push({path:`${u}`})}}}},ve=l(" \u5173\u4E8EThreejs\u7684\u57FA\u672C\u6982\u5FF5 "),he=l(" \u6E32\u67D3\u5668 WebGLRenderer"),me=l(" \u573A\u666F Scene"),_e=l(" \u76F8\u673A Camera"),xe=l("\u8F68\u9053\u63A7\u5236\u5668 OrbitControls"),Ce=l(" \u7ACB\u65B9\u76F8\u673A CubeCamera"),Fe=l(" \u6B63\u4EA4\u76F8\u673A OrthographicCamera "),ze=l(" \u900F\u89C6\u76F8\u673A PerspectiveCamera "),ye=l(" \u57FA\u7840\u7EBF\u6761\u6750\u8D28 LineBasicMaterial "),Se=l(" \u865A\u7EBF\u6750\u8D28 LineDashedMaterial "),Ae=l(" \u52A0\u8F7D\u6A21\u578B ObjLoader "),Be=l(" \u573A\u666F\u5207\u6362 SceneSelect "),Ee=l("\u968F\u673A\u4E09\u89D2\u5F62"),$e=l("\u968F\u673A\u6B63\u65B9\u4F53"),Re=l("\u73AF\u5883\u8D34\u56FE");function Te(o,c,u,t,b,g){const e=$;return ne(),de("div",{class:"container",onClickCapture:c[0]||(c[0]=(...r)=>t.changeRoute&&t.changeRoute(...r))},[n(e,{title:"Three.js\u57FA\u7840\u6982\u5FF5",hoverable:"","data-type":"BasicInfo"},{default:d(()=>[ve]),_:1}),n(e,{title:"\u6E32\u67D3\u5668",hoverable:"","data-type":"WebGLRenderer"},{default:d(()=>[he]),_:1}),n(e,{title:"\u573A\u666F",hoverable:"","data-type":"Scene"},{default:d(()=>[me]),_:1}),n(e,{title:"\u76F8\u673A",hoverable:"","data-type":"Camera"},{default:d(()=>[_e]),_:1}),n(e,{title:"\u8F68\u9053\u63A7\u5236\u5668",hoverable:"","data-type":"OrbitControls"},{default:d(()=>[xe]),_:1}),n(e,{title:"\u7ACB\u65B9\u76F8\u673A",hoverable:"","data-type":"CubeCamera"},{default:d(()=>[Ce]),_:1}),n(e,{title:"\u6B63\u4EA4\u76F8\u673A",hoverable:"","data-type":"OrthographicCamera"},{default:d(()=>[Fe]),_:1}),n(e,{title:"\u900F\u89C6\u76F8\u673A",hoverable:"","data-type":"PerspectiveCamera"},{default:d(()=>[ze]),_:1}),n(e,{title:"\u57FA\u7840\u7EBF\u6761\u6750\u8D28",hoverable:"","data-type":"LineBasicMaterial"},{default:d(()=>[ye]),_:1}),n(e,{title:"\u865A\u7EBF\u6750\u8D28",hoverable:"","data-type":"LineDashedMaterial"},{default:d(()=>[Se]),_:1}),n(e,{title:"\u52A0\u8F7D\u6A21\u578B ObjLoader",hoverable:"","data-type":"ObjLoader"},{default:d(()=>[Ae]),_:1}),n(e,{title:"\u573A\u666F\u5207\u6362",hoverable:"","data-type":"SceneSelect"},{default:d(()=>[Be]),_:1}),n(e,{title:"\u968F\u673A\u4E09\u89D2\u5F62",hoverable:"","data-type":"TrangleAngle"},{default:d(()=>[Ee]),_:1}),n(e,{title:"\u968F\u673A\u6B63\u65B9\u4F53",hoverable:"","data-type":"RandomBox"},{default:d(()=>[$e]),_:1}),n(e,{title:"\u73AF\u5883\u8D34\u56FE",hoverable:"","data-type":"EnvMesh01"},{default:d(()=>[Re]),_:1})],32)}var we=ae(fe,[["render",Te]]);export{we as default};
