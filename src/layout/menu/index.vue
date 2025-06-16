<template>
  <!-- <p>{{ menuList }}</p> -->
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <el-menu-item v-if="!item.children" :index="item.path" @click="goRouter">
      <template #title>
        <!-- 在路由前面加上图标-此时图标已经通过在【src/router/routes.ts】中全局配置了，因此不需要再通过import或者component进行 -->
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <!--中间的component相当于<item.meta.title/> -->
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由但是只有一个子路由（决定不显示父路由，只显示子路由） -->
    <el-menu-item
      v-if="item.children && item.children.length == 1"
      :index="item.children[0].path"
    >
      <template #title>
        <!-- 这里就为children增加上图标（反正只显示children，不显示item） -->
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
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
const goRouter = (vc: any) => {
  console.log(vc.index)
}
</script>
