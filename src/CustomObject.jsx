import React from 'react'
import * as THREE from 'three'
import { useMemo, useRef, useEffect } from 'react'

export default function CustomObject() {
  const geometryRef = useRef()

  const verticesCount = 10 * 3
  
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3)

    for (let index = 0; index < verticesCount * 3; index++) {
      positions[index] = (Math.random() - 0.5) * 3
    }

    return positions
  },[])

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
  }, [positions])
  
  return <mesh>
  <bufferGeometry ref={geometryRef}>
    <bufferAttribute         
        attach="attributes-position"
        count={ verticesCount }
        itemSize={ 3 }
        array={ positions }/>
  </bufferGeometry>
  <meshStandardMaterial side={ THREE.DoubleSide } color="red" />
</mesh>
}
