import{r as m,o as T,f as w,g as s,i as d,w as l,h as c,k as p,v as u,m as C}from"./vendor.2de7e29f.js";import{_ as g}from"./index.3032e38f.js";const V={data(){return{show:!1,showGetTime:!1,showResTime:!1,getTime:new Date,resTime:new Date,form:{name:"",idCard:"",getTime:"",resTime:""}}},methods:{toResult(){this.$router.push({path:"/examResult",query:this.form})},getTimeConfirm(n){this.show=this.showGetTime=!1,n.setSeconds(Math.random()*60),this.form.getTime=this.$formatTime(n)},resTimeConfirm(n){this.show=this.showResTime=!1,n.setSeconds(Math.random()*60),this.form.resTime=this.$formatTime(n)}}},x={class:"container"},y={style:{margin:"20px"}},b=C("\u67E5\u770B\u7ED3\u679C");function k(n,o,R,U,e,i){const f=m("van-nav-bar"),r=m("van-field"),_=m("van-cell-group"),h=m("van-button"),a=m("van-datetime-picker"),v=m("van-popup");return T(),w(c,null,[s(f,{title:"\u68C0\u6D4B\u4FE1\u606F"}),d("div",x,[s(_,{title:"\u4E2A\u4EBA\u4FE1\u606F",inset:""},{default:l(()=>[s(r,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.name=t),label:"\u59D3\u540D",placeholder:""},null,8,["modelValue"]),s(r,{modelValue:e.form.idCard,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.idCard=t),label:"\u8BC1\u4EF6\u53F7",placeholder:"\u53EA\u9700\u540E\u56DB\u4F4D"},null,8,["modelValue"])]),_:1}),d("div",y,[s(h,{type:"primary",round:"",size:"large",onClick:i.toResult},{default:l(()=>[b]),_:1},8,["onClick"])]),s(v,{show:e.show,"onUpdate:show":o[4]||(o[4]=t=>e.show=t),onClose:o[5]||(o[5]=t=>e.showGetTime=e.showResTime=!1),position:"bottom",style:{height:"50%"}},{default:l(()=>[p(s(a,{modelValue:e.getTime,"onUpdate:modelValue":o[2]||(o[2]=t=>e.getTime=t),type:"datetime",title:"\u91C7\u6837\u65F6\u95F4",onConfirm:i.getTimeConfirm},null,8,["modelValue","onConfirm"]),[[u,e.showGetTime]]),p(s(a,{modelValue:e.resTime,"onUpdate:modelValue":o[3]||(o[3]=t=>e.resTime=t),type:"datetime",title:"\u68C0\u6D4B\u65F6\u95F4",onConfirm:i.resTimeConfirm},null,8,["modelValue","onConfirm"]),[[u,e.showResTime]])]),_:1},8,["show"])])],64)}var D=g(V,[["render",k],["__scopeId","data-v-068776d6"]]);export{D as default};