(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tableheadingstickycode"],{"1e91":function(e,t,n){},"6aca":function(e,t,n){"use strict";n("1e91")},8923:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-4"},[t("portal",{attrs:{to:"app-header"}},[t("router-link",{staticClass:"ml-2",attrs:{to:"/tableheadingsticky"}},[e._v(" 看看示例 ")])],1),t("CodeHighlight",{attrs:{code:e.code}})],1)},o=[],c=n("bc12"),r={components:{CodeHighlight:c["a"]},data(){return{code:"\n<style scoped>\n::v-deep thead.v-data-table-header {\n  position: sticky;\n  top: 0;\n  /* 隐藏行选择checkbox */\n  z-index: 9999;\n}\n/* 亮色模式 */\n::v-deep .theme--light .v-data-table-header {\n  background-color: rgb(253, 253, 253);\n}\n/* 暗色模式 */\n::v-deep .theme--dark .v-data-table-header {\n  background-color: rgb(50, 50, 50);\n}\n</style>\n"}},mounted(){},methods:{}},s=r,d=(n("6aca"),n("2be6")),i=Object(d["a"])(s,a,o,!1,null,"3479ad1c",null);t["default"]=i.exports},b7d2:function(e,t,n){},bc12:function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{ref:"codeElement",staticClass:"code",class:"language-"+e.lang},[t("code",{class:"language-"+e.lang},[e._v(" "+e._s(e.code)+" ")])])},o=[],c=n("1487"),r=n.n(c),s={components:{},props:{lang:{type:String,default:"javascript"},code:{type:String,default:"// 对象拷贝\nfunction copyObject(orig) {\n  var copy = Object.create(Object.getPrototypeOf(orig));\n  copyOwnPropertiesFrom(copy, orig);\n  return copy;\n}"}},data(){return{}},computed:{},mounted(){r.a.highlightElement(this.$refs.codeElement)}},d=s,i=(n("dab9"),n("2be6")),l=Object(i["a"])(d,a,o,!1,null,"88898ba0",null);t["a"]=l.exports},dab9:function(e,t,n){"use strict";n("b7d2")}}]);
//# sourceMappingURL=tableheadingstickycode.5a8deffe.js.map