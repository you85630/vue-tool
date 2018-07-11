<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
  background-color: #fff;
  font-size: 0;
  font-family: Monaco;
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
