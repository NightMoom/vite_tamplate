<!--
 * @Author: zsmya
 * @Date: 2022-04-18 16:32:44
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 16:50:02
 * @FilePath: /vite_ts/src/views/Camera/OrthographicCamera.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
} from 'three'
import { onMounted, onUnmounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { StatsModule } from '@/utils/stats'

let renderer: WebGLRenderer
let scene: Scene
let camera: OrthographicCamera

onMounted(() => {
  const el = document.getElementById('orthographic-camera') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  const axisHelper = new AxesHelper(1000)
  scene.add(axisHelper)
  // 初始化相机
  camera = new OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
  camera.position.set(10, 10, 10)
  camera.lookAt(scene.position)

  const geometry = new BoxGeometry(10, 10, 10)
  const material = new MeshBasicMaterial({ color: 0x00ffff })
  const mesh = new Mesh(geometry, material)

  scene.add(mesh)

  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)
  const orb = new OrbitControls(camera, renderer.domElement)
  const stats = new StatsModule(el, 1)
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }
  animate()
})
</script>
<template>
  <div id="orthographic-camera" class="orthographic-camera">
    <p>
      (正交相机)在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。
    </p>
  </div>
</template>

<style lang="scss" scoped>
.orthographic-camera {
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
