<template>
  <div class="show-office">
    <div class="title">地址</div>
    <div class="input-box"><input type="text" placeholder="请输入url地址,内容不可为函中文" v-model="value"></div>

    <div class="title">展示</div>
    <div class="show" v-if="value">
      <iframe :src="urlData" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    urlData: function () {
      let now = this.value
      let url = 'https://view.officeapps.live.com/op/embed.aspx?src='
      return url + now
    }
  }
}
</script>

<style lang="scss" scoped>
.show-office{}
.title{
  margin: 10px 0;
  font-size: 20px;
}
.show{
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: -1px;
  width: 100%;
  height: 70vh;
  border: 1px solid #ccc;
  font-size: 14px;
  iframe{
    margin-top: -1px;
    margin-left: -1px;
  }
}
.input-box{
  input{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
