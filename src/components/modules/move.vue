<template>
  <div class="move">
    <div class="img-box">
      <li v-for="(li,index) in imgBox" :key="index" >
        <img :src="li" alt="" :id="index"  draggable="true">
      </li>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgBox: [
        'http://pbsbjhfvy.bkt.clouddn.com/img-1.jpeg',
        'http://pbsbjhfvy.bkt.clouddn.com/img-2.jpeg',
        'http://pbsbjhfvy.bkt.clouddn.com/img-3.jpeg',
        'http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg',
        'http://pbsbjhfvy.bkt.clouddn.com/img-5.jpeg'
      ]
    }
  },
  methods: {
    dragStart (event) {
      event.dataTransfer.setData('text/plain', event.target.id)
      console.log('开始拖动 p 元素')
    },
    drop (event) {
      event.preventDefault()
      var data = event.dataTransfer.getData('text/plain')
      event.target.appendChild(document.getElementById(data))
    },
    dragEnd (event) {
      console.log('完成 p 元素的拖动')
    },
    dragOver (event) {
      event.preventDefault()
    }
  },
  mounted () {
    document.addEventListener('dragstart', this.dragStart) // 开始拖动时触发
    document.addEventListener('drop', this.drop) // 正在拖动时触发
    document.addEventListener('dragend', this.dragEnd) // 完成拖动后触发
    document.addEventListener('dragover', this.dragOver) // 拖动到放置目标时触发
  }
}
</script>

<style lang="scss" scoped>
.move{
  font-size: 20px;
  img{
    margin-right: 10px;
    width: 140px;
    height: 200px;
  }
}
.img-box{
  display: flex;
  flex-direction: row;
  li{
    &:last-child{
      img{
        margin-right: 0;
      }
    }
  }
}
.box{
  width: 740px;
  height: 200px;
  border: 1px solid #000;
  img{
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>
