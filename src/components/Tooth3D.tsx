
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function ToothShape() {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Animation for some subtle rotation if needed, 
  // but Float handles the main movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* We'll create a stylized "tooth" shape using a rounded box or merged spheres */}
        {/* For now, a clean sphere with distortion looks very premium and techy */}
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#0891b2"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>
    </Float>
  )
}

export function Tooth3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ToothShape />
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4.5} 
        />
      </Canvas>
    </div>
  )
}
