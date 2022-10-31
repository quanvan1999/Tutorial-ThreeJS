import { usePlane } from "@react-three/cannon"
import { MeshProps } from "@react-three/fiber"
import { Mesh } from "three"

export const Plane = (props: any) => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    args: [100, 100, 10],
    type: "Static",
    ...props,
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[300, 300]} />
      <meshPhongMaterial transparent opacity={0.9} />
    </mesh>
  )
}

export default Plane
