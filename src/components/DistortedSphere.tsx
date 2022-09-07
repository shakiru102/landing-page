import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"


const SphereComponent = () => {

  const [color, setColor] = useState<string>('#6A1B9A')
  const ref = useRef<any>(null)
  useFrame(() => {
    if(ref.current) {
      ref.current.rotation.x = ref.current.rotation.y +=0.01
    }
  })
  return (
    <Sphere 
    ref={ref}
    args={[2, 200, 200]} 
    onClick={() => {
      setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }}>
      <MeshDistortMaterial distort={0.25} roughness={0}  color={color}/>
    </Sphere>
  )
}

const DistortedSphere = () => {


  return (
    <Canvas id="container">
        <Suspense fallback={null} >
         <SphereComponent />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[0, 1, 0.3]}/>
    </Canvas>
  )
}

export default DistortedSphere