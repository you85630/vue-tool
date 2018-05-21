<template>
  <div class="html-string">
    <textarea v-model="holder"></textarea>
    <button @click="toString">转换</button>
    <div class="box">
      <textarea v-model="now"></textarea>
      <p class="copy">copy</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holder:
        '<p>请在输入框内贴入你需要转换的HTML代码</p>\n<p>HTML转换工具，可以将HTML代码转换为JavaScript字符串</p>\n<p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p>',
      now: ''
    }
  },
  methods: {
    toString () {
      let nowText = this.holder.split('\n')
      nowText.unshift("'")
      nowText.push("'")
      nowText = nowText.toString()
      nowText = nowText.replace(/,/g, '/\n')
      this.now = nowText
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
    padding: 10px 20px;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 16px;
  }
}
</style>
