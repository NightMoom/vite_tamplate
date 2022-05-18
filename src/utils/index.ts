/**
 * @description 静态资源引用
 */
export const getAssetsResource = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
