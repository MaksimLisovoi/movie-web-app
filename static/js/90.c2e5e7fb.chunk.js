"use strict";(self.webpackChunkmovie_web_app=self.webpackChunkmovie_web_app||[]).push([[90],{7090:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(9439),c=r(2791),a=r(7689),s=r(9881),u=r(9457),o=r(184),i=function(e){var t=e.cast;return(0,o.jsx)(o.Fragment,{children:t.map((function(e){var t=e.id,r=e.profile_path,n=e.name;return(0,o.jsxs)(u.x,{as:"li",p:"3",flex:"0",children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(r),alt:"",width:"200",height:"300"}),(0,o.jsx)("h3",{children:n})]},t)}))})},p=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),r=t[0],p=t[1],f=(0,a.UO)().movieId;if((0,c.useEffect)((function(){(0,s.M1)(f).then(p)}),[f]),r)return console.log(r),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.x,{as:"ul",display:"flex",flexWrap:"wrap",m:-3,justifyContent:"center",children:(0,o.jsx)(i,{cast:r})})})}},9881:function(e,t,r){r.d(t,{JN:function(){return i},M1:function(){return d},Pg:function(){return f},gy:function(){return h},tx:function(){return g}});var n=r(5861),c=r(4687),a=r.n(c),s=r(3263),u="https://api.themoviedb.org/3/",o="e6acfc4fc0153671a91c6ac155f53696";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"trending/movie/week?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function e(t){var r,n,c,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searhQuery,n=t.page,c=void 0===n?1:n,e.prev=1,e.next=4,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(r,"&page=").concat(c));case 4:return i=e.sent,e.abrupt("return",i.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=90.c2e5e7fb.chunk.js.map