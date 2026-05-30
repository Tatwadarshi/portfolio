import * as THREE from "three"

const HeroLights = () => {
  return (
    <>
        <spotLight 
        intensity={100} 
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        color={"#ffffff"}
         />

        <spotLight 
        intensity={100} 
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        color={"#ff1112"}
         />

        <spotLight 
        intensity={100} 
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        color={"#9d4eed"}
         />

        <primitive 
        object={new THREE.RectAreaLight("#a244ff", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        />

        {/* <pointLight 
        position={[0, 1, 0]}
        intensity={10}
        color={"#7209b7"}
        />
        <pointLight 
        position={[1, 2, -2]}
        intensity={10}
        color={"#0d00a4"}
        /> */}

        {/* <ambientLight intensity={0.4}/> */}


    </>
  )
}

export default HeroLights