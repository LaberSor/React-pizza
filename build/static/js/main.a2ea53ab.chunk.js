(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{45:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(15),a=c.n(i),r=c(12),o=c(17),l=c(16),j=c(6),d={items:[],isLoaded:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return console.log(t,"reducerPizzas"),"SET_PIZZAS"===t.type?Object(j.a)(Object(j.a)({},e),{},{items:t.payload}):e},u={category:0,sortBy:"popular"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"SET_SORT_BY"===t.type?Object(j.a)(Object(j.a)({},e),{},{sortBy:t.payload}):"SET_CATEGORY"===t.type?Object(j.a)(Object(j.a)({},e),{},{category:t.payload}):e},O=Object(l.a)({pizza:b,filter:h}),p="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,x=Object(l.b)(O,p());window.store=x;var m=x,v=(c(45),c(31)),f=c(32),C=c(35),_=c(34),w=c(33),z=c.n(w),N=c(3),k=c(14),g=c.n(k),y=c(1),S=function(e){var t=e.onClick,c=e.className,n=e.outline,s=e.children;return Object(y.jsx)("button",{onClick:t,className:g()("button",c,{"button-outline":n}),children:s})},E=c.p+"static/media/pizza-logo.56ac8703.svg";var L=function(){return Object(y.jsx)("div",{className:"header",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(r.b,{to:"/",children:Object(y.jsxs)("div",{className:"header__logo",children:[Object(y.jsx)("img",{width:"38",src:E,alt:"Pizza logo"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"React Pizza"}),Object(y.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(y.jsx)("div",{className:"header__cart",children:Object(y.jsx)(r.b,{to:"/Cart",children:Object(y.jsxs)(S,{className:"button--cart",children:[Object(y.jsx)("span",{children:"520 \u20bd"}),Object(y.jsx)("div",{className:"button__delimiter"}),Object(y.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(y.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(y.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(y.jsx)("span",{children:"3"})]})})})]})})},H=c(10);var P=function(e){var t=e.items,c=(e.onClick,s.a.useState(null)),n=Object(H.a)(c,2),i=n[0],a=n[1];return Object(y.jsx)("div",{className:"categories",children:Object(y.jsx)("ul",{children:t&&t.map((function(e,t){return Object(y.jsx)("li",{className:i===t?"active":"",onClick:function(){return function(e){a(e)}(t)},children:e},"".concat(e,"_").concat(t))}))})})};var T=function(e){var t=e.items,c=s.a.useState(!1),n=Object(H.a)(c,2),i=n[0],a=n[1],r=s.a.useState(0),o=Object(H.a)(r,2),l=o[0],j=o[1],d=s.a.useRef(null),b=t[l].name,u=function(e){e.path.includes(d.current),a(!1)};return s.a.useEffect((function(){document.body.addEventListener("click",u)}),[]),Object(y.jsxs)("div",{ref:d,className:"sort",children:[Object(y.jsxs)("div",{className:"sort__label",children:[Object(y.jsx)("svg",{className:i?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(y.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(y.jsx)("span",{onClick:function(){a(!i)},children:b})]}),i&&Object(y.jsx)("div",{className:"sort__popup",children:Object(y.jsx)("ul",{children:t&&t.map((function(e,t){return Object(y.jsx)("li",{onClick:function(){return function(e){j(e),a(!1)}(t)},className:l===t?"active":"",children:e.name},"".concat(e.type,"_").concat(t))}))})})]})};function Z(e){var t=e.name,c=e.imageUrl,n=e.price,i=e.types,a=e.sizes,r=s.a.useState(i[0]),o=Object(H.a)(r,2),l=o[0],j=o[1],d=s.a.useState(a[0]),b=Object(H.a)(d,2),u=b[0],h=b[1];return Object(y.jsxs)("div",{className:"pizza-block",children:[Object(y.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(y.jsx)("h4",{className:"pizza-block__title",children:t}),Object(y.jsxs)("div",{className:"pizza-block__selector",children:[Object(y.jsx)("ul",{children:["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"].map((function(e,t){return Object(y.jsx)("li",{onClick:function(){return function(e){j(e)}(t)},className:g()({active:l===t,disabled:!i.includes(t)}),children:e},e)}))}),Object(y.jsx)("ul",{children:[26,30,40].map((function(e,t){return Object(y.jsxs)("li",{onClick:function(){return function(e){h(e)}(t)},className:g()({active:u===t,disabled:!a.includes(e)}),children:[e," \u0441\u043c."]},e)}))})]}),Object(y.jsxs)("div",{className:"pizza-block__bottom",children:[Object(y.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",n," \u20bd"]}),Object(y.jsxs)("div",{className:"button button--outline button--add",children:[Object(y.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(y.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(y.jsx)("i",{children:"2"})]})]})]})}Z.defaultProps={types:[],sizes:[]};var B=Z;var M=function(e){var t=e.items;return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"content__top",children:[Object(y.jsx)(P,{items:["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"]}),Object(y.jsx)(T,{items:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"alphabet"}]})]}),Object(y.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(y.jsx)("div",{className:"content__items",children:t.map((function(e){return Object(y.jsx)(B,Object(j.a)({},e),e.id)}))})]})};var R=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Halo pachani"})})},V=function(e){Object(C.a)(c,e);var t=Object(_.a)(c);function c(){return Object(v.a)(this,c),t.apply(this,arguments)}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this;z.a.get("http://localhost:3000/db.json").then((function(t){var c=t.data;e.props.test(c.pizzas)}))}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)(L,{}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)(N.a,{path:"/",render:function(){return Object(y.jsx)(M,{items:e.props.pizzas.items})},exact:!0}),Object(y.jsx)(N.a,{path:"/Cart",component:R,exact:!0})]})]})}}]),c}(s.a.Component),I=Object(o.b)((function(e){return{items:e.pizzas.items,filters:e.filters}}),(function(e){return{test:function(t){return e(function(e){return{type:"SET_PIZZAS",payload:e}}(t))}}}))(V);a.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(o.a,{store:m,children:Object(y.jsx)(I,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a2ea53ab.chunk.js.map