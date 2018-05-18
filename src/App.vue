<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
  font-size: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
