import{S as l,g as _,L as h,P as C,C as b,B as w,h as g,c as v,W as f}from"./three.module.531b4206.js";import{_ as L,h as x,z as y,s as B,t as E,C as M,D as S,E as W}from"./index.b2b3a63b.js";const A=n=>(M("data-v-7c723fd4"),n=n(),S(),n),I={id:"cube-camera",class:"cube-camera"},F=A(()=>W("p",null,"\u521B\u5EFA6\u4E2A\u6E32\u67D3\u5230WebGLCubeRenderTarget\u7684\u6444\u50CF\u673A\u3002",-1)),G=[F],k=x({setup(n){let e,t,a,c,s;return y(()=>{const o=document.getElementById("cube-camera")||document.body,i=o.clientWidth,d=o.clientHeight;t=new l,t.position.set(0,0,0),s=new _(128,{generateMipmaps:!0,minFilter:h}),a=new C(60,window.innerWidth/window.innerHeight,1,1e3),a.position.set(10,10,10),a.lookAt(t.position),t.add(a),c=new b(1,1e4,s);const u=new w(10,10,10),p=new g({color:16777215,envMap:s.texture}),r=new v(u,p);t.add(r),e=new f,e.setClearColor(16777215),e.setSize(i,d),e.render(t,a);const m=()=>{c.update(e,t),e.render(t,a),r.rotation.x+=.01,r.rotation.y+=.01,r.rotation.z+=.01};o.appendChild(e.domElement),e.setAnimationLoop(m)}),(o,i)=>(B(),E("div",I,G))}});var T=L(k,[["__scopeId","data-v-7c723fd4"]]);export{T as default};