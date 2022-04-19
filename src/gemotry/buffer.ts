/*
 * @Author: zsmya
 * @Date: 2022-04-19 11:25:59
 * @LastEditors: zsmya
 * @LastEditTime: 2022-04-19 11:34:49
 * @Description: 部分图形顶点坐标
 * @FilePath: /vite_ts/src/gemotry/buffer.ts
 */

/**
 * @description 矩形顶点坐标
 * @description 以正方体作为基准
 * { width, height, depth }
 */
export const boxBuffer = [
  [-1, -1, -1],
  [-1, 1, -1],
  [-1, 1, -1],
  [1, 1, -1],
  [1, 1, -1],
  [1, -1, -1],
  [1, -1, -1],
  [-1, -1, -1],
  [-1, -1, 1],
  [-1, 1, 1],
  [-1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, -1, 1],
  [1, -1, 1],
  [-1, -1, 1],
  [-1, -1, -1],
  [-1, -1, 1],
  [-1, 1, -1],
  [-1, 1, 1],
  [1, 1, -1],
  [1, 1, 1],
  [1, -1, -1],
  [1, -1, 1],
]
