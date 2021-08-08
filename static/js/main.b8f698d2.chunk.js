(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(21),o=r.n(a),s=(r(29),r(10)),i=r.n(s),d=r(24),l=r(15),j=r(14),u=r(9),b=r(7),h=r(2),p=r(0);function O(e){var t=e.color,r=e.text,n=e.onClick;return Object(p.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:n,children:r})}O.defaultProps={color:"steelblue",text:"Button"};var x=O;function m(e){var t=e.title,r=e.onAddClick,n=e.showAddTask,c=Object(h.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:t}),"/react-todo-app/"===c.pathname&&Object(p.jsx)(x,{color:n?"red":"green",text:n?"Close":"Add",onClick:r})]})}m.defaultProps={title:"Default Title"};var f=m;var v=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("p",{children:"Copyright \xa9 2021"}),Object(p.jsx)(b.b,{to:"/react-todo-app/about",children:"About"})]})};var k=function(){return Object(p.jsxs)("div",{id:"about",children:[Object(p.jsx)("h3",{id:"version",children:"Version 1.0.0"}),Object(p.jsx)("hr",{}),Object(p.jsx)("h4",{children:"- Developed by -"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("h4",{id:"aboutDev",children:[Object(p.jsx)("span",{id:"dev",children:"Hafizul Haque"}),Object(p.jsx)("br",{}),"CSE, CUET, Ex-Notredamian",Object(p.jsx)("br",{}),"Programmer | Full-Stack Javascript Developer ",Object(p.jsx)("br",{}),"Cell No: +8801818925451",Object(p.jsx)("br",{}),"E-mail: hafizulhaque.cse.cuet@gmail.com",Object(p.jsx)("br",{})]}),Object(p.jsx)(b.b,{to:"/react-todo-app/",children:"Go Back"})]})},g=r(23);var y=function(e){var t=e.task,r=e.onDelete,n=e.toggleTask;return Object(p.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return n(t.id)},children:[Object(p.jsxs)("h3",{children:[t.text,Object(p.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){r(t.id)}})]}),Object(p.jsx)("p",{children:t.day})]})};var C=function(e){var t=e.tasks,r=e.onDelete,n=e.toggleTask;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)(y,{task:e,onDelete:r,toggleTask:n},e.id)}))})};var T=function(e){var t=e.onAdd,r=Object(n.useState)(""),c=Object(u.a)(r,2),a=c[0],o=c[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),d=i[0],l=i[1],j=Object(n.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a.trim()?d.trim()?(t({text:a,day:d,reminder:h}),o(""),l(""),O(!1)):alert("Please add a time and date"):alert("Please add a task")},children:[Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{htmlFor:"task",children:"Task"}),Object(p.jsx)("input",{id:"task",type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{htmlFor:"day-time",children:"Day & Time"}),Object(p.jsx)("input",{id:"day-time",type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control form-control-check",children:[Object(p.jsx)("label",{htmlFor:"reminder",children:"Set Reminder"}),Object(p.jsx)("input",{id:"reminder",type:"checkbox",checked:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(p.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var D=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([{id:1,text:"Doctor's Appoinment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at school",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30pm",reminder:!1}]),o=Object(u.a)(a,2),s=o[0],O=o[1],x=function(){var e=Object(j.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:r},t),O([].concat(Object(d.a)(s),[n]));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(s.filter((function(e){return e.id!==t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(s.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{reminder:!e.reminder}):e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(f,{title:"Task Tracker",onAddClick:function(){c(!r)},showAddTask:r}),Object(p.jsx)(h.a,{path:"/react-todo-app/",exact:!0,render:function(e){return Object(p.jsxs)(p.Fragment,{children:[r&&Object(p.jsx)(T,{onAdd:x}),s.length?Object(p.jsx)(C,{tasks:s,onDelete:m,toggleTask:g}):"No task to show"]})}}),Object(p.jsx)(h.a,{path:"/react-todo-app/about",component:k}),Object(p.jsx)(h.a,{path:"/react-todo-app/",exact:!0,component:v})]})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b8f698d2.chunk.js.map