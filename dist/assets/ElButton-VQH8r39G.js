import{E as m,am as E,al as C,d as _,o as n,A as l,a3 as y,L as N,c as v,w as L,f as x,t as A,u as c,an as $,_ as d,a as b,b as e,e as i,a1 as u,C as I,D as R,I as p}from"./index-Bq7DaXGb.js";const T=[{text:"SIGN IN",road:{name:m.AUTHORIZATION},id:1},{text:"SIGN UP",road:{name:m.REGISTRATION},id:2}],g=[{text:"HOME",road:{name:E.HOME},id:1},{text:"QUIZ",road:{name:C.DEFAULT},id:1}],k={name:E.HOME},S=_({__name:"ElRoute",props:{routerList:{default:()=>[]}},setup(o){const t=o;return(a,r)=>(n(!0),l(N,null,y(t.routerList,s=>(n(),v(c($),{key:s.id,to:s.road,class:"el-route__link"},{default:L(()=>[x(A(s.text),1)]),_:2},1032,["to"]))),128))}}),h=d(S,[["__scopeId","data-v-afa90ddd"]]),B={class:"el-header"},H={class:"el-header__container"},O={class:"el-header__sitemap"},M={class:"el-header__navigation"},F={class:"el-header__sitemap"},U={class:"el-header__actions"},V=_({__name:"ElHeader",setup(o){return(t,a)=>{const r=b("RouterLink");return n(),l("header",B,[e("div",H,[e("div",O,[i(r,{to:c(k)},{default:L(()=>a[0]||(a[0]=[e("img",{src:"https://theme653-apparel-free.myshopify.com/cdn/shop/t/2/assets/logo.png",alt:"Logo",class:"el-header__applogotip"},null,-1)])),_:1},8,["to"])]),e("nav",M,[e("div",F,[i(h,{routerList:c(g)},null,8,["routerList"])]),e("div",U,[i(h,{routerList:c(T)},null,8,["routerList"])])])])])}}}),D=d(V,[["__scopeId","data-v-2328d388"]]),G={},w={class:"el-footer"};function z(o,t){return n(),l("footer",w,t[0]||(t[0]=[e("div",{class:"el-footer__container"},[e("p",{class:"el-footer__text"}," This site is designed for presentation purposes only. All rights reserved by the creator. Not for sale. ")],-1)]))}const P=d(G,[["render",z],["__scopeId","data-v-db40c190"]]),J=_({__name:"AppContainer",props:{parentClassList:{default:()=>""},childClassList:{default:()=>""},footer:{type:Boolean,default:()=>!0}},setup(o){const t=o,a=u(()=>[`${t.parentClassList}`]),r=u(()=>[`${t.childClassList}`]);return(s,f)=>(n(),l("section",{class:p([a.value])},[e("div",{class:p([r.value])},[i(D),I(s.$slots,"content"),s.footer?(n(),v(P,{key:0})):R("",!0)],2)],2))}}),Z=["type"],Q={class:"el-button__text"},j=_({__name:"ElButton",props:{buttonAction:{type:Function,default:()=>null},variant:{default:"default"},type:{default:"button"}},setup(o){const t=o,a=u(()=>`el-button--${t.variant}`);return(r,s)=>(n(),l("button",{class:p(["el-button",a.value]),type:t.type,onClick:s[0]||(s[0]=(...f)=>t.buttonAction&&t.buttonAction(...f))},[e("span",Q,[I(r.$slots,"default",{},void 0,!0)])],10,Z))}}),K=d(j,[["__scopeId","data-v-72c80581"]]);export{K as E,J as _};
