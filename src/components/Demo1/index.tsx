import { Suspense } from "react"
import { OrbitControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Model2 from "./Model2"

type Props = {}

const Demo1 = (props: Props) => {
  const example = {
    cast: false,
    child: [
      {
        cast: false,
        name: "Camera",
        child: [
          {
            cast: false,
            name: "Camera1",
            child: [],
          },
          {
            cast: false,
            name: "Camera2",
            child: [
              {
                cast: false,
                name: "Camera2.1",
                child: [],
              },
            ],
          },
        ],
      },
      {
        cast: false,
        child: [],
      },
    ],
  }

  const setTrueRecursively = (obj) => {
    if (obj.name === "Camera2.1") {
      obj.cast = true
      return
    }

    if (obj.child.length > 0) {
      obj.child.forEach((child) => setTrueRecursively(child))
    }
  }
  setTrueRecursively(example)

  console.log(example)

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
        far: 1000,
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
      <Model2 />
    </Canvas>
  )
}
export default Demo1
