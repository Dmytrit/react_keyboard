(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),c=n(4),a=n(5),o=n(7),i=n(6),u=n(1),p=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={pressedKey:""},e.keyListener=function(t){e.setState({pressedKey:t.key})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyListener)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.keyListener)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(p.jsx)("div",{className:"App",children:e?Object(p.jsx)("p",{children:"The last pressed key is ".concat(e)}):Object(p.jsx)("p",{children:"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);s.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.39f509bd.chunk.js.map