import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Iphone13';
import Model from './Model';
import { Suspense } from 'react';
import {
  Environment,
  OrbitControls,
  Float,
  ContactShadows,
} from '@react-three/drei';
import Features from './Features.jsx';
const Home = () => {
  return (
    <div className=" snap-y snap-mandatory h-screen  overflow-y-scroll overflow-x-hidden">
      <div className="flex snap-center overflow-x-hidden w-screen lg:flex-row flex-col-reverse h-full justify-center items-center">
        <div className="flex flex-col gap-6 text-left justify-center items-start  w-full p-4 lg:pl-20 lg:mr-10">
          <h1 className="lg:text-7xl text-4xl font-bold w-full  text-cyan-700">
            Threejs demo
          </h1>
          <p className="text-lg  font-medium opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            labore, aperiam quo placeat cumque unde voluptates ducimus veniam
            atque in.
          </p>
          <button className="bg-cyan-900 text-white font-semibold px-4 py-2 rounded-lg">
            learn more
          </button>
        </div>
        <Canvas
          // style={{ width: '40vw' }}
          className=" w-1/4 "
          camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 0, 1] }}
          shadows={true}
        >
          <ambientLight intensity={1} />

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
              <Scene className=" scale-75" />
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
      <Features />
    </div>
  );
};

export default Home;
