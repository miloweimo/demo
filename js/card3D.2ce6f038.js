(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["card3D"],{"68fa":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-center justify-center",staticStyle:{height:"calc(100%)"}},[e("portal",{attrs:{to:"app-header"}},[e("a",{staticClass:"mr-2",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"}},[t._v(" transform | MDN ")]),e("a",{staticClass:"mr-2",attrs:{href:"https://www.npmjs.com/package/gsap"}},[t._v(" gsap - npm ")])]),e("div",{ref:"card",staticClass:"card"},[e("img",{attrs:{src:s("dde3"),alt:"图片"}})])],1)},a=[],o={mounted(){const t=this.$refs.card,e=[-10,10],s=[-10,10];function r(t,e,s){return t[0]+(t[1]-t[0])*e/s}t.addEventListener("mousemove",a=>{const{offsetWidth:o,offsetHeight:n}=t,{offsetX:c,offsetY:d}=a;console.log("鼠标移动了",c,o,d,n);const i=r(e,c,o),l=r(s,d,n);t.style.setProperty("--ry",-i+"deg"),t.style.setProperty("--rx",l+"deg")}),t.addEventListener("mouseleave",()=>{console.log("鼠标移出了"),t.style.setProperty("--ry",0),t.style.setProperty("--rx",0)})},methods:{}},n=o,c=(s("7017"),s("2be6")),d=Object(c["a"])(n,r,a,!1,null,"06c65522",null);e["default"]=d.exports},7017:function(t,e,s){"use strict";s("9a1d")},"9a1d":function(t,e,s){},dde3:function(t,e,s){t.exports=s.p+"img/avt.dc70186c.png"}}]);
//# sourceMappingURL=card3D.2ce6f038.js.map