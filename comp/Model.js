import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Model = ({ url, props }) => {
  const modelRef = useRef();
  //   useFrame(() => {
  //     if (!modelRef.current) {
  //       return;
  //     }
  //     modelRef.current.rotation.y += 0.01;
  //   });
  const gltf = useLoader(GLTFLoader, url);
  return (
    <primitive
      castShadow
      reciveShadow
      ref={modelRef}
      object={gltf.scene}
      {...props}
    />
  );
};
export default Model;
