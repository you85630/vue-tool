<template>
  <div class="flex">
    <h2>子元素宽度</h2>
    <div class="box">
      <p class="name">width:{{pwidth}}%</p>
      <my-slider v-model="pwidth"></my-slider>
    </div>
    <ul>
      <li>
        <h2>属性选择</h2>
        <div class="box-item">
          <div class="item" v-for="(li,index) in flexBox" :key="index">
            <div class="title">{{li.name}}</div>
            <div @click="activeNow(index,col)">
              <radio-box :list="li.item" v-model="col"></radio-box>
            </div>
          </div>
        </div>
        <h2>展示属性：</h2>
        <div class="style-now">
          <p v-for="(i,val) in nowStyle" :key="val"><span>{{val}}:</span>{{i}};</p>
        </div>
      </li>
      <li>
        <h2>演示</h2>
        <div class="show-box">
          <div class="add" @click="addLi"><i class="fa fa-plus"></i>添加</div>
          <div class="box" :style="nowStyle">
            <div class="li" :style="{width:pwidth+'%'}" v-for="(li,index) in showbox" :key="index">
              <p>{{index+1}}</p>
              <i class="fa fa-close" @click="removeLi"></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mySlider from 'components/common/slider'
import radioBox from 'components/common/radioBox'

export default {
  data () {
    return {
      showbox: 5,
      col: 1,
      row: 1,
      pwidth: 20,
      nowStyle: {},
      flexBox: [
        {
          name: 'display',
          item: [
            {
              id: 1,
              show: false,
              name: 'flex'
            }
          ]
        }, {
          name: 'flex-wrap',
          item: [
            {
              id: 1,
              show: false,
              name: 'nowrap'
            },
            {
              id: 2,
              show: false,
              name: 'wrap'
            },
            {
              id: 3,
              show: false,
              name: 'wrap-reverse'
            }
          ]
        }, {
          name: 'flex-direction',
          item: [
            {
              id: 1,
              show: false,
              name: 'row'
            },
            {
              id: 2,
              show: false,
              name: 'row-reverse'
            },
            {
              id: 3,
              show: false,
              name: 'column'
            },
            {
              id: 4,
              show: false,
              name: 'column-reverse'
            }
          ]
        }, {
          name: 'justify-content',
          item: [
            {
              id: 1,
              show: false,
              name: 'flex-start'
            },
            {
              id: 2,
              show: false,
              name: 'flex-end'
            },
            {
              id: 3,
              show: false,
              name: 'center'
            },
            {
              id: 4,
              show: false,
              name: 'space-between'
            },
            {
              id: 5,
              show: false,
              name: 'space-around'
            }
          ]
        }, {
          name: 'align-items',
          item: [
            {
              id: 1,
              show: false,
              name: 'stretch'
            }, {
              id: 2,
              show: false,
              name: 'flex-start'
            },
            {
              id: 3,
              show: false,
              name: 'flex-end'
            },
            {
              id: 4,
              show: false,
              name: 'center'
            },
            {
              id: 5,
              show: false,
              name: 'baseline'
            }
          ]
        }, {
          name: 'align-content',
          item: [
            {
              id: 1,
              show: false,
              name: 'stretch'
            }, {
              id: 2,
              show: false,
              name: 'flex-start'
            },
            {
              id: 3,
              show: false,
              name: 'flex-end'
            },
            {
              id: 4,
              show: false,
              name: 'center'
            },
            {
              id: 5,
              show: false,
              name: 'space-between'
            },
            {
              id: 6,
              show: false,
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
  created () {
    let list = this.flexBox
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
      let list = this.flexBox
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
  ul{
    display: flex;
    flex-direction: row;
    li{
      width: 50%;
      &:first-child{
        margin-right: 10px;
      }
    }
  }
  h2 {
    margin: 20px 0;
    font-size: 20px;

    user-select: none;
  }
}
.box {
  display: flex;
  align-items: center;
  padding: 0 10px;
  .name {
    margin-right: 20px;
    font-size: 14px;
  }
}

.box-item{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item{
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-right: 20px;
  }
  .title{
    font-weight: bold;
    font-size: 16px;
  }
}

.style-now{
  margin: 20px 0;
  padding: 20px 0;
  background: #333;
  color: white;
  p {
    padding-left: 20px;
    font-size: 14px;
    line-height: 1.4;
    span {
      margin-right: 6px;
    }
  }
}

.show-box{
  .add{
    display: inline-block;
    margin-bottom: 20px;
    padding: 6px 20px;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    user-select: none;
    .fa{
      margin-right: 10px;
    }
  }
  .box{
    overflow: hidden;
    box-sizing: border-box;
    padding: 3px;
    min-height: 474px;
    width: 100%;
    background: #fc0;
    .li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      margin: 10px;
      padding: 10px;
      background-color: #fff;
      p{
        color: #2d8cf0;
        font-size: 24px;
      }
      .fa{
        color: #f00;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
