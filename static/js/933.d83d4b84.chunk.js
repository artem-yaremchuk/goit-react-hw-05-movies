"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{240:function(e,r,n){n.d(r,{Df:function(){return i},Jh:function(){return o},TP:function(){return f},_r:function(){return v},z1:function(){return p}});var t=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="b3fc73cdb1b0c02fab862c555a617adf",i=function(){var e=(0,t.Z)(c().mark((function e(){var r,n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:s,language:"en-US"}),e.next=3,u.Z.get("/trending/all/day?".concat(r));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:s,language:"en-US"}),e.next=3,u.Z.get("/movie/".concat(r,"/credits?").concat(n));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:s,language:"en-US"}),e.next=3,u.Z.get("/movie/".concat(r,"?").concat(n));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:s,language:"en-US",query:r}),e.next=3,u.Z.get("/search/movie?".concat(n));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:s,language:"en-US"}),e.next=3,u.Z.get("/movie/".concat(r,"/reviews?").concat(n));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},933:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i={},o=n(184),f=function(e){var r=e.review,n=r.author,t=r.content;return(0,o.jsxs)("li",{className:i.reviewItem,children:[(0,o.jsxs)("h2",{className:i.author,children:["Author: ",n]}),(0,o.jsx)("p",{className:i.content,children:t})]})},p=n(639),v=n(689),h={},l=n(240),d=n(686),m=n.n(d),w=function(){var e=(0,v.UO)().movieId,r=(0,s.useState)([]),n=(0,a.Z)(r,2),c=n[0],i=n[1],d=(0,s.useState)(!1),w=(0,a.Z)(d,2),x=w[0],g=w[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,t.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,g(!0),r.next=6,(0,l._r)(e);case 6:n=r.sent,i(n),g(!1),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),m().Notify.failure(r.t0.message);case 14:return r.prev=14,g(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[2,11,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,o.jsx)("div",{children:x?(0,o.jsx)(p.Z,{}):(0,o.jsx)("section",{className:h.reviews,children:c.length>0?(0,o.jsx)("ul",{className:h.reviewsList,children:c.map((function(e){return(0,o.jsx)(f,{review:e},e.id)}))}):(0,o.jsx)("p",{className:h.info,children:"No reviews yet for this movie."})})})}}}]);
//# sourceMappingURL=933.d83d4b84.chunk.js.map