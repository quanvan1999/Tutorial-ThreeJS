import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Scene from "./Scene"

type Props = {}

const Demo2 = (props: Props) => {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight color="red" intensity={10} />
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )
}
export default Demo2
