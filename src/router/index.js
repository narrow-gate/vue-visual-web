import {createRouter, createWebHashHistory } from 'vue-router'
import pageOne from '@/pages/pageOne.vue'
const routes=[{
    path:'/',
    name: 'home',
    component:()=> import('@/components/HelloWorld.vue')
},
{
    path:'/welcome',
    name: 'welcome',
    component:()=> import('@/pages/welcome.vue')
},{
    path:'/page-one',
    name: 'page-one',
    component:pageOne
}]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
  export default router