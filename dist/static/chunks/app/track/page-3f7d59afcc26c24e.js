(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{9468:(e,t,r)=>{Promise.resolve().then(r.bind(r,1197))},6463:(e,t,r)=>{"use strict";var a=r(1169);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},8293:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(7437);r(2265);let n=e=>{let{children:t,variant:r="outline",...n}=e;return(0,a.jsx)("button",{...n,className:"btn-".concat(r),children:t})}},1197:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(7437),n=r(6463),s=r(2265),l=r(8293);let u=()=>{let e=(0,n.useRouter)(),[t,r]=(0,s.useState)(""),[u,c]=(0,s.useState)(""),i=async r=>{if(r.preventDefault(),!t.trim()){c("Please enter a valid ticket number or membership ID.");return}e.replace("/track?ticketId=".concat(t)),c("")};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{className:"flex flex-col gap-8 mt-12 max-w-[800px] w-full mx-auto items-center px-4",children:[(0,a.jsx)("input",{type:"text",placeholder:"Enter ticket number or membership card no.",className:"w-full py-2 bg-transparent border-b-2 \n                          border-primary text-white font-normal outline-none placeholder:text-white ".concat(u&&"border-red-500"),value:t,onChange:e=>{r(e.target.value)}}),(0,a.jsx)(l.Z,{variant:"solid",onClick:i,children:"Submit"})]}),u&&(0,a.jsx)("p",{className:"text-red-500 text-center my-4",children:u})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(9468)),_N_E=e.O()}]);