import{d as v,u as M,r as l,o as t,c as _,a as $,F as f,b as u,w as n,e as i,t as y,f as a,g as b,h as m,i as w,j as R,k as I,T,l as h,n as D,_ as x,m as L,p as Z,v as z,q as B,s as F,x as N,y as H}from"./index-DH8gZTZO.js";const V={name:"Menu"},q=v({...V,props:["menuList"],setup(c){let o=M();const s=p=>{o.push(p.index)};return(p,g)=>{const r=l("el-icon"),d=l("el-menu-item"),S=l("Menu",!0),C=l("el-sub-menu");return t(!0),_(f,null,$(c.menuList,(e,Q)=>(t(),_(f,{key:e.path},[e.children?m("",!0):(t(),_(f,{key:0},[e.meta.hidden?m("",!0):(t(),u(d,{key:0,index:e.path,onClick:s},{title:n(()=>[i("span",null,y(e.meta.title),1)]),default:n(()=>[a(r,null,{default:n(()=>[(t(),u(b(e.meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64)),e.children&&e.children.length==1?(t(),_(f,{key:1},[e.children[0].meta.hidden?m("",!0):(t(),u(d,{key:0,index:e.children[0].path,onClick:s},{title:n(()=>[i("span",null,y(e.children[0].meta.title),1)]),default:n(()=>[a(r,null,{default:n(()=>[(t(),u(b(e.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64)):m("",!0),e.children&&e.children.length>1?(t(),u(C,{key:2,index:e.path},{title:n(()=>[a(r,null,{default:n(()=>[(t(),u(b(e.meta.icon)))]),_:2},1024),i("span",null,y(e.meta.title),1)]),default:n(()=>[a(S,{"menu-list":e.children},null,8,["menu-list"])]),_:2},1032,["index"])):m("",!0)],64))),128)}}}),k=w("zhedie",{state:()=>({QieHuan:!1,refresh:!1})}),E={class:"main"},j=v({__name:"Main",setup(c){let o=k(),s=R(!0);return I(()=>o.refresh,()=>{s.value=!1,D(()=>{s.value=!0})}),(p,g)=>{const r=l("router-view");return t(),_("div",E,[a(r,null,{default:n(({Component:d})=>[a(T,{name:"fade"},{default:n(()=>[h(s)?(t(),u(b(d),{key:0})):m("",!0)]),_:2},1024)]),_:1})])}}}),A=x(j,[["__scopeId","data-v-e4bf2d02"]]),G=v({__name:"TabbarLeft",setup(c){let o=k(),s=L();const p=()=>{o.QieHuan=!o.QieHuan,console.log("图标切换")};return(g,r)=>{const d=l("el-icon"),S=l("el-breadcrumb-item"),C=l("el-breadcrumb");return t(),_(f,null,[a(d,{class:"zhedie",onClick:p},{default:n(()=>[(t(),u(b(h(o).QieHuan?"Expand":"Fold")))]),_:1}),a(C,{"separator-icon":"ArrowRight"},{default:n(()=>[(t(!0),_(f,null,$(h(s).matched,(e,Q)=>Z((t(),u(S,{key:Q,to:e.path},{default:n(()=>[a(d,{style:{margin:"0 2px"}},{default:n(()=>[(t(),u(b(e.meta.icon)))]),_:2},1024),i("span",null,y(e.meta.title),1)]),_:2},1032,["to"])),[[z,e.meta.title]])),128))]),_:1})],64)}}}),J=x(G,[["__scopeId","data-v-52470392"]]),K=c=>(B("data-v-c4c668e8"),c=c(),F(),c),O=K(()=>i("div",{class:"tubiao"},null,-1)),P=v({__name:"TabbarRight",setup(c){let o=k();const s=()=>{o.refresh=!o.refresh,console.log("刷新")};return(p,g)=>{const r=l("el-button");return t(),_(f,null,[a(r,{type:"warning",size:"small",icon:"Refresh",circle:"",onClick:s}),O],64)}}}),U=x(P,[["__scopeId","data-v-c4c668e8"]]),W={class:"tabbar"},X={class:"tabbar_left"},Y={class:"tabbar_right"},ee=v({__name:"Tabbar",setup(c){return(o,s)=>(t(),_("div",W,[i("div",X,[a(J)]),i("div",Y,[a(U)])]))}}),te=x(ee,[["__scopeId","data-v-8e904de2"]]);let ne=w("Menu",{state:()=>({MenuRouter:N}),actions:{},getters:{}});const ae={class:"layout_container"},se=v({__name:"Zhuye",setup(c){let o=ne(),s=k();return(p,g)=>{const r=l("el-menu"),d=l("el-scrollbar");return t(),_("div",ae,[i("div",{class:H(["layout_slider",{QieHuan:!!h(s).QieHuan}])},[a(d,{class:"scrollbar"},{default:n(()=>[a(r,{"default-active":p.$route.path,"unique-opened":!0,"background-color":"#112f50","text-color":"#fff","active-text-color":"red",collapse:!!h(s).QieHuan},{default:n(()=>[a(q,{menuList:h(o).MenuRouter},null,8,["menuList"])]),_:1},8,["default-active","collapse"])]),_:1})],2),i("div",{class:H(["layout_tabbar",{QieHuan:!!h(s).QieHuan}])},[a(te)],2),i("div",{class:H(["layout_main",{QieHuan:!!h(s).QieHuan}])},[a(A)],2)])}}}),le=x(se,[["__scopeId","data-v-3405c725"]]);export{le as default};
