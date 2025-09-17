'use client'
import { Canvas } from '@react-three/fiber'

function Accent() {
  return (
    <mesh rotation={[0.5, 0.8, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#6ee7b7" metalness={0.1} roughness={0.6} />
    </mesh>
  )
}
export function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.12]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} />
        <Accent />
      </Canvas>
    </div>
  )
}
