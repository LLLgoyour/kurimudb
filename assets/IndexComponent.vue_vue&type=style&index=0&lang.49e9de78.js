import{e,r as t,f as l,c as s,b as a,t as o,o as n,g as i,h as r,i as c,v as u,T as d,w as v,d as m,j as g,F as b,k as p}from"./app.8320d959.js";const h={class:"loading"},f=a("img",{src:"/assets/loading.7544bf0a.gif"},null,-1);var k=e({expose:[],setup(e){const i=t(0);return l((()=>{const e=setInterval((()=>99<=i.value?clearInterval(e):++i.value),32)})),(e,t)=>(n(),s("div",h,[f,a("p",null,o(i.value)+"%",1)]))}});const w={class:"index"},y=a("i",{class:"ri-anchor-line index-logo"},null,-1),x={class:"welcome"},S={class:"welcome-title"},I={key:0,class:"welcome-title--text1"},T={key:1,class:"welcome-title--text1"},q={key:2,class:"welcome-title--text1"},z={key:3,class:"welcome-title--text1"},B={class:"welcome-title--text2"},F={style:{"text-decoration":"underline"}},_={class:"welcome-button-group"},j=a("i",{class:"ri-anchor-line"},null,-1),C=a("i",{class:"ri-github-fill"},null,-1),D=a("div",{class:"welcome-button--github-corner"},[a("img",{src:"https://img.shields.io/github/stars/akirarika/kurimudb?color=%2300000000&label=%20&style=for-the-badge"})],-1),E={class:"index-markdown"};var L=e({expose:[],props:{lang:{type:String,default:"zh",required:!1,validator:e=>["zh","en"].includes(e)}},setup(e){const{lang:h}=e,f=t(0);setTimeout((()=>setInterval((()=>f.value++),3200)),3200);const L=()=>{location.href="intro.html"},P=()=>{location.href="https://github.com/akirarika/kurimudb"};let R="";const $={default:"zh","足够简单的，":{en:"Simple Enouth"},"渐进式的，":{en:"Progressive"},"驱动化的，":{en:"Driven"},"框架无关的，":{en:"Framework Independent "},"前端存储":{en:"Front-end Storage"},"解决方案。":{en:" Solution"},"阅读文档":{en:"Reading Document"}},A=e=>h===$.default?e:$[e][h];l((()=>{const e=document.querySelector(".nav-bar");e&&(R=e.style.borderBottom,e.style.borderBottom="none")})),i((()=>{const e=document.querySelector(".nav-bar");e&&(e.style.borderBottom=R)}));const G=t(!1),H=t(0);return l((()=>{r((()=>{1<=H.value&&setTimeout((()=>G.value=!0),800)})),setTimeout((()=>G.value=!0),3600)})),(e,t)=>(n(),s(b,null,[a(d,{name:"fade"},{default:v((()=>[G.value?p("v-if",!0):(n(),s(k,{key:0}))])),_:1}),c(a("div",w,[y,a("div",x,[a("img",{src:"/assets/kurimu.21041cc3.png",onLoad:t[1]||(t[1]=e=>H.value++)},null,32),a("div",S,[a(d,{name:"fade",mode:"out-in"},{default:v((()=>[f.value%4==0?(n(),s("div",I,o(A("足够简单的，")),1)):f.value%4==1?(n(),s("div",T,o(A("渐进式的，")),1)):f.value%4==2?(n(),s("div",q,o(A("驱动化的，")),1)):f.value%4==3?(n(),s("div",z,o(A("框架无关的，")),1)):p("v-if",!0)])),_:1}),a("div",B,[a("span",F,o(A("前端存储")),1),m(o(A("解决方案。")),1)]),a("div",_,[a("div",{class:"welcome-button--docs",onClick:L},[j,a("span",null,o(A("阅读文档")),1)]),a("div",{class:"welcome-button--github",onClick:P},[C,D])])])]),a("div",E,[g(e.$slots,"default")])],512),[[u,G.value]])],64))}});export{L as _};
