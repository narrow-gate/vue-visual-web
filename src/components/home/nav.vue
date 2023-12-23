<template >
   <el-menu
    router='true'
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item :index="item.url" v-for="(item,index) in menu" :key='index'>{{item.appName}}</el-menu-item>
  </el-menu> 
</template>
<script setup>
import {ref,inject} from 'vue'
let menu=inject('menu')
console.log(menu,14);
let activeIndex=ref('/welcome')
</script>
<style scoped>
.el-menu-demo{
    width: 600px;
}
</style>