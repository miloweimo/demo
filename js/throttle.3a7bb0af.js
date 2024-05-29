(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["throttle"],{"7ad3":function(t,e,n){},bc12:function(t,e,n){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{ref:"codeElement",staticClass:"code",class:"language-"+t.lang},[e("code",{class:"language-"+t.lang},[t._v(" "+t._s(t.code)+" ")])])},o=[],l=n("1487"),a=n.n(l),r={components:{},props:{lang:{type:String,default:"javascript"},code:{type:String,default:"// 对象拷贝\nfunction copyObject(orig) {\n  var copy = Object.create(Object.getPrototypeOf(orig));\n  copyOwnPropertiesFrom(copy, orig);\n  return copy;\n}"}},data(){return{}},computed:{},mounted(){a.a.highlightElement(this.$refs.codeElement)}},s=r,c=(n("e7fd"),n("2be6")),u=Object(c["a"])(s,i,o,!1,null,"2c9befe0",null);e["a"]=u.exports},d639:function(t,e,n){"use strict";n.r(e);var i=n("7265"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e("portal",{attrs:{to:"app-header"}},[e("router-link",{staticClass:"ml-2",attrs:{to:"/debouncecode"}},[t._v(" 参考防抖 ")])],1),e("div",{staticClass:"d-flex"},[e("h1",[t._v("Throttle")]),e("span",[t._v(t._s(t.tip))])]),t._m(0),e("CodeHighlight",{attrs:{code:t.code}}),e(i["a"],{on:{click:t.runThrottle}},[t._v(" 运行Js方法 ")]),e(i["a"],{on:{click:t.runThrottle2}},[t._v(" 运行Vue方法 ")])],1)},l=[function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("throttle(func, wait)")]),t._v("每 wait 毫秒内最多只调用一次 func")])}],a=n("bc12");function r(t,e){let n=0,i=null;return function(){i&&(clearTimeout(i),i=null);let o=this,l=arguments,a=+new Date;const r=e-(a-n);console.log("remainWaitTime",r,r<=0),r<=0?(n=a,t.apply(o,l)):i=setTimeout((function(){n=+new Date,t.apply(o,l),i=null}),r)}}const s=()=>{console.log("runThrottle")},c=r(s,2e3);var u={components:{CodeHighlight:a["a"]},data(){return{tip:"",code:"function throttle(func, wait) {\n  // 上次触发时间戳\n  let lastTime = 0;\n  // 定时器\n  let timer = null;\n\n  return function () {\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n    }\n\n    let self = this;\n    let args = arguments;\n    let nowTime = +new Date();\n\n    const remainWaitTime = wait - (nowTime - lastTime);\n\n    if (remainWaitTime <= 0) {\n      lastTime = nowTime;\n      func.apply(self, args);\n    } else {\n      timer = setTimeout(function () {\n        lastTime = +new Date();\n        func.apply(self, args);\n        timer = null;\n      }, remainWaitTime);\n    }\n  };\n}",runtask:null}},mounted(){this.runtask=r(this.fn2,2e3)},methods:{runThrottle(){c()},fn2(){this.tip="完成, 2000ms内最多调用1次",console.log("runThrottle2")},runThrottle2(){this.tip="运行中...",this.runtask()}}},p=u,f=n("2be6"),m=Object(f["a"])(p,o,l,!1,null,"8ebeb28c",null);e["default"]=m.exports},e7fd:function(t,e,n){"use strict";n("7ad3")}}]);
//# sourceMappingURL=throttle.3a7bb0af.js.map