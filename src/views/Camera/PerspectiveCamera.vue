<!--
 * @Author: zsmya
 * @Date: 2022-04-18 16:08:56
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-18 16:32:09
 * @FilePath: /vite_ts/src/views/Camera/PerspectiveCamera.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted, onUnmounted, render } from 'vue'
import {
  WebGLRenderer,
  BoxGeometry,
  Scene,
  PerspectiveCamera,
  MeshBasicMaterial,
  Mesh,
} from 'three'
import { StatsModule } from '@/utils/stats'

let renderer: WebGLRenderer
let scene: Scene
let camera: PerspectiveCamera
onMounted(() => {
  const el = document.getElementById('perspective-camera') || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)
  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)

  //
  const gemotry = new BoxGeometry(10, 10, 10)
  const material = new MeshBasicMaterial({ color: 0xff00ff })
  const mesh = new Mesh(gemotry, material)

  scene.add(mesh)

  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  const stats = new StatsModule(el, 1)

  el.appendChild(renderer.domElement)
  const animte = () => {
    renderer.render(scene, camera)
    mesh.rotation.x += 0.01
    requestAnimationFrame(animte)
    stats.update()
  }
  animte()
})
onUnmounted(() => {
  renderer.dispose()
})
</script>

<template>
  <div id="perspective-camera" class="perspective-camera">
    <p>
      PerspectiveCamera这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。
    </p>
  </div>
</template>

<style lang="scss" scoped>
.perspective-camera {
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
