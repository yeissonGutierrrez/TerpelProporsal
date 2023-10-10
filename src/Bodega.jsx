
import * as THREE from "three";
import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import Info from "./Info";

export function Bodega(props) {
  const { nodes, materials } = useGLTF('./model3D/MDL_Env_Lubricantes.glb')
  const customMaterial = new THREE.MeshStandardMaterial({
    opacity: 0.7,
    transparent: true,
    color: 0xff0000, // Color del material (rojo en formato hexadecimal)
   
    wireframe: false, // Renderizar como alambre (opcional)
  });
  const [show, setshow] = useState(false)


  
  return (
    <>
    <Info show={show} setshow={setshow} position={[4,4,-0.5]}/>
    <Info show={show} setshow={setshow} position={[10,30,-100.5]}/>
    <group {...props} dispose={null}>
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Bases} geometry={nodes.MDL_Bases.geometry} material={materials.MAT_Bases} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.Mat_Caja} geometry={nodes.MDL_Cajas.geometry} material={materials.Mat_Caja} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Detalles} geometry={nodes.MDL_Detalles.geometry} material={materials.MAT_Detalles} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Empaquetado_01} geometry={nodes.MDL_Empaquetado_01.geometry} material={materials.MAT_Empaquetado_01} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Empaquetado_02} geometry={nodes.MDL_Empaquetado_02.geometry} material={materials.MAT_Empaquetado_02} />
      <mesh onClick={() => setshow(true)} onPointerEnter={(e) => {
        e.stopPropagation()
        e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Emtapado_02} geometry={nodes.MDL_Emtapado_2.geometry} material={materials.MAT_Emtapado_02} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Emtapado_03} geometry={nodes.MDL_Emtapado_3.geometry} material={materials.MAT_Emtapado_03} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Envase_Mobil} geometry={nodes.MDL_Envase_Mobil.geometry} material={materials.MAT_Envase_Mobil} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Espiral} geometry={nodes.MDL_Espiral.geometry} material={materials.MAT_Espiral} />
      <mesh onClick={() => setshow(true)} onPointerEnter={(e) => {
        e.stopPropagation()
        e.object.material = customMaterial
      }} onPointerLeave={(e) =>{ 
        e.object.material = materials.MAT_Etiquetado
        // setshow(false)  
      }} geometry={nodes.MDL_Etiquetado.geometry} material={materials.MAT_Etiquetado} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Oil} geometry={nodes.MDL_Oil.geometry} material={materials.MAT_Oil} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Paredes} geometry={nodes.MDL_Paredes.geometry} material={materials.MAT_Paredes} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Barrel} geometry={nodes.MDL_Plastic_Barrel.geometry} material={materials.MAT_Barrel} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Base_Madera} geometry={nodes.Mesh070.geometry} material={materials.MAT_Base_Madera} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = nodes.Mesh070_1.materia} geometry={nodes.Mesh070_1.geometry} material={nodes.Mesh070_1.material} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Emtapado_01} geometry={nodes.Mesh008.geometry} material={materials.MAT_Emtapado_01} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Glass} geometry={nodes.Mesh008_1.geometry} material={materials.MAT_Glass} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Rampa} geometry={nodes.Mesh026.geometry} material={materials.MAT_Rampa} />
      <mesh onPointerEnter={(e) => {
        e.stopPropagation()
        // e.object.material = customMaterial
      }} onPointerLeave={(e) => e.object.material = materials.MAT_Caucho} geometry={nodes.Mesh026_1.geometry} material={materials.MAT_Caucho} />
    </group>
    </>
  )
}

useGLTF.preload('./model3D/MDL_Env_Lubricantes.glb')
