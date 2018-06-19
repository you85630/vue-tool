<template>
  <div class="html-string">
   <div class="box">
     <input type="button" class="copy" value="清空" @click="removeText">
     <textarea v-model="holder"></textarea>
    </div>
    <button @click="toString"><i class="fa fa-refresh"></i>转换</button>
    <div class="box">
      <textarea v-model="now"></textarea>
      <input type="button" class="copy" :value="copyText" @click="copy(now)">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holder:
        '<p>请在输入框内贴入你需要转换的HTML代码</p>\n<p>HTML转换工具，可以将HTML代码转换为JavaScript字符串</p>\n<p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p>',
      now: '',
      copyText: '复制'
    }
  },
  methods: {
    toString () {
      if (this.holder !== '') {
        let nowText = this.holder.split('\n')

        nowText.unshift("'")
        nowText.push("'")
        nowText = nowText.toString()
        nowText = nowText.replace(/,/g, '/\n')
        this.now = nowText
        this.copyText = '复制'
      }
    },
    copy (e) {
      this.copyText = '已复制'
      this.now = ''

      var Otext = document.createElement('textarea')
      Otext.value = e
      document.body.appendChild(Otext)
      Otext.select()
      document.execCommand('Copy')
      Otext.style.display = 'none'
    },
    removeText () {
      this.holder = ''
      this.now = ''
      this.copyText = '复制'
    }
  }
}
</script>

<style lang="scss" scoped>
.html-string {
  textarea {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 200px;
    line-height: 1.4;
  }
  button {
    margin: 20px 0;
    padding: 6px 20px;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    .fa{
      margin-right: 10px;
    }
  }
  .box {
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid #000;
    textarea {
      box-sizing: border-box;
      padding: 10px;
      width: 90%;
      height: 200px;
      border: none;
      font-size: 14px;
      line-height: 1.4;
    }
    .copy {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 20px;
      border: none;
      background-color: rgba(0, 0, 0, 0.75);
      color: #fff;
      font-size: 14px;
      cursor: pointer;

      user-select: none;
    }
  }
}
</style>
