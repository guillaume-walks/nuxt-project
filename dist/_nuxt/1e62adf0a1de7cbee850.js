(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("4d5be713",content,!0,{sourceMap:!1})},137:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("601a16f2",content,!0,{sourceMap:!1})},167:function(t,e,n){"use strict";var r=n(136);n.n(r).a},168:function(t,e,n){(t.exports=n(56)(!1)).push([t.i,"div.content>p{text-overflow:ellipsis;height:100px;overflow:hidden}",""])},169:function(t,e,n){"use strict";var r=n(137);n.n(r).a},170:function(t,e,n){(t.exports=n(56)(!1)).push([t.i,".container{background:#222}.main-container{display:flex;flex-wrap:wrap;justify-content:space-between}.main-container>div{width:31%;margin-bottom:3.5%}",""])},177:function(t,e,n){"use strict";n.r(e);n(85),n(39);var r=n(148),c=n.n(r),l="http://".concat("localhost",":").concat(4e3),o="".concat(l,"/products"),d={props:{info:{required:!0}},created:function(){console.log(this)}},v=(n(167),n(27)),m={components:{Card:Object(v.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[t._m(1),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.info.name))]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.info.email))])])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.info.description))]),t._v(" "),n("a",[t._v("@bulmaio")]),t._v(".\n      "),n("a",{attrs:{href:"#"}},[t._v("#css")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("#responsive")]),t._v(" "),n("br"),t._v(" "),n("time",{attrs:{datetime:"2016-1-1"}},[t._v(t._s(t.info.date))])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],!1,null,null,null).exports,ErrorMessage:Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"message is-danger"},[n("div",{staticClass:"message-header"},[n("p",[t._v("Danger")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),t._v(" "),n("div",{staticClass:"message-body"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    "),n("strong",[t._v("Pellentesque risus mi")]),t._v(", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum\n    "),n("a",[t._v("felis venenatis")]),t._v(" efficitur. Aenean ac\n    "),n("em",[t._v("eleifend lacus")]),t._v(", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n  ")])])}],!1,null,null,null).exports},data:function(){return{errors:[],search:""}},computed:{filtered:function(){var t=this;return this.products.filter(function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},asyncData:function(t){t.params;return console.log(o),c.a.get("".concat(o)).then(function(t){return{products:t.data}})}},f=(n(169),Object(v.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Search a product by name...")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v("\n  results ("+t._s(t.filtered.length)+")\n  "),t.products&&t.filtered.length?n("div",{staticClass:"main-container"},t._l(t.filtered,function(t){return n("div",{key:t.id},[n("card",{attrs:{info:t}})],1)}),0):[n("error-message")],t._v(" "),t.errors&&t.errors.length?n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e.message))])}),0):t._e()],2)},[],!1,null,null,null));e.default=f.exports}}]);