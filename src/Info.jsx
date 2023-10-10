import { Html } from '@react-three/drei'
import React, { useState } from 'react'

export default function Info({show, setshow, position, title, text}) {
  return (
    <Html
    position={position}
   >
<div
 style={{
  position: 'relative',
  borderRadius: '50%',
   width: "40px",
   height: "40px",
 }}
 onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}
>
    <img className='infoImage' src="https://yeissongutierrrez.github.io/TerpelProporsal/Info.svg" alt="" />
    <div className='circle'></div>
    </div>

    {
      show &&
      <div className='modal' onMouseLeave={() => setshow(false)}>
        <h3>{title}</h3>
        <p>
        {text}
        </p>
      </div>
    }
</Html>
  )
}
