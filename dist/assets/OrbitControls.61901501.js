import{S as C,W as b,P as B,a as w,A as F,b as g,B as x,M as E,c as A}from"./three.module.531b4206.js";import{O as f}from"./OrbitControls.193a6294.js";import{S as v}from"./stats.min.1a7754ad.js";import{_ as M,h as S,z as y,A as I,B as L,s as G,t as O,C as P,D as W,E as k}from"./index.b2b3a63b.js";const H=n=>(P("data-v-ee77d1a6"),n=n(),W(),n),z={id:"orbitControls",class:"orbitControls"},D=H(()=>k("p",null,"\u8F68\u9053\u63A7\u5236\u5668\u53EF\u4EE5\u8BA9\u4F60\u5B9E\u73B0\u5BF9\u7269\u4F53\u7A97\u53E3\u7684\u7F29\u653E\uFF0C\u65CB\u8F6C\u7B49\u7CFB\u5217\u64CD\u4F5C",-1)),q=[D],N=S({setup(n){let t;const l=async()=>{const e=document.getElementById("orbitControls")||document.body;console.log("el",e);const a=e==null?void 0:e.clientWidth,i=e==null?void 0:e.clientHeight,o=new C;o.position.set(0,0,0),t=new b,t.setSize(a,i,!0),t.setClearColor(16777215);const s=new B(45,a/i,1,1e3);s.position.set(10,10,40),s.lookAt(o.position);const c=new w(16777215);c.position.set(400,200,300),o.add(c);const p=new F(4473924);o.add(p);const m=new g(10);o.add(m);const _=new x(10,10,10),h=new E({color:16711680}),d=new A(_,h);o.add(d),e.appendChild(t.domElement);const r=new v;t.render(o,s),e.appendChild(r.dom),r.showPanel(0);const u=()=>{requestAnimationFrame(u),d.rotation.x+=.01,t.render(o,s),r.update()};new f(s,t.domElement),u()};return y(()=>{console.log("onMounted");const e=I();console.log("instance",e),l()}),L(()=>{t.dispose()}),(e,a)=>(G(),O("div",z,q))}});var j=M(N,[["__scopeId","data-v-ee77d1a6"]]);export{j as default};