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
    ...mapActions(['exit'])
  }
}
</script>

<style lang="scss" scoped>
.top-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px #ccc;
  .logo{
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 300px;
    color: #666;
    font-size: 20px;
  }
  ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    margin-left: 20px;
    li{
      display: flex;
      flex-direction: row;
      font-size: 14px;
      &:last-child{
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>
