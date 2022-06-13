<!--
 * @Author: zsmya
 * @Date: 2022-06-13 14:14:54
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 14:26:13
 * @FilePath: /effect/src/layout/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const back = () => {
  router.go(-1)
}
</script>

<template>
  <div class="layout">
    <div class="header">
      <el-button type="primary" @click="back">返回</el-button>
    </div>

    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;

  .header {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 8px;
  }
  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
