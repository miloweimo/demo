(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["code"],{"4e62":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"pa-4"},[n("CodeHighlight",{attrs:{code:t.code}})],1)},c=[],s=e("bc12"),i={components:{CodeHighlight:s["a"]},data(){return{code:"// ..\nmounted() {\n  window.addEventListener('scroll', this.onScroll)\n},\n\nmethods: {\n  onScroll() {\n    this.text = '上拉了... 但是没触底'\n    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    const scrollHeight = document.documentElement.scrollHeight;\n    const clientHeight = document.documentElement.clientHeight;\n    if (scrollTop + clientHeight >= scrollHeight - 50) { \n      // 触底后操作\n      this.text = '触底了 开始加载'\n      setTimeout(() => {\n        this.text = '加载完了'\n        this.num += 10\n        setTimeout(() => {\n          this.text = '焯...'\n        }, 2000)\n      }, 2000)\n    }\n  }\n},\n  // ..\n"}},mounted(){},methods:{}},l=i,d=(e("5ee2"),e("2be6")),u=Object(d["a"])(l,o,c,!1,null,"68005993",null);n["default"]=u.exports},"5ee2":function(t,n,e){"use strict";e("783d")},"783d":function(t,n,e){}}]);
//# sourceMappingURL=code.2ec9997e.js.map