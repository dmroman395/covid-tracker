import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useTexture } from "@react-three/drei"
// import { selectTheme } from '../redux/themeSlice'
// import { useSelector } from 'react-redux';

function Scene({theme}) {

    const props = useTexture({
      map: 'earthmap1k.jpg',
      displacementMap: 'earthbump1k.jpg',
    })

  return (
      <>
        <ambientLight intensity={.95} />
        <mesh>
            <sphereGeometry args={[2.75, 64, 64]} />
            <meshStandardMaterial {...props}  displacementScale={.35}/>
        </mesh>
    </>
  )
}

export default Scene