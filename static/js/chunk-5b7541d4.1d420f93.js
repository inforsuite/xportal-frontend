(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b7541d4"],{"03b1":function(e,t,a){e.exports=a.p+"static/img/login-code.10fef840.png"},2709:function(e,t,a){"use strict";var i=a("312e"),s=a.n(i);s.a},"312e":function(e,t,a){},"9ef4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-page"},[i("div",{staticClass:"layer bg",attrs:{id:"login"}}),i("div",{staticClass:"layer flex-center"},[e._m(0),i("div",{staticClass:"form-group"},[i("Card",[i("Form",{ref:"loginForm",attrs:{"label-position":"top",rules:e.rules,model:e.formLogin,size:"default"}},[i("FormItem",{attrs:{prop:"username"}},[i("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.formLogin.username,callback:function(t){e.$set(e.formLogin,"username",t)},expression:"formLogin.username"}},[i("i",{staticClass:"fa fa-user-circle-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),i("FormItem",{attrs:{prop:"password"}},[i("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}},[i("i",{staticClass:"fa fa-keyboard-o",attrs:{slot:"prepend"},slot:"prepend"})])],1),e.requiredInputCode?i("FormItem",{attrs:{prop:"code"}},[i("Input",{attrs:{type:"text",placeholder:"- - - -"},model:{value:e.formLogin.code,callback:function(t){e.$set(e.formLogin,"code",t)},expression:"formLogin.code"}},[i("template",{slot:"prepend"},[e._v("验证码")]),i("template",{slot:"append"},[i("img",{staticClass:"login-code",attrs:{src:a("03b1")}})])],2)],1):e._e(),i("Button",{staticClass:"button-login",attrs:{size:"default",type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)],1),i("Button",{staticClass:"button-help",attrs:{size:"default",type:"info"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" 快速选择用户（测试功能） ")])],1),i("Dialog",{attrs:{title:"快速选择用户",visible:e.dialogVisible,width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("Row",{staticStyle:{margin:"-20px 0px -10px 0px"},attrs:{gutter:10}},e._l(e.users,(function(t,a){return i("Col",{key:a,attrs:{span:8}},[i("div",{staticClass:"user-btn",on:{click:function(a){return e.handleUserBtnClick(t)}}},[i("d2-icon",{attrs:{name:"user-circle-o"}}),i("span",[e._v(e._s(t.name))])],1)])})),1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo-group"},[a("h2",[e._v("请登录")])])}],n=(a("cbcf"),a("2e1a")),r=(a("279c"),a("97a2"),a("9f91")),o=a.n(r),c=(a("f635"),a("b885")),l=a.n(c),v=(a("e3a4"),a("7607")),p=a.n(v),d=(a("2bd2"),a("cb54")),m=a.n(d),u=(a("3ebf"),a("f254")),b=a.n(u),y=(a("fbef"),a("c852")),f=a.n(y),h=(a("eb27"),a("4c8a")),g=a.n(h),_=(a("f574"),a("b0bb")),w=a.n(_),x={particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},k=a("94ea");a("abb1");var z={components:{Card:w.a,Form:g.a,FormItem:f.a,Input:b.a,Button:m.a,Dialog:p.a,Row:l.a,Col:o.a},data(){return{dialogVisible:!1,requiredInputCode:!1,users:[{name:"管理员",username:"admin",password:"admin"},{name:"编辑",username:"editor",password:"editor"},{name:"用户1",username:"user1",password:"user1"}],formLogin:{username:"admin",password:"admin",code:"v9am"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted(){window.particlesJS("login",x)},beforeDestroy(){if(window["pJSDom"]&&window["pJSDom"].length){let e=window["pJSDom"].length;for(let t=0;t<e;t++)window["pJSDom"][t].pJS.fn.vendors.destroypJS();window["pJSDom"]=[]}},methods:Object(n["a"])({},Object(k["c"])("d2admin/account",["login"]),{handleUserBtnClick(e){this.formLogin.username=e.username,this.formLogin.password=e.password,this.submit()},submit(){this.$refs.loginForm.validate(e=>{e?this.login({instance:this,username:this.formLogin.username,password:this.formLogin.password}).then(()=>{this.$router.replace(this.$route.query.redirect||"/")}):this.$message.error("表单校验失败")})}})},M=z,F=(a("2709"),a("a6c2")),A=Object(F["a"])(M,i,s,!1,null,null,null),q=A.exports;t["default"]=q},abb1:function(e,t){var a=function(e,t){var a=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:a,w:a.offsetWidth,h:a.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var r=this.pJS;t&&Object.deepExtend(r,t),r.tmp.obj={size_value:r.particles.size.value,size_anim_speed:r.particles.size.anim.speed,move_speed:r.particles.move.speed,line_linked_distance:r.particles.line_linked.distance,line_linked_width:r.particles.line_linked.width,mode_grab_distance:r.interactivity.modes.grab.distance,mode_bubble_distance:r.interactivity.modes.bubble.distance,mode_bubble_size:r.interactivity.modes.bubble.size,mode_repulse_distance:r.interactivity.modes.repulse.distance},r.fn.retinaInit=function(){r.retina_detect&&window.devicePixelRatio>1?(r.canvas.pxratio=window.devicePixelRatio,r.tmp.retina=!0):(r.canvas.pxratio=1,r.tmp.retina=!1),r.canvas.w=r.canvas.el.offsetWidth*r.canvas.pxratio,r.canvas.h=r.canvas.el.offsetHeight*r.canvas.pxratio,r.particles.size.value=r.tmp.obj.size_value*r.canvas.pxratio,r.particles.size.anim.speed=r.tmp.obj.size_anim_speed*r.canvas.pxratio,r.particles.move.speed=r.tmp.obj.move_speed*r.canvas.pxratio,r.particles.line_linked.distance=r.tmp.obj.line_linked_distance*r.canvas.pxratio,r.interactivity.modes.grab.distance=r.tmp.obj.mode_grab_distance*r.canvas.pxratio,r.interactivity.modes.bubble.distance=r.tmp.obj.mode_bubble_distance*r.canvas.pxratio,r.particles.line_linked.width=r.tmp.obj.line_linked_width*r.canvas.pxratio,r.interactivity.modes.bubble.size=r.tmp.obj.mode_bubble_size*r.canvas.pxratio,r.interactivity.modes.repulse.distance=r.tmp.obj.mode_repulse_distance*r.canvas.pxratio},r.fn.canvasInit=function(){r.canvas.ctx=r.canvas.el.getContext("2d")},r.fn.canvasSize=function(){r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r&&r.interactivity.events.resize&&window.addEventListener("resize",(function(){r.canvas.w=r.canvas.el.offsetWidth,r.canvas.h=r.canvas.el.offsetHeight,r.tmp.retina&&(r.canvas.w*=r.canvas.pxratio,r.canvas.h*=r.canvas.pxratio),r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r.particles.move.enable||(r.fn.particlesEmpty(),r.fn.particlesCreate(),r.fn.particlesDraw(),r.fn.vendors.densityAutoParticles()),r.fn.vendors.densityAutoParticles()}))},r.fn.canvasPaint=function(){r.canvas.ctx.fillRect(0,0,r.canvas.w,r.canvas.h)},r.fn.canvasClear=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h)},r.fn.particle=function(e,t,a){if(this.radius=(r.particles.size.random?Math.random():1)*r.particles.size.value,r.particles.size.anim.enable&&(this.size_status=!1,this.vs=r.particles.size.anim.speed/100,r.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=a?a.x:Math.random()*r.canvas.w,this.y=a?a.y:Math.random()*r.canvas.h,this.x>r.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>r.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),r.particles.move.bounce&&r.fn.vendors.checkOverlap(this,a),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*r.particles.color.value.length)];this.color.rgb=i(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=i(this.color.value));this.opacity=(r.particles.opacity.random?Math.random():1)*r.particles.opacity.value,r.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=r.particles.opacity.anim.speed/100,r.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(r.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0};break}r.particles.move.straight?(this.vx=n.x,this.vy=n.y,r.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var o=r.particles.shape.type;if("object"==typeof o){if(o instanceof Array){var c=o[Math.floor(Math.random()*o.length)];this.shape=c}}else this.shape=o;if("image"==this.shape){var l=r.particles.shape;this.img={src:l.image.src,ratio:l.image.width/l.image.height},this.img.ratio||(this.img.ratio=1),"svg"==r.tmp.img_type&&void 0!=r.tmp.source_svg&&(r.fn.vendors.createSvgImg(this),r.tmp.pushing&&(this.img.loaded=!1))}},r.fn.particle.prototype.draw=function(){var e=this;if(void 0!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(void 0!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(r.canvas.ctx.fillStyle=i,r.canvas.ctx.beginPath(),e.shape){case"circle":r.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":r.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t/(r.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,1);break;case"star":r.fn.vendors.drawShape(r.canvas.ctx,e.x-2*t/(r.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,2);break;case"image":function s(){r.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}if("svg"==r.tmp.img_type)var n=e.img.obj;else n=r.tmp.img_obj;n&&s();break}r.canvas.ctx.closePath(),r.particles.shape.stroke.width>0&&(r.canvas.ctx.strokeStyle=r.particles.shape.stroke.color,r.canvas.ctx.lineWidth=r.particles.shape.stroke.width,r.canvas.ctx.stroke()),r.canvas.ctx.fill()},r.fn.particlesCreate=function(){for(var e=0;e<r.particles.number.value;e++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value))},r.fn.particlesUpdate=function(){for(var e=0;e<r.particles.array.length;e++){var t=r.particles.array[e];if(r.particles.move.enable){var a=r.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(r.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=r.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=r.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),r.particles.size.anim.enable&&(1==t.size_status?(t.radius>=r.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=r.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==r.particles.move.out_mode)var i={x_left:t.radius,x_right:r.canvas.w,y_top:t.radius,y_bottom:r.canvas.h};else i={x_left:-t.radius,x_right:r.canvas.w+t.radius,y_top:-t.radius,y_bottom:r.canvas.h+t.radius};switch(t.x-t.radius>r.canvas.w?(t.x=i.x_left,t.y=Math.random()*r.canvas.h):t.x+t.radius<0&&(t.x=i.x_right,t.y=Math.random()*r.canvas.h),t.y-t.radius>r.canvas.h?(t.y=i.y_top,t.x=Math.random()*r.canvas.w):t.y+t.radius<0&&(t.y=i.y_bottom,t.x=Math.random()*r.canvas.w),r.particles.move.out_mode){case"bounce":(t.x+t.radius>r.canvas.w||t.x-t.radius<0)&&(t.vx=-t.vx),(t.y+t.radius>r.canvas.h||t.y-t.radius<0)&&(t.vy=-t.vy);break}if(n("grab",r.interactivity.events.onhover.mode)&&r.fn.modes.grabParticle(t),(n("bubble",r.interactivity.events.onhover.mode)||n("bubble",r.interactivity.events.onclick.mode))&&r.fn.modes.bubbleParticle(t),(n("repulse",r.interactivity.events.onhover.mode)||n("repulse",r.interactivity.events.onclick.mode))&&r.fn.modes.repulseParticle(t),r.particles.line_linked.enable||r.particles.move.attract.enable)for(var s=e+1;s<r.particles.array.length;s++){var o=r.particles.array[s];r.particles.line_linked.enable&&r.fn.interact.linkParticles(t,o),r.particles.move.attract.enable&&r.fn.interact.attractParticles(t,o),r.particles.move.bounce&&r.fn.interact.bounceParticles(t,o)}}},r.fn.particlesDraw=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h),r.fn.particlesUpdate();for(var e=0;e<r.particles.array.length;e++){var t=r.particles.array[e];t.draw()}},r.fn.particlesEmpty=function(){r.particles.array=[]},r.fn.particlesRefresh=function(){cancelRequestAnimFrame(r.fn.checkAnimFrame),cancelRequestAnimFrame(r.fn.drawAnimFrame),r.tmp.source_svg=void 0,r.tmp.img_obj=void 0,r.tmp.count_svg=0,r.fn.particlesEmpty(),r.fn.canvasClear(),r.fn.vendors.start()},r.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,s=Math.sqrt(a*a+i*i);if(s<=r.particles.line_linked.distance){var n=r.particles.line_linked.opacity-s/(1/r.particles.line_linked.opacity)/r.particles.line_linked.distance;if(n>0){var o=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+n+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(t.x,t.y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}},r.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,s=Math.sqrt(a*a+i*i);if(s<=r.particles.line_linked.distance){var n=a/(1e3*r.particles.move.attract.rotateX),o=i/(1e3*r.particles.move.attract.rotateY);e.vx-=n,e.vy-=o,t.vx+=n,t.vy+=o}},r.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,s=Math.sqrt(a*a+i*i),n=e.radius+t.radius;s<=n&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},r.fn.modes.pushParticles=function(e,t){r.tmp.pushing=!0;for(var a=0;a<e;a++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value,{x:t?t.pos_x:Math.random()*r.canvas.w,y:t?t.pos_y:Math.random()*r.canvas.h})),a==e-1&&(r.particles.move.enable||r.fn.particlesDraw(),r.tmp.pushing=!1)},r.fn.modes.removeParticles=function(e){r.particles.array.splice(0,e),r.particles.move.enable||r.fn.particlesDraw()},r.fn.modes.bubbleParticle=function(e){if(r.interactivity.events.onhover.enable&&n("bubble",r.interactivity.events.onhover.mode)){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a),s=1-i/r.interactivity.modes.bubble.distance;function o(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}if(i<=r.interactivity.modes.bubble.distance){if(s>=0&&"mousemove"==r.interactivity.status){if(r.interactivity.modes.bubble.size!=r.particles.size.value)if(r.interactivity.modes.bubble.size>r.particles.size.value){var c=e.radius+r.interactivity.modes.bubble.size*s;c>=0&&(e.radius_bubble=c)}else{var l=e.radius-r.interactivity.modes.bubble.size;c=e.radius-l*s;e.radius_bubble=c>0?c:0}if(r.interactivity.modes.bubble.opacity!=r.particles.opacity.value)if(r.interactivity.modes.bubble.opacity>r.particles.opacity.value){var v=r.interactivity.modes.bubble.opacity*s;v>e.opacity&&v<=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{v=e.opacity-(r.particles.opacity.value-r.interactivity.modes.bubble.opacity)*s;v<e.opacity&&v>=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else o();"mouseleave"==r.interactivity.status&&o()}else if(r.interactivity.events.onclick.enable&&n("bubble",r.interactivity.events.onclick.mode)){if(r.tmp.bubble_clicking){t=e.x-r.interactivity.mouse.click_pos_x,a=e.y-r.interactivity.mouse.click_pos_y,i=Math.sqrt(t*t+a*a);var p=((new Date).getTime()-r.interactivity.mouse.click_time)/1e3;p>r.interactivity.modes.bubble.duration&&(r.tmp.bubble_duration_end=!0),p>2*r.interactivity.modes.bubble.duration&&(r.tmp.bubble_clicking=!1,r.tmp.bubble_duration_end=!1)}function d(t,a,s,n,o){if(t!=a)if(r.tmp.bubble_duration_end){if(void 0!=s){var c=n-p*(n-t)/r.interactivity.modes.bubble.duration,l=t-c;d=t+l,"size"==o&&(e.radius_bubble=d),"opacity"==o&&(e.opacity_bubble=d)}}else if(i<=r.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else v=n;if(v!=t){var d=n-p*(n-t)/r.interactivity.modes.bubble.duration;"size"==o&&(e.radius_bubble=d),"opacity"==o&&(e.opacity_bubble=d)}}else"size"==o&&(e.radius_bubble=void 0),"opacity"==o&&(e.opacity_bubble=void 0)}r.tmp.bubble_clicking&&(d(r.interactivity.modes.bubble.size,r.particles.size.value,e.radius_bubble,e.radius,"size"),d(r.interactivity.modes.bubble.opacity,r.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},r.fn.modes.repulseParticle=function(e){if(r.interactivity.events.onhover.enable&&n("repulse",r.interactivity.events.onhover.mode)&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a),o={x:t/i,y:a/i},c=r.interactivity.modes.repulse.distance,l=100,v=s(1/c*(-1*Math.pow(i/c,2)+1)*c*l,0,50),p={x:e.x+o.x*v,y:e.y+o.y*v};"bounce"==r.particles.move.out_mode?(p.x-e.radius>0&&p.x+e.radius<r.canvas.w&&(e.x=p.x),p.y-e.radius>0&&p.y+e.radius<r.canvas.h&&(e.y=p.y)):(e.x=p.x,e.y=p.y)}else if(r.interactivity.events.onclick.enable&&n("repulse",r.interactivity.events.onclick.mode))if(r.tmp.repulse_finish||(r.tmp.repulse_count++,r.tmp.repulse_count==r.particles.array.length&&(r.tmp.repulse_finish=!0)),r.tmp.repulse_clicking){c=Math.pow(r.interactivity.modes.repulse.distance/6,3);var d=r.interactivity.mouse.click_pos_x-e.x,m=r.interactivity.mouse.click_pos_y-e.y,u=d*d+m*m,b=-c/u*1;function y(){var t=Math.atan2(m,d);if(e.vx=b*Math.cos(t),e.vy=b*Math.sin(t),"bounce"==r.particles.move.out_mode){var a={x:e.x+e.vx,y:e.y+e.vy};(a.x+e.radius>r.canvas.w||a.x-e.radius<0)&&(e.vx=-e.vx),(a.y+e.radius>r.canvas.h||a.y-e.radius<0)&&(e.vy=-e.vy)}}u<=c&&y()}else 0==r.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},r.fn.modes.grabParticle=function(e){if(r.interactivity.events.onhover.enable&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=r.interactivity.modes.grab.distance){var s=r.interactivity.modes.grab.line_linked.opacity-i/(1/r.interactivity.modes.grab.line_linked.opacity)/r.interactivity.modes.grab.distance;if(s>0){var n=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+n.r+","+n.g+","+n.b+","+s+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x,r.interactivity.mouse.pos_y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}}},r.fn.vendors.eventsListeners=function(){"window"==r.interactivity.detect_on?r.interactivity.el=window:r.interactivity.el=r.canvas.el,(r.interactivity.events.onhover.enable||r.interactivity.events.onclick.enable)&&(r.interactivity.el.addEventListener("mousemove",(function(e){if(r.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;r.interactivity.mouse.pos_x=t,r.interactivity.mouse.pos_y=a,r.tmp.retina&&(r.interactivity.mouse.pos_x*=r.canvas.pxratio,r.interactivity.mouse.pos_y*=r.canvas.pxratio),r.interactivity.status="mousemove"})),r.interactivity.el.addEventListener("mouseleave",(function(e){r.interactivity.mouse.pos_x=null,r.interactivity.mouse.pos_y=null,r.interactivity.status="mouseleave"}))),r.interactivity.events.onclick.enable&&r.interactivity.el.addEventListener("click",(function(){if(r.interactivity.mouse.click_pos_x=r.interactivity.mouse.pos_x,r.interactivity.mouse.click_pos_y=r.interactivity.mouse.pos_y,r.interactivity.mouse.click_time=(new Date).getTime(),r.interactivity.events.onclick.enable)switch(r.interactivity.events.onclick.mode){case"push":r.particles.move.enable||1==r.interactivity.modes.push.particles_nb?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):r.interactivity.modes.push.particles_nb>1&&r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);break;case"remove":r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);break;case"bubble":r.tmp.bubble_clicking=!0;break;case"repulse":r.tmp.repulse_clicking=!0,r.tmp.repulse_count=0,r.tmp.repulse_finish=!1,setTimeout((function(){r.tmp.repulse_clicking=!1}),1e3*r.interactivity.modes.repulse.duration);break}}))},r.fn.vendors.densityAutoParticles=function(){if(r.particles.number.density.enable){var e=r.canvas.el.width*r.canvas.el.height/1e3;r.tmp.retina&&(e/=2*r.canvas.pxratio);var t=e*r.particles.number.value/r.particles.number.density.value_area,a=r.particles.array.length-t;a<0?r.fn.modes.pushParticles(Math.abs(a)):r.fn.modes.removeParticles(a)}},r.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<r.particles.array.length;a++){var i=r.particles.array[a],s=e.x-i.x,n=e.y-i.y,o=Math.sqrt(s*s+n*n);o<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*r.canvas.w,e.y=t?t.y:Math.random()*r.canvas.h,r.fn.vendors.checkOverlap(e))}},r.fn.vendors.createSvgImg=function(e){var t=r.tmp.source_svg,a=/#([0-9A-F]{3,6})/gi,i=t.replace(a,(function(t,a,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n})),s=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),n=window.URL||window.webkitURL||window,o=n.createObjectURL(s),c=new Image;c.addEventListener("load",(function(){e.img.obj=c,e.img.loaded=!0,n.revokeObjectURL(o),r.tmp.count_svg++})),c.src=o},r.fn.vendors.destroypJS=function(){cancelAnimationFrame(r.fn.drawAnimFrame),a.remove(),pJSDom=null},r.fn.vendors.drawShape=function(e,t,a,i,s,n){var r=s*n,o=s/n,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var v=0;v<r;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},r.fn.vendors.exportImg=function(){window.open(r.canvas.el.toDataURL("image/png"),"_blank")},r.fn.vendors.loadImg=function(e){if(r.tmp.img_error=void 0,""!=r.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",r.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(r.tmp.source_svg=e.currentTarget.response,r.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),r.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",(function(){r.tmp.img_obj=a,r.fn.vendors.checkBeforeDraw()})),a.src=r.particles.shape.image.src}else console.log("Error pJS - No image.src"),r.tmp.img_error=!0},r.fn.vendors.draw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type?r.tmp.count_svg>=r.particles.number.value?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):void 0!=r.tmp.img_obj?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame))},r.fn.vendors.checkBeforeDraw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type&&void 0==r.tmp.source_svg?r.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(r.tmp.checkAnimFrame),r.tmp.img_error||(r.fn.vendors.init(),r.fn.vendors.draw())):(r.fn.vendors.init(),r.fn.vendors.draw())},r.fn.vendors.init=function(){r.fn.retinaInit(),r.fn.canvasInit(),r.fn.canvasSize(),r.fn.canvasPaint(),r.fn.particlesCreate(),r.fn.vendors.densityAutoParticles(),r.particles.line_linked.color_rgb_line=i(r.particles.line_linked.color)},r.fn.vendors.start=function(){n("image",r.particles.shape.type)?(r.tmp.img_type=r.particles.shape.image.src.substr(r.particles.shape.image.src.length-3),r.fn.vendors.loadImg(r.tmp.img_type)):r.fn.vendors.checkBeforeDraw()},r.fn.vendors.eventsListeners(),r.fn.vendors.start()};function i(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(function(e,t,a,i){return t+t+a+a+i+i}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function s(e,t,a){return Math.min(Math.max(e,t),a)}function n(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var i=document.getElementById(e),s="particles-js-canvas-el",n=i.getElementsByClassName(s);if(n.length)while(n.length>0)i.removeChild(n[0]);var r=document.createElement("canvas");r.className=s,r.style.width="100%",r.style.height="100%";var o=document.getElementById(e).appendChild(r);null!=o&&pJSDom.push(new a(e,t))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var s=JSON.parse(t.currentTarget.response);window.particlesJS(e,s),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()}}}]);