<template>
  <div class="cutcover">
    <div class="left">
      <div class="btn input-box">
        <input type="file"><p><i class="fa fa-cloud-upload"></i>上传头像</p>
      </div>
      <div class="cut-img" v-if="cover.img">
        <img class="bg" :src="cover.img" alt="">
        <div class="cover" :style="{width:cut.width+'px',height:cut.height+'px',left:cut.left+'px',top:cut.top+'px'}">
          <img :src="cover.img" :style="{width:cover.width+'px',height:cover.height+'px',left: -cut.left+'px',top:-cut.top+'px'}">
        </div>
        <ul class="tracke" :style="{width:cut.width+'px',height:cut.height+'px',left:cut.left+'px',top:cut.top+'px'}">
          <li class="border t-l"></li>
          <li class="border t-t"></li>
          <li class="border t-r"></li>
          <li class="border t-b"></li>
        </ul>
      </div>
    </div>
    <div class="right" v-if="cover.img">
      <div class="img-box">
        <div class="img one"><p :style="{backgroundImage:'url(' + cut.img + ')'}"></p></div>
        <div class="text">封面比例（16:9）</div>
      </div>
      <div class="img-box">
        <div class="img two"><p :style="{backgroundImage:'url(' + cut.img + ')'}"></p></div>
        <div class="text">封面比例（2.35:1）</div>
      </div>
      <div class="img-box">
        <div class="img three"><p :style="{backgroundImage:'url(' + cut.img + ')'}"></p></div>
        <div class="text">封面比例（1:1）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cover: {},
      cut: {
        // width: 205,
        // height: 169,
        // left: 10,
        // top: 10
        // img:''
      }
    }
  },
  mounted () {
    window.addEventListener('change', this.changImg)
  },
  methods: {
    changImg (e) {
      let file = e.target.files[0]
      this.fileImg(file, imgs => {
        this.drawImages(imgs, cutImg => {
          this.cover = cutImg[0]
          this.cut = cutImg[1]
        })
      })
    },

    fileImg (file, callback) {
      const reader = new FileReader()
      const image = new Image()
      let wid = 245
      if (typeof FileReader !== 'undefined') {
        reader.onload = (e) => {
          image.src = e.target.result
        }
        reader.readAsDataURL(file)
        image.onload = () => {
          image.height = (image.height / image.width) * wid
          image.width = wid
          let imgs = {
            img: image.src,
            width: image.width,
            height: image.height
          }
          callback(imgs)
        }
      }
    },

    drawImages (images, callback) {
      let widthNow
      let heightNOW
      let leftNow
      let topNow
      let imgUrl

      let now = []
      now[0] = images
      now[1] = {
        width: widthNow,
        height: heightNOW,
        left: leftNow,
        top: topNow,
        img: imgUrl
      }
      callback(now)
    }
  }
}
</script>

<style lang="scss" scoped>
.cutcover {
  display: flex;
  flex-direction: row;
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
  }
}
.left{
  width: 245px;
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
  .cut-img{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #eee;
    background-color: #f5f5f5;
    .bg{
      width: 100%;
      opacity: .4;
    }
    .cover{
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 138px;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
    .tracke{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 138px;
      cursor: move;
      .border{
        position: absolute;
        background: #fff url('http://osc94pt0z.bkt.clouddn.com/cut-cover.gif') 0 0 repeat;
        opacity: .5;
        &:after{
          position: absolute;
          z-index: 100;
          width: 7px;
          height: 7px;
          border: 1px #eee solid;
          background-color: #333;
          content: '';
        }
      }
      .t-l{
        left: 0;
        width: 1px;
        height: 100%;
        cursor: w-resize;
        &:after{
          top: 0;
          left: 0;
          margin-top: -4px;
          margin-left: -4px;
          cursor: nw-resize;
        }
      }
      .t-t{
        top: 0;
        width: 100%;
        height: 1px;
        cursor: n-resize;
        &:after{
          top: 0;
          right: 0;
          margin-top: -4px;
          margin-right: -4px;
          cursor: ne-resize;
        }
      }
      .t-r{
        right: 0;
        width: 1px;
        height: 100%;
        cursor: e-resize;
        &:after{
          right: 0;
          bottom: 0;
          margin-right: -4px;
          margin-bottom: -4px;
          cursor: se-resize;
        }
      }
      .t-b{
        bottom: 0;
        width: 100%;
        height: 1px;
        cursor: s-resize;
        &:after{
          bottom: 0;
          left:0;
          margin-bottom: -4px;
          margin-left: -4px;
          cursor: sw-resize;
        }
      }
    }
  }
}
.right{
  margin-left: 20px;
  .img-box{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
    .img{
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 84.375px;
      p {
        width: 100%;
        height: 100%;
        background-color: #f6f8f9;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .one{
      height: 84.375px;
    }
    .two{
      height: 63.82978723404255px;
    }
    .three{
      height: 150px;
    }
    .text{
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>
