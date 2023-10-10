import * as THREE from 'three'
import { useFrame, extend, useThree } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import CustomObject from './CustomObject'
import { Bodega } from './Bodega'
import { Html, OrbitControls } from '@react-three/drei'
import Info from './Info'

extend({OrbitControls: OrbitControls})

export default function Experience() {
  
  return (
    <>
      <ambientLight intensity={ 0.5 } color={0xE1E1E1} /> 
      <pointLight distance={15} position={[0,2,0]} intensity={1}  color={'white'}/>
      <Bodega scale={1.5}/>
      <OrbitControls
          minDistance={0}
          maxDistance={1}
          enableDamping={false}
          enableZoom={true}
          enablePan={false}
          minPolarAngle={-Math.PI / 2.1}
          maxPolarAngle={Math.PI / 1.5}
          screenSpacePanning={false}
          target-y={3}
          makeDefault
      /> 
    </>
  )
}
