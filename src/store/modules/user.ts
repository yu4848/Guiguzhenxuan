//
import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { loginResponseData } from '@/api/user/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
// 引入常量路由存储在store中
import { constantRoute } from '@/router/routes'
// 创建用户小仓库
export const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(),
      // token: localStorage.getItem('TOKEN'),
      // 把token从localstorage中获取
      menuRoutes: constantRoute,
    }
  },
  actions: {
    // 实现用户登录：发送请求-等待请求成功判断返回的状态码，如果200就把token存储在location和本地
    // 状态码不是200就相当于是失败，返回请求失败的错误异常
    async useLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        // localStorage.setItem('TOKEN',(result.data.token as string) )
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
