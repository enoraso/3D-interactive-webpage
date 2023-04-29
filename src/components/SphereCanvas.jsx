import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";
import { Box, Sphere } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const SphereCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas style={{height: isMobile? '100vh':'100%', zIndex: '0' }}
      className="cursor-pointer"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 50, 75], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <OrbitControls/> */}
      <ReactCube isMobile={isMobile}/>
      <ThreeCube isMobile={isMobile} />
      <Platform isMobile={isMobile}/>
      <ViteCube isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};
export default SphereCanvas;
/// react cube ///
const ReactCube = ({isMobile}) => {
  const logoObj = useLoader(GLTFLoader, "./logos/React.gltf");
  const sphereRef = useRef();
  const [hoverOn, setHover] = useState(false);
  return (
    <group >
      <hemisphereLight intensity={1.2} /> 
      <pointLight intensity={hoverOn ? 3 : 1} position={[-30, 30, 0]} />
       <spotLight
        target={sphereRef.current}
        position={[-30, 50, 10]}
        angle={0.5}
        penumbra={1.5}
        intensity={hoverOn ? 10 : 1}
        castShadow
        shadow-mapSize={1024}

      />
      <mesh
      onClick={()=>{handleClicks}}
        
      onPointerOver={()=>{setHover(true)}}
      onPointerOut={()=>{setHover(false)}}
      >
        <Box
        ref={sphereRef}
            scale={isMobile ?[7, 7, 7]:[10,10,10]}
            position={ isMobile ? [0, 10 ,20] : [-30, 20, 10]}
            >
        <meshStandardMaterial color={hoverOn ?'green' : 'black'}/>
        </Box>
        <primitive object={logoObj.scene}
          scale={isMobile ? 20 : 30}
          position={isMobile ? [0, 7 ,23.3] :[-30, 15.5,15]}
          rotation={[0, 0, 0]}
        />
      </mesh>

    </group>
  )
}
///// three cube ////
const ThreeCube = ({isMobile}) => {
  const logoObj = useLoader(GLTFLoader, "./logos/Three.glb");
  const sphereRef = useRef();
  const [hoverOn, setHover] = useState(false);
  return (
    <group >
      <hemisphereLight intensity={0.2} />
      <spotLight
          target={sphereRef.current}
          position={[0, 50, 10]}
          angle={0.5}
          penumbra={1.5}
          intensity={hoverOn ? 10 : 1}
          castShadow={true}
          shadow-mapSize={1024}
      />
      <pointLight intensity={hoverOn ? 3 : 1} position={[20, 30, 0]} />
      <mesh
      shadows={true}
      onClick={()=>{handleClicks}}
        
      position={[0,0,0]}
      onPointerOver={()=>{setHover(true)}}
      onPointerOut={()=>{setHover(false)}}
      >
        <Box
            ref={sphereRef}
            scale={isMobile ?[7, 7, 7]: [10, 10, 10]}
            position={ isMobile ? [0, 17, 13]:[0, 20, 10]}
            
            >
        <meshStandardMaterial color={hoverOn ?'#3a3a3a' : '#1a1a1a'}/>
        </Box>
        <primitive object={logoObj.scene}
          scale={isMobile?16:24}
          position={isMobile?[0,14,16.3]:[0, 15.3,15]}
          rotation={[0, 0, 0]}
        />
      </mesh>

    </group>
  )
}
///// Vite cube ////
const ViteCube = ({isMobile}) => {
  const logoObj = useLoader(GLTFLoader, "./logos/Vite.glb");
  const sphereRef = useRef();
  const [hoverOn, setHover] = useState(false);
  return (
    <group >
      <hemisphereLight intensity={3.2} /> 
      <pointLight intensity={hoverOn ? 3 : 1} position={[-30, 30, 0]} />
       <spotLight
        target={sphereRef.current}
        position={[30, 50, 10]}
        angle={0.5}
        penumbra={1.5}
        intensity={hoverOn ? 10 : 1}
        castShadow
        shadow-mapSize={1024}

      />
      <mesh
      onClick={()=>{handleClicks}}
        
      onPointerOver={()=>{setHover(true)}}
      onPointerOut={()=>{setHover(false)}}
      >
        <Box
        ref={sphereRef}
            scale={isMobile ?[7, 7, 7]: [10, 10, 10]}
            position={ isMobile ? [0, 3 ,27] : [30, 20, 10]}
            >
        <meshStandardMaterial color={hoverOn ?'darkblue' : 'black'}/>
        </Box>
        <primitive object={logoObj.scene}
          scale={isMobile?16:23}
          position={isMobile ? [0, 0 ,30.5] :[30, 15.5,14.5]}
          rotation={[0.2, 0, 0]}
        />
      </mesh>

    </group>
  )
}
///platform////
const Platform = ({ isMobile }) => {

  return (
    <group >
      <mesh
      >
        <hemisphereLight intensity={.5} />
        <pointLight intensity={1} position={[0, 20 ,0]} />
        <Box
            scale={isMobile ? [50, 2, 30] : [100, 2, 30]}
            position={ isMobile ? [0, -20, 0] : [0, 5, 0]}
            >
        <meshStandardMaterial color={'#393531'}/>
        </Box>
      </mesh>
    </group>
  )
}