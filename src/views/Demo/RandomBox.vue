<!--
 * @Author: zsmya
 * @Date: 2022-04-22 16:35:08
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-22 17:35:16
 * @FilePath: /vite_ts/src/views/Demo/RandomBox.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  MeshBasicMaterial,
  Color,
  Mesh,
  LineSegments,
  AxesHelper,
} from 'three'
import gemotryUtil from '@/gemotry/gemotry'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

onMounted(() => {
  const el: HTMLElement = document.getElementById('random-box') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  const scene: Scene = new Scene()
  scene.position.set(0, 0, 0)

  const camera: PerspectiveCamera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0, 1000, 0)
  camera.lookAt(scene.position)

  const renderer: WebGLRenderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)

  const gemotry = new gemotryUtil()
  const axesHelper = new AxesHelper(100)
  scene.add(axesHelper)
  for (let i = 0; i < 40; i++) {
    const randomColor = Math.random()
    const box = gemotry.createBoxBuffer(i + 2, i + 2, i + 2)

    console.log('box', box)
    const color = new Color(randomColor, randomColor, randomColor)
    const line = new LineSegments(box, new MeshBasicMaterial({ color }))
    line.computeLineDistances()
    line.position.set(Math.random() * 100, Math.random() * 100, Math.random() * 100)
    scene.add(line)
  }
  el.appendChild(renderer.domElement)
  const orb = new OrbitControls(camera, renderer.domElement)
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<template>
  <div id="random-box" class="random-box"></div>
</template>

<style lang="scss" scoped>
.random-box {
  width: 100%;
  height: 100%;
}
</style>
