import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
// import { Environment, Center } from "@react-three/drei";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { MeshTransmissionMaterial, OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
// import CanvasLoader from "./Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Model from "./canvas/model";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
// import { useState, useRef } from "react";
import { Box, Sphere } from "@react-three/drei";
import { SphereGeometry, TextureLoader } from "three";



const CustomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  //

  return (
    <Canvas style={{ position: 'absolute', zIndex: '0' }}
      className="cursor-pointer"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 10, 100], fov: 85 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 6}
        maxAzimuthAngle={Math.PI / 5.5}
        minAzimuthAngle={Math.PI / .6}

      />


      <Model />
      <Floor />
      <Windowall />
      <RightWall />
      <LeftWall />
      <Outside />
      <Window />
      <Sealing />
      <LightSwitch />
      <Preload all />
    </Canvas>
  );
};

export default CustomCanvas;

const Model = ({ isMobile }) => {


  const [computerOn, setOn] = useState(true);
  const modelRef = useRef();

  const [compHover, setCompHower] = useState(false);
  const computerRef = useRef();
  const lightTarget = useRef();
  const table = useLoader(GLTFLoader, './MediumPoly.glb')
  const computer = useLoader(GLTFLoader, "./Low_Poly_Laptop_Gltf/Low_Poly_Laptop.gltf");
  const lamp = useLoader(GLTFLoader, "./Lamp/scene.gltf");
  const bookshelf = useLoader(GLTFLoader, "./Bookshelf/scene.gltf");
  const picture = useLoader(GLTFLoader, "./Picture/scene.gltf");
  const [lightOn, setLightOn] = useState(false);
  function clickHandeler() {

    setOn(!computerOn);

  }
  function lightSwitch(){ setLightOn(!lightOn)}
  return (

    <group ref={modelRef} >
      <ambientLight intensity={computerOn ? .02 : 0}/>
      
      <spotLight
        target={computerRef.current}
        position={[0, 20, -5]}
        angle={Math.PI}
        penumbra={2}
        intensity={computerOn?3: 0}
        castShadow
        shadow-mapSize={[1, 1]}
        distance={50}

      />
      
      <spotLight
        intensity={ lightOn ? 1 : 0 }
        position={[20, 40, 0]}
        angle={Math.PI/4}
        target={lightTarget.current}
      />
      <Box ref={lightTarget} scale={[5,5,5]} position={[30,0,0]} visible={false}>
        <meshBasicMaterial color={'white'} />
      </Box>
      <Box
        ref={computerRef}
        scale={isMobile ? [20, 20, 20] : [61, 36, .8]}
        position={isMobile ? [0, 5, 0] : [0, 20, -7.8]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={computerOn ? "white" : 'gray'} />
      </Box>
      <primitive object={computer.scene}
        onClick={clickHandeler}
        onPointerOver={() => { setCompHower(true) }}
        onPointerOut={() => { setCompHower(false) }}
        
        scale={isMobile ? 7 : 200}
        position={isMobile ? [0, 0, 0] : [0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive object={table.scene}
        scale={isMobile ? 7 : 170}
        position={isMobile ? [0, 0, 0] : [0, -125, 70]}
        rotation={[0, 0, 0]}
      />
        <primitive object={lamp.scene}
        onClick = {lightSwitch}
        scale={isMobile ? 1 : 1}
        position={isMobile ? [0, 0, 0] : [60, 0, 0]}
        rotation={[0, 10, 0]}
      />
        <primitive object={bookshelf.scene}
        
        scale={isMobile ? 1 : 150}
        position={isMobile ? [0, 0, 0] : [-1110, -125, 100]}
        rotation={[0, 0, 0]}
      />
       <primitive object={picture.scene}
        onClick = {lightSwitch}
        scale={isMobile ? 1 : .7}
        position={isMobile ? [0, 0, 0] : [-100, 0, -51]}
        rotation={[0, 4.7, 0]}
      />
    </group>


  );
};

///platform////
const Floor = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/wood_floor.jpg")

  return (
    <group >
      <mesh
        position={isMobile ? [0, -20, 0] : [0, -125.5, 200]}
      >

        <boxGeometry
          args={isMobile ? [50, 2, 30] : [500, 2, 500]}

        />

        <meshStandardMaterial map={texture} />

      </mesh>
    </group>
  )
}
const Sealing = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/wood_floor.jpg")

  return (
    <group >
      <mesh
        position={isMobile ? [0, -20, 0] : [0, 115, 200]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [500, 2, 500]}
        />
        <meshStandardMaterial color={'white'} />
      </mesh>
    </group>
  )
}

const Windowall = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/wallpaper2.jpg")

  return (
    <group >
      <mesh
        position={isMobile ? [0, -20, 0] : [0, -70, -52]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [500, 125, 2]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        position={isMobile ? [0, -20, 0] : [-125, 30, -52]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [250, 75, 2]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        position={isMobile ? [0, -20, 0] : [187.5, 30, -52]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [125, 75, 2]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        position={isMobile ? [0, -20, 0] : [0, 92, -52]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [500, 50, 2]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}
const RightWall = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/wallpaper2.jpg")

  return (
    <group >
      <mesh
        position={isMobile ? [0, -20, 0] : [250, 0, 130]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [2, 250, 400]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>

    </group>
  )
}
const LeftWall = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/wallpaper2.jpg")

  return (
    <group >
      <mesh
        position={isMobile ? [0, -20, 0] : [-250, 0, 130]}
      >
        <boxGeometry
          args={isMobile ? [50, 2, 30] : [2, 250, 400]}

        />
        <meshStandardMaterial map={texture} />
      </mesh>

    </group>
  )
}

const Outside = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/city_background.jpg")
  const bgRef = useRef();
  return (
    <group >


      <mesh position={[400, 0, -300]} ref={bgRef}>
        <spotLight position={[150, 500, -100]} color={'#87b3d4'} intensity={1.5} angle={(Math.PI / 22)} visible={true} target={bgRef.current}/>

        <Box

          args={[1000, 500, 2]}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial map={texture} />

        </Box>

      </mesh>

    </group>
  )
}

const Window = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/city_background.jpg")
  const bgRef = useRef();
  return (
    <group >
      <mesh >
        <Box
          args={[15, 90, 15]}
          position={[-7, 25, -65]}
        >
          <meshStandardMaterial color={'white'} />

        </Box>
      </mesh>
      <mesh >
        <Box
          args={[15, 90, 15]}
          position={[132, 25, -60]}
        >
          <meshStandardMaterial color={'white'} />

        </Box>
      </mesh>
      <mesh >
        <Box
          args={[130, 15, 15]}
          position={[60, -13, -60]}
        >
          <meshStandardMaterial color={'white'} />

        </Box>
      </mesh>
      <mesh >
        <Box
          args={[130, 15, 15]}
          position={[60, 73, -60]}
        >
          <meshStandardMaterial color={'white'} />

        </Box>
      </mesh>
      <mesh >
        <Box
          args={[130, 5, 5]}
          position={[60, 40, -60]}
        >
          <meshStandardMaterial color={'white'} />

        </Box>
      </mesh>

      <mesh >
         <Box
         args={[120, 30, 2]}
         position={[60,55,-60]}
         >
        <MeshTransmissionMaterial color={'#e1f1fc'} opacity={.5} metalness={0.1} roughness={0.2} />
        {/* <hemisphereLight distance={.01} intensity={.1}/> */}
        </Box>
       </mesh>

    </group>
  )
}
const LightSwitch = ({ isMobile }) => {
  const texture = useLoader(TextureLoader, "./Textures/city_background.jpg")
  const bgRef = useRef();
  const [bigLight, setBigLight] = useState(false);
  function bigLightOn(){
    setBigLight(!bigLight);
  }
  return (
    <group
    onClick={bigLightOn}
    >
      <pointLight intensity={bigLight ? .5 : 0} position={[0, 30, 0]} />
      <mesh>
        <Box
          args={[2, 10, 10]}
          position={[249, 10, 0]}
        >
          <meshBasicMaterial color={'gray'} />
        </Box>
      </mesh>
      <mesh>
        <Box
          args={[2, 5, 2]}
          position={[248, 10, 0]}
        >
          <meshBasicMaterial color={'black'} />
        </Box>
      </mesh>
      </group>
  )
}