(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{302:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialogItem:"Dialogs_dialogItem__1AD6j",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},308:function(e,a,s){"use strict";s.r(a);var t=s(99),n=s(302),i=s.n(n),l=s(12),o=s(0),m=s.n(o),c=function(e){return m.a.createElement("div",{className:i.a.dialogItem},m.a.createElement(l.b,{to:"/dialogs/"+e.id,activeClassName:i.a.active},e.name))},r=function(e){return m.a.createElement("div",{className:i.a.message},e.message)},g=s(10),d=s(88),u=s(132),_=s(66),f=s(25),b=Object(_.a)(50),E=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement(d.a,{component:f.b,validate:[_.b,b],name:"newMessageBody",placeholder:"Enter your message"}),m.a.createElement("div",null,m.a.createElement("button",null,"Send")))})),v=function(e){var a=e.dialogsPage,s=a.dialogs.map((function(e){return m.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),t=a.messages.map((function(e){return m.a.createElement(r,{message:e.message,key:e.id})}));a.newMessageBody;return 0==e.isAuth?m.a.createElement(g.a,{to:"/login"}):m.a.createElement("div",{className:i.a.dialogs},m.a.createElement("div",{className:i.a.dialogsItems},s),m.a.createElement("div",{className:i.a.messages},m.a.createElement("div",null,t)),m.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},p=s(14),h=s(97),w=s(8);a.default=Object(w.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(t.b)(a))}}})),h.a)(v)}}]);
//# sourceMappingURL=4.3e031bea.chunk.js.map