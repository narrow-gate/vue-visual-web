<script setup>
import {provide,ref} from 'vue'
import Home from '@/components/home/index.vue'
let usr=ref({})
function fetchUsr(){
  setTimeout(()=>{
usr.value={
  name:'test-usr',
  age:16,
  gender:'man',
}
console.log(11,usr.value);
  },1000)
}
fetchUsr()
provide('usr',usr)
let menu=ref({})
function fetchMenu(){
  setTimeout(()=>{
menu.value=[{
   url:'/welcome',
    appName: 'welcome',
},{
   url:'/page-one',
    appName: 'page-one',
}]
console.log(27,menu.value);
  },1000)
}
fetchMenu()
provide('menu',menu)
console.log(22);
</script>

<template>
<Home/>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
    <span>Vite logo</span>  <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
    <span>logo vue</span>  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
   <router-view></router-view> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
