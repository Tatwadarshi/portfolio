import React from 'react'
import { useGLTF } from '@react-three/drei'
import { asset_server_base_url } from '../../constants'

const Room = () => {
  const { scene } = useGLTF(asset_server_base_url+"/models/optimized-room.glb")
  return (
    <group>
        <primitive object={scene} />
    </group>
  )
}
useGLTF.preload(asset_server_base_url+"/models/optimized-room.glb");
export default Room