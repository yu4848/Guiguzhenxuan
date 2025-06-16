// 从vue-router中引入创建路由器的方法和创建history模式的方法
// 【3】createWebHistory 是Vue Router 3.0 引入的，用于创建基于 HTML5 history API 的路由。
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

// 你传入的 constantRoute，就是所有"初始"路由的数组。【1】
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]

// 创建路由器
// 【2】为什么不用 new VueRouter？
// 【2】Vue2 使用的是 new VueRouter({...})。Vue3 彻底换了API，必须用 createRouter
const router = createRouter({
  // 创建一个history模式
  history: createWebHashHistory(),
  // constantRoute 是你定义的一组"基础路由"，比如登录页、404、首页等。【1】
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

// 暴露路由器
export default router
