import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const ShaderArt: React.FC = () => {

  const vs: string = `
  varying vec2 v_uv;

  void main() {
    v_uv = uv;
    //gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = vec4(position, 1.0);

  }
  `;

  const fs: string = `
  uniform float u_time;
  varying vec2 v_uv;

  mat2 rot(float r) {
    return mat2(cos(r), -sin(r), sin(r), cos(r));
  }

  float rand(vec2 p) {
    return fract(sin(dot(p.xy, vec2(12.988, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = v_uv;

    uv.x += u_time / 10.0+sin(u_time)*0.1;

    vec2 i = floor(uv*10.0);

    if(rand(i) < 0.175) {
      uv.xy *= rot(acos(-1.0)/4.0 * 1.0);
    } else if(rand(i) < 0.35) {
      uv.xy *= rot(acos(-1.0)/4.0 * 2.0);
    } else if(rand(i) < 0.525) {
      uv.xy *= rot(acos(-1.0)/4.0 * 3.0);
    } else if(rand(i) < 0.7) {
      uv.xy *= rot(acos(-1.0)/4.0 * 4.0);
    }

    //uv.xy *= rot(u_time/10.0+sin(u_time)*0.05);

    uv.x += u_time / 10.0 * rand(i*30.0);

    float r = rand(i*20.0)*40.0 + 1.0;
    vec2 f = fract(uv*r) - 0.5;

    float d = rand(i*10.0) * 0.25 / length(f.x);

    d = step(0.75, d);

    vec3 color = vec3(0.0, d*rand(i*40.0), d);
    gl_FragColor = vec4(color, 1.0);
  }
  `;

  const mat: THREE.ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: {value: 0}
    },
    vertexShader: vs,
    fragmentShader: fs
  });

  useFrame(({ clock }) => {
    mat.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeBufferGeometry args={[2, 2]} />
      <shaderMaterial attach="material" {...mat} />
    </mesh>
  );
};

export default ShaderArt;