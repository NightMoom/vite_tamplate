<!--
 * @Author: zsmya
 * @Date: 2022-06-14 09:24:33
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 14:22:35
 * @FilePath: /effect/src/views/RayCaster/EchartsTwo.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import Layout from "@/layout/Index.vue"
import { onMounted, ref } from "vue"
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer"
import { option, eoption } from "./chart"
import { useGlobalProperties } from "@/utils/useCurrentInstance"

let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let labelRenderer: CSS2DRenderer
let mesh: Mesh
const chart = ref(null)

onMounted(() => {
  const { $echarts } = useGlobalProperties()

  const el = chart.value ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0, 0, 0)
  camera.lookAt(scene.position)

  renderer = new WebGLRenderer({
    antialias: true,
  })
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)

  el.appendChild(renderer.domElement)
  mesh = new Mesh()
  // 渲染echarts
  const echartsBox = document.createElement("div")
  echartsBox.style.width = "200px"
  echartsBox.style.height = "140px"

  const echart = $echarts.init(echartsBox)
  echart.setOption(option)

  const texture = echart.getDataURL({
    pixelRatio: 4,
  })
  // const chartDom = new CSS2DObject(echart.getDom())
  // mesh.add(chartDom)
  // scene.add(mesh)

  // labelRenderer = new CSS2DRenderer()
  // labelRenderer.setSize(width, height)
  // labelRenderer.domElement.style.position = "absolute"
  // labelRenderer.domElement.style.top = "0px"
  // el.appendChild(labelRenderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    // labelRenderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <Layout>
    <div id="echarts" ref="chart" class="echarts"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
