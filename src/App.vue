<!--
 * @Author: zsmya
 * @Date: 2022-08-01 09:33:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-01 15:29:22
 * @FilePath: /vite_vue3_ts/src/App.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue"

import { reactive } from "vue"

const users = reactive<UserInfo>({ userName: "", userPwd: "" })
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
