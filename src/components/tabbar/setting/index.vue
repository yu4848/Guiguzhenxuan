<template>
  <el-button type="primary" size="small">
    <el-icon><Refresh /></el-icon>刷新
  </el-button>
  <el-button type="primary" size="small">
    <el-icon><FullScreen /></el-icon>全屏
  </el-button>
  <el-button type="primary" size="small">
    <el-icon><Setting /></el-icon>设置
  </el-button>
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      下拉菜单<el-icon class="el-icon-arrow-down"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { Refresh, FullScreen, Setting, ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  display: flex;
  align-items: center;
}
.el-icon-arrow-down {
  font-size: 12px;
  margin-left: 4px;
}
</style>