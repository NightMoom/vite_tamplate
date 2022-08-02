/*
 * @Author: zsmya
 * @Date: 2022-08-02 15:19:38
 * @LastEditors: zsmya
 * @LastEditTime: 2022-08-02 15:47:51
 * @FilePath: /effect/src/three/helper/loader.ts
 * @Description: 加载器
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */

import { LoadingManager, TextureLoader } from "three"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
/**
 * @description 创建加载管理器
 */
export const createManager = () => {
  const manager = new LoadingManager()
  return manager
}

/**
 * @description 异步加载glb/gltf模型 模型最终的路径将有 prefix+path
 * @param {String} path 模型路径
 * @param {String} prefix 公共路径
 * @param {LoadingManager} manager 加载管理器
 */
export const loadAsyncGLTF = async (path: string, prefix = "", manager?: LoadingManager) => {
  return new GLTFLoader(manager).setPath(prefix).loadAsync(path)
}

/**
 * @description 异步加载texture纹理
 * @param {String} path 模型路径
 * @param {String} prefix 公共路径
 * @param {LoadingManager} manager 加载管理器
 */
export const loadAsyncTexture = async (path: string, prefix = "", manager?: LoadingManager) => {
  return new TextureLoader(manager).setPath(prefix).loadAsync(path)
}

/**
 * @description 被压缩的模型加载
 * @description 异步加载glb/gltf模型 模型最终的路径将由 prefix+path
 * @param {String} path 模型路径
 * @param {String} prefix 公共路径
 * @param {LoadingManager} manager 加载管理器
 */
export const loadAsyncGLTFByDRACOl = async (
  path: string,
  prefix = "",
  manager?: LoadingManager
) => {
  // eslint-disable-next-line
  return new GLTFLoader(manager).setDRACOLoader(new DRACOLoader()).setPath(prefix).loadAsync(path)
}
