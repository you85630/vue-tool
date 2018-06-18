<template>
  <div class="flex">
    <div class="style-box">
      <div>
        <h2>子元素宽度</h2>
        <div class="box">
          <p class="name">width:{{pwidth}}%</p>
          <my-slider v-model="pwidth"></my-slider>
        </div>
      </div>
      <div>
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
      <div>
        <h2>展示属性：</h2>
        <div class="style-now">
          <p v-for="(i,val) in nowStyle" :key="val"><span>{{val}}:</span>{{i}};</p>
        </div>
      </div>
    </div>
    <div>
      <h2>演示</h2>
      <div class="show-box">
        <div class="add" @click="addLi">添加</div>
        <div class="box" :style="nowStyle">
          <div class="li" :style="{width:pwidth+'%'}" v-for="(li,index) in showbox" :key="index">
            <p>{{index+1}}</p>
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
.box {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  .name {
    margin-right: 20px;
    font-size: 14px;
  }
}

.box-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
  .title{
    font-weight: bold;
    font-size: 16px;
  }
}

.style-now{
  padding: 20px 0;
  background: #333;
  color: white;
  margin: 20px 0;
  p {
    font-size: 14px;
    line-height: 1.4;
    padding-left: 20px;
    span {
      margin-right: 6px;
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
    background: #fc0;
    overflow: hidden;
    width: 100%;
    padding: 3px;
    min-height: 500px;
    max-height: 1000px;
    box-sizing: border-box;
    .li{
      display: inline-block;
      position: relative;
      margin: 10px;
      background-color: #fff;
      p{
        color: #2d8cf0;
        font-size: 24px;
        padding: 10px;
      }
      .fa{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #f00;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
