<template>
  <div class="home">
    <div class="top">
      <top-nav></top-nav>
    </div>
    <div class="main">
      <div class="left">
        <left-nav></left-nav>
      </div>
      <div class="right">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="footer">
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import topNav from 'components/common/topnav'
import leftNav from 'components/common/leftnav'
import myFooter from 'components/common/footer'
export default {
  components: {
    topNav,
    leftNav,
    myFooter
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .top{
    height: 6%;
  }
  .footer{
    height: 5%;
  }
  .main{
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    margin: 1%;
    height: 88%;
    .left{
      max-width: 300px;
      width: 20%;
      height: 100%;
      border: 1px solid #eee;
      background-color: #383E4B;
    }
    .right {
      overflow-y: auto;
      box-sizing: border-box;
      margin-left: 10px;
      width: 80%;
      height: 100%;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
