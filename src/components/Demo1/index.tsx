import { Suspense } from "react"
import { OrbitControls, ScrollControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ModelBacground from "./Model1"

type Props = {}

const Demo1 = (props: Props) => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        position: [
          Math.sin(1) * 1,
          Math.atan(1 * Math.PI * 2) * 3,
          Math.cos((1 * Math.PI) / 3) * 3,
        ],
        near: 0.1,
        far: 100,
      }}
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
      <OrbitControls />
      <Sky azimuth={1000} sunPosition={[2, 0.4, 10]} />
      <ModelBacground scale={0.02} position={[0, -1, 0]} />
    </Canvas>
  )
}
export default Demo1
