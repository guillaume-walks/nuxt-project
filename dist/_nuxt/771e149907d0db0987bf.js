(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(e,t,n){"use strict";var o={data:function(){return{img:{src:"/images/code.jpg",error:"/images/banner.jpg",loading:"/images/loading.gif"}}},computed:{},methods:{scrollTo:function(){var e=document.querySelectorAll("section")[1];e&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",o=arguments.length>3?arguments[3]:void 0,r={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},c=window.pageYOffset,l="now"in window.performance?performance.now():(new Date).getTime(),d=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),m=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f="number"==typeof e?e:e.offsetTop,w=Math.round(d-f<m?d-m:f);if("requestAnimationFrame"in window==0)return window.scroll(0,w),void(o&&o());!function e(){var d="now"in window.performance?performance.now():(new Date).getTime(),time=Math.min(1,(d-l)/t),m=r[n](time);window.scroll(0,Math.ceil(m*(w-c)+c)),window.pageYOffset!==w?requestAnimationFrame(e):o&&o()}()}(e,750,"easeOutQuad",function(){return console.log("Just finished scrolling to ".concat(window.pageYOffset,"px"))})}},props:{title:{type:String,default:"Hero"},backgroundImg:{type:String,default:"/_nuxt/assets/images/code.jpg"},text:{type:String,default:"A responsive site template designed by HTML5 UP\n          and released under the Creative Commons."}}},r=n(5),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.img,expression:"img",arg:"background-image"}],staticClass:"major",attrs:{id:"banner"}},[n("div",{staticClass:"inner"},[n("header",{staticClass:"major"},[n("h1",[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v(e._s(e.text))]),e._v(" "),n("ul",{staticClass:"actions"},[n("li",[n("a",{staticClass:"button next scrolly",on:{click:e.scrollTo}},[e._v("See More")])]),e._v(" "),e._t("default")],2)])])])},[],!1,null,null,null);t.a=component.exports},189:function(e,t,n){"use strict";n.r(t);var o=n(176),footer=n(69),r={components:{Hero:o.a,Footer:footer.a}},c=n(5),component=Object(c.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("Hero",{attrs:{title:"About..."}})],1)},[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=771e149907d0db0987bf.js.map