<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>页面不存在</h2>
    <el-button type="primary" @click="goHome">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }
}
</style>
