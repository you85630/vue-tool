<template>
  <div class="canvas">
    <input type="file" multiple="multiple" @change="changeImg">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: ''
    }
  },
  methods: {
    cartView () {
      var c = document.getElementById('myCanvas')
      var ctx = c.getContext('2d')
      ctx.font = '30px Arial'
      ctx.fillText('Hello World', 10, 50)
    },
    changeImg (event) {
      let list = event.target.files
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        let url = window.URL.createObjectURL(element)
        let img = new Image()
        img.src = url
        this.img = img
      }
    }
  },
  watch: {
    img: 'cartView'
  }
}
</script>

<style lang="scss" scoped>

</style>
