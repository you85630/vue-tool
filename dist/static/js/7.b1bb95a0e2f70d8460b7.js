webpackJsonp([7],{"0+2c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show-office"},[a("div",{staticClass:"title"},[t._v("地址")]),t._v(" "),a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入url地址,内容不可为函中文"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),a("button",{on:{click:t.showOffice}},[t._v("展示")])]),t._v(" "),a("div",{staticClass:"title"},[t._v("展示")]),t._v(" "),a("div",{staticClass:"show"},[a("iframe",{attrs:{src:t.urlData,width:"100%",height:"100%"}}),t._v(" "),a("div",{staticClass:"icon-hide"})])])},staticRenderFns:[]};var i={components:{showOffice:a("VU/8")({data:function(){return{value:"http://palsdm00e.bkt.clouddn.com/111.docx",urlData:""}},methods:{showOffice:function(){var t=this.value;this.urlData="https://view.officeapps.live.com/op/embed.aspx?src="+t}}},s,!1,function(t){a("dXtS")},"data-v-bd8d35ca",null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("show-office")],1)},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(t){a("NDSG")},"data-v-2cad4d93",null);e.default=c.exports},NDSG:function(t,e){},dXtS:function(t,e){}});