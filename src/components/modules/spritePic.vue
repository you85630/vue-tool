<template>
  <div class="sprite-pic">
    <div class="left">
      <div class="btn input-box"><input type="file" multiple="multiple" @change="changeImg"><p>上传</p></div>
      <div class="style-box">
        <div class="box" v-for="(li,index) in styleList" :key="index">
          <i class="fa fa-close"></i>
          <div class="img-box"><img :src="li.pic" alt=""></div>
          <dl>
            <dt><span>.{{li.title}}</span>{</dt>
            <dd><span>width:</span>{{li.width}}px;</dd>
            <dd><span>height:</span>{{li.height}}px;</dd>
            <dd><span>background:</span>url('css_sprites.png') no-repeat -10px -{{li.right}}px;</dd>
            <dt>}</dt>
          </dl>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="btn" @click="downloadNow"><a href="" :download="download">下载</a></div>
      <div class="cover-box" v-if="styleList">
        <canvas id="myCanvas" width="250" height="300"></canvas>
        <img :src="download" v-if="download">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleBox: [
        {
          pic: 'http://img.hb.aicdn.com/9c3d58f4b1f5c513a7bba974563052447d32feb52870-4US9um_fw658',
          title: 'square',
          width: 100,
          height: 40

        }, {
          pic: 'http://img.hb.aicdn.com/27f19b71900302d39afc3d6158dab2150391207d1312e-BqSBoY_fw658',
          title: 'square',
          width: 40,
          height: 134
        }, {
          pic: 'http://img.hb.aicdn.com/27f19b71900302d39afc3d6158dab2150391207d1312e-BqSBoY_fw658',
          title: 'square',
          width: 44,
          height: 86
        }
      ],
      download: ''
    }
  },
  computed: {
    styleList: function () {
      let list = this.styleBox
      if (list) {
        let now = []
        let noeright
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if (i === 0) {
            noeright = 10
          } else {
            noeright += parseInt(list[i - 1].height)
            noeright += 10
          }
          now.push({
            pic: element.pic,
            title: element.title,
            width: element.width,
            height: element.height,
            right: noeright
          })
        }
        return now
      }
    }
  },
  mounted () {
    this.$nextTick(function () {

    })
  },
  methods: {
    changeImg (event) {
      let list = event.target.files
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        let url = window.URL.createObjectURL(element)
        console.log(url)
      }
    },
    downloadNow () {

    }
  }
}
</script>

<style lang="scss" scoped>
.sprite-pic{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .btn{
    margin-bottom: 20px;
    padding: 6px 20px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    a{
      display: block;
      color: #fff;
    }
  }
  .left,
  .right{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    min-height: 500px;
    width: 45%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .left{
    .input-box{
      position: relative;
      input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        padding: 6px 0;
        width: 68px;
        opacity: 0;
        cursor: pointer;
      }
    }
    .style-box{
      box-sizing: border-box;
      margin-top: -10px;
      width: 100%;
      .box{
        position: relative;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        margin: 10px 0;
        padding: 10px;
        width: 100%;
        border: 1px solid #5277aa;
        border-radius: 3px;
        background-color: #ecf0f6;
        .img-box{
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          img{
            max-width: 100px;
            width: 100%;
            height: auto;
          }
        }
        .fa{
          position: absolute;
          top: 10px;
          right: 10px;
          color: #f00;
          font-size: 14px;
          cursor: pointer;
        }
        dl {
          margin-left: 10px;
          word-break: break-all;
          dt,
          dd {
            font-size: 14px;
            line-height: 1.4;
            span {
              margin-right: 6px;
            }
          }
          dd {
            padding-left: 20px;
          }
        }
      }
    }
  }
  .right{
    .cover-box{
      display: flex;
      flex-direction: column;
      max-width: 100%;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEWgoKD///+BiQigAAAAEUlEQVQI12NgP8CAjH4wICMAfIMIvOGvGm0AAAAASUVORK5CYII=') repeat;
      img{
        padding: 5px 10px;
      }
    }
  }
}
</style>
