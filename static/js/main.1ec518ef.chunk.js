(this.webpackJsonppasschecker=this.webpackJsonppasschecker||[]).push([[0],{22:function(e,t,s){},24:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(16),c=s.n(r),o=(s(22),s(7)),i=s.n(o),u=s(17),d=s(3),p=(s(24),s(0)),j=s(26);var l=function(){var e=Object(a.useState)("input"),t=Object(d.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(""),c=Object(d.a)(r,2),o=c[0],l=c[1],g=Object(a.useState)(""),h=Object(d.a)(g,2),b=h[0],w=h[1],O=Object(a.useState)(""),m=Object(d.a)(O,2),f=m[0],v=m[1],x=Object(a.useState)(""),S=Object(d.a)(x,2),k=S[0],N=S[1],y=Object(a.useState)(!1),C=Object(d.a)(y,2),Y=C[0],F=C[1],I=function(){var e=Object(u.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j({method:"post",url:"https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength",data:{password:"".concat(t.target.value)}});case 3:4===(s=e.sent).data.score?l("Your password is very strong!"):3===s.data.score?l("Your password is strong!"):2===s.data.score?l("Your password is medium!"):1===s.data.score?l("Your password is too weak!"):l("Your password is very weak!"),F(!0),w(s.data.guessTimeString),v(s.data.warning),N(s.data.suggestions);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{className:"label-password",children:["Is your password strong enough?",Object(p.jsx)("input",{type:s,className:"input-password",onChange:I,placeholder:"password",maxLength:"12"}),Object(p.jsx)("span",{className:"show-password",onClick:function(e){e.preventDefault(),e.stopPropagation();var t="input"===s?"password":"input";console.log(t),n(t)},children:"input"===s?"Hide":"Show"}),Object(p.jsx)("span",{className:"strength-password","data-score":o})]}),Y&&Object(p.jsxs)("div",{className:"grid-messages",children:[Object(p.jsx)("h3",{className:"grid-item",id:"password-strength",children:o}),Object(p.jsxs)("h5",{className:"grid-item",children:["It will take ",b," to guess your password. ",f]}),Object(p.jsx)("h3",{className:"grid-item",id:"Suggestions",children:k})]})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.1ec518ef.chunk.js.map