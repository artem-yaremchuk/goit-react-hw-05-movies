"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{101:function(e,t,r){r.d(t,{Z:function(){return l}});var n="MoviesList_moviesList__P6SP5",a=r(689),s=r(87),c="MovieListItem_movieListItem__B2nuH",i="MovieListItem_movieListItemImg__mBdml",u="MovieListItem_movieListItemTitle__d3X7o",o=r(184),f=function(e){var t=e.movieDetails;return(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t.title||t.name,className:i}),(0,o.jsx)("h2",{className:u,children:t.title||t.name})]})},l=function(e){var t=e.movies,r=(0,a.TH)();if(t)return(0,o.jsx)("ul",{className:n,children:t.results.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:r},children:(0,o.jsx)(f,{movieDetails:e})})},e.id)}))})}},240:function(e,t,r){r.d(t,{Df:function(){return u},Jh:function(){return o},TP:function(){return f},_r:function(){return p},z1:function(){return l}});var n=r(861),a=r(757),s=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="b3fc73cdb1b0c02fab862c555a617adf",u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i,language:"en-US"}),e.next=3,c.Z.get("/trending/all/day?".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:i,language:"en-US"}),e.next=3,c.Z.get("/movie/".concat(t,"/credits?").concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:i,language:"en-US"}),e.next=3,c.Z.get("/movie/".concat(t,"?").concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:i,language:"en-US",query:t}),e.next=3,c.Z.get("/search/movie?".concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:i,language:"en-US"}),e.next=3,c.Z.get("/movie/".concat(t,"/reviews?").concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},123:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u={searchBar:"SearchBar_searchBar__rjQkX",searchForm:"SearchBar_searchForm__V6XO6",searchInput:"SearchBar_searchInput__S8ff+",searchBtn:"SearchBar_searchBtn__cdWGi"},o=r(686),f=r.n(o),l=r(184),p=function(e){var t=e.submit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),s=n[0],c=n[1];return(0,l.jsx)("div",{className:u.searchBar,children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?t(s):f().Notify.warning("Please, fill in the field!")},className:u.searchForm,children:[(0,l.jsx)("button",{type:"submit",className:u.searchBtn,children:(0,l.jsx)("span",{className:u.searchBtnLabel,children:"Search"})}),(0,l.jsx)("input",{className:u.searchInput,type:"text",onChange:function(e){c(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},h=r(101),m=r(240),v=r(87),d=r(689),_=r(639),x="Movies_searchedMovies__ochPG",g=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1],u=(0,v.lr)(),o=(0,a.Z)(u,2),g=o[0],w=o[1],b=(0,i.useState)(!1),S=(0,a.Z)(b,2),j=S[0],k=S[1],y=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,m.z1)(t);case 4:r=e.sent,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f().Notify.failure(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){var e=g.get("query");e&&y(e)}),[g]);return(0,l.jsx)("div",{children:j?(0,l.jsx)(_.Z,{}):(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{submit:function(e){w({query:e})}}),r&&(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)(h.Z,{movies:r}),(0,l.jsx)(d.j3,{})]})]})})}}}]);
//# sourceMappingURL=689.07289733.chunk.js.map