<template>
  <div class="slider" @click="slider"><p :style="now"><em @mousemove="hover"></em></p></div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      now: {
        width: this.value + '%'
      }
    }
  },
  methods: {
    slider (el) {
      let wid = this.$el.scrollWidth
      let disX = el.clientX - this.$el.offsetLeft
      let offLeft = disX / wid
      let here = (offLeft * 100).toFixed(2)
      this.now.width = here + '%'
      this.$emit('input', here)
    },
    hover (el) {
      let wid = this.$el.scrollWidth
      let disX = el.clientX - this.$el.offsetLeft
      let offLeft = disX / wid
      let here = (offLeft * 100).toFixed()
      this.now.width = here + '%'
      this.$emit('input', here)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
  p {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 0%;
    height: 100%;
    border-radius: 4px;
    background: #3c9ffc;
    em {
      position: absolute;
      top: -4px;
      left: 100%;
      margin-left: -10px;
      width: 10px;
      height: 10px;
      border: 2px solid #3c9ffc;
      border-radius: 50px;
      background-color: #fff;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.4);
      }
    }
  }
}
</style>
