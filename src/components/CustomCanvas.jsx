import { Canvas } from "@react-three/fiber";
// import { Environment, Center } from "@react-three/drei";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "./Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Model from "./canvas/model";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
// import { useState, useRef } from "react";
import { Box, Sphere } from "@react-three/drei";


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
      <Canvas style={{ position:'absolute', zIndex:'0'}}
        className="cursor-pointer"
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 10, 100], fov: 85 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
          />
          
        
          <Model />
   
        <Preload all />
      </Canvas>
    );
  };
  
  export default CustomCanvas;

  const Model = ({ isMobile }) => {
    //   const computer = useGLTF(GLTFLoader,"./desktop_pc/scene.gltf");

    const [computerOn, setOn] = useState(false);
    const modelRef = useRef();
    // var startTime = performance.now();
    // useFrame(()=>{
    //     if (isClicked){
    //     const elapsedTime = startTime-performance.now();
    //     modelRef.current.scale.x = 1 + Math.sin(elapsedTime) * 0.005;
    //     modelRef.current.scale.y = 1 + Math.sin(elapsedTime) * 0.005;
    //     modelRef.current.scale.z = 1 + Math.sin(elapsedTime) * 0.005;
    //     }
    // })
    const [compHover, setCompHower] = useState(false);
    const computerRef = useRef();
    const table = useLoader (GLTFLoader, './MediumPoly.glb')
    const computer = useLoader(GLTFLoader, "./Low_Poly_Laptop_Gltf/Low_Poly_Laptop.gltf");
    function clickHandeler() {

        setOn(!computerOn);

    }
    return (
        
        <group ref={modelRef} >
            <hemisphereLight intensity={compHover||computerOn? 1 : 0.1} position={[0,5,0]} />
            <spotLight
                position={[0, 0, 5]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}

            />
            <pointLight intensity={computerOn ? 2 : 0} position={[0,5,0]}/>
            <spotLight 
            intensity={computerOn ?2 :0}
            position={[0,10,0]}
            angle={3}
            target={computerRef.current}
            />
            <Box
            scale={isMobile ? [20, 20, 20] : [61, 36, .8]}
            position={isMobile ? [0, 5, 0] : [0, 20, -7.8]}
            rotation={[0, 0, 0]}
            >
            <meshStandardMaterial color={computerOn ? "white" : 'gray'}/>
            </Box>
            <primitive object={computer.scene}
            onClick={clickHandeler}
            onPointerOver={()=>{setCompHower(true)}}
            onPointerOut={()=>{setCompHower(false)}}
              ref={computerRef}
                scale={isMobile ? 7 : 200}
                position={isMobile ? [0, 0, 0] : [0, 0, 0]}
                rotation={[0, 0, 0]}
            />
             <primitive object={table.scene}
                scale={isMobile ? 7 : 170}
                position={isMobile ? [0, 0, 0] : [0, -125, 70]}
                rotation={[0, 0, 0]}
            />
        </group>
        
        
    );
};

