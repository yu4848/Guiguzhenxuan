<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'

// 获取路由器
const router = useRouter()
// 获取用户相关的小仓库
const userStore = useUserStore()
// 加载状态
const loading = ref(false)

// 收集账号与密码数据
const loginForm = reactive({
    username: '',
    password: ''
})
// 调用小的store进行传递数据，如果store成功的话store就会返回结构
//不需要this.commit(useLogin,loginForm)的形式传递数据
// 这样是用一个函数包裹上方代码然后函数前加await
// 登录按钮的回调
const login = async () => {
    try {
        // 登录请求
        await userStore.useLogin(loginForm)
        // 登录成功跳转首页
        router.push('/')
        // 登录成功提示信息
        ElNotification({
            type: 'success',
            message: '登录成功',
            title: `hi,${getTime()}好`
        })
    } catch (error: any) {
        ElNotification({
            type: 'error',
            message: error.message
        })
    } finally {
        loading.value = false
    }
}
</script>

<template>
  <div class="login-container">
    <el-form class="login-form">
      <h1>用户登录</h1>
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  .login-form {
    width: 400px;
    padding: 40px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
