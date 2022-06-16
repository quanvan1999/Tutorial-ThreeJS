import React, { useRef, Suspense } from "react"
import * as THREE from "three"
import { Stats, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"

type props = {
    start: number[]
    end: number[]
}

const Cube = () => {
    const cube = useRef<THREE.Mesh>()

    useFrame(() => {
        cube.current!.rotation.x += 0.01
        cube.current!.rotation.y += 0.01
    })

    return (
        <mesh
            ref={
                cube as React.Ref<
                    THREE.Mesh<
                        THREE.BufferGeometry,
                        THREE.Material | THREE.Material[]
                    >
                >
            }
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0391BA" />
        </mesh>
    )
}

const Scene = () => {
    return (
        <>
            <gridHelper />
            <axesHelper />
            <pointLight intensity={1.0} position={[5, 3, 5]} />
            <Cube />
        </>
    )
}

const Demo3 = () => {
    return (
        <Canvas
            camera={{
                near: 0.1,
                far: 1000,
                zoom: 1,
            }}
            onCreated={({ gl }) => {
                gl.setClearColor("#252934")
            }}
        >
            <Stats />
            <OrbitControls />
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )
}
export default Demo3
