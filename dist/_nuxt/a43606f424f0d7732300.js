(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,n){"use strict";n.r(t);var r={},o=n(5),c=Object(o.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:""}},[t("div",{staticClass:"inner"},[t("header",{staticClass:"major"},[t("h2",[this._v("Massa libero")])]),this._v(" "),t("p",[this._v("Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.")]),this._v(" "),t("ul",{staticClass:"actions"},[t("li",[t("a",{staticClass:"button next",attrs:{href:"landing.html"}},[this._v("Get Started")])])])])])}],!1,null,null,null).exports,l={methods:{rand:function(){var e=Math.floor(100*Math.random());return"https://picsum.photos/300/350?image=".concat(e)}}},m=Object(o.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("a",{staticClass:"image",attrs:{href:"generic.html"}},[t("img",{attrs:{height:"350px",src:this.rand(),alt:"","data-position":"center center"}})]),this._v(" "),this._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"inner"},[t("header",{staticClass:"major"},[t("h3",[this._v("Orci maecenas")])]),this._v(" "),t("p",[this._v("Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.")]),this._v(" "),t("ul",{staticClass:"actions"},[t("li",[t("a",{staticClass:"button",attrs:{href:"generic.html"}},[this._v("Learn more")])])])])])}],!1,null,null,null).exports,d={data:function(){return{value:""}},mounted:function(){console.log("enter...")},methods:{callback:function(e){console.log(e),this.$emit("changed",e)}}},h=Object(o.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"major"},[n("div",{staticClass:"inner"},[n("form",[n("div",{staticClass:"row gtr-uniform"},[n("div",{staticClass:"col-12"},[e._t("default"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",name:"demo-name",id:"demo-name",value:"",placeholder:"Name"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},function(t){return e.callback(e.value)}]}})],2)])])])])},[],!1,null,null,null).exports,f={data:function(){return{img:{src:"images/code.jpg",error:"images/banner.jpg",loading:"images/loading.gif"}}},computed:{},methods:{scrollTo:function(){var e=document.querySelectorAll("section")[1];e&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",r=arguments.length>3?arguments[3]:void 0,o={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},c=window.pageYOffset,l="now"in window.performance?performance.now():(new Date).getTime(),m=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),d=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,h="number"==typeof e?e:e.offsetTop,f=Math.round(m-h<d?m-d:h);if("requestAnimationFrame"in window==0)return window.scroll(0,f),void(r&&r());!function e(){var m="now"in window.performance?performance.now():(new Date).getTime(),time=Math.min(1,(m-l)/t),d=o[n](time);window.scroll(0,Math.ceil(d*(f-c)+c)),window.pageYOffset!==f?requestAnimationFrame(e):r&&r()}()}(e,750,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}},props:{title:{type:String,default:"Hero"},backgroundImg:{type:String,default:"_nuxt/assets/images/code.jpg"},text:{type:String,default:"A responsive site template designed by HTML5 UP\n          and released under the Creative Commons."}}},v=Object(o.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.img,expression:"img",arg:"background-image"}],staticClass:"major",attrs:{id:"banner"}},[n("div",{staticClass:"inner"},[n("header",{staticClass:"major"},[n("h1",[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v(e._s(e.text))]),e._v(" "),n("ul",{staticClass:"actions"},[n("li",[n("a",{staticClass:"button next scrolly",on:{click:e.scrollTo}},[e._v("See More")])]),e._v(" "),e._t("default")],2)])])])},[],!1,null,null,null).exports,_=n(48),w={props:{info:{required:!0},callback:{type:Function}},methods:{rand:function(){var e=Math.floor(100*Math.random());return{src:"https://picsum.photos/500/500?image=".concat(e),error:"/images/banner.jpg",loading:"/images/loading.gif"}}},created:function(){}},C=Object(o.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.rand(),expression:"rand()",arg:"background-image"}]},[n("span",{staticClass:"image",staticStyle:{display:"none"}},[n("img",{attrs:{src:e.info.url,alt:""}})]),e._v(" "),n("header",{staticClass:"major"},[n("h3",[n("a",{staticClass:"link"},[e._v(e._s(e.info.name))])]),e._v(" "),n("p",[e._v(e._s(e.info.email)+" "+e._s(e.info.date))])]),e._v(" "),n("a",{staticClass:"link primary"})])},[],!1,null,null,null).exports;n.d(t,"Paragraph",function(){return c}),n.d(t,"Linear",function(){return m}),n.d(t,"Search",function(){return h}),n.d(t,"Hero",function(){return v}),n.d(t,"Sidemenu",function(){return _.a}),n.d(t,"Tile",function(){return C})},185:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n(177),c={name:"dynamicpage",components:Object(r.a)({},o),data:function(){return{val:!1,heroP:{name:"hero",props:{title:"dynamic title",text:"dynamoc text..."}},paragraphP:{name:"paragraph",props:{}},list:["hero","hero","paragraph","hero","hero","hero","hero","hero","hero","hero","hero","hero"],dyn:{hero:{name:"hero",props:{title:"dynamic title",text:"dynamoc text..."}},paragraph:{name:"paragraph",props:{}}}}},computed:{model:function(){return this.val?this.heroP:this.paragraphP}},methods:{change:function(){this.val=!this.val}}},l=n(5),component=Object(l.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n(e.model.name,e._b({tag:"component"},"component",e.model.props,!1)),e._v(" "),n("button",{on:{click:e.change}},[e._v("change")]),e._v(" "),n("hr"),e._v(" "),e._l(e.list,function(t,r){return n(t,e._b({key:r,tag:"component"},"component",e.dyn[t].props,!1))})],2)},[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=a43606f424f0d7732300.js.map