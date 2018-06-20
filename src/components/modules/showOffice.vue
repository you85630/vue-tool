<template>
  <div class="show-office">
    <div class="title">地址</div>
    <div class="input-box">
      <input type="text" placeholder="请输入url地址,内容不可为函中文" v-model="value">
      <button @click="showOffice">展示</button>
    </div>

    <div class="title">展示</div>
    <div class="show">
      <iframe :src="urlData" width="100%" height="100%"></iframe>
      <div class="icon-hide"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'http://palsdm00e.bkt.clouddn.com/111.docx',
      urlData: ''
    }
  },
  methods: {
    showOffice () {
      let now = this.value
      let url = 'https://view.officeapps.live.com/op/embed.aspx?src='
      this.urlData = url + now
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
  .icon-hide{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 22px;
    background-color: transparent;
  }
}
.input-box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input{
    box-sizing: border-box;
    padding: 10px;
    width: 92%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button{
    padding: 6px 20px;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
