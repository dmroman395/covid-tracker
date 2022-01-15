import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from './scene'
import { Provider } from 'react-redux';
import store from '../redux/store';

function GlobeContainer() {

  return (
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={65} position={[0, 1, -2]}>
            <directionalLight intensity={1} position={[-4,4,0]}/>
          </PerspectiveCamera>
          <Provider store={store}>
            <Scene/>
            </Provider>
          <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={!false} enablePan={false} />
        </Suspense>
      </Canvas>
  )
}

export default GlobeContainer