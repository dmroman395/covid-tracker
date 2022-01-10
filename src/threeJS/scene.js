import React, { useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'
import { SpriteMaterial } from 'three'

function Scene() {

  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

    const props = useTexture({
      map: darkMode ? 'darkmap.jpg' : 'lightmap.jpg',
      bumpMap: 'earth_bumpmap.jpg',
      alphaMap: 'earthspec1k.jpg',
    })

    const globeRef = useRef()

    useFrame(() => {
      globeRef.current.rotation.y += .00025
    })

    const spriteMaterial = new THREE.SpriteMaterial( 
      {  
        map: new THREE.TextureLoader().load('glow.png'),
        alphaMap: new THREE.TextureLoader().load('glow.png'),
        color: customTheme,
        transparent: true, 
        blending: THREE.AdditiveBlending,
      });

    // const sprite = new THREE.Sprite( spriteMaterial );
    // sprite.center.set(0, 0);

  return (
      <>
        {/* <ambientLight intensity={.5} /> */}
        <mesh ref={globeRef}>
            <sprite scale={[2.1,2.1,1]} opacity={.5}>
              <spriteMaterial {...spriteMaterial} />
            </sprite>
            <sphereGeometry args={[.45, 100, 100]} />
            <meshPhongMaterial {...props}  bumpScale={.0015} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={true} depthTest={false}/>
        </mesh>
    </>
  )
}

export default Scene