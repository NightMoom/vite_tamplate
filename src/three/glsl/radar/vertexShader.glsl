varying vec2 vUv;

void main() {
  vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);
  gl_Position = projectionMatrix * viewPostion;

  vUv = uv;
}