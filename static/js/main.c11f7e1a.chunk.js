(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),r=n.n(a),d=n(3),l=n(2),i=n(9),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(i.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},u=n(0),j=function(e){var t=e.todo,n=e.index,c=e.handleDelete,o=e.handleToggle;return Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return o(t.id)},children:[n+1," ",t.desc]}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(t.id)},children:"Borrar"})]},t.id)},b=function(e){var t=e.todos,n=e.handleDelete,c=e.handleToggle;return Object(u.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(u.jsx)(j,{todo:e,index:t,handleDelete:n,handleToggle:c},e.id)}))})},h=n(6),p=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),o=n[0],a=n[1];return[o,function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},o),{},Object(h.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),o=Object(d.a)(n,3),a=o[0].description,r=o[1],i=o[2];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:"Agrega TODO"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<=1)){var n={id:(new Date).getTime(),desc:a,done:!1};t(n),i()}},children:[Object(u.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Aprender...",autoComplete:"off",value:a,onChange:r}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2 w-100",children:"Agregar"})]})]})},O=(n(15),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),g=function(){var e=Object(c.useReducer)(s,[],O),t=Object(d.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["Todo List ( ",n.length," )"]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-7",children:Object(u.jsx)(b,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToggle:function(e){o({type:"toggle",payload:e})}})}),Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)(p,{handleAddTodo:function(e){o({type:"add",payload:e})}})})]})]})};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c11f7e1a.chunk.js.map