import { Select } from '@react-three/postprocessing'
import React, { useRef, useState } from 'react'
import Info from './Info';

export default function CustomMesh(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null)
  const [show, setshow] = useState(false)
  return (
    <>
    <Info title={props.InfoTitle} text={props.InfoText} show={show} setshow={setshow} position={props.infoPos}/>
    <Select enabled={hovered}>
    <mesh
      onClick={() => setshow(true)}
      ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} />
  </Select>
    </>
  )
}
