webpackJsonp([2],{"1jSI":function(t,e){},"9Uu4":function(t,e){},VvrY:function(t,e){},aKc9:function(t,e){},iRxR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:["value"],data:function(){return{now:{width:this.value+"%"},ifBool:!1}},methods:{slider:function(t){var e=this.$el.scrollWidth,i=(100*((t.clientX-this.$el.offsetLeft)/e)).toFixed();this.now.width=i+"%",this.$emit("input",i)},start:function(){this.ifBool=!0},end:function(){this.ifBool=!1},move:function(t){if(this.ifBool){var e=this.$el.scrollWidth,i=(100*((t.clientX-this.$el.offsetLeft)/e)).toFixed();i<0?i=0:i>100&&(i=100),this.now.width=i+"%",this.$emit("input",i)}}},mounted:function(){window.addEventListener("mouseup",this.end),window.addEventListener("mousemove",this.move)}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider",on:{click:this.slider}},[e("p",{style:this.now},[e("em",{on:{mousedown:this.start}})])])},staticRenderFns:[]};var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"radio-box"},t._l(t.radioList,function(e,n){return i("p",{key:e.index,class:{active:n+1===t.radio},on:{click:function(e){t.checked(n)}}},[n+1===t.radio?i("i",{staticClass:"fa fa-dot-circle-o"}):i("i",{staticClass:"fa fa-circle-o"}),t._v(t._s(e.name)+"\n  ")])}))},staticRenderFns:[]};var o={props:["value"],data:function(){return{showbox:5,col:1,row:1,pwidth:20,nowStyle:{}}},components:{mySlider:i("VU/8")(n,s,!1,function(t){i("aKc9")},"data-v-1ddf37a9",null).exports,radioBox:i("VU/8")({props:["value","list"],data:function(){return{radio:this.value,radioList:this.list}},methods:{checked:function(t){this.radio=t+1,this.$emit("input",this.radio)}}},a,!1,function(t){i("1jSI")},"data-v-3a234a25",null).exports},created:function(){for(var t=this.value,e=this.row-1,i={},n=0;n<t.length;n++){var s=t[n].name,a=t[n].item[e].name;i[s]=a}this.nowStyle=i},methods:{activeNow:function(t,e){var i=this.value,n=t,s=e-1,a=i[n].name,o=i[n].item[s].name;this.nowStyle[a]=o},addLi:function(){this.showbox++},removeLi:function(){this.showbox--}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("div",{staticClass:"style-box"},[i("div",[i("h2",[t._v("子元素宽度")]),t._v(" "),i("div",{staticClass:"box"},[i("p",{staticClass:"name"},[t._v("width:"+t._s(t.pwidth)+"%")]),t._v(" "),i("my-slider",{model:{value:t.pwidth,callback:function(e){t.pwidth=e},expression:"pwidth"}})],1)]),t._v(" "),i("div",[i("h2",[t._v("属性选择")]),t._v(" "),i("div",{staticClass:"box-item"},t._l(t.value,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{on:{click:function(e){t.activeNow(n,t.col)}}},[i("radio-box",{attrs:{list:e.item},model:{value:t.col,callback:function(e){t.col=e},expression:"col"}})],1)])}))]),t._v(" "),i("div",[i("h2",[t._v("展示属性：")]),t._v(" "),i("div",{staticClass:"style-now"},t._l(t.nowStyle,function(e,n){return i("p",{key:n},[i("span",[t._v(t._s(n)+":")]),t._v(t._s(e)+";")])}))])]),t._v(" "),i("div",[i("h2",[t._v("演示")]),t._v(" "),i("div",{staticClass:"show-box"},[i("div",{staticClass:"add",on:{click:t.addLi}},[t._v("添加")]),t._v(" "),i("div",{staticClass:"box",style:t.nowStyle},t._l(t.showbox,function(e,n){return i("div",{key:n,staticClass:"li",style:{width:t.pwidth+"%"}},[i("p",[t._v(t._s(n+1))]),t._v(" "),i("i",{staticClass:"fa fa-close",on:{click:t.removeLi}})])}))])])])},staticRenderFns:[]};var l={components:{flexBox:i("VU/8")(o,d,!1,function(t){i("9Uu4")},"data-v-9f33634a",null).exports},data:function(){return{flexBox:[{name:"flex-direction",item:[{id:1,show:!1,name:"row"},{id:2,show:!1,name:"row-reverse"},{id:3,show:!1,name:"column"},{id:4,show:!1,name:"column-reverse"}]},{name:"flex-wrap",item:[{id:1,show:!1,name:"nowrap"},{id:2,show:!1,name:"wrap"},{id:3,show:!1,name:"wrap-reverse"}]},{name:"justify-content",item:[{id:1,show:!1,name:"flex-start"},{id:2,show:!1,name:"flex-end"},{id:3,show:!1,name:"center"},{id:4,show:!1,name:"space-between"},{id:5,show:!1,name:"space-around"}]},{name:"align-items",item:[{id:1,show:!1,name:"stretch"},{id:2,show:!1,name:"flex-start"},{id:3,show:!1,name:"flex-end"},{id:4,show:!1,name:"center"},{id:5,show:!1,name:"baseline"}]},{name:"align-content",item:[{id:1,show:!1,name:"stretch"},{id:2,show:!1,name:"flex-start"},{id:3,show:!1,name:"flex-end"},{id:4,show:!1,name:"center"},{id:5,show:!1,name:"space-between"},{id:6,show:!1,name:"space-around"}]}]}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("flex-box",{attrs:{value:this.flexBox}})],1)},staticRenderFns:[]};var r=i("VU/8")(l,c,!1,function(t){i("VvrY")},"data-v-662afb0d",null);e.default=r.exports}});