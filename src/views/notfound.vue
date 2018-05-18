<template>
  <ul class="not-found">
    <li class="title"><img src="./../assets/img/404.png" alt=""></li>
    <li class="back">ERROR!<router-link to="/">返回首页</router-link></li>
    <li class="tips">抱歉，您访问的页面不存在</li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found{
  height: 100%;
  background-color: #fff;
  text-align: center;
}
.title{
  padding-top: 18%;
  img{
    width: 300px;
  }
}
.back{
  margin-top: 10px;
  margin-top: 20px;
  color: #2781ee;
  font-weight: bold;
  font-size: 40px;;
  a{
    margin-left: 20px;
    padding: 4px 10px;
    border: 2px solid #2781ee;
    color: #2781ee;
    vertical-align: 8px;
    font-weight: bold;
    font-size: 20px;
  }
}
.tips{
  margin-top: 10px;
  font-size: 22px;
}
</style>
