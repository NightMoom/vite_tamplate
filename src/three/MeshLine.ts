import { EdgesGeometry, LineBasicMaterial, LineSegments } from "three"

export default class MeshLine {
  material: LineBasicMaterial
  mesh: LineSegments<EdgesGeometry<any>, LineBasicMaterial>
  geometry: EdgesGeometry<any>
  constructor(geometry) {
    const edges = new EdgesGeometry(geometry)
    this.material = new LineBasicMaterial({
      color: 0xffffff,
    })
    const line = new LineSegments(edges, this.material)
    this.geometry = edges
    this.mesh = line
  }
}
