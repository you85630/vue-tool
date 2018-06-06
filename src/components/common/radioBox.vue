<template>
  <div class="radio-box">
    <p v-for="(li,index) in radioList" :key="li.index" @click="checked(index)" :class="{active:index+1===radio}">
      <i class="fa fa-dot-circle-o"  v-if="index+1===radio"></i><i class="fa fa-circle-o" v-else></i>{{li.name}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['value', 'list'],
  data () {
    return {
      radio: this.value,
      radioList: this.list
    }
  },
  methods: {
    checked (key) {
      this.radio = key + 1
      this.$emit('input', this.radio)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-box{
  p{
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;

    user-select: none;
    .fa{
      margin: 0 10px;
    }
  }
  .active {
    color:#409eff;
  }
}
</style>
