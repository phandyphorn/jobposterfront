"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[386],{7386:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var r=a(3396);function o(t,e,a,o,n,s){const c=(0,r.up)("successPay");return(0,r.wg)(),(0,r.j4)(c)}const n={class:"flex items-center justify-center"},s={class:"bg-gray-100 mt-10 w-2/5 rounded-md"},c=(0,r._)("svg",{viewBox:"0 0 24 24",class:"text-green-600 w-16 h-16 mx-auto my-6 animate__rotateIn animate__animated"},[(0,r._)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})],-1),l={class:"text-center"},i=(0,r._)("h3",{class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},"Payment Success!",-1),u=(0,r._)("p",{class:"text-gray-600 my-2"},"Thank you for completing your secure online payment.",-1),m=(0,r._)("p",null," Have a great day! ",-1),d={class:"py-10 text-center"};function g(t,e,a,o,g,h){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",s,[c,(0,r._)("div",l,[i,u,m,(0,r._)("div",d,[(0,r.Wm)(p,{to:"",onClick:h.clearLocalStorage,class:"bg-green-600 p-3 text-white rounded-sm"},{default:(0,r.w5)((()=>[(0,r.Uk)(" GO BACK ")])),_:1},8,["onClick"])])])])])}a(7658);var h=a(70),p={methods:{createTransaction(){var t={user_id:localStorage.getItem("userId"),tran_id:localStorage.getItem("tran_id"),payment_option:"VISA",hash:localStorage.getItem("hash"),status:1,currency:"USD",amount:localStorage.getItem("amount"),plan_id:localStorage.getItem("plan_id"),subscriber_id:localStorage.getItem("userId")};h.ZP.post("http://54.169.143.212/api/transaction",t).then((e=>{console.log(e.data),h.ZP.post("http://54.169.143.212/api/subscription",t)}))},clearLocalStorage(){localStorage.removeItem("hash",this.hash),localStorage.removeItem("amount",this.amount),localStorage.removeItem("plan_id",this.plan_id),localStorage.removeItem("tran_id",this.tran_id),this.$router.push("/")}},mounted(){this.createTransaction()}},_=a(7477);const v=(0,_.Z)(p,[["render",g]]);var y=v,f={components:{successPay:y}};const S=(0,_.Z)(f,[["render",o]]);var I=S}}]);
//# sourceMappingURL=386.5bdeb744.js.map