import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Scene } from '../public/model/iphone/Scene';
import Model from './Model';
import { Suspense } from 'react';
import {
  Environment,
  OrbitControls,
  Float,
  ContactShadows,
} from '@react-three/drei';
const Home = () => {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col gap-6 text-left justify-center items-start w-1/3">
          <h1 className="text-7xl font-bold w-full text-cyan-800">
            Threejs demo
          </h1>
          <p className="text-lg  font-medium opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            labore, aperiam quo placeat cumque unde voluptates ducimus veniam
            atque in.
          </p>
          <button className="bg-cyan-700 text-white font-semibold px-4 py-2 rounded-lg">
            learn more
          </button>
        </div>
        <Canvas
          style={{ width: '40vw' }}
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 1] }}
          shadows={true}
          colormanagement="true"
          shadowmap
        >
          <ambientLight intensity={0.1} />

          <pointLight position={[0, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Float
              speed={6} // Animation speed, defaults to 1
              rotationIntensity={1} // XYZ rotation intensity, defaults to 1
              floatIntensity={1}
              floatingRange={[-0.05, 0.05]}

              // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <Scene />
            </Float>
            <ContactShadows
              opacity={1}
              scale={10}
              blur={0.8}
              position={[0, -0.6, 0]}
              resolution={2048}
              color="#000000"
              radius={4}
            />
            <OrbitControls />
            {/* <Environment preset="forest" blur={0.3} background /> */}
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Home;
