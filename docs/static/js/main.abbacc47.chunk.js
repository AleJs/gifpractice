(this.webpackJsonptrident=this.webpackJsonptrident||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(9),i=n.n(r),s=n(2),u=n(11);n(4);var j=function(e){var t=e.setCategories,n=Object(a.useState)("search gif"),r=Object(s.a)(n,2),i=r[0],j=r[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(" "))},children:Object(c.jsx)("input",{type:"text",placeholder:"",onChange:function(e){j(e.target.value)}})})})},o=n(8),l=function(e){var t=e.img,n=e.title;e.id;return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("ol",{children:Object(c.jsxs)("li",{className:"card animate__fadeIn-5s 5s ",children:[Object(c.jsx)("img",{className:"img",src:t,alt:""}),Object(c.jsx)("h1",{className:"title",children:n})]})})})},d=n(7),b=n.n(d),h=n(10),O=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,c,a,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q="+t+"&limit=15&api_key=ne9CNRTOcFIH7aoIw00QLWQtbuMENWaM",e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.data,i=r.map((function(e){return{id:e.id,img:e.images.downsized_medium.url,title:e.title}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c},m=function(e){var t=e.category,n=f(t),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h1",{className:"category",children:[" ",t]}),i&&Object(c.jsx)("h1",{children:"Loading.."}),Object(c.jsx)("div",{children:Object(c.jsx)("ol",{className:"list ",children:r.map((function(e){return Object(a.createElement)(l,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})})]})};var g=function(){var e=Object(a.useState)(["universe"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"title-container",children:[Object(c.jsx)("h2",{className:"title",children:"GIF API"}),Object(c.jsx)(j,{setCategories:r})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(e){return Object(c.jsx)(m,{category:e},e)}))})]})},x=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(c.jsx)(g,{}),document.getElementById("root")),x()},4:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.abbacc47.chunk.js.map