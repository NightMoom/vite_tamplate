<!--
 * @Author: zsmya
 * @Date: 2022-05-17 10:23:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 14:36:38
 * @FilePath: /vite-build-ts/src/views/Login/Scene.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted, ref } from "vue"
import { WebGLRenderer, AxesHelper, PerspectiveCamera, Scene } from "three"
import { createCity } from "@/three/mesh"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import camera from "@/three/camera"
import scene from "@/three/scene"
const sceneBox = ref(null)
// import axes from "@/utils/helper/Axes";

let renderer: WebGLRenderer

onMounted(() => {
  const el = sceneBox.value || document.body
  const width = el.clientWidth
  const height = el.clientHeight
  // 初始化场景
  scene.position.set(0, 0, 0)
  // 初始化相机
  camera.position.set(10, 20, 30)

  const axesHelper = new AxesHelper(100)
  scene.add(axesHelper)

  renderer = new WebGLRenderer()
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)
  createCity(scene)
  const orb = new OrbitControls(camera, renderer.domElement)
  orb.enableDamping = true
  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener("resize", () => {
    camera.aspect = el.clientWidth / el.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(el.clientWidth, el.clientHeight)
  })
})
</script>

<template>
  <div id="scene" ref="sceneBox"></div>
</template>

<style lang="scss" scoped>
#scene {
  width: 100vw;
  height: 100vh;
}
</style>
