import React from "react"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Plane from "./Plane"
import { Model } from "./Model"

const Demo3 = () => {
  return (
    <Canvas
      shadows
      style={{ width: "100vw", height: "100vh", background: "white" }}
    >
      <Physics size={2}>
        <Model />
        <Plane position={[0, -5, 0]} />
      </Physics>
      <Environment preset="city" />
    </Canvas>
  )
}
export default Demo3
