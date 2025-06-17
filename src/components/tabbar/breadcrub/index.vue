<template>
  <!-- 顶部左侧的折叠按钮 -->
  <el-icon><Expand /></el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { Expand } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-icon {
  margin-right: 10px;
  cursor: pointer;
}
</style>