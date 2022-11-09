import React from "react"
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Demo3 = () => {
  const computer = useGLTF("/model.gltf")

  return (
    <Canvas className="webgl-demo3">
      <Environment preset="city" />
      <color args={["#695b5b"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ff6900"
          />
          <Html
            position={[0, 0.3, -0.4]}
            rotation-x={-0.26}
            distanceFactor={1.15}
            transform
            wrapperClass="htmlScreen"
          >
            <iframe src="https://bruno-simon.com/html/" />
          </Html>
          <primitive
            object={computer.scene}
            position-y={-1.2}
            position-z={1}
          ></primitive>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </Canvas>
  )
}

export default Demo3
