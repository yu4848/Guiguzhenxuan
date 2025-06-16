<template>
  <div class="big">
    <div class="apple">你好呀</div>
    <SvgIcon name="home" color="black" width="100" height="100"></SvgIcon>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.big {
  width: 520px;
  height: 520px;
  background: skyblue;

  .apple {
    width: 20px;
    height: 10px;
    // background: #000;
  }
}
</style>
