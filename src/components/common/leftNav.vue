<template>
  <div class="menu">
    <div class="menu-li" v-for="(li,index) in leftNav" :key="index">
      <router-link :to="li.linkto">{{li.label}}</router-link>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'leftNav'
    ])
  }
}
</script>

<style lang="scss" scoped>
.menu{
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #F5F4F5;
  cursor: pointer;

  user-select: none;
  .menu-li{
    a{
      display: inline-block;
      box-sizing: border-box;
      padding: 12px 10px;
      width: 100%;
      font-size: 14px;
    }
    .router-link-exact-active,
    .router-link-active{
      background-color: #2d8cf0;
      color: #fff;
    }
  }
}

</style>
