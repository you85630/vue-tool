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
        <div class="box-item">
          <div class="item" v-for="(li,index) in value" :key="index">
            <div class="title">{{li.name}}</div>
            <div @click="activeNow(index,col)">
              <radio-box :list="li.item" v-model="col"></radio-box>
            </div>
          </div>
        </div>
    </div>
    <div class="flex-box">
      <h2>演示</h2>
      <div class="show-box">
        <div class="add" @click="addLi">添加</div>
        <div class="box" :style="nowStyle">
          <div class="li" :style="{width:pwidth+'%'}" v-for="(li,index) in showbox" :key="index">
            <i class="fa fa-close" @click="removeLi"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mySlider from 'components/common/slider'
import radioBox from 'components/common/radioBox'

export default {
  props: ['value'],
  data () {
    return {
      showbox: 5,
      col: 1,
      row: 1,
      pwidth: 20,
      nowStyle: {}
    }
  },
  components: {
    mySlider,
    radioBox
  },
  created () {
    let list = this.value
    let row = this.row - 1
    let now = {}
    for (let i = 0; i < list.length; i++) {
      let key = list[i].name
      let val = list[i].item[row].name
      now[key] = val
    }
    this.nowStyle = now
  },
  methods: {
    // 修改属性
    activeNow (r, c) {
      let list = this.value
      let row = r
      let col = c - 1
      let key = list[row].name
      let val = list[row].item[col].name
      this.nowStyle[key] = val
    },
    // 添加
    addLi () {
      this.showbox++
    },
    // 删除
    removeLi () {
      this.showbox--
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  h2 {
    font-size: 20px;

    user-select: none;
  }
}
.width-box {
  .box {
    display: flex;
    align-items: center;
    padding: 20px;
    .name {
      margin-right: 20px;
      font-size: 14px;
    }
  }
}
.flex-box {
  padding-top: 20px;
  border-top: 1px solid #ccc;
}
.box-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .item{
    padding: 20px;
    .title{
      font-weight: bold;
      font-size: 16px;
    }
  }
}
.show-box{
  .add{
    display: inline-block;
    margin: 20px 0;
    padding: 6px 20px;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;

    user-select: none;
  }
  .box{
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fc0;
    .li{
      position: relative;
      margin: 10px;
      width: 50px;
      height: 50px;
      background-color: #fff;
      &:hover{
        .fa{
          display: block;
        }
      }
      .fa{
        position: absolute;
        top: -4px;
        right: -4px;
        display: none;
        color: #f00;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>
