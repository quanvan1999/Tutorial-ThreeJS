import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useLayoutEffect } from "react"

const ModelBacground = ({ ...props }) => {
    // This hook gives you offets, ranges and other useful things
    const scroll = useScroll()
    const { scene, cameras } = useGLTF("/just_a_girl/scene.gltf")
    useLayoutEffect(() =>
        Object.values(cameras).forEach(
            (node) => (node.receiveShadow = node.castShadow = true)
        )
    )
    useFrame((state, delta) => {
        // The offset is between 0 and 1, you can apply it to your models any way you like
        const offset = 1 - scroll.offset

        state.camera.position.set(
            Math.sin(offset) * 1,
            Math.atan(offset * Math.PI * 2) * 5,
            Math.cos((offset * Math.PI) / 3) * 2
        )
        state.camera.lookAt(0, 4, 1)
    })
    return <primitive object={scene} {...props} />
}

export default ModelBacground
