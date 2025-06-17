<template>
  <div class="tabbar_container">
    <div class="tabbar_left">
    <Breadcrumb/>
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Setting from './setting/index.vue'
import Breadcrumb from './breadcrub/index.vue'
</script>

<style scoped>
.tabbar_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0 2px 8px #f0f1f2;
}
.tabbar_left {
  display: flex;
  align-items: center;
}
.tabbar_right {
  display: flex;
  align-items: center;
  gap: 10px;
}
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
