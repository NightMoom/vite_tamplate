<!--
 * @Author: zsmya
 * @Date: 2022-04-15 16:50:25
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-25 15:45:24
 * @FilePath: /vite_ts/src/views/Home/HomeIndex.vue
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
    <n-card title="基础线条材质" hoverable data-type="LineBasicMaterial">
      基础线条材质 LineBasicMaterial
    </n-card>
    <n-card title="虚线材质" hoverable data-type="LineDashedMaterial">
      虚线材质 LineDashedMaterial
    </n-card>

    <n-card title="加载模型 ObjLoader" hoverable data-type="ObjLoader"> 加载模型 ObjLoader </n-card>
    <n-card title="场景切换" hoverable data-type="SceneSelect"> 场景切换 SceneSelect </n-card>
    <n-card title="随机三角形" hoverable data-type="TrangleAngle">随机三角形</n-card>
    <n-card title="随机正方体" hoverable data-type="RandomBox">随机正方体</n-card>
    <n-card title="环境贴图" hoverable data-type="EnvMesh01">环境贴图</n-card>

    <!-- <n-card title="立体相机" hoverable data-type="StereoCamera"> 立体相机 StereoCamera</n-card>
    <n-card title="光照" hoverable data-type="Light"> 光照 Light</n-card> -->
  </div>
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
