<!--
 * @Author: zsmya
 * @Date: 2022-06-13 15:30:22
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-13 15:48:27
 * @FilePath: /effect/src/views/FlyLine/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from "vue"
import Layout from "@/Layout/Index.vue"
import { PerspectiveCamera, Scene, WebGLRenderer, AxesHelper, Color, Vector3 } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import FlyLine from "@/utils/FlyLine"
let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer
let el: HTMLElement
let axesHelper: AxesHelper
let orb: OrbitControls
onMounted(() => {
  el = document.getElementById("fly") ?? document.body
  const width: number = el.clientWidth
  const height: number = el.clientHeight

  //初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(5, 10, 15)
  camera.lookAt(scene.position)

  // 初始化渲染器
  renderer = new WebGLRenderer()
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000)

  // 坐标轴指示器
  axesHelper = new AxesHelper(10)
  scene.add(axesHelper)

  // 轨道控制器
  orb = new OrbitControls(camera, renderer.domElement)
  orb.enableDamping = true

  el.appendChild(renderer.domElement)
  //  添加飞线
  const flyLineCount = 10
  for (let i = 0; i < flyLineCount; i++) {
    // 随机方向
    const f1 = Math.random() * 2 - 1 > 0 ? 1 : -1 // -1 - 1
    const f2 = Math.random() * 2 - 1 > 0 ? 1 : -1 // -1 - 1
    const f3 = Math.random() * 2 - 1 > 0 ? 1 : -1 // -1 - 1
    // 随机颜色
    const r = Math.random()
    const g = Math.random()
    const b = Math.random()
    const color = new Color(r, g, b).getHex()
    const s = Math.random() * 2 - 1
    // 默认初始位置
    const start = new Vector3(f1 * s * 20, f2 * s * 20, f3 * s * 20)
    // 飞线末端
    const e = Math.random() * 2 - 1
    const end = new Vector3(f1 * e * 20 * e, f2 * e * e, f3 * e * 20 * e)
    // 飞线中间
    const c = Math.random() * 2 - 1
    const center = new Vector3(f1 * c * 20 * c, 0, f2 * c * 20 * c)

    const flyLine = new FlyLine([start, center, end], color, 1000)

    scene.add(flyLine.mesh)
  }
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
})

window.addEventListener("resize", () => {
  camera.aspect = el.clientWidth / el.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(el.clientWidth, el.clientHeight)
})
</script>

<template>
  <Layout>
    <div id="fly" class="fly-line"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.fly-line {
  width: 100%;
  height: 100%;
}
</style>
