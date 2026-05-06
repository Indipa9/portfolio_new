import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#0f172a']} />
        
        {/* Deep space stars & magical sparkles */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={300} scale={15} size={3} speed={0.4} opacity={0.6} color="#c084fc" />
        <Sparkles count={200} scale={10} size={5} speed={0.2} opacity={0.4} color="#60a5fa" />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 5]} intensity={1.5} color="#818cf8" />
        <directionalLight position={[-10, -20, -5]} intensity={1.5} color="#f472b6" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#e879f9" distance={10} />
        
        {/* Central Abstract Art Piece - Distorted Sphere */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[2, 64, 64]} />
            <MeshDistortMaterial 
              color="#4f46e5" 
              attach="material" 
              distort={0.4} 
              speed={2} 
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>

        {/* Orbiting geometric accents */}
        <Float speed={3} rotationIntensity={2} floatIntensity={3}>
          <mesh position={[-4, 2, -2]}>
            <torusGeometry args={[0.8, 0.2, 16, 100]} />
            <meshStandardMaterial color="#f472b6" roughness={0.1} metalness={0.9} />
          </mesh>
        </Float>
        
        <Float speed={1.5} rotationIntensity={2} floatIntensity={4}>
          <mesh position={[4, -2, -1]}>
            <icosahedronGeometry args={[1]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.7} wireframe />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
