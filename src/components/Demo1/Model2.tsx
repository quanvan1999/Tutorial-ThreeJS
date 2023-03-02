import { useGLTF } from "@react-three/drei"
import React, { useRef } from "react"

const Model2 = () => {
  const [race, accessories, cloth, hand, pant, shoes] = useGLTF([
    "./assets/head.gltf",
    "./assets/quanao.gltf",
    "./assets/giay.gltf",
    "./assets/quan.gltf",
    "./assets/phukien.gltf",
    "./assets/gangtay.gltf",
  ])
  const model = useGLTF("./assets/inu.gltf")

  const groupRef1 = useRef(null)
  const groupRef2 = useRef(null)

  console.log("model", model)

  console.log(race, accessories, cloth, hand, pant, shoes)

  return (
    <>
      <group
        rotation={[0, Math.PI / 1.5, 0]}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -2, -2]}
        ref={groupRef1}
      >
        <primitive object={race.scene} />
        <primitive object={accessories.scene} />
        <primitive object={cloth.scene} />
        <primitive object={hand.scene} />
        <primitive object={pant.scene} />
        <primitive object={shoes.scene} />
      </group>
      <group
        rotation={[0, Math.PI / 1.5, 0]}
        scale={[0.02, 0.02, 0.02]}
        position={[2, -2, 4]}
        ref={groupRef2}
      >
        <primitive object={model.scene} />
      </group>
    </>
  )
}

export default Model2
