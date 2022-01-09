import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './scene'

function GlobeContainer({theme}) {
  return (
      <Canvas>
        <Suspense fallback={null}>
          <Scene theme={theme}/>
        </Suspense>
    </Canvas>
  )
}

export default GlobeContainer