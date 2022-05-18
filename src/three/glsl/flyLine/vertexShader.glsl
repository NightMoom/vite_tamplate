attribute float flySize;
varying float vSize;

uniform float uTime;
uniform vec3 uColor;
uniform float uLength;
void main () {
  
  vec4 viewPostion = viewMatrix * modelMatrix * vec4(position, 1);

  gl_Position = projectionMatrix * viewPostion;
  vSize = (flySize - uTime);
  if (vSize < 0.0) {
    vSize = vSize + uLength;
  }
  vSize =  (vSize - 500.0) * 0.1;
  // vSize = vSize * 0.1;
  gl_PointSize = - vSize / viewPostion.z;
}
