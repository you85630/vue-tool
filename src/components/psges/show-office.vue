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
      showData: 'http://psylife-static.oss-cn-hangzhou.aliyuncs.com/sit/download/123.doc'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
