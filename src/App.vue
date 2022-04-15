<!--
 * @Author: zsmya
 * @Date: 2022-04-11 11:16:51
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-15 18:01:41
 * @FilePath: /vite_ts/src/App.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts"></script>

<template>
  <div id="app-container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
