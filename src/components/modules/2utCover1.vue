<template>
  <div>
      <img :src="url"><br>
      <img :src="now"><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://osc94pt0z.bkt.clouddn.com/1.jpeg',
      now: ''
    }
  },
  mounted () {
    window.addEventListener('onload', this.changImg)
  },
  methods: {
    changImg () {
      this.convertImageToCanvas(this.url, img => {
        this.convertCanvasToImage(img)
      })
    },
    convertImageToCanvas (image, callback) {
      var canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      canvas.getContext('2d').drawImage(image, 0, 0)
      callback(canvas)
    },
    convertCanvasToImage (canvas) {
      var image = new Image()
      image.src = canvas.toDataURL('image/png')

      return image
    }
  }
}
</script>

<style>
img{
  width: 245px;
  height: 300px;
}
canvas{
  width: 300px;
  height: 150px;
  border:1px solid #d3d3d3;
}
</style>
