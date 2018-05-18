<template>
  <div class="html-string">
    <textarea v-model="holder"></textarea>
    <button>转换</button>
    <textarea v-model="now"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holder: '<p>请在输入框内贴入你需要转换的HTML代码</p>',
      now: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.html-string {
  textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    height: 100px;
  }
  button {
    margin: 20px 0;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>
