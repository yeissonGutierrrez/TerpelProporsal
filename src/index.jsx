import './style.css'
import * as THREE from 'three'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <>
       <Canvas 
            dpr={ [ 1, 2 ] }
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                // outputEncoding: THREE.LinearEncoding
                outputEncoding: THREE.sRGBEncoding
            }} 
            camera={{
                fov: 45, 
                near: 0.1, 
                far: 200, 
                position: [ 3, 2, 6 ] 
            }}>
            <Experience/>
       </Canvas>
    </>
)