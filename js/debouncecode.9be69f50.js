(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["debouncecode"],{"7ad3":function(t,e,n){},"8bac":function(t,e,n){"use strict";n("9e5e")},"9ac0":function(t,e,n){"use strict";n.r(e);var c=n("7265"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e("portal",{attrs:{to:"app-header"}},[e("router-link",{staticClass:"ml-2",attrs:{to:"/throttle"}},[t._v(" 参考节流 ")]),e("router-link",{staticClass:"ml-2",attrs:{to:"/debounce"}},[t._v(" 看看示例 ")])],1),e("div",{staticClass:"d-flex"},[e("h1",[t._v("Debounce")]),e("span",[t._v(t._s(t.msg))])]),t._m(0),e("CodeHighlight",{attrs:{code:t.code}}),e(c["a"],{on:{click:t.handleClick}},[t._v(" 运行 ")])],1)},i=[function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("debounce(func, wait)")]),t._v("自最近一次触发后延迟 wait 毫秒调用 func")])}],a=n("bc12");function s(t,e){let n=null;return function(){n&&(clearTimeout(n),n=null);let c=this,o=arguments;n=setTimeout((function(){t.apply(c,o),n=null}),e)}}var l={components:{CodeHighlight:a["a"]},data(){return{msg:"",code:"function debounce(func, wait) {\n  let timer = null;\n\n  return function () {\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n    }\n\n    let self = this;\n    let args = arguments;\n\n    timer = setTimeout(function () {\n      func.apply(self, args);\n      timer = null;\n    }, wait);\n  };\n}",run:s((function(){console.log("防抖函数执行！"),this.msg="完成"}),500)}},mounted(){},methods:{handleClick(){this.msg="运行中...",this.run()}}},r=l,u=(n("8bac"),n("2be6")),d=Object(u["a"])(r,o,i,!1,null,"0505aeb8",null);e["default"]=d.exports},"9e5e":function(t,e,n){},bc12:function(t,e,n){"use strict";var c=function(){var t=this,e=t._self._c;return e("div",{ref:"codeElement",staticClass:"code",class:"language-"+t.lang},[e("code",{class:"language-"+t.lang},[t._v(" "+t._s(t.code)+" ")])])},o=[],i=n("1487"),a=n.n(i),s={components:{},props:{lang:{type:String,default:"javascript"},code:{type:String,default:"// 对象拷贝\nfunction copyObject(orig) {\n  var copy = Object.create(Object.getPrototypeOf(orig));\n  copyOwnPropertiesFrom(copy, orig);\n  return copy;\n}"}},data(){return{}},computed:{},mounted(){a.a.highlightElement(this.$refs.codeElement)}},l=s,r=(n("e7fd"),n("2be6")),u=Object(r["a"])(l,c,o,!1,null,"2c9befe0",null);e["a"]=u.exports},e7fd:function(t,e,n){"use strict";n("7ad3")}}]);
//# sourceMappingURL=debouncecode.9be69f50.js.map