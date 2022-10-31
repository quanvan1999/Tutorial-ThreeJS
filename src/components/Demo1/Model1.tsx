import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useLayoutEffect } from "react"

const ModelBacground = ({ ...props }) => {
  // This hook gives you offets, ranges and other useful things
  const { scene, cameras } = useGLTF("/just_a_girl/scene.gltf")
  useLayoutEffect(() =>
    Object.values(cameras).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  )

  return <primitive object={scene} {...props} />
}

export default ModelBacground
