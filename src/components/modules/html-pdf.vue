<template>
  <div class="html-pdf">
    <div class="box" id="pdfDom">12345</div>
    <button class="btn" @click="getPdf()">导出PDF</button>
  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  data () {
    return {
      htmlTitle: '111'
    }
  },
  methods: {
    getPdf () {
      var title = this.htmlTitle
      html2Canvas(document.querySelector('#pdfDom'), {allowTaint: true}).then((canvas) => {
        console.log(canvas)

        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      )
    }
  }
}

</script>

<style lang="scss" scoped>
.html-pdf{
  .box{
    width: 100px;
    height: 100px;
    background-color: #fc0;
    margin-bottom: 20px;
    font-size: 12px;
  }
  .btn{
    padding: 2px 10px;
    border: 1px solid #ccc;
    background-color: none;
  }
}
</style>
