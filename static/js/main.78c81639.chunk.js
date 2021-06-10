(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(18),r=a.n(i),c=(a(25),a(11)),o=a(20),l=(a(26),a(7)),d=a.n(l),u=a(9),b=a(0);function m(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(u.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(u.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(u.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}m.defaultProps={title:"Your Title",searchBar:!0},m.prototype={title:d.a.string,searchBar:d.a.bool.isRequired};var j=function(e){var t=e.todo,a=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"border border-dark rounded rounded-3 p-3",style:{},children:[Object(b.jsxs)("h5",{className:"fs-5",children:[t.sno+1,". ",Object(b.jsx)("u",{children:t.title})]}),Object(b.jsx)("p",{className:"fs-5 mx-4",children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger mx-4",onClick:function(){a(t)},children:"Delete"})]}),Object(b.jsx)("hr",{className:"bold"})]})},p=function(e){return Object(b.jsxs)("div",{className:"container my-3 border border-dark rounded p-4",style:{minHeight:"70vh"},children:[Object(b.jsx)("h3",{className:"text-center",children:"Todo List"}),0===e.todos.length?"No todos to display":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},x=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 Todolist.com"})})},h=function(e){var t=e.addTodo,a=Object(s.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)(""),l=Object(c.a)(o,2),d=l[0],u=l[1];return Object(b.jsxs)("div",{className:"container my-3 border border-dark rounded p-4",children:[Object(b.jsx)("h3",{className:"text-center",children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i?d?(t(i,d),r(""),u("")):alert("Description cannot be blank"):alert("Title cannot be blank")},children:[Object(b.jsxs)("div",{className:"mb-3 fs-5",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3 fs-5",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},O=function(){var e={fontSize:"25px"};return Object(b.jsxs)("div",{className:"container my-4",style:{minHeight:"85vh"},children:[Object(b.jsx)("h2",{style:{minHeight:"100%",fontSize:"30px",fontWeight:"bold"},className:"text-center",children:"About Us"}),Object(b.jsx)("p",{style:e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam."}),Object(b.jsx)("p",{style:e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam."}),Object(b.jsx)("p",{style:e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam."}),Object(b.jsx)("p",{style:e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis eaque excepturi officia voluptatum omnis nisi deserunt recusandae laudantium exercitationem repellendus vero praesentium provident voluptas aspernatur fuga explicabo voluptates illum laboriosam quo eius, ex blanditiis dolorum! Dolore, saepe! Adipisci, magnam."})]})},f=a(2);var v=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){l(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},a=function(e,t){var a={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};l([].concat(Object(o.a)(r),[a]))},n=Object(s.useState)(e),i=Object(c.a)(n,2),r=i[0],l=i[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(m,{title:"My Todos List",searchBar:!1}),Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{addTodo:a}),Object(b.jsx)(p,{todos:r,onDelete:t})]})}}),Object(b.jsx)(f.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(x,{})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.78c81639.chunk.js.map