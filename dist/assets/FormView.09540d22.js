import{o as r,c as m,a as l,l as n,v as i,n as u,p as d,e as _,t as s,F as p}from"./index.0230a6f5.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";const f={name:"FormView",data(){return{form:{name:"",email:"",class:""}}},methods:{addData(){console.log(this.form)}}},h=l("h1",null,"Page Create Form",-1),b=l("label",null,"name: ",-1),v=l("br",null,null,-1),C=l("br",null,null,-1),V=l("label",null,"Email: ",-1),x=l("br",null,null,-1),D=l("br",null,null,-1),F=l("label",null,"Class: ",-1),B=l("option",{disabled:"",value:""},"Choose Class",-1),g=l("option",{value:"A"},"A",-1),w=l("option",{value:"B"},"B",-1),y=l("option",{value:"C"},"C",-1),E=[B,g,w,y],N=l("br",null,null,-1),k=l("br",null,null,-1),M=l("br",null,null,-1),S=l("h3",null,"Data Form",-1);function U(A,o,I,T,e,a){return r(),m(p,null,[h,l("form",null,[b,n(l("input",{type:"text",placeholder:"Input Name ","onUpdate:modelValue":o[0]||(o[0]=t=>e.form.name=t)},null,512),[[i,e.form.name]]),u(),v,C,V,n(l("input",{type:"email",placeholder:"Input Email ","onUpdate:modelValue":o[1]||(o[1]=t=>e.form.email=t)},null,512),[[i,e.form.email]]),x,D,F,n(l("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.class=t)},E,512),[[d,e.form.class]]),N,k,l("button",{type:"submit",onClick:o[3]||(o[3]=_((...t)=>a.addData&&a.addData(...t),["prevent"]))},"Submit")]),M,S,l("p",null,"Name: "+s(e.form.name),1),l("p",null,"Email: "+s(e.form.email),1),l("p",null,"Class: "+s(e.form.class),1)],64)}const q=c(f,[["render",U]]);export{q as default};