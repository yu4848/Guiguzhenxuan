<template>
  <!-- <p>{{ menuList }}</p> -->
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <el-menu-item v-if="!item.children" :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由但是只有一个子路由（决定不显示父路由，只显示子路由） -->
    <el-menu-item
      v-if="item.children && item.children.length == 1"
      :index="item.children[0].path"
    >
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由但是有多个子路由（决定显示父路由，同时显示子路由） -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归调用自身组件，处理子路由 -->
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import Menu from './index.vue'

defineProps<{
  menuList: any[]
}>()
</script>
