varying vec3 vPosition;
uniform float uHeight;
uniform vec3 uColor;
void main() {
  float gradMix = (vPosition.y + uHeight / 5.0) / uHeight;

  gl_FragColor = vec4(uColor, (1.0 - gradMix) * 0.5);
}