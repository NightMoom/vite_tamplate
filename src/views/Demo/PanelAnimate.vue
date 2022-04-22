<!--
 * @Author: zsmya
 * @Date: 2022-04-22 17:05:27
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-22 17:34:32
 * @FilePath: /vite_ts/src/views/Demo/PanelAnimate.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { onMounted } from 'vue'
import { BufferGeometry, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer

onMounted(() => {
  const el: HTMLElement = document.getElementById('panel') || document.body
  const width: number = el.clientWidth
  const height: number = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(10, 10, 10)
})
</script>

<template>
  <div id="panel" class="panel"></div>
</template>

<style lang="scss" scoped>
.panel {
  width: 100%;
  height: 100%;
}
</style>
