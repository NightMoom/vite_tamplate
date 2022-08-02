/*
 * @Author: zsmya
 * @Date: 2022-08-02 11:39:00
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 11:39:00
 * @FilePath: /vite_vue3_ts/src/utils/ResourceTracker.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

// @ts-nocheck
import { Object3D, Texture, Material } from "three"

// 需要释放资源的对象(Mesh, Geometry, Material, Texture, Object3D)
class ResourceTracker {
  resources: any
  constructor() {
    this.resources = new Set()
  }
  track(resource) {
    // 空判断
    if (!resource) {
      return resource
    }
    // material 和 children 都有可能是数组
    if (Array.isArray(resource)) {
      resource.forEach((resource) => this.track(resource))
      return resource
    }
    if (resource.dispose === "function" || resource instanceof Object3D) {
      this.resources.add(resource)
    }
    if (resource instanceof Object3D) {
      this.track(resource.geometry)
      this.track(resource.material)
      this.track(resource.children)
    } else if (resource instanceof Material) {
      // 遍历材质，找到纹理(Texture)
      for (const value of Object.values(resource)) {
        if (value instanceof Texture) {
          this.track(value)
        }
      }
      if (resource.uniforms) {
        for (const value of Object.values(resource.uniforms)) {
          if (value) {
            const uniformValue = value.value
            // eslint-disable-next-line max-depth
            if (uniformValue instanceof Texture || Array.isArray(uniformValue)) {
              this.track(uniformValue)
            }
          }
        }
      }
    }
    return resource
  }
  untrack(resource: any) {
    this.resources.delete(resource)
  }
  dispose() {
    for (const resource of this.resources) {
      if (resource instanceof Object3D) {
        if (resource.parent) {
          resource.parent.remove(resource)
        }
        if (resource.dispose) {
          resource.dispose()
        }
      }
    }
    this.resources.clear()
  }
}
