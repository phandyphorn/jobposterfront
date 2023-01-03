"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[943],{7943:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(3396);function i(e,t,a,i,s,r){const l=(0,n.up)("userPlane");return(0,n.wg)(),(0,n.j4)(l)}var s=a(7139);const r={class:"text-gray-600 body-font overflow-hidden"},l={class:"container px-5 py-24 mx-auto"},o={class:"flex justify-center text-center w-full mb-20"},u=(0,n._)("div",null,[(0,n._)("h1",{class:"sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"},"Planning")],-1),d={key:0,class:"p-3 bg-blue-500 text-white rounded-md"},c={class:"flex flex-wrap w-full items-center lg:grid lg:grid-cols-2"},h={class:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"},m=(0,n._)("h2",{class:"text-sm tracking-widest title-font mb-1 font-medium"},"START",-1),p=["onClick"],_=(0,n._)("span",{class:"w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"},[(0,n._)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",class:"w-3 h-3",viewBox:"0 0 24 24"},[(0,n._)("path",{d:"M20 6L9 17l-5-5"})])],-1),g={class:"flex items-center text-gray-600 mb-2"},f=(0,n._)("span",{class:"w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"},[(0,n._)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",class:"w-3 h-3",viewBox:"0 0 24 24"},[(0,n._)("path",{d:"M20 6L9 17l-5-5"})])],-1),w=["id","onClick"],y=(0,n._)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-auto",viewBox:"0 0 24 24"},[(0,n._)("path",{d:"M5 12h14M12 5l7 7-7 7"})],-1),v={class:"aba-modal-content"},b={method:"POST",target:"aba_webservice",action:"https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase",id:"aba_merchant_request",name:"aba_merchant_request"},k=["value"],x=(0,n._)("input",{type:"hidden",name:"merchant_id",value:"ec002497",id:"merchant_id"},null,-1),P=(0,n._)("input",{type:"hidden",name:"api_version",value:"v1"},null,-1),S=["value"],I=["value"],C=["value"],T=(0,n._)("input",{type:"hidden",name:"continue_success_url",value:"http://54.169.143.212/successpay"},null,-1),j=(0,n._)("input",{type:"hidden",value:"true",name:"is_plugin_js"},null,-1);function Z(e,t,a,i,Z,q){const A=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("section",r,[(0,n._)("div",l,[(0,n._)("div",o,[u,(0,n.Wm)(A,{to:"/create_plan"},{default:(0,n.w5)((()=>["Admine"==Z.role?((0,n.wg)(),(0,n.iD)("button",d,"Add Plan")):(0,n.kq)("",!0)])),_:1})]),(0,n._)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Z.typePlane,((t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"p-4 w-full",key:t},[(0,n._)("div",h,[m,(0,n._)("h1",{class:"text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none capitalize",onClick:a=>e.subName(t.name)},(0,s.zw)(t.name),9,p),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Z.feature_benifits[a],(e=>((0,n.wg)(),(0,n.iD)("p",{class:"flex items-center text-gray-600 mb-2",key:e},[_,(0,n.Uk)((0,s.zw)(e),1)])))),128)),(0,n._)("p",g,[f,(0,n.Uk)("Price "+(0,s.zw)(t.postpaid)+"$/m ",1)]),(0,n._)("button",{id:t.id,onClick:e=>q.getPrice(t.postpaid,t.id,t.name),class:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 rounded"},[(0,n.Uk)(" Buy Now "),y],8,w)])])))),128))])])]),(0,n._)("div",v,[(0,n._)("form",b,[(0,n._)("input",{type:"hidden",name:"req_time",value:Z.req_time,id:"req_time"},null,8,k),x,P,(0,n._)("input",{type:"hidden",name:"hash",id:"hash",value:Z.hash},null,8,S),(0,n._)("input",{type:"hidden",name:"tran_id",id:"tran_id",value:Z.tran_id},null,8,I),(0,n._)("input",{type:"hidden",name:"amount",value:Z.amount},null,8,C),T,j])])],64)}a(7658);var q=a(2492),A=a.n(q),D=a(70),B={data(){return{role:localStorage.getItem("role"),typePlane:null,feature_benifits:[],hash:"",amount:0,tran_id:"",wordsList:"",req_time:"",paywayScript:"",plan_id:0}},methods:{createTransaction(){var e={user_id:2,tran_id:this.tran_id,payment_option:"VISA",hash:this.hash,status:1,currency:"USD",amount:this.amount};D.ZP.post("http://54.169.143.212/api/transaction",e)},callAbaForm(){setTimeout((function(){AbaPayway.checkout()}),1e3),localStorage.removeItem("hash"),localStorage.removeItem("amount"),localStorage.removeItem("plan_id"),localStorage.removeItem("tran_id"),localStorage.setItem("hash",this.hash),localStorage.setItem("amount",this.amount),localStorage.setItem("plan_id",this.plan_id),localStorage.setItem("tran_id",this.tran_id)},userTrail(){D.ZP.post("http://54.169.143.212/api/trail",{subscriber_id:localStorage.getItem("userId"),plan_id:this.plan_id}).then((()=>{A().fire("Success","Your Trail was success","success")}))},getHasCode(){D.ZP.get("http://54.169.143.212/api/hash/"+this.amount).then((e=>{this.hash=e.data,this.callAbaForm()})).catch((e=>{console.log(e)}))},randomize(){return this.wordsList[Math.floor(Math.random()*this.wordsList.length)]},getTranId(){D.ZP.get("http://54.169.143.212/api/getTranID").then((e=>{this.tran_id=e.data}))},getPrice(e,t,a){this.plan_id=t,this.amount=e,"trail"==a.toLowerCase()?this.userTrail():this.getHasCode()},getTimestamp(){D.ZP.get("http://54.169.143.212/api/timestamp").then((e=>{this.req_time=e.data}))},getPlanBenifits(){D.ZP.get("http://54.169.143.212/api/getPlanBenifits").then((e=>{var t=e.data;for(let a of t)this.feature_benifits.push([a.benifits])}))}},mounted(){D.ZP.get("http://54.169.143.212/api/features").then((e=>{this.typePlane=e.data,this.getPlanBenifits(),this.getTranId(),this.getTimestamp()}));const e=document.createElement("script");e.setAttribute("src","https://checkout.payway.com.kh/plugins/checkout2-0.js"),document.head.appendChild(e)}},L=a(7477);const M=(0,L.Z)(B,[["render",Z]]);var z=M,H={components:{userPlane:z}};const U=(0,L.Z)(H,[["render",i]]);var Y=U}}]);
//# sourceMappingURL=943.c8aa27c7.js.map