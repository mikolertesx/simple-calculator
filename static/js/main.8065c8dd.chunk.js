(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(t,n,e){t.exports=e(13)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(0),u=e.n(c),a=e(3),l=e.n(a),r=e(1),o=(e(9),e(10),function(t){var n=t.text;return u.a.createElement("div",{className:"Display"},u.a.createElement("p",null,n||"Input numbers."))}),i=(e(11),function(t){return u.a.createElement("button",{onClick:t.onClick,className:"numeric-button"},t.text)}),s=(e(12),function(t){return u.a.createElement("button",{onClick:t.onClick,className:"operation-button"},t.text)}),f={"+":function(t,n){return t+n},"-":function(t,n){return t-n},"/":function(t,n){return t/n},X:function(t,n){return t*n},"%":function(t,n){return t%n}},b={CE:function(t,n){var e=Object(r.a)(t,2)[1],c=Object(r.a)(n,2)[1];e(null),c(null)},C:function(t,n,e){(0,Object(r.a)(t,2)[1])(null)},DEL:function(t,n,e){(0,Object(r.a)(t,2)[1])((function(t){return t?1===!t.length?null:t.slice(0,-1):null}))},"=":function(t,n,e){var c=Object(r.a)(t,2),u=c[0],a=c[1],l=Object(r.a)(n,2),o=l[0],i=l[1],s=Object(r.a)(e,2),b=s[0],m=s[1];null!==b&&u&&o&&(i((function(t){return f[b](t,+u)})),m(null),a(null))},"+/-":function(t,n,e){var c=Object(r.a)(t,2),u=c[0],a=c[1];u&&!isNaN(+u)&&a((function(t){return-1*+t}))},".":function(t,n,e){var c=Object(r.a)(t,2),u=c[0],a=c[1];u&&a((function(t){return t+"."}))}},m=["%","CE","C","DEL",7,8,9,"X",4,5,6,"-",1,2,3,"+","+/-",0,".","="];var E=function(){var t=Object(c.useState)(null),n=Object(r.a)(t,2),e=n[0],a=n[1],l=Object(c.useState)(null),E=Object(r.a)(l,2),j=E[0],O=E[1],p=Object(c.useState)(null),v=Object(r.a)(p,2),k=v[0],C=v[1];return u.a.createElement("div",{className:"App"},u.a.createElement(o,{text:e||j}),u.a.createElement("div",{className:"calc-buttons"},m.map((function(t){return isNaN(+t)?u.a.createElement(s,{onClick:function(){return function(t){if(f[t]){C(t);var n=f[t];null===j?(O(+e),a(null)):e&&O((function(t){return a(null),n(t,+e)}))}else b[t]([e,a],[j,O],[k,C])}(t)},key:"btn-".concat(t),text:t}):u.a.createElement(i,{onClick:function(){return n=t,void a((function(t){return null===t?n.toString():t+n.toString()}));var n},key:"btn-".concat(t),text:t})}))))};l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(E,null),u.a.createElement("p",{className:"warning-resolution"},"Resolution is too low to show a calculator.")),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.8065c8dd.chunk.js.map