(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["speak"],{"5b92":function(t,e,a){"use strict";a.r(e);var s=a("7265"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e("portal",{attrs:{to:"app-header"}},[e("router-link",{staticClass:"ml-2",attrs:{to:"/speakcode"}},[t._v(" 看看代码 ")])],1),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"textarea",staticClass:"pa-2",staticStyle:{width:"100%",border:"1px solid lightblue"},attrs:{rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),e(s["a"],{on:{click:t.hanleClick}},[t._v(" 播放语音 ")])],1)},i=[],r={name:"Speak",data(){return{text:"说实话，我没有看过格力给我的工资条，我来格力的时候，我就说董总能不能给我一间靠近您的办公室，我要随时跟您汇报。我曾经幻想过，如果在我的职业生涯当中，有那么一段经历，可以跟在一个顶级企业家身边，我每天哪怕什么都不做，就看她怎么开会，听她讲什么，做什么，都是一件很幸福的事儿。"}},mounted(){this.$nextTick(()=>{this.$refs.textarea.focus()})},methods:{hanleClick(){const t=new SpeechSynthesisUtterance;t.text=this.text,t.volume=1,t.rate=1,t.pitch=1,window.speechSynthesis.speak(t)}}},o=r,l=a("2be6"),c=Object(l["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=speak.81d58b12.js.map