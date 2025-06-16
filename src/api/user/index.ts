import request from '@/utils/request'
import type {
  loginForm,
  loginRequestData,
  userResponseData,
  loginResponseData,
} from './type'

// API接口地址枚举
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 封装一些方法方便暴露出来到时候用
// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>('/admin/acl/index/login', data)
// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
