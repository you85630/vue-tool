<template>
  <div class="canvas">
    <input id="upload-input" type="file" accept="image/*" multiple="multiple" style="display: none;">
    <label for="upload-input">点击选择图片</label>
    <div id="image-container"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    // 拼出来的图片的宽度
    const width = 300

    const uploadInput = document.getElementById('upload-input')
    const imageDiv = document.getElementById('image-container')

    uploadInput.addEventListener('change', event => {
      const files = Array.from(event.target.files)
      filesToInstances(files, instances => {
        drawImages(instances, finalImageUrl => {
          imageDiv.innerHTML = `<div><a download href=${finalImageUrl}>点击下载</a><br><img src=${finalImageUrl}></div>`
        })
      })
    })

    // 根据图片文件拿到图片实例
    const filesToInstances = (files, callback) => {
      const length = files.length
      let instances = []
      let finished = 0

      files.forEach((file, index) => {
        const reader = new FileReader()
        // 把文件读为 dataUrl
        reader.readAsDataURL(file)
        reader.onload = e => {
          const image = new Image()
          image.src = e.target.result
          image.onload = () => {
            // 图片实例化成功后存起来
            instances[index] = image
            finished++
            if (finished === length) {
              callback(instances)
            }
          }
        }
      })
    }

    // 拼图
    const drawImages = (images, callback) => {
      const heights = images.map(item => width / item.width * item.height)
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = heights.reduce((total, current) => total + current)
      const context = canvas.getContext('2d')

      let y = 0

      images.forEach((item, index) => {
        const height = heights[index]
        context.drawImage(item, 0, y, width, height)
        y += height
      })
      callback(canvas.toDataURL('image/jpeg', 1))
    }
  }
}
</script>

<style lang="scss" scoped>
  label{
    font-size: 20px;
  }
</style>
