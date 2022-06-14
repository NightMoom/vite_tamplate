/*
 * @Author: zsmya
 * @Date: 2022-06-14 17:19:12
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-14 17:19:13
 * @FilePath: /effect/src/views/Model/three/AlarmSprite.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
/*
 * @Author: zsmya
 * @Date: 2022-05-18 11:31:14
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 15:21:53
 * @FilePath: /vite-build-ts/src/three/AlarmSprite.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { Sprite, TextureLoader, SpriteMaterial, Raycaster, Vector2 } from "three"
import camera from "./camera"
export default class AlarmSprite {
  material: SpriteMaterial
  mesh: Sprite
  fns: Function[]
  raycaster: Raycaster
  mouse: Vector2
  constructor() {
    const textureLoader = new TextureLoader()
    const map = textureLoader.load("model/alarm.png")

    this.material = new SpriteMaterial({ map: map })
    this.mesh = new Sprite(this.material)
    this.mesh.position.set(0.5, 6.5, 3)

    this.fns = []
    // 创建射线
    this.raycaster = new Raycaster()
    // 鼠标位置
    this.mouse = new Vector2()
    console.log("this", this.mesh)
    window.addEventListener("click", (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 - 1
      this.raycaster.setFromCamera(this.mouse, camera)

      // 射线检测碰撞
      const intersects = this.raycaster.intersectObject(this.mesh)
      console.log("intersects", intersects)
      // if (intersects.length > 0) {
      //   this.fns.forEach((i) => {
      //     i(e)
      //   })
      // }
      this.fns.forEach((i) => {
        i(e)
      })
    })
  }

  onClick(fn: Function) {
    this.fns.push(fn)
  }
}
