<template>
  <div class="tree">
      <div class="list" v-for="(li,index) in tree" :key="index">
        <!-- Object -->
        <div class="lev" v-if="li.typeof==='Object'">
          <span class="key">"{{li.title}}"</span>
          <i @click="li.expanded=!li.expanded" class="fa" :class="[li.expanded ? 'fa-minus-square-o':'fa-plus-square-o']"></i>
          <span>:</span><span v-if="!li.expanded">{{li.typeof}}</span>
          <span>{</span>
          <div class="li" v-for="(i,k,v) in li.name" :key="v" v-if="li.expanded">
            <span class="key">"{{k}}"</span>
            <span>:</span>
            <span class="val">"{{i}}"</span>
            <span>,</span>
          </div>
          <tree :tree="li.children" v-if="li.expanded"></tree>
          <span v-else>...</span>
          <span>}</span>
        </div>
        <!-- Array -->
        <div class="lev" v-if="li.typeof==='Array'">
          <span class="key">"{{li.title}}"</span>
          <i @click="li.expanded=!li.expanded" class="fa" :class="[li.expanded ? 'fa-minus-square-o':'fa-plus-square-o']"></i>
          <span>:</span><span v-if="!li.expanded">{{li.typeof}}</span>
          <span>[</span>
          <div class="li" v-for="(i,k,v) in li.name" :key="v" v-if="li.expanded">
            <span class="val">"{{i}}"</span>
            <span>,</span>
          </div>
          <tree :tree="li.children" v-if="li.expanded"></tree>
          <span class="key" v-else>{{li.name.length}}</span>
          <span>]</span>
        </div>
        <!-- String -->
         <div class="lev" v-if="li.typeof==='String'">
           <span class="key">"{{li.title}}"</span>
           <span>:</span>
           <span class="val">"{{li.name}}"</span>
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
  .lev{
    margin-left: 20px;
    line-height: 1.6;
  }
}
</style>
