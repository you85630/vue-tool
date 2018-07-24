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
      html2Canvas(document.querySelector('#pdfDom'), {allowTaint: true}).then((pages) => {
        let contentWidth = pages.width
        let contentHeight = pages.height
        let pageHeight = contentWidth / 210 * 297
        let nowHeight = contentHeight
        let position = 10
        let imgWidth = 210 - 2 * 10
        let imgHeight = (imgWidth / contentWidth * contentHeight) - 2 * 10
        let pageData = pages.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'mm', 'a4')
        if (nowHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 10, 10, imgWidth, imgHeight)
        } else {
          while (nowHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 10, position, imgWidth, imgHeight)
            nowHeight -= pageHeight
            position -= 297
            if (nowHeight > 0) {
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
