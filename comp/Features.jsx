import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Scene } from './Iphone14';
import {
  ContactShadows,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);
  const data = useScroll();
  const iphoneBig = useRef();
  const iphoneSmall = useRef();
  const [bigX, setBigX] = useState(0);
  const [smallX, setSmallX] = useState(-0.1);

  useEffect(() => {
    if (!iphoneSmall.current) {
      return;
    }
    iphoneSmall.current.rotation.y = 3.15;
  }, []);
  const handleScroll = () => {
    setBigX(window.scrollY);
  };

  return (
    <div id="wrapper" className="h-screen  bg-red-200 w-screen">
      <div
        id="iphoneScene"
        className="h-screen w-screen justify-center items-center sticky top-0 bg-black"
      >
        <Canvas
          // style={{ width: '40vw' }}
          className=" w-1/3  flex"
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0.55] }}
          shadows={true}
        >
          <ambientLight intensity={1} />

          <pointLight position={[0, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            {/* <Scene className=" scale-50" x={2} y={2} z={2} /> */}
            <ScrollControls pages={2}>
              {/* <Scroll> */}
              <Scene propx={0.05} propy={0} propz={-0.1} direction="left" />

              <Scene
                propx={-0.05}
                propy={0}
                propz={0.1}
                turned
                direction="right"
              />
              {/* </Scroll> */}
            </ScrollControls>

            {/* <OrbitControls /> */}
            {/* <ContactShadows
            opacity={1}
            scale={10}
            blur={0.8}
            position={[0, -0.6, 0]}
            resolution={2048}
            color="#000000"
            radius={4}
        /> */}
            {/* <Environment preset="forest" blur={0.3} background /> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Features;
