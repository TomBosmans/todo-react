(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{148:function(e,t,n){e.exports=n(240)},161:function(e,t){},163:function(e,t){},196:function(e,t){},197:function(e,t){},240:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n(20),l=n(42),i=n(19),u=function(e,t){switch(t.type){case"TOGGLE_TODO_FULFILLED":case"UPDATE_TODO_FULFILLED":case"TOGGLE_TODO_PENDING":case"UPDATE_TODO_PENDING":return e.id!==t.payload.id?e:Object(i.a)({},e,{},t.payload);default:return e}},d=Object(l.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],isFetching:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS_PENDING":return Object(i.a)({},e,{isFetching:!0});case"GET_TODOS_FULFILLED":return Object(i.a)({},e,{data:t.payload,isFetching:!1});case"GET_TODOS_REJECTED":return Object(i.a)({},e,{isFetching:!1,error:t.payload});case"TOGGLE_TODO_FULFILLED":case"UPDATE_TODO_FULFILLED":case"TOGGLE_TODO_PENDING":case"UPDATE_TODO_PENDING":return Object(i.a)({},e,{data:e.data.map((function(e){return u(e,t)}))});case"CREATE_TODO_FULFILLED":return Object(i.a)({},e,{data:[].concat(Object(o.a)(e.data),[t.payload])});case"DESTROY_TODO_PENDING":return Object(i.a)({},e,{data:e.data.filter((function(e){return e.id!==t.payload.id}))});default:return e}}}),s=(n(154),n(135)),m=n(136),f=function(){return Object(l.d)(d,l.a.apply(void 0,Object(o.a)([m.a,s.a])))},E=n(27),O=n(47),p=n(39),b=n(279),j=function(e){var t=e.children;return r.a.createElement(b.a,{maxWidth:"sm"},t)},D=n(283),T=n(26),h=n(59),y=n.n(h),_="all",v="completed",g="active",L={todos:[{id:y()(),text:"hey",completed:!0},{id:y()(),text:"ho",completed:!1},{id:y()(),text:"let's go",completed:!1}]},G=function(e){return new Promise((function(t){return setTimeout(t,e)}))},F=function(e){return G(500).then((function(){switch(e){case _:return L.todos;case g:return L.todos.filter((function(e){return!e.completed}));case v:return L.todos.filter((function(e){return e.completed}));default:throw new Error("unknown filter ".concat(e))}}))},I=function(e){return G(500).then((function(){var t=y()();return L.todos=[].concat(Object(o.a)(L.todos),[Object(i.a)({},e,{id:t})]),L.todos.find((function(e){return e.id===t}))}))},x=function(e,t){return G(500).then((function(){return L.todos=L.todos.map((function(n){return n.id!==e?n:Object(i.a)({},n,{},t)})),L.todos.find((function(t){return t.id===e}))}))},P=function(e){return G(500).then((function(){return L.todos=L.todos.filter((function(t){return t.id!==e})),"success"}))},w=n(241),U=n(284),A=n(285),N=n(286),S=n(297),k=n(138),R=n(2),C=n(287),z=n(289),B=(C.a,function(e){e.children;var t=Object(R.a)(e,["children"]);return r.a.createElement(C.a,Object.assign({},t,{color:"primary",size:"small"}),r.a.createElement(z.a,null,"add_circle"))}),J=function(e){e.children;var t=Object(R.a)(e,["children"]);return r.a.createElement(C.a,Object.assign({},t,{color:"primary",size:"small"}),r.a.createElement(z.a,null,"save"))},W=function(e){e.children;var t=Object(R.a)(e,["children"]);return r.a.createElement(C.a,Object.assign({},t,{size:"small"}),r.a.createElement(z.a,null,"more_horiz"))},Y=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(T.a)(n,2),o=c[0],l=c[1];return r.a.createElement(a.Fragment,null,r.a.createElement(W,{onClick:function(e){return l(e.currentTarget)}}),r.a.createElement(k.a,{anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return l(null)}},t))},M=n(290),q=n(291),H=n(296),K=n(292),Q=function(){return r.a.createElement(K.a,{position:"start"},r.a.createElement(J,{type:"submit"}))},V=function(e){var t=e.todo,n=e.afterUpdate,c=t.id,o=t.text,l=Object(E.b)(),u=Object(a.useState)(o),d=Object(T.a)(u,2),s=d[0],m=d[1],f=Object(a.useRef)();return Object(a.useEffect)((function(){return f.current.focus()}),[]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(function(e,t){return{type:"UPDATE_TODO",payload:{promise:x(e,t),data:Object(i.a)({id:e},t)}}}(c,{text:s})),n()}},r.a.createElement(H.a,{id:c,label:"Text",value:s,fullWidth:!0,inputRef:f,InputProps:{endAdornment:r.a.createElement(Q,null)},onInput:function(e){return m(e.target.value)}}))},X=function(e){var t=e.todo,n=t.id,c=t.text,o=t.completed,l=Object(E.b)(),u=Object(a.useState)(!1),d=Object(T.a)(u,2),s=d[0],m=d[1],f=function(){return m(!1)};return s?r.a.createElement(q.a,{onClickAway:f},r.a.createElement("div",{style:{paddingLeft:"16px",paddingRight:"16px"}},r.a.createElement(V,{todo:t,afterUpdate:f}))):r.a.createElement(w.a,{button:!0,onClick:function(){s||l(function(e){return{type:"TOGGLE_TODO",payload:{promise:x(e.id,{completed:!e.completed}),data:Object(i.a)({},e,{completed:!e.completed})}}}(t))},disableRipple:s},r.a.createElement(A.a,null,r.a.createElement(S.a,{edge:"start",checked:o,disableRipple:!0})),r.a.createElement(U.a,{primary:c}),r.a.createElement(N.a,null,r.a.createElement(Y,null,r.a.createElement(M.a,{onClick:function(){return m(!0)}},"Edit"),r.a.createElement(M.a,{onClick:function(){return l(function(e){return{type:"DESTROY_TODO",payload:{promise:P(e),data:{id:e}}}}(n))}},"Delete"))))},Z=n(288),$=function(e){return new URLSearchParams(Object(p.e)().search).get(e)},ee=n(293),te=n(294),ne=function(){var e=Object(E.c)((function(e){return function(e){return e.todos.data}(e)})),t=Object(E.c)((function(e){return e.todos.isFetching})),n=Object(E.b)(),c=$("filter");return Object(a.useEffect)((function(){n(function(e){return{type:"GET_TODOS",payload:F(e)}}(c||"all"))}),[c,n]),t?r.a.createElement(te.a,{container:!0,direction:"row",justify:"space-around"},r.a.createElement(ee.a,null)):r.a.createElement(Z.a,{dense:!0},e.map((function(e){return r.a.createElement(X,{key:e.id,todo:e})})))},ae=n(295),re=function(e){var t=e.filter,n=(e.active,e.children),a=$("filter")||_;return r.a.createElement(ae.a,{component:O.b,to:"list?filter=".concat(t),disabled:t===a},n)},ce=function(){return r.a.createElement(te.a,{container:!0,direction:"row",justify:"space-around",alignItems:"baseline"},r.a.createElement(re,{filter:_},"All"),r.a.createElement(re,{filter:g},"Active"),r.a.createElement(re,{filter:v},"Completed"))},oe=function(){return r.a.createElement(K.a,{position:"start"},r.a.createElement(B,{type:"submit"}))},le=function(){var e=Object(E.b)(),t=Object(a.useState)(""),n=Object(T.a)(t,2),c=n[0],o=n[1];return r.a.createElement("form",{onSubmit:function(t){(t.preventDefault(),c.trim())&&(e({type:"CREATE_TODO",payload:I({text:c,completed:!1})}),o(""))},style:{margin:"10px"}},r.a.createElement(H.a,{label:"New Todo",value:c,fullWidth:!0,InputProps:{endAdornment:r.a.createElement(oe,null)},onInput:function(e){return o(e.target.value)}}))},ie=function(){return r.a.createElement(p.a,{path:"/list"},r.a.createElement(j,null,r.a.createElement(D.a,{style:{marginBottom:"20px",textAlign:"center"}},r.a.createElement(ce,null)),r.a.createElement(D.a,null,r.a.createElement(le,null),r.a.createElement(ne,null))))};Object(c.render)(r.a.createElement((function(e){var t=e.store;return r.a.createElement(E.a,{store:t},r.a.createElement(O.a,null,r.a.createElement(ie,null)))}),{store:f()}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.2402e52f.chunk.js.map