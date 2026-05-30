import React, { useEffect, useRef, useState } from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'  
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { asset_server_base_url } from '../../../constants'


const RotatingModel = ({ model, scene }) => {
  const groupRef = useRef()
  const [hovered, setHover] = useState(false)

  // useFrame now safely runs INSIDE the Canvas context
  useFrame((state, delta) => {
    if (groupRef.current && hovered) {
      groupRef.current.rotation.y += delta * 5
      // groupRef.current.rotation.x += delta * 0.5 
    }
  })

  return (
    // <Float speed={10} rotationIntensity={0.8}>
      <group ref={groupRef} scale={model.scale} rotation={model.rotation} onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
        <primitive object={scene} />
      </group>
    // </Float>
  )
}

const TechIcon = ({ model }) => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, { 
        y: 0,
        opacity: 1, 
        duration: 1,
        ease: 'power3.inOut', 
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        }
     })
  })
  
  const { scene } = useGLTF(asset_server_base_url + model.modelPath)

  useEffect(() => {
    if (model.modelPath === asset_server_base_url + "/models/three.js-logo.glb") {
        scene.traverse((child) => {
            if (child.isMesh && child.name === "Object_5") {
                child.material = new THREE.MeshStandardMaterial({ color: 'white'})
                child.material.opacity = 0.8
            }
        })
    }

    if (model.modelPath === asset_server_base_url + "/models/blender-logo.glb") {
        scene.traverse((child) => {
            if (child.isMesh) {
              if(child.name == "blue"){
                child.material = new THREE.MeshStandardMaterial({ color: '#265787'})
                child.material.opacity = 0.8
              }
              if(child.name == "white"){
                child.material = new THREE.MeshStandardMaterial({ color: 'white'})
                child.material.opacity = 0.8
              }
              if(child.name == "brown"){
                child.material = new THREE.MeshStandardMaterial({ color: '#EA7600'})
                child.material.opacity = 0.8
              }
            }
        })
    }
  }, [scene])

  return (
    <Canvas> 
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />

        <OrbitControls enableZoom={false} enablePan={false} />

        <Float speed={10} rotationIntensity={0.8}>
            <group scale={model.scale} rotation={model.rotation}  >
                <primitive object={scene}/>
            </group>
        </Float>

        {/* <RotatingModel model={model} scene={scene} /> */}
    </Canvas>
  )
}

export default TechIcon