<!--
 * @Author: zsmya
 * @Date: 2022-04-19 09:47:43
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 14:39:22
 * @FilePath: /vite_ts/src/views/Material/LineBasicMaterial.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  BoxGeometry,
  LineBasicMaterial,
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { StatsModule } from '@/utils/stats'

let renderer: WebGLRenderer
let camera: PerspectiveCamera
let scene: Scene

onMounted(() => {
  const el: HTMLElement = document.getElementById('line-basic') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 创建场景
  scene = new Scene()
  scene.position.set(0, 0, 0)
  // 创建相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(50, 50, 50)
  camera.lookAt(scene.position)

  // 创建geometry
  const gemotry = new BoxGeometry(10, 10, 10)
  const material = new LineBasicMaterial({
    color: 0xff00ff,
    linewidth: 1,
    linecap: 'round',
    linejoin: 'round',
    opacity: 0.1,
  })
  const mesh = new Mesh(gemotry, material)
  scene.add(mesh)

  const stats = new StatsModule(el, 0)

  // 创建渲染器
  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    mesh.rotation.z += 0.01
    mesh.rotation.y += 0.01
    stats.update()
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<template>
  <div id="line-basic" class="line-basic"></div>
</template>

<style lang="scss" scoped>
.line-basic {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
