<template>
  <div class="footer-nav">
    <p>&copy;&nbsp;2017&nbsp;-&nbsp;{{year}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: 0
    }
  },
  created () {
    let date = new Date()
    this.year = date.getFullYear()
  }
}
</script>

<style lang="scss" scoped>
.footer-nav{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 5px #eee;
  text-align: center;
  p{
    color: #999;
    font-size: 12px;
  }
}
</style>
