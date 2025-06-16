import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// 全局对象
const allGloablComponent: any = { SvgIcon, Pagination }
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 对外暴露插件对象
export default {
  // 务必叫做install方法
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGloablComponent[key])
    })
    // 注册element-plus的图标为全局-下次就可以<aaa/>直接使用el-icons标签不需要import或者component
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
