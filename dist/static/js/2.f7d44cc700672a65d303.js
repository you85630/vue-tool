webpackJsonp([2],{Ocf5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{holder:"<p>请在输入框内贴入你需要转换的HTML代码</p>\n<p>HTML转换工具，可以将HTML代码转换为JavaScript字符串</p>\n<p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p>",now:"",copyText:"复制"}},methods:{toString:function(){if(""!==this.holder){var t=this.holder.split("\n");t.unshift("'"),t.push("'"),t=(t=t.toString()).replace(/,/g,"/\n"),this.now=t,this.copyText="复制"}},copy:function(t){this.copyText="已复制",this.now="";var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.style.display="none"},removeText:function(){this.holder="",this.now="",this.copyText="复制"}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-string"},[n("div",{staticClass:"box"},[n("input",{staticClass:"copy",attrs:{type:"button",value:"清空"},on:{click:t.removeText}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.holder,expression:"holder"}],domProps:{value:t.holder},on:{input:function(e){e.target.composing||(t.holder=e.target.value)}}})]),t._v(" "),n("button",{on:{click:t.toString}},[t._v("转换")]),t._v(" "),n("div",{staticClass:"box"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.now,expression:"now"}],domProps:{value:t.now},on:{input:function(e){e.target.composing||(t.now=e.target.value)}}}),t._v(" "),n("input",{staticClass:"copy",attrs:{type:"button",value:t.copyText},on:{click:function(e){t.copy(t.now)}}})])])},staticRenderFns:[]};var a={components:{htmlString:n("VU/8")(o,i,!1,function(t){n("Zw9u")},"data-v-7b20dad8",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("html-string")],1)},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(t){n("f+ZB")},null,null);e.default=s.exports},Zw9u:function(t,e){},"f+ZB":function(t,e){}});