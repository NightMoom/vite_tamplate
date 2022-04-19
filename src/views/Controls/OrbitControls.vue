<!--
 * @Author: zsmya
 * @Date: 2022-04-18 09:42:16
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 16:53:16
 * @FilePath: /vite_ts/src/views/Controls/OrbitControls.vue
 * @Description: 轨道控制器
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { onMounted, getCurrentInstance, onUnmounted } from 'vue'
import {
  BoxGeometry,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
  PointLight,
  AmbientLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { StatsModule } from '@/utils/stats'
let renderer: WebGLRenderer
const initWebGL = async () => {
  const el: HTMLElement = document.getElementById('orbitControls') || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  //  初始化场景
  const scene = new Scene()
  scene.position.set(0, 0, 0)
  // 初始化渲染器
  renderer = new WebGLRenderer()
  renderer.setSize(width, height, true)
  renderer.setClearColor(0xffffff)
  // 初始化相机
  const camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(10, 10, 40)
  camera.lookAt(scene.position)
  // 点光源
  const pointLight = new PointLight(0xffffff)
  pointLight.position.set(400, 200, 300) //点光源位置
  scene.add(pointLight) //点光源添加到场景中
  //环境光
  const ambient = new AmbientLight(0x444444)
  scene.add(ambient)
  // AxesHelper
  const axisHelper = new AxesHelper(10)
  scene.add(axisHelper)
  // 轨道控制器
  // 初始化Gemotry
  const boxGeometry = new BoxGeometry(10, 10, 10)
  const boxMaterial = new MeshBasicMaterial({ color: 0xff0000 })
  const boxMesh = new Mesh(boxGeometry, boxMaterial)
  scene.add(boxMesh)
  el.appendChild(renderer.domElement)
  const stats = new StatsModule(el, 1)
  renderer.render(scene, camera)

  const animte = () => {
    requestAnimationFrame(animte)
    boxMesh.rotation.x += 0.01
    renderer.render(scene, camera)
    stats.update()
  }

  const orb = new OrbitControls(camera, renderer.domElement)
  animte()
}
onMounted(() => {
  console.log('onMounted')
  const instance = getCurrentInstance()
  console.log('instance', instance)
  initWebGL()
})
onUnmounted(() => {
  renderer.dispose()
})
</script>
<template>
  <div id="orbitControls" class="orbitControls">
    <p>轨道控制器可以让你实现对物体窗口的缩放，旋转等系列操作</p>
  </div>
</template>

<style lang="scss" scoped>
.orbitControls {
  width: 100%;
  height: 100%;
  position: relative;
  p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
