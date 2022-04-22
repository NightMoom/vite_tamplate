<!--
 * @Author: zsmya
 * @Date: 2022-04-22 14:48:45
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-22 16:31:31
 * @FilePath: /vite_ts/src/views/Demo/TrangleAngle.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import { onMounted, render } from 'vue'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BufferGeometry,
  Float32BufferAttribute,
  BufferAttribute,
  MeshBasicMaterial,
  Color,
  Mesh,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene: Scene
let renderer: WebGLRenderer
let camera: PerspectiveCamera
onMounted(() => {
  const el: HTMLElement = document.getElementById('trangle-angle') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)
  camera = new PerspectiveCamera(45, width / height, 1, 1000)

  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)

  for (let i = 0; i < 40; i++) {
    const bufferGemotry = new BufferGeometry()
    const gemotryVec = new Float32Array(9)
    for (let j = 0; j < 9; j++) {
      gemotryVec[j] = Math.random() * 30 - 5
    }
    bufferGemotry.setAttribute('position', new BufferAttribute(gemotryVec, 3))
    console.log('bufferGemotry', bufferGemotry)
    const color = new Color(Math.random(), Math.random(), Math.random())
    const material = new MeshBasicMaterial({ color: color })
    const mesh = new Mesh(bufferGemotry, material)
    scene.add(mesh)
  }

  renderer = new WebGLRenderer()

  const orb = new OrbitControls(camera, renderer.domElement)

  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <div id="trangle-angle" class="trangle-angle"></div>
</template>

<style lang="scss" scoped>
.trangle-angle {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
