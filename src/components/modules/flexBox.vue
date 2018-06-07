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
          <div class="item" v-for="(li,index) in flexBox" :key="index">
            <div class="title">{{li.name}}</div>
            <div @click="activeNow(index,radioList-1)">
              <radio-box :list="li.item" v-model="radioList"></radio-box>
            </div>
          </div>
        </div>
    </div>
    <div class="flex-box">
      <h2>演示</h2>
      <div class="show-box">
        <div class="add">添加</div>
        <div class="box" :style="flexStyle">
          <div class="li" v-for="li in showbox" :key="li.index"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mySlider from 'components/common/slider'
import radioBox from 'components/common/radioBox'

export default {
  data () {
    return {
      showbox: 5,
      radioList: 1,
      pwidth: 0,
      styleNow: [],
      flexBox: [
        {
          name: 'flex-direction',
          item: [
            {
              id: 1,
              name: 'row'
            },
            {
              id: 2,
              name: 'row-reverse'
            },
            {
              id: 3,
              name: 'column'
            },
            {
              id: 4,
              name: 'column-reverse'
            }
          ]
        }, {
          name: 'flex-wrap',
          item: [
            {
              id: 1,
              name: 'nowrap'
            },
            {
              id: 2,
              name: 'wrap'
            },
            {
              id: 3,
              name: 'wrap-reverse'
            }
          ]
        }, {
          name: 'justify-content',
          item: [
            {
              id: 1,
              name: 'flex-start'
            },
            {
              id: 2,
              name: 'flex-end'
            },
            {
              id: 3,
              name: 'center'
            },
            {
              id: 4,
              name: 'space-between'
            },
            {
              id: 5,
              name: 'space-around'
            }
          ]
        }, {
          name: 'align-items',
          item: [
            {
              id: 1,
              name: 'stretch'
            }, {
              id: 2,
              name: 'flex-start'
            },
            {
              id: 3,
              name: 'flex-end'
            },
            {
              id: 4,
              name: 'center'
            },
            {
              id: 5,
              name: 'baseline'
            }
          ]
        }, {
          name: 'align-content',
          item: [
            {
              id: 1,
              name: 'stretch'
            }, {
              id: 2,
              name: 'flex-start'
            },
            {
              id: 3,
              name: 'flex-end'
            },
            {
              id: 4,
              name: 'center'
            },
            {
              id: 5,
              name: 'space-between'
            },
            {
              id: 6,
              name: 'space-around'
            }
          ]
        }
      ]
    }
  },
  components: {
    mySlider,
    radioBox
  },
  computed: {
    flexStyle: function () {
      let list = this.flexBox
      let select = this.radioList - 1
      let now = {}
      for (let i = 0; i < list.length; i++) {
        let key = list[i].name
        let val = list[i].item[select].name
        now[key] = val
      }
      return now
    }
  },
  methods: {
    activeNow (r, c) {
      let nowStyle = this.flexStyle
      console.log(nowStyle)
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  h2 {
    font-size: 20px;
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
      font-size: 16px;
      font-weight: bold;
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
  }
  .box{
    display: flex;
    background-color: #fc0;
    padding: 10px;
    .li{
      margin: 10px;
      background-color: #ccc;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
