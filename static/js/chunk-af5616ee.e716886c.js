(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af5616ee"],{1615:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("template",{slot:"header"},[t._v("带参路由场景下，一个组件实例，同时管理多个页面的数据")]),a("h3",{staticClass:"d2-mt-0"},[t._v("组件名称："+t._s(t.$options.name))]),a("h3",{staticClass:"d2-mt-0"},[t._v("页面路由："+t._s(t.$route.fullPath))]),a("h3",{staticClass:"d2-mt-0"},[t._v("页面编号："+t._s(t.id))]),a("p",{staticClass:"d2-mt-0"},[t._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明每个页面的数据都能被有效管理")]),a("Input",{attrs:{placeholder:"input here"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],2)},n=[],i=(a("3ebf"),a("97a2"),a("f254")),l=a.n(i),c=(a("c026"),a("f6f6"));class o{constructor(t){this.vm=t,this.datas={},this.dataTemplate=Object(c["cloneDeep"])(this.vm.$data)}enter(t,e){const a=t.fullPath;let s=this.datas[a];s||(s=Object(c["cloneDeep"])(this.dataTemplate),this.datas[a]=s),Object.assign(this.vm.$data,s)}update(t,e){this.leave(t,e),this.enter(t,e)}leave(t,e){const a=e.fullPath;let s=this.datas[a];s||(s=Object(c["cloneDeep"])(this.dataTemplate),this.datas[a]=s),Object.assign(s,this.vm.$data)}}const r="_page_datas_manager";o.get=function(t){return t[r]||(t[r]=new o(t)),t[r]};var d={beforeRouteEnter(t,e,a){a(a=>{o.get(a).enter(t,e)})},beforeRouteUpdate(t,e,a){o.get(this).update(t,e),a()},beforeRouteLeave(t,e,a){o.get(this).leave(t,e),a()}},u={name:"demo-params",mixins:[d],components:{Input:l.a},props:{id:{type:String,required:!0}},data(){return{text:""}}},p=u,h=a("a6c2"),m=Object(h["a"])(p,s,n,!1,null,null,null);e["default"]=m.exports},"3ebf":function(t,e,a){}}]);