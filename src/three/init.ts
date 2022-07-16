/*
 * @Author: zsmya
 * @Date: 2022-07-16 13:38:56
 * @LastEditors: zsmya
 * @LastEditTime: 2022-07-16 16:51:08
 * @FilePath: /vite-three-demo/src/three/init.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { Object3D, PerspectiveCamera, Scene, WebGLRenderer, WebGLRendererParameters } from 'three'

export class initThree {
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  dom: HTMLElement
  constructor(
    el?: HTMLElement,
    config?: WebGLRendererParameters,
    fov?: number,
    near?: number,
    far?: number
  ) {
    // 基础配置文件
    const initParams = {
      el: el ?? document.body,
      config: {
        antialias: config?.antialias ?? true,
        alpha: config?.alpha ?? true,
      },
      fov: fov ?? 45,
      near: near ?? 1,
      far: far ?? 1000,
    }
    const width = initParams.el.clientWidth
    const height = initParams.el.clientHeight

    this.scene = new Scene()

    this.camera = new PerspectiveCamera(
      initParams.fov,
      width / height,
      initParams.near,
      initParams.far
    )

    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    this.dom = initParams.el
  }

  castShaow(mesh: Object3D | Array<Object3D>) {
    if (mesh instanceof Array) {
      mesh.forEach((i) => {
        i.castShadow = true
      })
    } else {
    }
  }
}
