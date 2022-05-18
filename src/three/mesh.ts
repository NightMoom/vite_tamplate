/*
 * @Author: zsmya
 * @Date: 2022-05-11 16:39:42
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-18 13:45:01
 * @FilePath: /vite-build-ts/src/three/mesh.ts
 * @Description:
 * Copyright (c) 2022 by zsmya, All Rights Reserved.
 */
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {
  Color,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Scene,
  Material,
  Shader,
  Vector2,
  Vector3,
  DoubleSide,
} from "three"
import gsap from "gsap"
import FlyLine from "./FlyLine"
import FlyLineShader from "./FlyLineShader"
import MeshLine from "./MeshLine"
import LightWall from "./LightWall"
import LightRadar from "./LightRadar"
import AlarmSprite from "./AlarmSprite"

const modifyMaterial = (material: MeshBasicMaterial, mesh: Mesh) => {
  material.onBeforeCompile = (shader, render) => {
    // console.log("shader", shader);
    // const { vertexShader, fragmentShader } = shader;
    gradColor(shader, mesh)
    spreadColor(shader)
    addLightLine(shader)
    addToTopLine(shader)
  }
}
export const gradColor = (shader: Shader, mesh: Mesh) => {
  mesh.geometry.computeBoundingBox()

  if (mesh.geometry.boundingBox) {
    const { max, min } = mesh.geometry.boundingBox
    const uHeight = max.y - min.y

    shader.uniforms.uTopColor = {
      value: new Color("#aaaeff"),
    }
    shader.uniforms.uHeight = {
      value: uHeight,
    }
    shader.vertexShader = shader.vertexShader.replace(
      `#include <common>`,
      `#include <common>
     varying vec3 vPosition;
    `
    )

    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
     vPosition = position;
    `
    )
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `
    #include <common>
    uniform vec3 uTopColor;
    uniform float uHeight;
    varying vec3 vPosition;
    `
    )
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `
    #include <dithering_fragment>
    
    vec4 distGradColor = gl_FragColor;

    float gradMix = (vPosition.y + uHeight / 5.0) / uHeight;

    vec3 gradMixColor = mix(distGradColor.xyz, uTopColor, gradMix);

    gl_FragColor = vec4(gradMixColor, 1);

    // #end#
    `
    )
  }
}
export const spreadColor = (shader: Shader) => {
  // 设置扩散中心点
  shader.uniforms.uSpreadCenter = {
    value: new Vector2(0, 0),
  }
  // 扩散的时间
  shader.uniforms.uSpreadTime = {
    value: 0.0,
  }
  // 设置条带的宽度
  shader.uniforms.uSpreadWidth = {
    value: 1,
  }

  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <common>",
    `
    #include <common>
    uniform vec2 uSpreadCenter;
    uniform float uSpreadTime;
    uniform float uSpreadWidth;
    `
  )
  shader.fragmentShader = shader.fragmentShader.replace(
    "// #end#",
    `
      float spreadRadius = distance(vPosition.xz, uSpreadCenter);
      // 扩散函数
      float spreadIndex = -(spreadRadius - uSpreadTime) * (spreadRadius - uSpreadTime) + uSpreadWidth;
      if (spreadIndex > 0.0) {
        gl_FragColor = mix(gl_FragColor, vec4(1,1,1,1), spreadIndex / uSpreadWidth);
      }
    // #end#
    `
  )
  gsap.to(shader.uniforms.uSpreadTime, {
    value: 20,
    duration: 1,
    ease: "none",
    repeat: -1,
  })
}

export const addLightLine = (shader: Shader) => {
  // 设置扩散中心点
  shader.uniforms.uLightLineCenter = {
    value: new Vector2(0, 0),
  }
  // 扩散的时间
  shader.uniforms.uLightLineTime = {
    value: -30,
  }
  // 设置条带的宽度
  shader.uniforms.uLightLineWidth = {
    value: 3,
  }

  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <common>",
    `
    #include <common>
    uniform float uLightLineTime;
    uniform float uLightLineWidth;
    `
  )
  shader.fragmentShader = shader.fragmentShader.replace(
    "// #end#",
    `
      // 扩散函数
      // float LightLineMix = -(vPosition.x - uLightLineTime) * (vPosition.x - uLightLineTime) + uLightLineWidth; 
      // float LightLineMix = -(vPosition.x + vPosition.z - uLightLineTime) * (vPosition.x + vPosition.z - uLightLineTime) + uLightLineWidth; 
      // float LightLineMix = -(vPosition.x + -vPosition.z - uLightLineTime) * (vPosition.x + -vPosition.z - uLightLineTime) + uLightLineWidth; 


      // float LightLineMix = -(-vPosition.x + -vPosition.z - uLightLineTime) * (-vPosition.x + -vPosition.z - uLightLineTime) + uLightLineWidth; 
      float LightLineMix = -(-vPosition.x + vPosition.z - uLightLineTime) * (-vPosition.x + vPosition.z - uLightLineTime) + uLightLineWidth; 

      if (LightLineMix > 0.0) {
        gl_FragColor = mix(gl_FragColor, vec4(1,0.2,0.3,1), LightLineMix / uLightLineWidth);
      }
    // #end#
    `
  )
  gsap.to(shader.uniforms.uLightLineTime, {
    value: 30,
    duration: 3,
    ease: "none",
    repeat: -1,
  })
}

export const addToTopLine = (shader: Shader) => {
  // 设置扩散中心点
  shader.uniforms.uToTopCenter = {
    value: new Vector2(0, 0),
  }
  // 扩散的时间
  shader.uniforms.uToTopTime = {
    value: 0,
  }
  // 设置条带的宽度
  shader.uniforms.uToTopWidth = {
    value: 10,
  }

  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <common>",
    `
    #include <common>
    uniform float uToTopTime;
    uniform float uToTopWidth;
    `
  )
  shader.fragmentShader = shader.fragmentShader.replace(
    "// #end#",
    `
      // 扩散函数
      float toTopMix = -(vPosition.y - uToTopTime) * (vPosition.y - uToTopTime) + uToTopWidth; 

      if (toTopMix > 0.0) {
        gl_FragColor = mix(gl_FragColor, vec4(0.9,0.9,1 ,1), toTopMix / uToTopWidth);
      }
    // #end#
    `
  )
  gsap.to(shader.uniforms.uToTopTime, {
    value: 10,
    duration: 1,
    ease: "none",
    repeat: -1,
  })
}

export const createCity = (scene: Scene) => {
  const glftLoader = new GLTFLoader()
  glftLoader.load("model/build02.glb", (gltf) => {
    gltf.scene.traverse((i) => {
      if (i instanceof Mesh) {
        const basicMaterial = new MeshBasicMaterial({
          color: new Color(0x0800ff),
        })
        i.material = basicMaterial
        modifyMaterial(basicMaterial, i)
        if (i.name.indexOf("build") > -1) {
          const meshLine = new MeshLine(i.geometry)
          scene.add(meshLine.mesh)
        }
      }
    })
    // gltf.scene.rotation.x = -Math.PI / 2;
    gltf.scene.position.set(0, 0, 0)
    scene.add(gltf.scene)
    // 添加飞线
    // const fly = new FlyLine([new Vector3(0, 0, 0), new Vector3(8, 10, 0), new Vector3(12, 0, 0)])

    // scene.add(fly.mesh)

    const flyLineShader = new FlyLineShader()
    scene.add(flyLineShader.mesh)

    // 光墙
    const lineWall = new LightWall({
      height: 4,
      radialSegments: 32,
      openEnded: true,
      side: DoubleSide,
      position: { x: 0, y: 3, z: 0 },
      color: 0xfff000,
    })

    scene.add(lineWall.mesh)

    // 雷达
    const Lightradar = new LightRadar()
    scene.add(Lightradar.mesh)

    // 精灵图
    const sprite = new AlarmSprite()
    scene.add(sprite.mesh)
    sprite.onClick(function () {
      console.log("click")
    })
  })
}
