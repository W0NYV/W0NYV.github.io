import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';

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
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  varying vec2 v_uv;

  mat2 rot(float r) {
    return mat2(cos(r), -sin(r), sin(r), cos(r));
  }

  float rand(vec2 p) {
    return fract(sin(dot(p.xy, vec2(12.988, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);

    uv *= 2.5 + (u_mouse.x*4.0);

    uv.y += u_mouse.y * 2.0;

    uv.x += u_time / 2.0 + sin(u_time)*0.1;

    vec2 i = floor(uv);

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

    uv.x += u_time / 3.0 * rand(i*30.0);

    float r = rand(i*20.0)*7.0 + 1.0;
    vec2 f = fract(uv*r) - 0.5;

    float d;
    if(rand(i) < 0.85) {
      d = rand(i*10.0) * 0.35 / length(f.x);
    } else {
      d = rand(i*10.0) * 0.35 / length(f);
    }

    d = step(0.75, d);

    vec3 color = vec3(d*(rand(i*40.0)*0.3+0.2));
    gl_FragColor = vec4(color, 1.0);
  }
  `;

  const mat: THREE.ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: {value: 0},
      u_mouse: {value: [0, 0]},
      u_resolution: {value: [0, 0]}
    },
    vertexShader: vs,
    fragmentShader: fs
  });

  useFrame(({ clock }) => {
    mat.uniforms.u_time.value = clock.getElapsedTime();
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      //正規化したものを渡す
      mat.uniforms.u_mouse.value = [event.clientX / document.documentElement.clientWidth, event.clientY / document.documentElement.clientHeight];
    };

    window.addEventListener('mousemove', handleMouseMove);

    mat.uniforms.u_resolution.value = [document.documentElement.clientWidth, document.documentElement.clientHeight];

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <mesh>
      <planeBufferGeometry args={[2, 2]} />
      <shaderMaterial attach="material" {...mat} />
    </mesh>
  );
};

export default ShaderArt;