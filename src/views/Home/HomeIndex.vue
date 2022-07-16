<!--
 * @Author: zsmya
 * @Date: 2022-04-15 16:50:25
 * @LastEditors: zsmya
 * @LastEditTime: 2022-07-16 16:51:14
 * @FilePath: /vite-three-demo/src/views/Home/HomeIndex.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script lang="ts">
import { NCard } from 'naive-ui'
import router from '@/router'
import { defineComponent } from 'vue'
export default {
  setup() {
    const changeRoute = (e: MouseEvent) => {
      // @ts-ignore
      const { type } = e.target.parentNode.dataset
      if (type) {
        router.push({
          path: `${type}`,
        })
      }
    }
    return {
      changeRoute,
    }
  },
}
</script>

<template>
  <div class="container" @click.capture="changeRoute"></div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  max-width: 1920px;
  min-width: 1366px;
}
.n-card {
  max-width: 280px;
  margin: 10px;
  cursor: pointer;
}
</style>
