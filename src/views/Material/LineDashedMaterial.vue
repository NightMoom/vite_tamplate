<!--
 * @Author: zsmya
 * @Date: 2022-04-19 09:48:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 17:03:48
 * @FilePath: /vite_ts/src/views/Material/LineDashedMaterial.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  LineDashedMaterial,
  LineSegments,
  Vector3,
  CatmullRomCurve3,
  BufferGeometry,
  Line,
  Group,
} from 'three'
import { StatsModule } from '@/utils/stats'
import gemotryUtil from '@/gemotry/gemotry'
let renderer: WebGLRenderer
let camera: PerspectiveCamera
let scene: Scene
onMounted(() => {
  const el: HTMLElement = document.getElementById('line-dashed') || document.body
  const width = el.clientWidth
  const height = el.clientHeight

  // 初始化场景
  scene = new Scene()
  scene.position.set(0, 0, 0)

  // 初始化相机
  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(100, 100, 100)
  camera.lookAt(scene.position)

  // 创建gemotry
  const geometryModule = new gemotryUtil()
  const geometryBox = geometryModule.createBoxBuffer(25, 25, 25)
  const points = geometryModule.hilbert3D(new Vector3(0, 0, 0), 25.0, 1, 0, 1, 2, 3, 4, 5, 6, 7)
  const spline = new CatmullRomCurve3(points)
  const samples = spline.getPoints(points.length * 1)
  const geometrySpline = new BufferGeometry().setFromPoints(samples)

  const line = new Line(
    geometrySpline,
    new LineDashedMaterial({ color: 0x0ff00ff, dashSize: 1, gapSize: 0.5 })
  )
  line.computeLineDistances()
  // scene.add(line)

  const lineSegments = new LineSegments(
    geometryBox,
    new LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
  )
  lineSegments.computeLineDistances()
  // scene.add(lineSegments)
  const group = new Group()
  group.add(line)
  group.add(lineSegments)
  scene.add(group)
  renderer = new WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const stats = new StatsModule(el, 0)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    group.rotation.x += 0.005
    group.rotation.y += 0.005
    group.rotation.z += 0.005
    stats.update()
  }
  animate()
})
</script>

<template>
  <div id="line-dashed" class="line-dashed"></div>
</template>

<style lang="scss" scoped>
.line-dashed {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
