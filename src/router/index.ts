// 从vue-router中引入创建路由器的方法和创建history模式的方法
// 【3】createWebHistory 是Vue Router 3.0 引入的，用于创建基于 HTML5 history API 的路由。
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import { constantRoute } from './routes'
// 创建路由器
// 【2】为什么不用 new VueRouter？
// 【2】Vue2 使用的是 new VueRouter({...})。Vue3 彻底换了API，必须用 createRouter
const router = createRouter({
  // 创建一个history模式
  history: createWebHashHistory(),
  // constantRoute 是你定义的一组"基础路由"，比如登录页、404、首页等。【1】
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

// 暴露路由器
export default router
