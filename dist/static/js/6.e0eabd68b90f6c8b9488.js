webpackJsonp([6],{"YoE+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"word-count"},[e("div",{staticClass:"count-box"},[e("div",{staticClass:"text"},[e("p",{staticClass:"name"},[t._v("文字输入：")]),t._v(" "),e("div",{staticClass:"textarea"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.wordCount.text,expression:"wordCount.text"}],domProps:{value:t.wordCount.text},on:{input:function(n){n.target.composing||t.$set(t.wordCount,"text",n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"text"},[e("p",{staticClass:"name"},[t._v("字数统计：")]),t._v(" "),e("div",{staticClass:"show-count"},[e("ul",[e("li",[e("p",[e("span",[t._v("中文:")]),e("span",{staticClass:"red"},[t._v(t._s(t.wordCount.cT))])]),t._v(" "),e("p",[e("span",[t._v("英文:")]),e("span",{staticClass:"red"},[t._v(t._s(t.wordCount.eT))])]),t._v(" "),e("p",[e("span",[t._v("数字:")]),e("span",{staticClass:"red"},[t._v(t._s(t.wordCount.nT))])])]),t._v(" "),e("li",[t._v("字符总数：共记"),e("span",{staticClass:"red"},[t._v(t._s(t.wordCount.allT))]),t._v("个字符 (汉字算两个字符，数字、空格、英文字母算做一个字符)")])])])])])])},staticRenderFns:[]};var s={components:{wordCount:e("VU/8")({data:function(){return{wordCount:{text:"",cT:0,eT:0,nT:0,allT:0}}},watch:{"wordCount.text":"changeText"},methods:{changeText:function(t){for(var n=0,e=0,a=0,s=0;s<t.length;s++){var o=t.charAt(s);o.match(/[0-9]/)&&a++,o.match(/[\u4e00-\u9fa5]/)&&n++,o.match(/[^\x00-\xff]/)||e++}this.wordCount.allT=t.replace(/[\u0391-\uFFE5]/g,"aa").length,this.wordCount.cT=n,this.wordCount.eT=e,this.wordCount.nT=a}}},a,!1,function(t){e("yqXO")},"data-v-0226c075",null).exports}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("word-count")],1)},staticRenderFns:[]};var r=e("VU/8")(s,o,!1,function(t){e("nSDv")},null,null);n.default=r.exports},nSDv:function(t,n){},yqXO:function(t,n){}});