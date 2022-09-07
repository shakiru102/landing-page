import { OrbitControls, RoundedBox } from "@react-three/drei"
import {  Canvas, useFrame } from "@react-three/fiber"
import { FC, ReactNode, Suspense, useRef } from "react"
import { Mesh } from "three"
import { angleToRadian } from "../utils"

interface Props {
  children?: ReactNode
}


const BoxComponent = () => {
  const boxRef = useRef<Mesh>(null)

  useFrame(() => {
    if(boxRef.current) {
      boxRef.current.rotation.x = boxRef.current.rotation.y +=0.005
    }
  })
  
  return (
    <RoundedBox ref={boxRef} args={[3.5, 3.5, 3.5]} radius={0.9} smoothness={20} rotation={[angleToRadian(25), -angleToRadian(30), angleToRadian(30)]}>
    <meshNormalMaterial />
  </RoundedBox>
  )
}

const Box: FC<Props> = () => {

 
  
  return (
    <Canvas id="container">
        <Suspense fallback={null}>
           <BoxComponent />
        </Suspense>
        <OrbitControls  enableZoom={false}/>
    </Canvas>
  )
}

export default Box