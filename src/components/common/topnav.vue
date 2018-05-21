<template>
  <div class="top-nav">
    <div class="logo">
      <router-link to="/home/index">前端工具集</router-link>
    </div>
    <ul>
      <li>You</li>
      <li @click="exit">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'exit'
    ])
  }
}
</script>

<style lang="scss" scoped>
.top-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 5%;
  background-color: #fff;
  box-shadow: 0 2px 5px #ccc;
  a{
    color: #383E4B;
  }
  .logo{
    a{
      font-size: 26px;
    }
  }
  ul{
    display: flex;
    li{
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #383E4B;
      font-size: 14px;
      cursor: pointer;
      &:last-child{
        margin-right: 0;
        padding-right: 0;
        border: none;
      }
    }
  }
}
</style>
