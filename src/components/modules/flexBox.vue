<template>
  <div class="flex">
    <div class="width-box">
      <h2>子元素宽度</h2>
      <div class="box">
        <p class="name">width:{{pwidth}}%</p>
        <my-slider v-model="pwidth"></my-slider>
      </div>
    </div>
    <div class="flex-box">
      <h2>属性选择</h2>
      <ul>
        <li>
          <div class="title">name</div>
          <div class="flex-style">
            <i class="fa fa-circle-o"></i>
            <span>name</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mySlider from 'components/common/slider'

export default {
  data () {
    return {
      pwidth: '30'
    }
  },
  components: {
    mySlider
  }
}
</script>

<style lang="scss" scoped>
.flex {
}
.width-box {
  h2 {
    font-size: 20px;
  }
  .box {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .name {
      margin-right: 20px;
      font-size: 16px;
    }
  }
}
.flex-box {
  h2 {
  }
}
</style>
