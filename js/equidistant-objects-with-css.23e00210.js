(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["equidistant-objects-with-css"],{"1b76":function(t,i,e){"use strict";e.r(i);var s=e("fc2f"),a=e("7b27"),l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"pa-4"},[i("h1",[t._v("使用 CSS 实现等距对象")]),i("div",[i("span",[t._v(" width: "+t._s(t.width)+"% ")]),i(s["a"],{staticClass:"my-2",staticStyle:{border:"1px solid","border-radius":"0.3rem"},attrs:{hint:"宽度",max:"100",min:"0","persistent-hint":"","thumb-label":"",step:"10","tick-labels":t.ticksLabels,"tick-size":"5"},scopedSlots:t._u([{key:"thumb-label",fn:function({value:e}){return[i("div",{staticStyle:{"font-size":"xx-large"}},[t._v(" "+t._s(t.satisfactionEmojis[Math.min(Math.floor(e/10),9)])+" ")])]}}]),model:{value:t.width,callback:function(i){t.width=i},expression:"width"}}),i("p",[t._v("flex方案")]),i("div",{staticClass:"box box1",style:{width:t.width+"%"}},t._l(4,(function(e,s){return i("div",{key:s,staticClass:"item1"},[t._v(" item"+t._s(e)+" ")])})),0),i("p",[t._v("float方案 ????")]),i("div",{staticClass:"box2",style:{width:t.width+"%"}},[i("div",{staticClass:"box2item1"},[t._v(" item1 ")]),t._m(0)]),i("p",[t._v("inline-block 方案 ????")]),i("div",{staticClass:"box box3",style:{width:t.width+"%"}},[i("div",{staticClass:"item3"},[t._v(" 123 ")]),i("div",{staticClass:"item3"},[t._v(" 123 ")]),i("div",{staticClass:"item3"},[t._v(" 123 ")]),i("div",{staticClass:"item3"},[t._v(" 123 ")])]),i("p",[t._v("直接25%吧 焯")]),i("div",{staticClass:"box d-flex",style:{width:t.width+"%"}},[i("div",{staticStyle:{width:"25%"}},[t._v(" item ")]),i(a["a"]),i("div",{staticStyle:{width:"25%"}},[t._v(" item ")]),i(a["a"]),i("div",{staticStyle:{width:"25%"}},[t._v(" item ")]),i(a["a"]),i("div",{},[t._v(" item ")])],1)],1)])},n=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"box22"},[i("div",{staticClass:"box222"},[i("div",{staticClass:"itemmmm"},[t._v(" item2 ")])]),i("div",{staticClass:"box222"},[i("div",{staticClass:"itemmmm"},[t._v(" item3 ")])]),i("div",{staticClass:"box222"},[i("div",{staticClass:"itemmmm"},[t._v(" item4 ")])])])}],r={data(){return{satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],ticksLabels:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],width:100}},mounted(){this.width=50}},h=r,o=(e("987d"),e("2be6")),u=Object(o["a"])(h,l,n,!1,null,"bc106856",null);i["default"]=u.exports},"6f09":function(t,i,e){},"987d":function(t,i,e){"use strict";e("df21")},df21:function(t,i,e){},fc2f:function(t,i,e){"use strict";e("0894"),e("6f09");var s=e("e4a9"),a=e("91a2"),l=e("5d20"),n=e("55e3"),r=e("93eb"),h=e("e479"),o=e("0d62");i["a"]=Object(l["a"])(s["a"],n["a"]).extend({name:"v-slider",directives:{ClickOutside:r["a"]},mixins:[n["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const i=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));i!==this.lazyValue&&(this.lazyValue=i,this.$emit("input",i))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",i=this.vertical?"top":"right",e=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",l=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:s,[i]:a,[e]:l}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",i=this.vertical?"height":"width",e="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:e,[i]:s}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const i=parseFloat(t);i>this.internalValue&&this.$emit("input",i)},max(t){const i=parseFloat(t);i<this.internalValue&&this.$emit("input",i)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||Object(o["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],i=this.genSlider();return this.inverseLabel?t.unshift(i):t.push(i),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),i=Object(h["i"])(this.numTicks+1),e=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&i.reverse();const a=i.map(i=>{const a=[];this.tickLabels[i]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[i]));const l=i*(100/this.numTicks),n=this.$vuetify.rtl?100-this.inputWidth<l:l<this.inputWidth;return this.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":n},style:{width:t+"px",height:t+"px",[e]:`calc(${l}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},a)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,i,e,s,a,l,n="thumb"){const r=[this.genThumb()],h=this.genThumbLabelContent(t);return this.showThumbLabel&&r.push(this.genThumbLabel(h)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:n,key:n,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":e,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(i),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:l,keydown:this.onKeyDown}}),r)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const i=Object(h["h"])(this.thumbSize),e=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(a["d"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:i,width:i,transform:e}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const i=this.vertical?"top":"left";let e=this.$vuetify.rtl?100-t:t;return e=this.vertical?100-e:e,{transition:this.trackTransition,[i]:e+"%"}},onSliderMouseDown(t){var i;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(i=t.target)||void 0===i?void 0:i.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const i=t.target.getBoundingClientRect(),e="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?e.clientY-(i.top+i.height/2):e.clientX-(i.left+i.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const e=!h["B"]||{passive:!0,capture:!0},s=!!h["B"]&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,s),Object(h["a"])(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,e),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const i=!!h["B"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,i),this.app.removeEventListener("mousemove",this.onMouseMove,i),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(h["k"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const i=this.parseKeyDown(t,this.internalValue);null==i||i<this.minValue||i>this.maxValue||(this.internalValue=i,this.$emit("change",i))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const i=this.$refs.thumb;i.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const i=this.vertical?"top":"left",e=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[i]:a,[e]:l}=this.$refs.track.getBoundingClientRect(),n="touches"in t?t.touches[0][s]:t[s];let r=Math.min(Math.max((n-a-this.startOffset)/l,0),1)||0;return this.vertical&&(r=1-r),this.$vuetify.rtl&&(r=1-r),parseFloat(this.min)+r*(this.maxValue-this.minValue)},parseKeyDown(t,i){if(!this.isInteractive)return;const{pageup:e,pagedown:s,end:a,home:l,left:n,right:r,down:o,up:u}=h["x"];if(![e,s,a,l,n,r,o,u].includes(t.keyCode))return;t.preventDefault();const c=this.stepNumeric||1,d=(this.maxValue-this.minValue)/c;if([n,r,o,u].includes(t.keyCode)){const e=this.$vuetify.rtl?[n,u]:[r,u],s=e.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;i+=s*c*a}else if(t.keyCode===l)i=this.minValue;else if(t.keyCode===a)i=this.maxValue;else{const e=t.keyCode===s?1:-1;i-=e*c*(d>100?d/10:10)}return i},roundValue(t){if(!this.stepNumeric)return t;const i=this.step.toString().trim(),e=i.indexOf(".")>-1?i.length-i.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(e))}}})}}]);
//# sourceMappingURL=equidistant-objects-with-css.23e00210.js.map