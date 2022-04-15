<!--
 * @Author: zsmya
 * @Date: 2022-04-15 17:21:46
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 17:55:38
 * @FilePath: /vite_ts/src/components/SvgIcon/index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg class="svg-icon"></svg>
</template>

<style lang="scss" scoped></style>
