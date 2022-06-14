varying vec3 vPosition;
void main() {
  vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);
  gl_Position = projectionMatrix * viewPostion;
  vPosition = position;
}