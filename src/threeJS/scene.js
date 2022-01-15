import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTexture } from "@react-three/drei"
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../redux/darkModeSlice'
import { selectTheme } from '../redux/themeSlice'

function Scene() {
  const [isDragging, setIsDragging] = useState(false)
  const [isListeningForDrag, setIsListeningForDrag] = useState(false)
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

  const props = useTexture({
    map: darkMode ? 'darkmap.jpg' : 'lightmap.jpg',
    bumpMap: 'earth_bumpmap.jpg',
    alphaMap: 'earthspec1k.jpg',
  })

  const globeRotation = {
    z: (0 * (Math.PI/180)),
    y: (140 * (Math.PI/180)),
    x: (0 * (Math.PI/180))

  }

  const globeRef = useRef()
  
  //Add sprite for glow
  const spriteMaterial = new THREE.SpriteMaterial( 
    {  
      map: new THREE.TextureLoader().load('glow.png'),
      alphaMap: new THREE.TextureLoader().load('glow.png'),
      color: customTheme,
      transparent: true, 
      blending: THREE.AdditiveBlending,
    });

  function handleDrag() {
    setIsDragging(true)
  }

  function addDragListnener() {
    setIsListeningForDrag(true)
  }
  
  function removeDragListener() {
    setIsListeningForDrag(false)
    setIsDragging(false)
  }

  function get3DCoordinates(e) {
    e.stopPropagation()
    
    const {x, y, z} = e.intersections[0].point

    const lat = (Math.asin(z/1)*(180/Math.PI))
    const lon = (Math.atan2(-y,x)*(180/Math.PI))
    
    const coordinates = {
      lat,
      lon
    }
    console.log(coordinates)
    return coordinates
    
  }

  return (
    <>
      <ambientLight intensity={.1}/>
      <sprite scale={[4.5,4.5,1]} >
            <spriteMaterial {...spriteMaterial} />
      </sprite>
      <mesh ref={globeRef} name={'earth'} onClick={isDragging ? null :  e => get3DCoordinates(e)} onPointerMove={isListeningForDrag ? handleDrag : null} onPointerDown={addDragListnener} onPointerUp={removeDragListener} rotation={[globeRotation.x, globeRotation.y, globeRotation.z]}>
          <sphereGeometry args={[1, 100, 100]} />
          <meshPhongMaterial {...props}  bumpScale={.002} color={customTheme} transparent={true} alphaTest={.05} opacity={1} depthWrite={false} depthTest={false}/>
      </mesh>
    </>
  )
}

export default Scene

