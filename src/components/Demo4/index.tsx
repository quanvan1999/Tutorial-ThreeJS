import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useEffect } from "react"
import { PLAYER__MODEL__URL } from "../../config/constants"
import Lights from "./Light"
import Player from "./Player"
import Terrain from "./Terrain"

export default function Test() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        near: 0.01,
        far: 1000,
        fov: 80,
        aspect:
          typeof window !== "undefined"
            ? window.innerWidth / window.innerHeight
            : 0,
      }}
      className="webgl"
      shadows
    >
      <Sky sunPosition={[7, 5, 1]} />
      <Lights />
      <Suspense fallback={null}>
        <Player url={PLAYER__MODEL__URL} />
        <Terrain />
      </Suspense>
    </Canvas>
  )
}
