var R=Object.defineProperty;var F=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(s,t,o)=>t in s?R(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,h=(s,t)=>{for(var o in t||(t={}))J.call(t,o)&&U(s,o,t[o]);if(F)for(var o of F(t))W.call(t,o)&&U(s,o,t[o]);return s};import{r as q,o as _,c as P,a as u,b as e,w as v,v as f,F as V,d as A,p as N,e as x,n as j,t as d,f as S,g as w,h as L,i as G,j as K,k as Y}from"./vendor.6687f965.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}};Q();var T=(s,t)=>{const o=s.__vccOpts||s;for(const[c,a]of t)o[c]=a;return o};const X={};function Z(s,t){const o=q("router-view");return _(),P(o)}var ee=T(X,[["render",Z]]);const te={data(){return{form:{docTitle:"",welcom:"",plateNum:"",stationName:"",name:"",reachDate:"2020-03-23"},sites:[],currentItem:0}},methods:{handleAdd(){this.sites[this.currentItem].select=!1,this.sites.push(h({},this.form)),localStorage.setItem("sites",JSON.stringify(this.sites))},handleUpdate(){this.sites[this.currentItem]=h({},this.form),console.log(this.form),localStorage.setItem("sites",JSON.stringify(this.sites)),document.title=this.form.docTitle,this.$router.push({path:"./safeTrip",query:this.form})},handleSelect(s,t){this.sites.forEach(o=>{o.select=!1}),this.sites[t].select=!0,this.currentItem=t,this.form=h({},s)},handleDelete(s){this.sites.splice(s,1),localStorage.setItem("sites",JSON.stringify(this.sites))}},created(){this.sites=JSON.parse(localStorage.getItem("sites"))||[],this.sites.length>0&&(this.sites.forEach(s=>{s.select=!1}),this.sites[0].select=!0,this.form=h({},this.sites[0]))}},m=s=>(N("data-v-49e6862f"),s=s(),x(),s),se={class:"form"},ae=m(()=>e("div",{class:"title"},"\u5730\u70B9\u4FE1\u606F",-1)),oe={class:"item-content"},ie={class:"item-inner"},ne=m(()=>e("div",{class:"item-title"},"\u9875\u9762\u6807\u9898",-1)),le={class:"item-input"},ce={class:"item-input"},re={class:"item-content"},de={class:"item-inner"},_e=m(()=>e("div",{class:"item-title"},"\u6B22\u8FCE\u8BED",-1)),ve={class:"item-input"},ue={class:"item-input"},me={class:"item-content"},pe={class:"item-inner"},he=m(()=>e("div",{class:"item-title"},"\u8F66\u7AD9\u540D",-1)),fe={class:"item-input"},be={class:"item-content"},ge={class:"item-inner"},ye=m(()=>e("div",{class:"item-title"},"\u8F66\u724C\u53F7",-1)),we={class:"item-input"},Te={class:"item-content"},$e={class:"item-inner"},Ne=m(()=>e("div",{class:"item-title"},"\u6765\u90D1\u65E5\u671F",-1)),xe={class:"item-input"},Se={class:"footer"},Ie=m(()=>e("div",{class:"title"},"\u5386\u53F2\u5730\u70B9",-1)),Ce={class:"site-list"},Ee=["onClick"],De=["onClick"];function ke(s,t,o,c,a,l){return _(),u("div",se,[ae,e("ul",null,[e("li",null,[e("div",oe,[e("div",ie,[ne,e("div",le,[e("div",ce,[v(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>a.form.docTitle=i)},null,512),[[f,a.form.docTitle]])])])])])]),e("li",null,[e("div",re,[e("div",de,[_e,e("div",ve,[e("div",ue,[v(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>a.form.welcom=i)},null,512),[[f,a.form.welcom]])])])])])]),e("li",null,[e("div",me,[e("div",pe,[he,e("div",fe,[v(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=i=>a.form.stationName=i)},null,512),[[f,a.form.stationName]])])])])]),e("li",null,[e("div",be,[e("div",ge,[ye,e("div",we,[v(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=i=>a.form.plateNum=i)},null,512),[[f,a.form.plateNum]])])])])]),e("li",null,[e("div",Te,[e("div",$e,[Ne,e("div",xe,[v(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=i=>a.form.reachDate=i)},null,512),[[f,a.form.reachDate]])])])])])]),e("div",Se,[e("div",{class:"add",onClick:t[5]||(t[5]=(...i)=>l.handleAdd&&l.handleAdd(...i))},"\u6DFB\u52A0"),e("div",{class:"alter",onClick:t[6]||(t[6]=(...i)=>l.handleUpdate&&l.handleUpdate(...i))},"\u8FDB\u5165")]),Ie,e("div",Ce,[(_(!0),u(V,null,A(a.sites,(i,p)=>(_(),u("div",{class:j(["item",{select:i.select}])},[e("div",{class:"site-name",onClick:b=>l.handleSelect(i,p)},d(i.docTitle+"-"+i.stationName),9,Ee),e("div",{class:"delete",onClick:b=>l.handleDelete(p)},"\u5220\u9664",8,De)],2))),256))])])}var Oe=T(te,[["render",ke],["__scopeId","data-v-49e6862f"]]);function Fe(s,t,o){for(var c=1,a=0,l=document.documentElement.clientWidth,i=document.documentElement.clientHeight,p=340*c,b=200*c,z=(l-40-200)/p+a,M=(i-40-80)/b,r={watermark_color:"#aaa",watermark_alpha:.4,watermark_fontsize:"15px",watermark_font:"\u5FAE\u8F6F\u96C5\u9ED1",watermark_width:200,watermark_height:80,watermark_angle:15,watermark_offset:100},C=document.createDocumentFragment(),E=document.createElement("div"),g=0;g<z;g++)for(var y=0;y<M;y++){var B=p*g+20,H=b*y+30,n=document.createElement("div");n.id="mark_div"+g+y,n.className="mark_div";var D=document.createElement("div");D.appendChild(document.createTextNode(s));var k=document.createElement("div");k.appendChild(document.createTextNode(t));var O=document.createElement("div");O.appendChild(document.createTextNode(o)),n.appendChild(D),n.appendChild(k),n.appendChild(O),n.style.webkitTransform="rotate(-"+r.watermark_angle+"deg)",n.style.MozTransform="rotate(-"+r.watermark_angle+"deg)",n.style.msTransform="rotate(-"+r.watermark_angle+"deg)",n.style.OTransform="rotate(-"+r.watermark_angle+"deg)",n.style.transform="rotate(-"+r.watermark_angle+"deg)",n.style.visibility="",n.style.position="absolute",n.style.left=r.watermark_offset+B+"px",n.style.top=H+"px",n.style.overflow="hidden",n.style.zIndex="9999",n.style.pointerEvents="none",n.style.opacity=r.watermark_alpha,n.style.fontSize=r.watermark_fontsize,n.style.fontFamily=r.watermark_font,n.style.color=r.watermark_color,n.style.textAlign="center",n.style.width=r.watermark_width+"px",n.style.height=r.watermark_height+"px",n.style.display="block",E.appendChild(n)}C.appendChild(E),document.body.appendChild(C)}const I=s=>(N("data-v-35398f1e"),s=s(),x(),s),Ue={class:"result"},Ve={class:"finish-header specialType-success"},Ae={class:"complete-info"},Le=I(()=>e("div",{class:"warning-tips"},null,-1)),ze=I(()=>e("i",{class:"iconfont finish-icon iconsucceed",id:"complete-icon"},null,-1)),Me={class:"content-block"},Be={class:"specialType-info"},He=w("\u8F66\u724C\u53F7"),Re={class:"specialType-info"},Je=w("\u5F53\u524D\u7AD9\u540D"),We={class:"specialType-info"},qe=w("\u626B\u7801\u4EBA"),Pe={class:"specialType-info"},je=w("\u6765\u90D1\u65E5\u671F"),Ge=I(()=>e("p",{class:"showGuards"},"\u8BF7\u5C06\u6B64\u4FE1\u606F\u9875\u51FA\u793A\u7ED9\u76F8\u5173\u5DE5\u4F5C\u4EBA\u5458",-1)),Ke={computed:{submitTime(){let s=new Date,t=s.getMonth()+1,o=s.getDate(),c=s.getHours(),a=s.getMinutes();return t=t<10?"0"+t:t,o=o<10?"0"+o:o,c=c<10?"0"+c:c,a=a<10?"0"+a:a,s.getFullYear()+"-"+t+"-"+o+" "+c+":"+a}},data(){return{form:{}}},created(){this.form=this.$route.query},methods:{}},Ye=Object.assign(Ke,{setup(s){return Fe("\u3010\u90D1\u5DDE\u5E02\u65B0\u578B\u51A0\u72B6\u75C5\u6BD2","\u611F\u67D3\u7684\u80BA\u708E\u75AB\u60C5\u9632\u63A7","\u9886\u5BFC\u5C0F\u7EC4\u529E\u516C\u5BA4\u3011"),(t,o)=>(_(),u("div",Ue,[e("div",Ve,[e("div",Ae,d(t.form.welcom)+"!",1),e("div",null,d(t.submitTime),1),Le,ze]),e("div",Me,[v(e("div",Be,[He,e("span",null,d(t.form.plateNum),1)],512),[[S,t.form.plateNum]]),v(e("div",Re,[Je,e("span",null,d(t.form.stationName),1)],512),[[S,t.form.stationName]]),v(e("div",We,[qe,e("span",null,d(t.form.name),1)],512),[[S,t.form.name]]),e("div",Pe,[je,e("span",null,d(t.form.reachDate),1)]),Ge])]))}});var Qe=T(Ye,[["__scopeId","data-v-35398f1e"]]),Xe="/assets/virus-banner.361329c1.a3ababbb.jpg";const Ze={data(){return{list:[{getTime:"2022-01-05 15:45:01",resTime:"2022-01-05 22:37:07"},{getTime:"2021-11-15 15:48:01",resTime:"2021-11-15 23:35:07"},{getTime:"2021-11-11 15:52:46",resTime:"2021-11-11 20:24:34"},{getTime:"2021-08-24 20:04:33",resTime:"2021-08-25 17:04:36"},{getTime:"2021-08-07 17:07:53",resTime:"2021-08-08 10:02:43"}]}},created(){document.title="\u6838\u9178\u68C0\u6D4B\u7ED3\u679C\u67E5\u8BE2"},methods:{}},$=s=>(N("data-v-be92baec"),s=s(),x(),s),et={class:"result-wrap"},tt=L('<div class="header" data-v-be92baec><img src="'+Xe+'" alt="" data-v-be92baec></div><div class="content" data-v-be92baec><div class="form" data-v-be92baec><div class="input van-cell van-field" data-v-be92baec><div class="van-cell__title van-field__label" data-v-be92baec><span data-v-be92baec>\u59D3\u540D:</span></div><div class="van-cell__value" data-v-be92baec><span style="color:#323233;" data-v-be92baec>\u53F2*\u6770</span></div></div><div class="input van-cell van-field" data-v-be92baec><div class="van-cell__title van-field__label" data-v-be92baec><span data-v-be92baec>\u8BC1\u4EF6\u53F7:</span></div><div class="van-cell__value" data-v-be92baec><span style="color:#323233;" data-v-be92baec>**************1537</span></div></div></div></div>',2),st={class:"listbox"},at=L('<div class="title" data-v-be92baec>\u4E2A\u4EBA\u4FE1\u606F</div><div class="van-cell-group van-hairline--top-bottom" data-v-be92baec><div class="van-cell" data-v-be92baec><div class="van-cell__title" data-v-be92baec><span data-v-be92baec>\u59D3\u540D</span></div><div class="van-cell__value" data-v-be92baec><span data-v-be92baec>\u53F2*\u6770</span></div></div></div><div class="title" data-v-be92baec>\u68C0\u6D4B\u7ED3\u679C\u4FE1\u606F</div>',3),ot={class:"van-cell-group van-hairline--top-bottom"},it=$(()=>e("div",{class:"green van-cell"},[e("div",{class:"van-cell__title"},[e("span",null,"\u68C0\u6D4B\u7ED3\u679C")]),e("div",{class:"van-cell__value"},[e("span",null,"\u9634\u6027")])],-1)),nt={class:"van-cell"},lt=$(()=>e("div",{class:"van-cell__title"},[e("span",null,"\u91C7\u6837\u65F6\u95F4")],-1)),ct={class:"van-cell__value"},rt={class:"van-cell"},dt=$(()=>e("div",{class:"van-cell__title"},[e("span",null,"\u68C0\u6D4B\u65F6\u95F4")],-1)),_t={class:"van-cell__value"},vt=$(()=>e("div",{class:"continue-btn van-button van-button--info van-button--normal van-button--block van-button--round"},[e("div",{class:"van-button__content"}," \u7EE7\u7EED\u67E5\u8BE2 ")],-1));function ut(s,t,o,c,a,l){return _(),u("div",et,[tt,(_(!0),u(V,null,A(a.list,i=>(_(),u("div",st,[at,e("div",ot,[it,e("div",nt,[lt,e("div",ct,[e("span",null,d(i.getTime),1)])]),e("div",rt,[dt,e("div",_t,[e("span",null,d(i.resTime),1)])])])]))),256)),vt])}var mt=T(Ze,[["render",ut],["__scopeId","data-v-be92baec"]]);const pt=[{path:"/safeTripForm",component:Oe},{path:"/safeTrip",component:Qe},{path:"/",component:mt}],ht=G({history:K(),routes:pt});console.log({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});Y(ee).use(ht).mount("#app");