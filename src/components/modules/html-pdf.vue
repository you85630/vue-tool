<template>
  <div class="html-pdf">
    <button class="btn" @click="getPdf()">导出PDF</button>
    <div id="pdfDom">
       <web-color></web-color>
    </div>
  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

import webColor from 'components/modules/webColor'
export default{
  components: {
    webColor
  },
  data () {
    return {
      htmlTitle: '这是导出的pdf名字'
    }
  },
  methods: {
    getPdf () {
      let maig = 10
      let imgw = 210 - 2 * maig
      let imgh = 297 - 2 * maig
      html2Canvas(document.querySelector('#pdfDom'), {allowTaint: true}).then((pages) => {
        let contentWidth = pages.width
        let contentHeight = pages.height
        let pageHeight = contentWidth / imgw * imgh
        let leftHeight = contentHeight
        let position = maig
        let imgWidth = imgw
        let imgHeight = imgw / contentWidth * contentHeight
        let pageData = pages.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'mm', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', maig, maig, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', maig, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 297
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(this.htmlTitle + '.pdf')
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.html-pdf{
  .btn{
    font-size: 30px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #2276eb;
    color: #fff;
    margin-bottom: 20px;
  }
}
</style>
