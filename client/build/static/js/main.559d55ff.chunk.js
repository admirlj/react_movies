(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(16),i=n.n(a),s=(n(22),n(23),n(6)),r=n(9),l=n(2),u=n(0);function d(){var e=Object(l.f)().id,t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),d=r[0],j=r[1],b=Object(c.useState)(""),m=Object(s.a)(b,2),h=m[0],f=m[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),v=x[0],p=x[1],g=Object(c.useState)(!1),N=Object(s.a)(g,2),S=N[0],y=N[1];Object(c.useEffect)((function(){fetch("http://localhost:9000/movies/".concat(e)).then((function(e){return e.json()})).then((function(e){a(e.res[0].name),j(Number(e.res[0].rating)),f(e.res[0].genre),p(e.res[0].explicit)})).catch((function(e){return console.log(e)}))}),[]);return Object(u.jsx)("div",{className:"container-md",children:Object(u.jsxs)("form",{className:"form",onSubmit:function(e){var t=Number(document.querySelector("#movieID").innerText),n={id:Number(document.querySelector("#movieID").innerText),name:o,genre:h,rating:Number(d),explicit:v};e.preventDefault(),console.log("......"),fetch("http://localhost:9000/movies/".concat(t),{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return y(!0)})).catch((function(e){return console.log(e)}))},children:[Object(u.jsx)("div",{className:"mb-3 row hidden",children:Object(u.jsx)("label",{className:"form-label",id:"movieID",children:e})}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(u.jsx)("input",{id:"name",type:"text",placeholder:"name",value:o,onChange:function(e){console.log(e.target.value),a(e.target.value)},class:"form-control"})]}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{for:"rating",className:"form-label",children:"Rating"}),Object(u.jsx)("input",{id:"rating",type:"number",min:"1",max:"10",placeholder:"name",value:d,onChange:function(e){console.log(e.target.value),j(e.target.value)},class:"form-control"})]}),Object(u.jsx)("input",{type:"submit",value:S?"Updated":"Update",className:"btn btn-".concat(S?"success":"primary"," mb-37"),disabled:!!S})]})})}var j=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{path:"/edit/:id",component:d})})})},b=function(e){var t=e.id,n=(e.name,e.onEditClick,e.onDelete);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.b,{to:"/edit/".concat(t),className:"btn btn-primary",children:"Edit"}),Object(u.jsx)(r.b,{onClick:function(){return n(t)},className:"btn btn-danger",children:"Delete"})]})},m=function(e){var t=e.movies,n=e.onEditClick,c=e.onDelete;return Object(u.jsx)("div",{className:"movies-container",children:t.map((function(e){return Object(u.jsxs)("div",{className:"movie card",children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("p",{children:["Rating: ",Object(u.jsx)("br",{}),e.rating]}),Object(u.jsx)(b,{onEditClick:n,id:e.id,name:e.name,onDelete:c})]})}))})},h=function(e){var t=e.onSubmit,n=e.formAddStats;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container-md  ".concat(n?"":"hidden"),children:Object(u.jsxs)("form",{id:"addForm",onSubmit:t,children:[Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{hidden:!0,className:"form-label",children:"Name"}),Object(u.jsx)("input",{id:"movieName",type:"text",placeholder:"name"})]}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{hidden:!0,className:"form-label",children:"Genre"}),Object(u.jsx)("input",{id:"movieGenre",type:"text",placeholder:"genre"})]}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{hidden:!0,className:"form-label",children:"Rating"}),Object(u.jsx)("input",{id:"movieRating",type:"text",placeholder:"rating"})]}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{className:"form-label",children:"explicit"}),Object(u.jsx)("input",{id:"movieExplicit",type:"checkbox",placeholder:"explicit"})]}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary",value:"ADD"})]})})})},f=function(e){var t=e.onSubmit,n=e.searchMovie,c=e.onChange,o=e.onClickAdd,a=e.formAddStats,i=e.onSubmitAddHander;return Object(u.jsx)("header",{className:"App-header",children:Object(u.jsxs)("nav",{className:"flex",children:[Object(u.jsx)("button",{onClick:o,className:"btn btn-".concat(a?"danger":"success"),children:"".concat(a?"CLOSE":"ADD")}),Object(u.jsx)(h,{formAddStats:a,onSubmit:i}),Object(u.jsx)("form",{onSubmit:t,children:Object(u.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:c,class:"form-control"})})]})})},O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),r=i[0],l=i[1],d=Object(c.useState)(!1),j=Object(s.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)({}),x=Object(s.a)(O,2),v=x[0],p=x[1],g=Object(c.useState)(""),N=Object(s.a)(g,2),S=N[0],y=N[1],C=Object(c.useState)(!1),D=Object(s.a)(C,2),E=D[0],A=D[1],F=function(){console.log("get movies"),fetch("http://localhost:9000/movies").then((function(e){return e.json()})).then((function(e){return o(e.res)})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){F()}),[]),Object(c.useEffect)((function(){console.log("useEfect new movie"),fetch("http://localhost:9000/movies",{method:"POST",body:JSON.stringify(v),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){F(),document.querySelector("#addForm").reset(),y("The movie has been added successfully!")})).catch((function(e){return console.log(e)}))}),[v]),Object(c.useEffect)((function(){A(!0)}),[S]);var k=function(e){console.log("trazi"),e.preventDefault(),r&&fetch("http://localhost:9000/movies/name/".concat(r)).then((function(e){return e.json()})).then((function(e){e.res.length<1?(F(),y("No results on: ".concat(r))):(o(e.res),y("Result on: ".concat(r)))})).catch((function(e){return console.log(e)}))},T=function(e){console.log(e.target.value),l(e.target.value),console.log("on typing handler")};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("main",{children:[Object(u.jsx)(f,{onClickAdd:function(){console.log("show add form"),h(!b)},onChange:T,onSubmit:k,formAddStats:b,onSubmitAddHander:function(e){e.preventDefault(),console.log("CALL FETCH AND ADD movie");var t=e.target,n={};n.name=t.querySelector("#movieName").value,n.genre=t.querySelector("#movieGenre").value,n.rating=Number(t.querySelector("#movieRating").value),n.explicit="on"==t.querySelector("#movieExplicit").value,p(n)}}),E?"".concat(S):"",Object(u.jsx)("section",{id:"movies-section",children:n.length>0?Object(u.jsx)(m,{onEditClick:function(e){e.target.getAttribute("data-key")},movies:n,onChange:T,onSubmit:k,onDelete:function(e){var t={id:e};console.log(t),fetch("http://localhost:9000/movies/".concat(t.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){F(),y("Movie deleted successfully!")})).catch((function(e){return console.log(e)})),console.log("delete")}}):Object(u.jsx)("h2",{children:"There is no movies"})})]})})};var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/edit",component:j}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:O})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};n(30);i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.559d55ff.chunk.js.map