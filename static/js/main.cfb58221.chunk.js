(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),s=r(7),o=r.n(s),a=(r(15),r(6)),c=(r(16),r(8)),l=r(2),u=r(3),h=(r(9),r(10),function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"log",value:function(e){console.log(e)}}]),e}()),p=function(){function e(t){Object(l.a)(this,e),this.logger=new h,this.operators={"+":function(e,t){return e+t},"-":function(e,t){return e-t},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"^":function(e,t){return Math.pow(e,t)},"%":function(e,t){return e%t}},this.op_prior={"(":0,")":0,"+":1,"-":1,"*":2,"/":2,"%":2,"^":3},void 0!=t&&(this.logger=t)}return Object(u.a)(e,[{key:"setLogger",value:function(e){this.logger=e}},{key:"toPRN",value:function(e){" "==e[e.length-1]&&(e=e.substring(0,e.length-1))," "==e[0]&&(e=e.substring(1,e.length)),e=e.replace(/\s+/g," ").trim();var t,r=[],n="",i=Object(c.a)(e.split(" "));try{for(i.s();!(t=i.n()).done;){var s=t.value;if(s in this.op_prior)switch(s){case"(":r.push(s);break;case")":for(;;){var o=r.pop();if(void 0==o)return;if("("==o)break;n+=o+" "}break;default:for(;;){var a=r.pop();if(void 0==a)break;if(this.op_prior[a]<this.op_prior[s]){r.push(a);break}n+=a+" "}r.push(s)}else n+=s+" "}}catch(u){i.e(u)}finally{i.f()}for(;;){var l=r.pop();if(void 0==l)break;if(!(l in this.operators))return;n+=l+" "}return n=n.substring(0,n.length-1)}},{key:"evalPNR",value:function(e){var t=this,r=[];return e.split(" ").forEach((function(e){if(e in t.operators){var n=[r.pop(),r.pop()],i=n[0],s=n[1];r.push(t.operators[e](s,i))}else r.push(parseFloat(e))})),r.pop()}},{key:"calc",value:function(e){var t=this.toPRN(e);if(void 0!=t){var r=this.evalPNR(t);if(void 0!=r&&!isNaN(r))return r;this.logger.log("Error: can't evaluate prn expression.")}else this.logger.log("Error: invalid expression.")}}]),e}(),d=r(0);var f=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),r=t[0],i=t[1],s=Object(n.useState)(""),o=Object(a.a)(s,2),c=o[0],l=o[1],u=new p,h=function(e){e.preventDefault();var t=e.currentTarget;if("="==t.id){if(c.length){var n=u.calc(" "==c[c.length-1]?c.substring(0,c.length-1):c);i(void 0==n?r+(0!=c.length?"\n":"")+"error\n":r+"\nans: "+n.toString()+"\n"),l("")}}else"AC"==t.id?(i(r.substring(0,r.length-c.length)),l("")):"C"==t.id?c.length&&(i(r.substring(0,r.length-1)),l(c.substring(0,c.length-1))):t.id>="0"&&t.id<="9"||"."==t.id?(i(r+t.id),l(c+t.id)):(i(r+" "+t.id+" "),l(c+" "+t.id+" "))},f=["+","-","*","/","%","^","(",")",".","=","0","1","2","3","4","5","6","7","8","9","C","AC"].map((function(e){return Object(d.jsx)("div",{className:"button",id:e,onClick:h,children:e},e)}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Calculator 1337"}),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)("div",{className:"output",children:[r?"":Object(d.jsx)("h5",{style:{margin:"5px",opacity:"0.5"},children:"type here something..."}),r]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("div",{id:"operators",children:f.slice(0,10)}),Object(d.jsx)("div",{id:"numbers",children:f.slice(10,22)})]})]})]})};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.cfb58221.chunk.js.map