import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Model } from "./Iphone"

const Iphone = () => {

  // const ref = useRef<any>(null)
  // useFrame(() => {
  //   if(ref.current) {
  //     ref.current.rotation.x = ref.current.rotation.y +=0.01
  //   }
  // })
  return (
    <Model />
  )
}

const Vehichle = () => {
  return (
    <Canvas id="container" shadows> 
        <OrbitControls  enableZoom={false}/>
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
        <spotLight intensity={1.5} castShadow position={[-2, 5, 3]} />
        <ambientLight intensity={0.5}/>
    </Canvas>
  )
}

export default Vehichle