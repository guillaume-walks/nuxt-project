(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(t,e,n){"use strict";n.r(e);var r={},o=n(5),l=Object(o.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:""}},[e("div",{staticClass:"inner"},[e("header",{staticClass:"major"},[e("h2",[this._v("Massa libero")])]),this._v(" "),e("p",[this._v("Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.")]),this._v(" "),e("ul",{staticClass:"actions"},[e("li",[e("a",{staticClass:"button next",attrs:{href:"landing.html"}},[this._v("Get Started")])])])])])}],!1,null,null,null).exports,c={methods:{rand:function(){var t=Math.floor(100*Math.random());return"https://picsum.photos/300/350?image=".concat(t)}}},m=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("a",{staticClass:"image",attrs:{href:"generic.html"}},[e("img",{attrs:{height:"350px",src:this.rand(),alt:"","data-position":"center center"}})]),this._v(" "),this._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"inner"},[e("header",{staticClass:"major"},[e("h3",[this._v("Orci maecenas")])]),this._v(" "),e("p",[this._v("Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.")]),this._v(" "),e("ul",{staticClass:"actions"},[e("li",[e("a",{staticClass:"button",attrs:{href:"generic.html"}},[this._v("Learn more")])])])])])}],!1,null,null,null).exports,d={data:function(){return{value:""}},mounted:function(){console.log("enter...")},methods:{callback:function(t){console.log(t),this.$emit("changed",t)}}},f=Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"major"},[n("div",{staticClass:"inner"},[n("form",[n("div",{staticClass:"row gtr-uniform"},[n("div",{staticClass:"col-12"},[t._t("default"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",name:"demo-name",id:"demo-name",value:"",placeholder:"Name"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.callback(t.value)}]}})],2)])])])])},[],!1,null,null,null).exports,h={data:function(){return{img:{src:"/images/code.jpg",error:"/images/banner.jpg",loading:"/images/loading.gif"}}},computed:{},methods:{scrollTo:function(){var t=document.querySelectorAll("section")[1];t&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",r=arguments.length>3?arguments[3]:void 0,o={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},l=window.pageYOffset,c="now"in window.performance?performance.now():(new Date).getTime(),m=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),d=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f="number"==typeof t?t:t.offsetTop,h=Math.round(m-f<d?m-d:f);if("requestAnimationFrame"in window==0)return window.scroll(0,h),void(r&&r());!function t(){var m="now"in window.performance?performance.now():(new Date).getTime(),time=Math.min(1,(m-c)/e),d=o[n](time);window.scroll(0,Math.ceil(d*(h-l)+l)),window.pageYOffset!==h?requestAnimationFrame(t):r&&r()}()}(t,750,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}},props:{title:{type:String,default:"Hero"},backgroundImg:{type:String,default:"/_nuxt/assets/images/code.jpg"},text:{type:String,default:"A responsive site template designed by HTML5 UP\n          and released under the Creative Commons."}}},v=Object(o.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.img,expression:"img",arg:"background-image"}],staticClass:"major",attrs:{id:"banner"}},[n("div",{staticClass:"inner"},[n("header",{staticClass:"major"},[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.text))]),t._v(" "),n("ul",{staticClass:"actions"},[n("li",[n("a",{staticClass:"button next scrolly",on:{click:t.scrollTo}},[t._v("See More")])]),t._v(" "),t._t("default")],2)])])])},[],!1,null,null,null).exports,_=n(48),w={props:{info:{required:!0},callback:{type:Function}},methods:{rand:function(){var t=Math.floor(100*Math.random());return{src:"https://picsum.photos/500/500?image=".concat(t),error:"/images/banner.jpg",loading:"/images/loading.gif"}}},created:function(){console.log(this)}},C=Object(o.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.rand(),expression:"rand()",arg:"background-image"}]},[n("span",{staticClass:"image",staticStyle:{display:"none"}},[n("img",{attrs:{src:t.info.url,alt:""}})]),t._v(" "),n("header",{staticClass:"major"},[n("h3",[n("a",{staticClass:"link"},[t._v(t._s(t.info.name))])]),t._v(" "),n("p",[t._v(t._s(t.info.email)+" "+t._s(t.info.date))])]),t._v(" "),n("a",{staticClass:"link primary"})])},[],!1,null,null,null).exports;n.d(e,"Paragraph",function(){return l}),n.d(e,"Linear",function(){return m}),n.d(e,"Search",function(){return f}),n.d(e,"Hero",function(){return v}),n.d(e,"Sidemenu",function(){return _.a}),n.d(e,"Tile",function(){return C})},186:function(t,e,n){"use strict";n.r(e);var r=n(12),o=n(177),l={components:Object(r.a)({},o)},c=n(5),component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Hero",{attrs:{title:"Home page..."}}),this._v(" "),e("div",{staticClass:"major"},[e("div",{staticClass:"inner"},[e("p",[e("nuxt-link",{attrs:{to:"/product/"}},[this._v("Product page")])],1),this._v(" "),e("p",[e("nuxt-link",{attrs:{to:"/contact"}},[this._v("contact page")])],1)])])],1)},[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=55f16c35a4c564428bff.js.map