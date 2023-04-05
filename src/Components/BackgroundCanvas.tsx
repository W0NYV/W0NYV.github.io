import ShaderArt from '../Components/ShaderArt';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const BackgroundCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full -z-10">
      <Canvas camera={{fov: 45, near: 0.1, far: 1000, position: [0, 0, 5]}}>
      {/* <Canvas orthographic camera={{left:-1, right:1, top:1, bottom:-1, near:-1, far:1}}> */}
        <ShaderArt />
      </Canvas>
    </div>   
  );
};

export default BackgroundCanvas;

// left: -1,
// right: 1,
// top: 1,
// bottom: 1,
// near: 0,
// far: -1