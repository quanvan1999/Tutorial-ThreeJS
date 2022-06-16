import { Suspense } from "react"
import { ScrollControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ModelBacground from "./Model1"

type Props = {}

const Demo1 = (props: Props) => {
    return (
        <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ position: [0, 5, 5], near: 0.1, far: 100 }}
        >
            <ambientLight intensity={0.03} />
            <fog attach="fog" args={["#ff5020", 5, 18]} />
            <spotLight
                angle={0.14}
                color="#ffd0d0"
                penumbra={1}
                position={[25, 50, -20]}
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0001}
                castShadow
            />
            <Sky azimuth={1000} sunPosition={[2, 0.4, 10]} />
            <Suspense fallback={null}>
                <ScrollControls pages={2}>
                    <ModelBacground scale={0.02} position={[0, 2.5, 0]} />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}
export default Demo1
