import{S as f,P as u,k as g,w as h,o as w,M as y,c as M,W as b}from"./three.module.0c3547cf.js";import{O as v}from"./OrbitControls.ea5bdaf4.js";import{_ as A,h as C,z as B,s as k,t as x}from"./index.fcf8bebb.js";const E={id:"trangle-angle",class:"trangle-angle"},G=C({setup(S){let t,e,n;return B(()=>{const o=document.getElementById("trangle-angle")||document.body,r=o.clientWidth,l=o.clientHeight;t=new f,t.position.set(0,0,0),n=new u(45,r/l,1,1e3),n.position.set(100,100,100),n.lookAt(t.position);for(let c=0;c<40;c++){const a=new g,d=new Float32Array(9);for(let s=0;s<9;s++)d[s]=Math.random()*30-5;a.setAttribute("position",new h(d,3)),console.log("bufferGemotry",a);const m=new w(Math.random(),Math.random(),Math.random()),_=new y({color:m}),p=new M(a,_);t.add(p)}e=new b,new v(n,e.domElement),e.setClearColor(16777215),e.setSize(r,l),o.appendChild(e.domElement);const i=()=>{requestAnimationFrame(i),e.render(t,n)};i()}),(o,r)=>(k(),x("div",E))}});var I=A(G,[["__scopeId","data-v-331e4dd4"]]);export{I as default};
