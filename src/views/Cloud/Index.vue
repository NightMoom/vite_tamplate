<!--
 * @Author: zsmya
 * @Date: 2022-06-14 15:26:28
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 15:51:09
 * @FilePath: /effect/src/views/Cloud/Index.vue
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
-->
<script setup lang="ts">
import Layout from "@/layout/Index.vue"
import { onMounted, ref, onBeforeUnmount } from "vue"
import * as dat from "dat.gui"
import StatsModule from "@/utils/StatsModule"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  DoubleSide,
  Clock,
  Color,
  ShaderMaterial,
  AxesHelper,
} from "three"
import CloudVectex from "./glsl/vectex.glsl?raw"
import CloudFragment from "./glsl/fragment.glsl?raw"
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let orb: OrbitControls
let axesHelper: AxesHelper
const cloud = ref(null)
const gui = new dat.GUI()
onMounted(() => {
  const el: HTMLElement = cloud.value ?? document.body
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new Scene()
  scene.position.set(0, 0, 0)

  camera = new PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0.7, 0.3, 0.7)
  camera.lookAt(scene.position)

  const stats = new StatsModule(0, el)
  stats.stats.dom.style.left = "100px"

  axesHelper = new AxesHelper(10)
  scene.add(axesHelper)

  const params = {
    uWaresFrequency: 14,
    uScale: 0.034,
    uXzScale: 1.6,
    uNoiseFrequency: 10,
    uNoiseScale: 1.7,
    uTime: 0,
    uLowColor: "#df80e6",
    uHighColor: "#ff0000",
    uXspeed: 1,
    uZspeed: 1,
    uNouseSpeed: 2.1,
    uOpacity: 1,
  }
  const shaderMaterial = new ShaderMaterial({
    vertexShader: CloudVectex,
    fragmentShader: CloudFragment,
    side: DoubleSide,
    transparent: true,
    uniforms: {
      uWaresFrequency: {
        value: params.uWaresFrequency,
      },
      uScale: {
        value: params.uScale,
      },
      uXzScale: {
        value: params.uXzScale,
      },
      uNoiseFrequency: {
        value: params.uNoiseFrequency,
      },
      uNoiseScale: {
        value: params.uNoiseScale,
      },
      uTime: {
        value: params.uTime,
      },
      uLowColor: {
        value: new Color(params.uLowColor),
      },
      uHighColor: {
        value: new Color(params.uHighColor),
      },
      uXspeed: {
        value: params.uXspeed,
      },
      uZspeed: {
        value: params.uZspeed,
      },
      uNouseSpeed: {
        value: params.uNouseSpeed,
      },
      uOpacity: {
        value: params.uOpacity,
      },
    },
  })
  const panel = new PlaneGeometry(1, 1, 1024, 1024)
  const mesh = new Mesh(panel, shaderMaterial)
  mesh.rotation.x = -Math.PI / 2
  scene.add(mesh)
  gui
    .add(params, "uWaresFrequency")
    .min(1)
    .max(100)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uWaresFrequency.value = value
    })
  gui
    .add(params, "uScale")
    .min(0)
    .max(0.2)
    .step(0.001)
    .onChange((value) => {
      shaderMaterial.uniforms.uScale.value = value
    })
  gui
    .add(params, "uNoiseFrequency")
    .min(1)
    .max(100)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNoiseFrequency.value = value
    })
  gui
    .add(params, "uNoiseScale")
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNoiseScale.value = value
    })
  gui
    .add(params, "uXzScale")
    .min(1)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uXzScale.value = value
    })
  gui.addColor(params, "uLowColor").onFinishChange((value) => {
    shaderMaterial.uniforms.uLowColor.value = new Color(value)
  })
  gui.addColor(params, "uHighColor").onFinishChange((value) => {
    shaderMaterial.uniforms.uHighColor.value = new Color(value)
  })
  gui
    .add(params, "uXspeed")
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uXspeed.value = value
    })
  gui
    .add(params, "uZspeed")
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uZspeed.value = value
    })
  gui
    .add(params, "uNouseSpeed")
    .min(0)
    .max(5)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uNouseSpeed.value = value
    })
  gui
    .add(params, "uOpacity")
    .min(0)
    .max(1)
    .step(0.1)
    .onChange((value) => {
      shaderMaterial.uniforms.uOpacity.value = value
    })
  renderer = new WebGLRenderer({
    antialias: true,
  })
  renderer.setClearColor(0x000000)
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)
  orb = new OrbitControls(camera, renderer.domElement)
  orb.enableDamping = true
  const clock = new Clock()
  const animate = () => {
    const time = clock.getElapsedTime()
    shaderMaterial.uniforms.uTime.value = time
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    stats.update()
  }
  animate()
})
onBeforeUnmount(() => {
  gui.destroy()
})
window.addEventListener("resize", () => {
  const el = cloud.value ?? document.body
  camera.aspect = el.clientWidth / el.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(el.clientWidth, el.clientHeight)
})
</script>

<template>
  <Layout>
    <div id="cloud" ref="cloud" class="cloud"></div>
  </Layout>
</template>

<style lang="scss" scoped>
.cloud {
  width: 100%;
  height: 100%;
}
</style>
