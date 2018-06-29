<template>
  <div class="cutcover">
    <div class="left">
      <div class="btn input-box">
        <input type="file"><p><i class="fa fa-cloud-upload"></i>上传头像</p>
      </div>
      <div class="cut-img">
        <img class="bg" :src="cover" alt="">
        <ul class="tracke">
          <img class="cover" :src="cover" alt="">
          <li class="border t-l"></li>
          <li class="border t-t"></li>
          <li class="border t-r"></li>
          <li class="border t-b"></li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="img-box">
        <div class="img one"><p :style="{backgroundImage:'url(' + cover + ')'}"></p></div>
        <div class="text">封面比例（16:9）</div>
      </div>
      <div class="img-box">
        <div class="img two"><p :style="{backgroundImage:'url(' + cover + ')'}"></p></div>
        <div class="text">封面比例（2.35:1）</div>
      </div>
      <div class="img-box">
        <div class="img three"><p :style="{backgroundImage:'url(' + cover + ')'}"></p></div>
        <div class="text">封面比例（1:1）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cover: 'http://osc94pt0z.bkt.clouddn.com/1.jpeg'
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
    width: 245px;
    border: 1px solid #eee;
    background-color: #f5f5f5;
    .bg{
      width: 100%;
      opacity: .6;
    }
    .tracke{
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 245px;
      height: 138px;
      cursor: move;
      .cover{
        position: absolute;
        width: 100%;
      }
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
