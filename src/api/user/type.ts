// 定义用户相关数据类型
export interface loginForm {
  username: string
  password: string
}

// 定义登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: {
    token?: string
    message?: string
  }
}

// 定义获取用户信息返回数据类型
export interface userResponseData {
  code: number
  data: {
    checkUser: {
      userId: number
      username: string
      avatar: string
    }
  }
}
