(this.webpackJsonpredux_test=this.webpackJsonpredux_test||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),s=n.n(c),a=n(10),u=n.n(a),i=n(21),o=n(12),j=n(22),l=Object(j.b)((function(e,t){switch(t.type){case"LOAD":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"NEXT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage+1});case"PREV_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:e.currentPage-1});default:return e}}),{users:[],maxUsers:5,currentPage:1}),b=(n(47),n(27)),h=n.n(b),d=n(29),x=(n(49),"https://cors-anywhere.herokuapp.com/"),O="https://jsonkeeper.com/b/Y31M",p=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(x+"".concat(O).concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}()},f=n(66),g=n(67),m=n(68),P=n(69),v=n(70),y=(n(50),function(e){var t=e.user,n=t.name,c=t.surname,s=t.desc;return Object(r.jsx)(P.a,{className:"list-item",children:Object(r.jsxs)(v.a,{className:"list-item__card",children:[Object(r.jsx)("h3",{children:"".concat(n," ").concat(c)}),Object(r.jsx)("p",{children:s})]})})}),E=(n(51),function(e){var t=e.users,n=e.maxUsers,c=e.currentPage,s=e.nextPage,a=e.prevPage,u=t.slice(c*n-n,c*n);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Users"}),Object(r.jsx)(f.a,{className:"list",children:u.length?u.map((function(e){return Object(r.jsx)(y,{user:e},e.id)})):Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)(g.a,{})})}),Object(r.jsx)("div",{children:u.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{type:"button",onClick:a,variant:"contained",color:c>1?"primary":"default",style:{margin:"10px"},children:"Prev"}),Object(r.jsx)("span",{children:c}),Object(r.jsx)(m.a,{type:"button",onClick:s,variant:"contained",color:c!==t.length/n?"primary":"default",style:{margin:"10px"},children:"Next"})]}):null})]})}),k=function(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)(),n=Object(c.useCallback)(function(){var e=Object(d.a)(h.a.mark((function e(n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:r=e.sent,t({type:"LOAD",users:r.users});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);Object(c.useEffect)((function(){n(p)}),[n]);return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(E,{users:e.users,maxUsers:e.maxUsers,currentPage:e.currentPage,nextPage:function(){e.currentPage!==e.users.length/e.maxUsers&&t({type:"NEXT_PAGE"})},prevPage:function(){1!==e.currentPage&&t({type:"PREV_PAGE"})}})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(i.a,{store:l,children:Object(r.jsx)(k,{})})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.8f5c0565.chunk.js.map