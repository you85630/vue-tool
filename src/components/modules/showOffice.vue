<template>
  <div class="show-office">
    <div class="title">地址</div>
    <div class="input-box"><input type="text" placeholder="请输入url地址,内容不可为函中文" v-model="value"></div>

    <div class="title">展示</div>
    <div class="show" v-if="value">
      <iframe :src="urlData" width="100%" height="100%"></iframe>
      <div class="icon-left"></div>
      <div class="icon-right" :style="iconcolor"></div>
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
    },
    iconcolor: function () {
      let now = this.value
      let nowcolor
      if (now.indexOf('pptx') !== -1) {
        nowcolor = {
          'right': '1px',
          'bottom': '1px',
          'background-color': '#3c3d3e'
        }
      } else if (now.indexOf('xlsx') !== -1) {
        nowcolor = {'background-color': '#3c3d3e'}
      } else {
        nowcolor = {'background-color': '#fff'}
      }
      return nowcolor
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .icon-left{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80%;
    height: 24px;
  }
  .icon-right{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12%;
    height: 21px;
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
