import { useLoader } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import { Mesh, MeshStandardMaterial } from "three"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { TGALoader } from "three/examples/jsm/loaders/TGALoader"

const Model2 = () => {
  const [race, accessories, cloth, hand, pant, shoes] = useLoader(FBXLoader, [
    "./assets/Inu/Race.fbx",
    "./assets/Inu/Accessories.fbx",
    "./assets/Inu/Cloth.fbx",
    "./assets/Inu/Hand.fbx",
    "./assets/Inu/Pant.fbx",
    "./assets/Inu/Shoes.fbx",
  ])
  const groupRef = useRef(null)
  const modelName = "./assets/Inu/Textures/INU_SunRaver_1537_"
  const texturesAccessories = useLoader(TGALoader, [
    `${modelName}Accessories_bo.tga`,
    `${modelName}Accessories_n.tga`,
    `${modelName}Accessories_mra.tga`,
    `${modelName}Accessories_e.tga`,
  ])
  const texturesCloth = useLoader(TGALoader, [
    `${modelName}Cloth_bo.tga`,
    `${modelName}Cloth_n.tga`,
    `${modelName}Cloth_mra.tga`,
    `${modelName}Cloth_e.tga`,
  ])
  const texturesHand = useLoader(TGALoader, [
    `${modelName}Hand_bo.tga`,
    `${modelName}Hand_n.tga`,
    `${modelName}Hand_mra.tga`,
  ])
  const texturesPant = useLoader(TGALoader, [
    `${modelName}Pant_bo.tga`,
    `${modelName}Pant_n.tga`,
    `${modelName}Pant_mra.tga`,
  ])
  const texturesShoes = useLoader(TGALoader, [
    `${modelName}Shoes_bo.tga`,
    `${modelName}Shoes_n.tga`,
    `${modelName}Shoes_mra.tga`,
  ])

  const handleTexture = (mesh: Mesh) => {
    // flat bone into a sing array, there are many bones in children

    const textureMapping = {
      Shoes: texturesShoes,
      Accessories: texturesAccessories,
      Cloth: texturesCloth,
      Hand: texturesHand,
      Pant: texturesPant,
    } as const

    const textureKey = Object.keys(textureMapping).find((key) =>
      mesh.name.includes(key)
    ) as keyof typeof textureMapping
    const texture = textureMapping[textureKey] || texturesAccessories
    return new MeshStandardMaterial({
      map: texture?.[0],
      normalMap: texture?.[1],
      roughnessMap: texture?.[2],
      emissiveMap: texture?.[3],
    })
  }

  useEffect(() => {
    if (groupRef.current) {
      ;(groupRef.current as any)?.children.forEach((child: any) => {
        child.children.forEach((mesh: any) => {
          mesh.material = handleTexture(mesh)
        })
      })
    }
  }, [])

  return (
    <group
      rotation={[0, Math.PI / 2, 0]}
      scale={[0.02, 0.02, 0.02]}
      position={[0, -2, 0]}
      ref={groupRef}
    >
      <primitive object={race} />
      <primitive object={accessories} />

      <primitive object={cloth} />
      <primitive object={hand} />
      <primitive object={pant} />
      <primitive object={shoes} />
    </group>
  )
}

export default Model2
