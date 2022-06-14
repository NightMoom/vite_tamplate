import gasp from "gsap"
import {
  CatmullRomCurve3,
  Vector3,
  TubeBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  TextureLoader,
  Texture,
  RepeatWrapping,
  MirroredRepeatWrapping,
} from "three"
import { getAssetsResource } from "@/utils/index"

const arrowIcon = getAssetsResource("/arrow.png")

export default class FlyLine {
  lineCurve: CatmullRomCurve3
  geometry: TubeBufferGeometry
  material: MeshBasicMaterial
  mesh: Mesh
  texture: Texture
  constructor(point: Array<Vector3>) {
    const linePoints = [new Vector3(0, 0, 0), new Vector3(8, 10, 0), new Vector3(12, 0, 0)] || point
    // 创建曲线
    this.lineCurve = new CatmullRomCurve3(linePoints)
    // 根据曲线生成管道几何体
    this.geometry = new TubeBufferGeometry(this.lineCurve, 100, 10, 2, false)
    //
    const textureLoader = new TextureLoader()

    this.texture = textureLoader.load(arrowIcon)

    this.texture.matrix.identity().scale(0.1, 0.1)
    this.texture.repeat.set(1, 2)
    this.texture.wrapS = RepeatWrapping
    this.texture.wrapT = MirroredRepeatWrapping
    // 设置飞线材质
    this.material = new MeshBasicMaterial({
      // color: 0xfff000,
      map: this.texture,
      transparent: true,
    })

    // 创建飞线物体
    this.mesh = new Mesh(this.geometry, this.material)

    gasp.to(this.texture.offset, {
      x: 12,
      duration: 100,
      repeat: -1,
    })
  }
}
