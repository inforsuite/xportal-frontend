(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-075991ea"],{"0290":function(e,t,n){"use strict";var s=n("d419"),i=n.n(s);i.a},2473:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"d2-contextmenu",style:e.style},[e._t("default")],2)},i=[],o={name:"d2-contextmenu",props:{visible:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},computed:{flag:{get(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set(e){this.$emit("update:visible",e)}},style(){return{left:this.x+"px",top:this.y+"px",display:this.visible?"block":"none "}}},methods:{watchContextmenu(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)}},mounted(){document.querySelector("body").appendChild(this.$el)}},a=o,l=(n("0290"),n("a6c2")),u=Object(l["a"])(a,s,i,!1,null,null,null);t["default"]=u.exports},d419:function(e,t,n){}}]);