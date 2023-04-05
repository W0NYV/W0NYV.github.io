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

  void main() {
    vec2 uv = v_uv;
    vec3 color = vec3(uv, fract(u_time));
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