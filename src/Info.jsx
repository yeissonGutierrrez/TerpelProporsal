import { Html } from '@react-three/drei'
import React, { useState } from 'react'

export default function Info({show, setshow, position}) {
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
    <img className='infoImage' src="/Info.svg" alt="" />
    <div className='circle'></div>
    </div>

    {
      show &&
      <div className='modal' onMouseLeave={() => setshow(false)}>
        <h3>Title</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt nam temporibus consequuntur nulla odit velit, quisquam possimus impedit quasi pariatur veritatis, enim nemo dignissimos, amet eaque exercitationem facilis reiciendis!

        </p>
      </div>
    }
</Html>
  )
}
