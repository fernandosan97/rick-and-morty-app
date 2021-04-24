(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{22:function(e,c,t){},24:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var r=t(1),a=t.n(r),s=t(16),n=t.n(s),i=(t(22),t(7)),j=t.n(i),d=t(9),l=t(6),o=(t(24),t(5)),b=t(0),h=function(e){var c=e.character;if(c.error)return Object(b.jsx)("div",{className:"error",children:"There are not results!"});var t=c.id,r=c.name,a=c.status,s=c.species,n=c.gender,i=c.image;return Object(b.jsxs)("div",{className:"card border",children:[Object(b.jsx)("div",{className:"card__image",children:Object(b.jsx)("img",{src:i,alt:r,loading:"lazy"})}),Object(b.jsxs)("div",{className:"card__body",children:[Object(b.jsxs)(o.b,{to:"/character/detail/".concat(t),children:[" ",Object(b.jsxs)("h2",{children:["Name: ",r]})]}),Object(b.jsxs)("p",{children:["Status: ",a]}),Object(b.jsxs)("p",{children:["Species: ",s]}),Object(b.jsxs)("p",{children:["Gender: ",n]})]})]})},u=function(e){var c=e.characters;return Object(b.jsx)("div",{className:"card__container",children:c.length>0?c.map((function(e){return Object(b.jsx)(h,{character:e},e.id)})):Object(b.jsx)("div",{className:"error",children:"There are not results!"})})},O=function(e){var c=e.handleSearch;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"hero__main",children:[Object(b.jsx)("h3",{className:"subtitle",children:"Do you know any character?"}),Object(b.jsx)("input",{type:"text",className:"search__input",placeholder:"Search here!",onChange:c})]})})})})},x=function(){return Object(b.jsxs)("div",{className:"spinner",children:[Object(b.jsx)("div",{className:"bounce1"}),Object(b.jsx)("div",{className:"bounce2"}),Object(b.jsx)("div",{className:"bounce3"})]})};var m=function(){var e=Object(r.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1],s=Object(r.useState)(""),n=Object(l.a)(s,2),i=n[0],o=n[1],h=Object(r.useState)(!0),m=Object(l.a)(h,2),v=m[0],p=m[1],f=Object(r.useState)(!0),g=Object(l.a)(f,2),N=g[0],_=g[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var c,t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://rickandmortyapi.com/api/character",i&&(c="".concat(c,"?name=").concat(i)),p(!0),e.prev=3,e.next=6,fetch(c);case 6:return t=e.sent,e.next=9,t.json();case 9:(r=e.sent).results?a(r.results):a([]),_(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.log("Error: "+e.t0),_(!0);case 18:p(!1);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{handleSearch:function(e){o(e.target.value)}}),Object(b.jsx)("div",{className:"container",children:N?Object(b.jsx)("div",{className:"error",children:"There are not results!"}):v?Object(b.jsx)(x,{}):Object(b.jsx)(u,{characters:t})})]})},v=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h3",{children:"This is the page of episodes!"})})},p=t(2),f=function(e){var c=e.character;if(c.error)return Object(b.jsx)("div",{className:"error",children:"There are not results!"});c.id;var t=c.name,r=c.status,a=c.species,s=c.gender,n=c.image;return Object(b.jsxs)("div",{className:"card-detail border",children:[Object(b.jsx)("div",{className:"card-detail__image",children:Object(b.jsx)("img",{src:n,alt:t,loading:"lazy"})}),Object(b.jsxs)("div",{className:"card-detail__body",children:[Object(b.jsxs)("h2",{children:["Name: ",t]}),Object(b.jsxs)("p",{children:["Status: ",r]}),Object(b.jsxs)("p",{children:["Species: ",a]}),Object(b.jsxs)("p",{children:["Gender: ",s]})]})]})},g=function(){var e=Object(p.f)().id,c=Object(r.useState)({}),t=Object(l.a)(c,2),a=t[0],s=t[1],n=Object(r.useState)(!0),i=Object(l.a)(n,2),o=i[0],h=i[1];return Object(r.useEffect)((function(){(function(){var c=Object(d.a)(j.a.mark((function c(){var t,r,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t="https://rickandmortyapi.com/api/character/".concat(e),c.prev=1,c.next=4,fetch(t);case 4:return r=c.sent,c.next=7,r.json();case 7:a=c.sent,s(a),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),console.log("Error: "+c.t0);case 14:h(!1);case 15:case"end":return c.stop()}}),c,null,[[1,11]])})));return function(){return c.apply(this,arguments)}})()()}),[e]),Object(b.jsx)("div",{className:"container container--modifier",children:o?Object(b.jsx)(x,{}):Object(b.jsx)(f,{character:a})})},N=t.p+"static/media/logo.df73b7db.png",_=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("div",{className:"container__nav",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("img",{src:N,alt:"Logo"})}),Object(b.jsxs)("div",{className:"nav__links",children:[Object(b.jsx)(o.b,{to:"/",children:"Home"}),Object(b.jsx)(o.b,{to:"/about",children:"About"})]})]})})})};var S=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(_,{}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",children:Object(b.jsx)(m,{})}),Object(b.jsx)(p.a,{exact:!0,path:"/about",children:Object(b.jsx)(v,{})}),Object(b.jsx)(p.a,{exact:!0,path:"/character/detail/:id",children:Object(b.jsx)(g,{})})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(c){var t=c.getCLS,r=c.getFID,a=c.getFCP,s=c.getLCP,n=c.getTTFB;t(e),r(e),a(e),s(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.6fe04e76.chunk.js.map