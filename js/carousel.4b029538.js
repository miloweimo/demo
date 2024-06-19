(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["carousel"],{"0446":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[e("h1",[t._v("carousel")]),e("CarouselCard",{staticClass:"fill-height"})],1)},n=[],r=i("8467"),o=(i("0894"),i("75d7"),i("ba0f"),i("ab0a")),a=i("36a3"),l=i("404d"),c=i("bde8"),h=i("e479"),u=c["a"].extend({name:"v-window",directives:{Touch:o["a"]},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...c["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genDefaultSlot(){return Object(h["s"])(this)},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var s,n,r;const o={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},h=null!==(r=null===(n=(s=this.$scopedSlots)[t])||void 0===n?void 0:n.call(s,{on:o,attrs:c}))&&void 0!==r?r:[this.$createElement(a["a"],{props:{icon:!0},attrs:c,on:o},[this.$createElement(l["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__"+t},h)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),d=i("3c40"),p=c["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return c["a"].options.computed.classes.call(this)}},methods:{genData:c["a"].options.methods.genData}}),v=i("0d62"),g=u.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...u.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(v["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:u.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const s=this.$createElement(a["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)},key:i},[this.$createElement(l["a"],{props:{size:18}},this.delimiterIcon)]);e.push(s)}return this.$createElement(p,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(d["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=u.options.render.call(this,t);return e.data.style=`height: ${Object(h["h"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),m=i("0701"),f=i("6ae6"),w=i("5d20");const y=Object(w["a"])(m["a"],Object(f["a"])("windowGroup","v-window-item","v-window"));var b=y.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return Object(h["s"])(this)},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(h["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(h["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),x=i("9f6c"),C=i("5e7e");const T=Object(w["a"])(b,C["a"]);var I=T.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(x["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(h["s"])(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}}),S=i("8a29"),$=i("b354"),_=i("7f22"),j=i("1bc2"),B=i("e5f6"),O=i("7b27"),k=function(){var t=this,e=t._self._c;return e(g,{attrs:{cycle:"",interval:"3000","hide-delimiter-background":"","show-arrows-on-hover":"","hide-delimiters":""},model:{value:t.carouselIndex,callback:function(e){t.carouselIndex=e},expression:"carouselIndex"}},t._l(t.list,(function({machine:i,oeePercent:s,oeePercentGoal:n},o){return e(I,{key:o},[e(r["a"],{staticClass:"fill-height pa-4",attrs:{color:"primary"}},[e("div",{staticClass:"d-flex align-center mb-2"},[e("span",{staticClass:"text-subtitle-1 mainfont"},[t._v(t._s(i))]),e(O["a"]),t._l(t.list.slice(0,10),(function(i,s){return e("button",{key:s,on:{click:function(e){t.carouselIndex=s}}},[e(B["a"],{staticClass:"rounded-circle ml-2",attrs:{height:"10",width:"10",color:t.carouselIndex===s?"success":"#5F626C"}})],1)}))],2),e(j["a"],{staticStyle:{height:"calc(100% - 40px)"}},[e(S["a"],{staticStyle:{position:"relative"}},[e($["a"],{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},attrs:{size:185,width:10,rotate:-90,value:n}}),e($["a"],{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},attrs:{size:135,width:10,rotate:-90,value:s,color:"success"}},[e("span",{staticClass:"text-h5"},[t._v(" "+t._s(s.toFixed(2))+"% ")])])],1),e(S["a"],{staticClass:"d-flex flex-column justify-space-around"},[e("div",[e("div",{staticClass:"d-flex mb-4"},[e("span",[t._v(t._s(t.$t("title.oeegoal")))]),e(O["a"]),e("span",[t._v(t._s(n.toFixed(2))+"%")])],1),e(_["a"],{attrs:{value:n,height:10,color:"white"}})],1),e("div",[e("div",{staticClass:"d-flex mb-4"},[e("span",[t._v(t._s(t.$t("title.oeereal")))]),e(O["a"]),e("span",[t._v(t._s(s.toFixed(2))+"%")])],1),e(_["a"],{attrs:{value:s,height:10,color:"success"}})],1)])],1)],1)],1)})),1)},G=[],D={name:"OeeCard",props:{height:{type:Number,default:64},list:{type:Array,default:()=>[{machine:"设备-001",oeePercentGoal:80,oeePercent:82.1},{machine:"设备-002",oeePercentGoal:81,oeePercent:89.8}]}},data(){return{carouselIndex:0}}},A=D,E=i("2be6"),P=Object(E["a"])(A,k,G,!1,null,"a6daba78",null),N=P.exports,H={components:{CarouselCard:N}},V=H,R=Object(E["a"])(V,s,n,!1,null,"24bd1eea",null);e["default"]=R.exports},"1bc2":function(t,e,i){"use strict";i("0894"),i("28eb"),i("4a81");var s=i("9869"),n=i("0011"),r=i("e479");const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce((i,s)=>(i[t+Object(r["G"])(s)]=e(),i),{})}const c=t=>[...a,"baseline","stretch"].includes(t),h=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...a,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=m[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const w=new Map;e["a"]=s["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let o=w.get(r);if(!o){let t;for(t in o=[],g)g[t].forEach(i=>{const s=e[i],n=f(t,i,s);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),w.set(r,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),s)}})},"36a3":function(t,e,i){"use strict";var s=i("7265");e["a"]=s["a"]},"4a81":function(t,e,i){},"75d7":function(t,e,i){},"8a29":function(t,e,i){"use strict";i("0894"),i("28eb"),i("4a81");var s=i("9869"),n=i("0011"),r=i("e479");const o=["sm","md","lg","xl"],a=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(r["G"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(r["G"])(e)]={type:[String,Number],default:null},t),{}))(),h={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const d=new Map;e["a"]=s["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=d.get(o);if(!a){let t;for(t in a=[],h)h[t].forEach(i=>{const s=e[i],n=u(t,i,s);n&&a.push(n)});const i=a.some(t=>t.startsWith("col-"));a.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(o,a)}return t(e.tag,Object(n["a"])(i,{class:a}),s)}})},ba0f:function(t,e,i){}}]);
//# sourceMappingURL=carousel.4b029538.js.map