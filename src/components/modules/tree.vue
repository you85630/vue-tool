<template>
  <div class="tree">
      <div class="list" v-for="(li,index) in tree" :key="index">
        <div :class="['lev-'+ li.indent]">
          <span class="key">"{{li.title}}"</span>
          <i @click="li.expanded=!li.expanded" class="fa" :class="[li.expanded ? 'fa-minus-square-o':'fa-plus-square-o']"></i>
          <span>:</span><span v-if="!li.expanded">{{li.typeof}}</span><span>{</span>
          <div class="li" v-for="(i,k,v) in li.name" :key="v" v-if="li.expanded">
            <span class="key">"{{k}}"</span>
            <span>:</span>
            <span class="val">"{{i}}"</span>
            <span>,</span>
          </div>
          <tree :tree="li.children" v-if="li.expanded"></tree>
          <span v-else>...</span><span>}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: ['tree'],
  methods: {
    hideChild (key) {
      console.log(key)
    }
  }
}
</script>

<style scoped lang="scss">
.tree {
  .fa{
    margin-left: 4px;
    font-size: 12px;
  }
  span{
    font-size: 12px;
  }
  .li{
    margin-left: 20px;
  }
  .key{
    color: #92278f;
    font-weight: bold;
  }
  .val{
    color: #3ab54a;
    font-weight: bold;
  }
}
@for $n from 0 through 100 {
  .lev-#{$n} {
    margin-left: 20px;
    line-height: 1.6;
  }
}
</style>
