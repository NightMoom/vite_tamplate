<!--
 * @Author: zsmya
 * @Date: 2022-06-13 15:52:27
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 16:08:12
 * @FilePath: /effect/src/views/Radar/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from "vue"
import Layout from "@/layout/Index.vue"
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Radar from "@/utils/Radar"
let scene: Scene
let camear: PerspectiveCamera
let renderer: WebGLRenderer
let el: HTMLElement
let axesHelper: AxesHelper
onMounted(() => {
  el = document.getElementById("radar") || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // 初始化相机
  camear = new PerspectiveCamera(45, width / height, 1, 1000)
  camear.position.set(5, 10, 15)
  camear.lookAt(scene.position)

  // 初始化渲染
  renderer = new WebGLRenderer()
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000)

  // 添加雷达
  const radar = new Radar({ radius: 10, color: 0x00efc1 })
  scene.add(radar.mesh)
  // 坐标轴指示器
  axesHelper = new AxesHelper(10)
  scene.add(axesHelper)

  const orb = new OrbitControls(camear, renderer.domElement)
  orb.enableDamping = true

  el.appendChild(renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camear)
  }

  animate()
})

window.addEventListener("resize", () => {
  camear.aspect = el.clientWidth / el.clientHeight
  camear.updateProjectionMatrix()
  renderer.setSize(el.clientWidth, el.clientHeight)
})
</script>

<template>
  <Layout>
    <div id="radar" class="radar"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.radar {
  width: 100%;
  height: 100%;
}
</style>
