import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from './scene'
import { Provider } from 'react-redux';
import store from '../redux/store';

function GlobeContainer() {

  return (
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, -1.25]}>
            <directionalLight intensity={1} position={[-4,4,0]}/>
          </PerspectiveCamera>
          <Provider store={store}>
            <Scene/>
            </Provider>
          <OrbitControls enableZoom={!false} enablePan={false} />
        </Suspense>
      </Canvas>
  )
}

export default GlobeContainer