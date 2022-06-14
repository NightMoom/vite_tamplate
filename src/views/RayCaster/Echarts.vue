<!--
 * @Author: zsmya
 * @Date: 2022-06-14 09:07:31
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 10:45:11
 * @FilePath: /effect/src/views/RayCaster/Echarts.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->

<script setup lang="ts">
import Layout from "@/layout/Index.vue"
import { onMounted, ref } from "vue"
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
  Texture,
  CanvasTexture,
  TextureLoader,
  DoubleSide,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useGlobalProperties } from "@/utils/useCurrentInstance"
import { option, eoption } from "./chart"
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let plane: PlaneBufferGeometry
let mesh: Mesh
let orb: OrbitControls
let axesHelper: AxesHelper
const box = ref(null)
const targ = ref(null)
onMounted(() => {
  const { $echarts } = useGlobalProperties()

  // dialog-init
  console.log("echart", targ)
  const dialogChart = $echarts.init(targ.value)
  dialogChart.setOption(option)

  const el = box.value ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight
  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(5, 10, 15)
  camera.lookAt(scene.position)
  axesHelper = new AxesHelper(10)
  scene.add(axesHelper)

  // 渲染echarts
  const ctx = document.createElement("canvas")
  ctx.width = 400
  ctx.height = 240

  // const ctxTexture = new CanvasTexture(ctx)
  const chart = $echarts.init(ctx)

  chart.setOption(option)
  const ctxTexture = chart.getDataURL({
    pixelRatio: 4,
    backgroundColor: "#fff",
  })
  const loaderTexture = new TextureLoader().load(ctxTexture)
  console.log(loaderTexture)
  // ctxTexture.needsUpdate = true
  // chart.on("mouseover", () => {
  //   ctxTexture.needsUpdate = true
  // })
  // chart.on("mouseout", () => {
  //   ctxTexture.needsUpdate = true
  // })
  const _thisCanvas =
    document.getElementById("targ")?.getElementsByTagName("canvas")[0] ??
    document.createElement("canvas")
  console.log("_thisCanvas", _thisCanvas)
  const _thisTexture = new CanvasTexture(_thisCanvas)
  plane = new PlaneBufferGeometry(20, 10, 1)
  const material = new MeshBasicMaterial({
    map: _thisTexture,
    transparent: true,
    opacity: 1,
    side: DoubleSide,
  })
  material.needsUpdate = true
  mesh = new Mesh(plane, material)
  scene.add(mesh)

  renderer = new WebGLRenderer({
    antialias: true,
  })
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)

  el.appendChild(renderer.domElement)
  orb = new OrbitControls(camera, renderer.domElement)
  orb.enableDamping = true
  const animte = () => {
    requestAnimationFrame(animte)
    renderer.render(scene, camera)
  }

  animte()
})

const show = ref(true)
</script>

<template>
  <Layout>
    <div id="echarts" ref="box" class="echarts">
      <div id="targ" ref="targ" style="width: 300px; height: 140px"></div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
