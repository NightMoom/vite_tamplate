<!--
 * @Author: zsmya
 * @Date: 2022-04-15 16:50:25
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 15:23:15
 * @FilePath: /vite_ts/src/views/Home/Home.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script lang="ts">
import { NCard } from 'naive-ui'
import router from '@/router'
export default {
  components: {
    NCard,
  },
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
  <div class="container" @click.capture="changeRoute">
    <n-card title="Three.js基础概念" hoverable data-type="BasicInfo">
      关于Threejs的基本概念
    </n-card>

    <n-card title="渲染器" hoverable data-type="WebGLRenderer"> 渲染器 WebGLRenderer</n-card>
    <n-card title="场景" hoverable data-type="Scene"> 场景 Scene</n-card>
    <n-card title="相机" hoverable data-type="Camera"> 相机 Camera</n-card>
    <n-card title="轨道控制器" hoverable data-type="OrbitControls">轨道控制器 OrbitControls</n-card>
    <n-card title="立方相机" hoverable data-type="CubeCamera"> 立方相机 CubeCamera</n-card>
    <n-card title="正交相机" hoverable data-type="OrthographicCamera">
      正交相机 OrthographicCamera
    </n-card>
    <n-card title="透视相机" hoverable data-type="PerspectiveCamera">
      透视相机 PerspectiveCamera
    </n-card>
    <!-- <n-card title="立体相机" hoverable data-type="StereoCamera"> 立体相机 StereoCamera</n-card>
    <n-card title="光照" hoverable data-type="Light"> 光照 Light</n-card> -->
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
