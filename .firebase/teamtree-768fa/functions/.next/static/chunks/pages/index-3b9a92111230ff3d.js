(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(51479)}])},45406:function(e,s,a){"use strict";var t=a(85893),l=a(11163),A=a(67294),n=a(55550),r=a(354);s.Z=e=>{let{children:s}=e,a=(0,l.useRouter)(),{authUser:c,authLayout:o,setAuthLayout:i}=(0,n.aC)(),{teams:d}=(0,r.y2)();return(0,A.useEffect)(()=>{let e=a.pathname;if(c||a.push("/"),c&&("/"===e||"/login"===e||"/register"===e)){if(d.length>0){a.push("/teams/".concat(d[0].id));return}a.push("/profile/".concat(c.username))}},[c]),(0,t.jsx)("div",{children:c?s:null})}},96616:function(e,s,a){"use strict";var t=a(67294);s.Z=()=>{let[e,s]=(0,t.useState)(!0),[a,l]=(0,t.useState)(!0);return{passwordHidden:e,confirmPasswordHidden:a,handlePasswordCheckbox:e=>e.target.checked?s(!1):s(!0),handleConfirmPasswordCheckbox:e=>e.target.checked?l(!1):l(!0)}}},51479:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(85893),l=a(11163),A=a(67294);a(70321);var n=a(55550),r={src:"/_next/static/media/hero.6a4f9d52.jpg",height:1672,width:2508,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAJCJ/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIFERIAA//aAAgBAQABPwCTjEizaODnzDmlyT3/xAAWEQADAAAAAAAAAAAAAAAAAAAAAzH/2gAIAQIBAT8AXD//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k=",blurWidth:8,blurHeight:5},c=a(25675),o=a.n(c);next;var i=a(96616),d=()=>{let e=(0,l.useRouter)(),{login:s,authUser:a}=(0,n.aC)(),[r,c]=(0,A.useState)({email:"",password:""}),o=e=>{c({...r,[e.target.name]:e.target.value})},{passwordHidden:d,handlePasswordCheckbox:u}=(0,i.Z)();return(0,t.jsx)("div",{className:"flex flex-col justify-center items-center",children:(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("form",{className:"bg-gray-900 p-6 md:p-0 rounded mx-auto mb-6",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-gray-500 text-sm font-bold mb-2",children:"Email"}),(0,t.jsx)("input",{onChange:o,name:"email",value:r.email,className:"shadow appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Email"})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-gray-500 text-sm font-bold mb-2",children:"Password"}),(0,t.jsx)("input",{onChange:o,name:"password",value:r.password,className:"shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:d?"password":"text",placeholder:"Password - At least 6 characters"}),(0,t.jsxs)("div",{className:"flex items-center mt-2 space-x-2 text-sm",children:[(0,t.jsx)("input",{className:"cursor-pointer",onChange:u,type:"checkbox"}),(0,t.jsx)("spa",{className:"text-gray-400",children:"Show Password"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,t.jsx)("button",{onClick:()=>{s(r.email,r.password)},className:"bg-green-500 hover:bg-blue-100 hover:text-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none transition ease-in-out cursor-pointer duration-200 focus:shadow-outline",type:"button",children:"Sign In"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-gray-400",children:"Don't have an account? "}),(0,t.jsx)("span",{onClick:()=>e.push("/register"),className:"text-green-500 font-bold cursor-pointer",children:"Register"})]})]})]}),(0,t.jsx)("p",{className:"text-center text-gray-500 text-xs",children:"\xa92020 Acme Corp. All rights reserved."})]})})};a(45406);var u=()=>{let[e,s]=(0,A.useState)(!1),[a,c]=(0,A.useState)(!1),{authUser:i,authLayout:u}=(0,n.aC)();if((0,l.useRouter)(),!u&&!i)return(0,t.jsxs)("div",{className:"h-screen w-screen flex fixed left-0",children:[(0,t.jsxs)("div",{className:"display-none md:w-1/2 h-full relative",children:[(0,t.jsx)(o(),{src:r,fill:!0}),(0,t.jsx)("div",{className:"absolute opacity-20 bg-black"})]}),(0,t.jsx)("div",{className:"w-full bg-gray-800 md:w-1/2 h-full",children:(0,t.jsxs)("div",{className:"relative h-screen w-full flex flex-col items-center",children:[(0,t.jsxs)("div",{className:"mt-44 flex items-center space-x-3 text-4xl font-bold p-3 font-mono",children:[(0,t.jsx)("div",{className:"text-white",children:"Team Tree"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-green-500",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"})})]}),(0,t.jsx)("div",{className:" font-semibold text-gray-400 mb-10",children:"Team Up, Collaborate, and Grow"}),(0,t.jsx)("div",{className:"w-full p-6 md:w-1/2 md:p-0",children:(0,t.jsx)(d,{})})]})})]})}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);