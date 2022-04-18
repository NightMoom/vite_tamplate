<!--
 * @Author: zsmya
 * @Date: 2022-04-18 13:29:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 14:33:17
 * @FilePath: /vite_ts/src/Layout/SubRouter.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { NDivider, NButton } from 'naive-ui'
import { LogInOutline } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.replace('/')
}
</script>

<template>
  <div class="sub-router">
    <div class="sub-divider">
      <n-button type="primary" @click="goBack">
        返回
        <template #icon>
          <LogInOutline></LogInOutline>
        </template>
      </n-button>
    </div>
    <n-divider dashed></n-divider>

    <div class="sub-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-router {
  width: 100vw;
  height: 100vh;
  .sub-divider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sub-container {
    height: calc(100% - 34px - 1px - 48px);
  }
}
</style>
