
import * as THREE from "three";
import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import Info from "./Info";
import { LineSegments, LineBasicMaterial } from 'three';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import CustomMesh from "./CustomMesh";



export function Bodega(props) {
  const { nodes, materials } = useGLTF('./model3D/almacen.glb')

  const ref2 = useRef();
  const customMaterial = new THREE.MeshStandardMaterial({
    opacity: 1,
    transparent: true,
    color: '#fc6c23',
    wireframe: false, // Renderizar como alambre (opcional)
  });
  
  return (
    <>
    <Selection>
      <EffectComposer multisampling={0} autoClear={false}>
        <Outline blur visibleEdgeColor="WHITE" edgeStrength={10} width={1000} />
      </EffectComposer>
        <CustomMesh {...props} infoPos={[4,4,-0.5]} InfoTitle='Equipo de monitoreo' InfoText='Analisis del producto' geometry={nodes.MDL_Etiquetado.geometry} material={materials.MAT_Etiquetado} />
        <CustomMesh {...props} infoPos={[10,30,-100.5]} InfoTitle='Tanques de bases' InfoText='Análisis en el tanque después del descargue  ' geometry={nodes.MDL_Emtapado_2.geometry} material={materials.MAT_Emtapado_02} />
        <CustomMesh {...props} infoPos={[-80,0,100.5]} InfoTitle='Aditivos empacados' InfoText='Materia prima empacada' geometry={nodes.MDL_Oil.geometry} material={materials.MAT_Oil}  />
        <CustomMesh {...props} infoPos={[-50,10,10.5]} InfoTitle='Almacenamiento y despacho' InfoText='Producto terminado, Empaquetado y verificado' geometry={nodes.Mesh085_1.geometry} material={materials.MAT_Envase_Mobil_Sin} />
        <CustomMesh {...props} infoPos={[40,10,20.5]} InfoTitle='Empaquetadora' InfoText='Empaquetado producto final' geometry={nodes.MDL_Empaquetado_01.geometry} material={materials.MAT_Empaquetado_01}  />
    </Selection>

    <group {...props} dispose={null}>
      <mesh geometry={nodes.MDL_Bases.geometry} material={materials.MAT_Bases} />
      <mesh geometry={nodes.MDL_Cajas.geometry} material={materials.Mat_Caja} />
      <mesh geometry={nodes.MDL_Cajas001.geometry} material={materials.Mat_Caja} />
      <mesh geometry={nodes.MDL_Detalles.geometry} material={materials.MAT_Detalles} />
      <mesh geometry={nodes.MDL_Empaquetado_02.geometry} material={materials.MAT_Empaquetado_02} />
      <mesh geometry={nodes.MDL_Emtapado.geometry} material={materials.MAT_Emtapado_01} />
      <mesh geometry={nodes.MDL_Emtapado_3.geometry} material={materials.MAT_Emtapado_03} />
      <mesh geometry={nodes.MDL_Espiral.geometry} material={materials.MAT_Espiral} />
      <mesh geometry={nodes.MDL_Paredes.geometry} material={materials.MAT_Paredes} />
      <mesh geometry={nodes.MDL_Plastic_Barrel.geometry} material={materials.MAT_Barrel} />
      <mesh geometry={nodes.Mesh070.geometry} material={materials.MAT_Base_Madera} />
      <mesh geometry={nodes.Mesh070_1.geometry} material={nodes.Mesh070_1.material} />
      <mesh geometry={nodes.Mesh085.geometry} material={materials.MAT_Envase_Mobil} />
      <mesh geometry={nodes.Mesh026.geometry} material={materials.MAT_Rampa} />
      <mesh geometry={nodes.Mesh026_1.geometry} material={materials.MAT_Caucho} />
    </group>
    </>
  )
}

useGLTF.preload('./model3D/almacen.glb')
