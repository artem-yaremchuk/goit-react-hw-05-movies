"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334],{240:function(e,r,t){t.d(r,{Df:function(){return i},Jh:function(){return o},TP:function(){return p},_r:function(){return l},z1:function(){return f}});var n=t(861),a=t(757),c=t.n(a),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="b3fc73cdb1b0c02fab862c555a617adf",i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:u,language:"en-US"}),e.next=3,s.Z.get("/trending/all/day?".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,language:"en-US"}),e.next=3,s.Z.get("/movie/".concat(r,"/credits?").concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,language:"en-US"}),e.next=3,s.Z.get("/movie/".concat(r,"?").concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,language:"en-US",query:r}),e.next=3,s.Z.get("/search/movie?".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,language:"en-US"}),e.next=3,s.Z.get("/movie/".concat(r,"/reviews?").concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},334:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i={},o=t(184),p=function(e){var r=e.actor;return(0,o.jsxs)("li",{className:i.castCard,children:[(0,o.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w500/".concat(r.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r.name,className:i.castCardImg}),(0,o.jsxs)("div",{className:i.castText,children:[(0,o.jsx)("h2",{className:i.castName,children:r.name}),(0,o.jsxs)("p",{className:i.castCharacter,children:["Character: ",r.character]})]})]})},f=t(689),l={},h=t(240),m=t(686),d=t.n(m),v=t(639),x=function(){var e=(0,f.UO)().movieId,r=(0,u.useState)(null),t=(0,a.Z)(r,2),c=t[0],i=t[1],m=(0,u.useState)(!1),x=(0,a.Z)(m,2),g=x[0],w=x[1];if((0,u.useEffect)((function(){if(e){var r=function(){var r=(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,w(!0),r.next=4,(0,h.Jh)(e);case 4:t=r.sent,i(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),d().Notify.failure(r.t0.message);case 11:return r.prev=11,w(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}}),[e]),c)return(0,o.jsx)("div",{children:g?(0,o.jsx)(v.Z,{}):(0,o.jsx)("section",{className:l.cast,children:(0,o.jsx)("ul",{className:l.castList,children:c.cast.map((function(e){return(0,o.jsx)(p,{actor:e},e.id)}))})})})}}}]);
//# sourceMappingURL=334.ae3e0cfb.chunk.js.map