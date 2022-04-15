<!--
 * @Author: zsmya
 * @Date: 2022-04-15 16:50:25
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 18:06:13
 * @FilePath: /vite_ts/src/views/Home/Home.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import { LogInOutline as LogInIcon } from '@vicons/ionicons5'
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <n-button v-permission="['搜索', '重置', '测试']" tertiary attr="测试">
    <template #icon>
      <n-icon><log-in-icon /></n-icon>
    </template>
    Default
  </n-button>
</template>
