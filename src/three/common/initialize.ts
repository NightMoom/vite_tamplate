/*
 * @Author: zsmya
 * @Date: 2022-08-01 18:28:09
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 16:22:30
 * @FilePath: /vite_vue3_ts/src/three/common/initialize.ts
 * @Description: 初始化
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import {
  PerspectiveCamera,
  WebGLRenderer,
  WebGLRendererParameters,
  ColorRepresentation,
  Scene,
  Camera,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

/***
 * @description 初始化相机
 * @param {HTMLElement} el 渲染的dom节点
 * @param {Number} fov 视角
 * @param {Number} near 近点
 * @param {Number} far 远点
 */
const initCamera = (el: HTMLElement, fov?: number, near?: number, far?: number) => {
  const width = el.clientWidth
  const height = el.clientHeight
  const camera = new PerspectiveCamera(fov ?? 45, width / height, near ?? 1, far ?? 1000)

  return camera
}

/**
 * @descritpion 初始化渲染器
 * @param {HTMLElement} el 渲染的dom节点
 * @param {ColorRepresentation} color 背景色
 * @param {WebGLRendererParameters} config 其余配置参数
 */
const initRenderer = (
  el: HTMLElement,
  color?: ColorRepresentation,
  config?: WebGLRendererParameters
): WebGLRenderer => {
  const width = el.clientWidth
  const height = el.clientHeight

  const renderer = new WebGLRenderer(config)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(color ?? 0x000000)
  renderer.setSize(width, height)

  return renderer
}

/**
 * @description 初始化场景
 */
const initScene = () => {
  return new Scene()
}

/**
 * @description 初始化轨道控制器
 * @param {Camera} camera 相机
 * @param {domElement} HTMLElement dom节点
 */
const initOrbControl = (camera: Camera, domElement: HTMLElement) => {
  const orbControl = new OrbitControls(camera, domElement)

  return orbControl
}

export { initScene, initCamera, initRenderer, initOrbControl }
