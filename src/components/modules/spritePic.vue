<template >
  <div class="sprite-pic">
    <div class="left">
      <div class="btn input-box">
        <input type="file" multiple="multiple">
        <p><i class="fa fa-cloud-upload"></i>上传</p>
        <span :class="{err:tips}" v-if="tips">{{tips}}</span>
        <span v-else>支持png,jpg,jpeg,bmp</span>
      </div>
      <div class="style-box">
        <div class="box" v-for="(li,index) in styleList" :key="index">
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
      <div class="btn">
        <a :href="download" download="css_sprites" v-if="download"><i class="fa fa-cloud-download"></i>下载</a>
        <a v-else><i class="fa fa-cloud-download"></i>下载</a>
      </div>
      <img :src="download" v-if="download">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleBox: [],
      download: '',
      tips: ''
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
    window.addEventListener('change', this.changImg)
  },
  methods: {
    changImg (event) {
      const files = Array.from(event.target.files)
      this.filesToInstances(files, instances => {
        this.drawImages(instances, finalImageUrl => {
          this.download = finalImageUrl
        })
      })
    },
    // 根据图片文件拿到图片实例
    filesToInstances (files, callback) {
      const length = files.length
      let instances = []
      let finished = 0
      files.forEach((file, index) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => {
          const image = new Image()
          image.src = e.target.result

          if (file.name.indexOf('png') !== -1) {
            image.name = file.name.replace(/.png/i, '')
          } else if (file.name.indexOf('bmp') !== -1) {
            image.name = file.name.replace(/.bmp/i, '')
          } else if (file.name.indexOf('jpg') !== -1) {
            image.name = file.name.replace(/.jpg/i, '')
          } else if (file.name.indexOf('jpeg') !== -1) {
            image.name = file.name.replace(/.jpeg/i, '')
          } else {
            this.tips = '请上传正确格式'
          }

          image.onload = () => {
            instances[index] = image
            finished++
            if (finished === length) {
              callback(instances)
            }
          }
        }
      })
    },
    // 拼图
    drawImages (images, callback) {
      // 图片之间的间隙
      let gap = 10
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const heights = images.map(item => item.height)
      const widths = images.map(item => item.width)
      // 获取宽度
      canvas.width = Math.max.apply(null, widths) + gap * 2
      // 获取高度
      canvas.height = heights.reduce((total, num) => total + (num += gap)) + gap * 2

      let y = gap
      let list = []
      images.forEach((item, index) => {
        const width = widths[index]
        const height = heights[index]
        context.drawImage(item, gap, y, width, height)
        y += (height + gap)
        list.push({
          pic: item.src,
          title: item.name,
          width: width,
          height: height,
          right: y
        })
      })
      this.styleBox = list
      callback(canvas.toDataURL('image/png'))
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
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    p,a{
      display: block;
      padding: 6px 20px;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      .fa{
        margin-right: 10px;
      }
    }
    span{
      font-size: 12px;
    }
    .err{
      color: #f00;
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
        width: 93px;
        opacity: 0;
        cursor: pointer;
      }
    }
    .style-box{
      box-sizing: border-box;
      margin-top: -10px;
      width: 100%;
      .box{
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
    img{
      max-width: 100%;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEWgoKD///+BiQigAAAAEUlEQVQI12NgP8CAjH4wICMAfIMIvOGvGm0AAAAASUVORK5CYII=') repeat;
    }
  }
}
</style>
