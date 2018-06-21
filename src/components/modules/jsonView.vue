<template>
  <div class="json-view">
    <div class="left">
      <textarea placeholder="请输入json字符串或XML字符串..." v-model="value"></textarea>
    </div>
    <div class="right">
      <ul>
        <li><i class="fa fa-sort-numeric-asc"></i><p>显示行号</p></li>
        <li><i class="fa fa-file-excel-o"></i><p>转XML</p></li>
        <li><i class="fa fa-database"></i><p>压缩</p></li>
        <li><i class="fa fa-trash-o"></i><p>清空</p></li>
        <li><i class="fa fa-save"></i><p>保存</p></li>
        <li><i class="fa fa-files-o"></i><p>复制</p></li>
        <li><i class="fa fa-compress"></i><p>折叠</p></li>
      </ul>
      <div class="show">
        <div v-if="!err">
          <p>
            <i class="fa" @click="jsonList.expanded=!jsonList.expanded" :class="[jsonList.expanded ? 'fa-minus-square-o':'fa-plus-square-o']"></i>
            <span v-if="!jsonList.expanded">{{jsonList.typeof}}</span>
            <span>{</span>
            <span v-if="!jsonList.expanded">...}</span>
          </p>
          <tree :tree="jsonList.list" v-if="jsonList.expanded"></tree>
          <span v-if="jsonList.expanded">}</span>
        </div>
        <div class="jsonerr" v-else>{{err}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import tree from './../modules/tree'
export default {
  components: {
    tree
  },
  data () {
    return {
      value: '',
      err: '',
      jsonList: {
        typeof: 'Object',
        expanded: true,
        list: [
          {
            title: 'pages',
            typeof: 'String',
            name: 'pages/home/home'
          }, {
            title: 'pages',
            typeof: 'Array',
            expanded: true,
            name: ['pages/home/home', 'pages/home/home']
          }, {
            title: 'window',
            typeof: 'Object',
            expanded: true,
            name: {
              'backgroundTextStyle': 'light',
              'navigationBarBackgroundColor': '#fff',
              'navigationBarTitleText': '发现之路',
              'navigationBarTextStyle': 'black'
            },
            children: [
              {
                title: 'window',
                typeof: 'Object',
                expanded: true,
                name: {
                  'backgroundTextStyle': 'light',
                  'navigationBarBackgroundColor': '#fff',
                  'navigationBarTitleText': '发现之路',
                  'navigationBarTextStyle': 'black'
                },
                children: [
                  {
                    title: 'window',
                    typeof: 'Object',
                    expanded: true,
                    name: {
                      'backgroundTextStyle': 'light',
                      'navigationBarBackgroundColor': '#fff',
                      'navigationBarTitleText': '发现之路',
                      'navigationBarTextStyle': 'black'
                    }
                  }, {
                    title: 'window',
                    typeof: 'Object',
                    expanded: true,
                    name: {
                      'backgroundTextStyle': 'light',
                      'navigationBarBackgroundColor': '#fff',
                      'navigationBarTitleText': '发现之路',
                      'navigationBarTextStyle': 'black'
                    },
                    children: [
                      {
                        title: 'window',
                        typeof: 'Object',
                        expanded: true,
                        name: {
                          'backgroundTextStyle': 'light',
                          'navigationBarBackgroundColor': '#fff',
                          'navigationBarTitleText': '发现之路',
                          'navigationBarTextStyle': 'black'
                        }
                      }
                    ]
                  }, {
                    title: 'window',
                    typeof: 'Object',
                    expanded: true,
                    name: {
                      'backgroundTextStyle': 'light',
                      'navigationBarBackgroundColor': '#fff',
                      'navigationBarTitleText': '发现之路',
                      'navigationBarTextStyle': 'black'
                    }
                  }
                ]
              }, {
                title: 'window',
                typeof: 'Object',
                expanded: true,
                name: {
                  'backgroundTextStyle': 'light',
                  'navigationBarBackgroundColor': '#fff',
                  'navigationBarTitleText': '发现之路',
                  'navigationBarTextStyle': 'black'
                }
              }
            ]
          }, {
            title: 'window',
            typeof: 'Object',
            expanded: true,
            name: {
              'backgroundTextStyle': 'light',
              'navigationBarBackgroundColor': '#fff',
              'navigationBarTitleText': '发现之路',
              'navigationBarTextStyle': 'black'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.json-view{
  display: flex;
  flex-direction: row;
  height: 85vh;
  border: 1px solid #ccc;
}
.left{
  width: 50%;
  border-right: 1px solid #ccc;
  textarea{
    box-sizing: border-box;
    padding: 10px 10px 10px 30px;
    width: 100%;
    height: 100%;
    border: none;
    color: #555;
    font-size: 12px;
    font-family: menlo,monospace, Tahoma,"微软雅黑","幼圆";
    line-height: 1.4;
    resize: none;
  }
}
.right{
  width: 50%;
  ul{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    li{
      position: relative;
      margin-left: 40px;
      padding: 10px 0;
      cursor: pointer;
      &:hover{
        p{
          display: block;
        }
      }
      .fa{
        color: #666;
        font-size: 14px;
      }
      p{
        position: absolute;
        bottom: -20px;
        left: -14px;
        display: none;
        padding: 2px 10px;
        border-radius: 4px;
        background-color: rgba($color: #000, $alpha: .6);
        color: #fff;
        word-break: keep-all;
        font-size: 12px;
        &::after{
          position: absolute;
          top: -5px;
          left: 14px;
          width:0;
          height:0;
          border-right:6px solid transparent;
          border-bottom:6px solid rgba($color: #000, $alpha: .6);
          border-left:6px solid transparent;
          content: '';
        }
      }
    }
    .active{
      .fa{
        color: #2d8cf0;
      }
    }
  }
}
.show{
  display: block;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px 10px 10px 30px;
  height: 81.4vh;
  span{
    font-size: 12px;
  }
  p{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .fa{
    font-size: 14px;
    cursor: pointer;
  }
  .jsonerr{
    color: #f00;
    font-size: 12px;
  }
}
</style>
