<template>
<div>
  <show-office :value="showData"></show-office>
</div>
</template>

<script>
import showOffice from 'components/modules/showOffice'

export default {
  components: {
    showOffice
  },
  data () {
    return {
      showData: 'http://palsdm00e.bkt.clouddn.com/111.docx'
      // showData: 'http://palsdm00e.bkt.clouddn.com/111.xlsx'
      // showData: 'http://palsdm00e.bkt.clouddn.com/111.pptx'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
