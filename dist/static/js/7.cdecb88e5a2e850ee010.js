webpackJsonp([7],{"G/e5":function(t,e){},mxl3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{imgBox:["http://pbsbjhfvy.bkt.clouddn.com/img-1.jpeg","http://pbsbjhfvy.bkt.clouddn.com/img-2.jpeg","http://pbsbjhfvy.bkt.clouddn.com/img-3.jpeg","http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg","http://pbsbjhfvy.bkt.clouddn.com/img-5.jpeg"]}},methods:{dragStart:function(t){t.dataTransfer.setData("text/plain",t.target.id),console.log("开始拖动 p 元素")},drop:function(t){t.preventDefault();var e=t.dataTransfer.getData("text/plain");t.target.appendChild(document.getElementById(e))},dragEnd:function(t){console.log("完成 p 元素的拖动")},dragOver:function(t){t.preventDefault()}},mounted:function(){document.addEventListener("dragstart",this.dragStart),document.addEventListener("drop",this.drop),document.addEventListener("dragend",this.dragEnd),document.addEventListener("dragover",this.dragOver)}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"move"},[e("div",{staticClass:"img-box"},this._l(this.imgBox,function(t,n){return e("li",{key:n},[e("img",{attrs:{src:t,alt:"",id:n,draggable:"true"}})])})),this._v(" "),e("div",{staticClass:"box"})])},staticRenderFns:[]};var r={components:{move:n("VU/8")(a,d,!1,function(t){n("G/e5")},"data-v-36192426",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("move")],1)},staticRenderFns:[]};var o=n("VU/8")(r,i,!1,function(t){n("qps7")},"data-v-5d0275a0",null);e.default=o.exports},qps7:function(t,e){}});