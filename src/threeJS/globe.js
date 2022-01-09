import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { selectTheme } from '../redux/themeSlice'
import { useSelector } from 'react-redux';

const dimensions = {
    width: window.innerWidth * .425,
    height: window.innerHeight * .75
}


function Globe() {
    
    const customTheme = useSelector(selectTheme)

    const mountRef = useRef(null);

    const mat = {
        color: customTheme
    }

    useEffect(() => {
        const scene = new THREE.Scene()
        // const controls = new OrbitControls()
        const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, .1, 1000)
        const renderer = new THREE.WebGLRenderer({alpha: true})
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );

        renderer.setSize(dimensions.width, dimensions.height)

        mountRef.current.appendChild( renderer.domElement )

        const sphere = new THREE.SphereGeometry(3, 64, 64)
        const material = new THREE.MeshBasicMaterial(mat) 
        const globe = new THREE.Mesh(sphere, material)

        scene.add(globe)

        camera.position.z = 5;

        renderer.render( scene, camera );

        let onWindowResize = function () {
            const newDimensions = {
                width: window.innerWidth * .425,
                height: window.innerHeight * .75
            }
            camera.aspect = newDimensions.width / newDimensions.height;
            camera.updateProjectionMatrix();
            renderer.setSize( newDimensions.width, newDimensions.height );
          }
      
          window.addEventListener("resize", onWindowResize, false);

        // var animate = function () {
        //     requestAnimationFrame( animate );
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render( scene, camera );
        //   };
        
        //   animate();

        return () => mountRef.current.removeChild( renderer.domElement);
    }, [])

    return (
        <div ref={mountRef}>



        </div>
    )
}

export default Globe