import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装路由
app.use(router)
// 安装 Pinia
app.use(pinia)
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components'
// 安装自定义插件
app.use(gloalComponent)
// 引入模版的全局样式
import '@/styles/index.scss'

// 将应用挂载到
app.mount('#app')
