webpackJsonp([4],{"97dO":function(e,t){},CBRJ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={props:["value"],data:function(){return{now:{width:this.value+"%"},ifBool:!1}},methods:{slider:function(e){var t=this.$el.scrollWidth,i=(100*((e.clientX-this.$el.offsetLeft)/t)).toFixed();this.now.width=i+"%",this.$emit("input",i)},start:function(){this.ifBool=!0},end:function(){this.ifBool=!1},move:function(e){if(this.ifBool){var t=this.$el.scrollWidth,i=(100*((e.clientX-this.$el.offsetLeft)/t)).toFixed();i<0?i=0:i>100&&(i=100),this.now.width=i+"%",this.$emit("input",i)}}},mounted:function(){window.addEventListener("mouseup",this.end),window.addEventListener("mousemove",this.move)}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"slider",on:{click:this.slider}},[t("p",{style:this.now},[t("em",{on:{mousedown:this.start}})])])},staticRenderFns:[]};var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"radio-box"},e._l(e.radioList,function(t,s){return i("p",{key:t.index,class:{active:s+1===e.radio},on:{click:function(t){e.checked(s)}}},[s+1===e.radio?i("i",{staticClass:"fa fa-dot-circle-o"}):i("i",{staticClass:"fa fa-circle-o"}),e._v(e._s(t.name)+"\n  ")])}))},staticRenderFns:[]};var o={data:function(){return{showbox:5,col:1,row:1,pwidth:20,nowStyle:{},flexBox:[{name:"display",item:[{id:1,show:!1,name:"flex"}]},{name:"flex-wrap",item:[{id:1,show:!1,name:"nowrap"},{id:2,show:!1,name:"wrap"},{id:3,show:!1,name:"wrap-reverse"}]},{name:"flex-direction",item:[{id:1,show:!1,name:"row"},{id:2,show:!1,name:"row-reverse"},{id:3,show:!1,name:"column"},{id:4,show:!1,name:"column-reverse"}]},{name:"justify-content",item:[{id:1,show:!1,name:"flex-start"},{id:2,show:!1,name:"flex-end"},{id:3,show:!1,name:"center"},{id:4,show:!1,name:"space-between"},{id:5,show:!1,name:"space-around"}]},{name:"align-items",item:[{id:1,show:!1,name:"stretch"},{id:2,show:!1,name:"flex-start"},{id:3,show:!1,name:"flex-end"},{id:4,show:!1,name:"center"},{id:5,show:!1,name:"baseline"}]},{name:"align-content",item:[{id:1,show:!1,name:"stretch"},{id:2,show:!1,name:"flex-start"},{id:3,show:!1,name:"flex-end"},{id:4,show:!1,name:"center"},{id:5,show:!1,name:"space-between"},{id:6,show:!1,name:"space-around"}]}]}},components:{mySlider:i("VU/8")(s,n,!1,function(e){i("aKc9")},"data-v-1ddf37a9",null).exports,radioBox:i("VU/8")({props:["value","list"],data:function(){return{radio:this.value,radioList:this.list}},methods:{checked:function(e){this.radio=e+1,this.$emit("input",this.radio)}}},a,!1,function(e){i("JRgg")},"data-v-35fc8c23",null).exports},created:function(){for(var e=this.flexBox,t=this.row-1,i={},s=0;s<e.length;s++){var n=e[s].name,a=e[s].item[t].name;i[n]=a}this.nowStyle=i},methods:{activeNow:function(e,t){var i=this.flexBox,s=e,n=t-1,a=i[s].name,o=i[s].item[n].name;this.nowStyle[a]=o},addLi:function(){this.showbox++},removeLi:function(){this.showbox--}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex"},[i("ul",[i("li",[i("div",{staticClass:"headline"},[e._v("子元素宽度"),i("p",{staticClass:"title"},[e._v("width:"+e._s(e.pwidth)+"%")])]),e._v(" "),i("div",{staticClass:"box-item"},[i("my-slider",{model:{value:e.pwidth,callback:function(t){e.pwidth=t},expression:"pwidth"}})],1)]),e._v(" "),i("li",[i("h2",[e._v("属性选择")]),e._v(" "),i("div",{staticClass:"box-item"},e._l(e.flexBox,function(t,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"title"},[e._v(e._s(t.name))]),e._v(" "),i("div",{on:{click:function(t){e.activeNow(s,e.col)}}},[i("radio-box",{attrs:{list:t.item},model:{value:e.col,callback:function(t){e.col=t},expression:"col"}})],1)])}))]),e._v(" "),i("li",[i("div",{staticClass:"headline"},[e._v("演示"),i("div",{staticClass:"add",on:{click:e.addLi}},[i("i",{staticClass:"fa fa-plus"}),e._v("添加")])]),e._v(" "),i("div",{staticClass:"show-box"},[i("div",{staticClass:"box",style:e.nowStyle},e._l(e.showbox,function(t,s){return i("div",{key:s,staticClass:"li",style:{width:e.pwidth+"%"}},[i("p",[e._v(e._s(s+1))]),e._v(" "),i("i",{staticClass:"fa fa-close",on:{click:e.removeLi}})])}))])]),e._v(" "),i("li",[i("div",{staticClass:"headline"},[e._v("展示属性：")]),e._v(" "),i("div",{staticClass:"style-now"},e._l(e.nowStyle,function(t,s){return i("p",{key:s},[i("span",[e._v(e._s(s)+":")]),e._v(e._s(t)+";")])}))])])])},staticRenderFns:[]};var d={components:{flexBox:i("VU/8")(o,l,!1,function(e){i("vhbg")},"data-v-03804b14",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("flex-box")],1)},staticRenderFns:[]};var r=i("VU/8")(d,c,!1,function(e){i("97dO")},"data-v-34f18b24",null);t.default=r.exports},JRgg:function(e,t){},aKc9:function(e,t){},vhbg:function(e,t){}});