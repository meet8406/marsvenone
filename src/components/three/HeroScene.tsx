import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  Line,
  TorusKnot,
  MeshDistortMaterial,
  Environment,
} from '@react-three/drei'
import * as THREE from 'three'

/** Slowly rotating distorted core sphere — the focal "data engine". */
function Core() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15
      ref.current.rotation.x += delta * 0.05
    }
  })
  return (
    <Icosahedron ref={ref} args={[1.35, 6]}>
      <MeshDistortMaterial
        color="#2b48eb"
        emissive="#1a2bb0"
        emissiveIntensity={0.4}
        roughness={0.15}
        metalness={0.9}
        distort={0.35}
        speed={1.6}
      />
    </Icosahedron>
  )
}

/** Decorative orbiting torus knots for depth. */
function Orbiters() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
  })
  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[2.6, 0.8, -1]} scale={0.42}>
          <TorusKnot args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#598cff"
            roughness={0.2}
            metalness={0.8}
            emissive="#2b48eb"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2.7, -0.6, -0.5]} scale={0.28}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#8eb6ff"
            roughness={0.1}
            metalness={0.9}
            emissive="#3b67f6"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.2}>
        <mesh position={[1.8, -1.4, 0.6]} scale={0.18}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#34d399"
            roughness={0.18}
            metalness={0.65}
            emissive="#0f766e"
            emissiveIntensity={0.22}
          />
        </mesh>
      </Float>
    </group>
  )
}

function SignalRings() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.z += delta * 0.04
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
  })

  return (
    <group ref={group}>
      {[
        { scale: 2.15, rotation: [0.8, 0.1, 0.35], color: '#8eb6ff', opacity: 0.22 },
        { scale: 2.75, rotation: [1.2, 0.35, -0.2], color: '#7dd3fc', opacity: 0.16 },
        { scale: 3.25, rotation: [1.45, -0.25, 0.1], color: '#34d399', opacity: 0.1 },
      ].map((ring) => (
        <mesh
          key={ring.scale}
          scale={ring.scale}
          rotation={ring.rotation as [number, number, number]}
        >
          <torusGeometry args={[1, 0.004, 12, 160]} />
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={ring.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

function SignalPath({
  points,
  color,
  delay = 0,
}: {
  points: [number, number, number][]
  color: string
  delay?: number
}) {
  const group = useRef<THREE.Group>(null)
  const linePoints = useMemo(() => points.map((p) => new THREE.Vector3(...p)), [points])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime + delay
    group.current.rotation.z = Math.sin(t * 0.22) * 0.08
    group.current.position.y = Math.sin(t * 0.55) * 0.08
  })

  return (
    <group ref={group}>
      <Line
        points={linePoints}
        color={color}
        lineWidth={1.2}
        transparent
        opacity={0.28}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
      {points.map((point, i) => (
        <Float key={`${point.join('-')}-${i}`} speed={1.2 + i * 0.12} floatIntensity={0.35}>
          <mesh position={point} scale={i === points.length - 1 ? 0.075 : 0.052}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshBasicMaterial
              color={i === points.length - 1 ? '#34d399' : color}
              transparent
              opacity={0.85}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function GrowthConstellation() {
  return (
    <group position={[0, -0.1, -0.8]}>
      <SignalPath
        color="#8eb6ff"
        points={[
          [-3.1, -1.2, 0],
          [-2.0, -0.65, 0.15],
          [-0.8, -0.95, 0.05],
          [0.35, -0.25, 0.2],
          [1.55, -0.55, 0.1],
          [2.8, 0.25, 0],
        ]}
      />
      <SignalPath
        color="#34d399"
        delay={1.4}
        points={[
          [-2.5, 1.05, -0.2],
          [-1.45, 0.65, 0],
          [-0.35, 0.95, 0.12],
          [0.85, 0.45, 0],
          [2.2, 0.85, -0.1],
        ]}
      />
    </group>
  )
}

function InteractiveGrowthLayer() {
  const group = useRef<THREE.Group>(null)
  const target = useRef(new THREE.Vector2(0, 0))
  const current = useRef(new THREE.Vector2(0, 0))
  const idleTimer = useRef<number>()

  useEffect(() => {
    const reset = () => {
      target.current.set(0, 0)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      target.current.set(x, -y)
      window.clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(reset, 900)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', reset)
    window.addEventListener('blur', reset)

    return () => {
      window.clearTimeout(idleTimer.current)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', reset)
      window.removeEventListener('blur', reset)
    }
  }, [])

  useFrame((_, delta) => {
    if (!group.current) return

    const ease = 1 - Math.pow(0.001, delta)
    current.current.lerp(target.current, ease * 0.08)

    group.current.position.x = current.current.x * 0.34
    group.current.position.y = current.current.y * 0.22
    group.current.rotation.y = current.current.x * 0.1
    group.current.rotation.x = -current.current.y * 0.06
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
        <Core />
      </Float>
      <SignalRings />
      <Orbiters />
      <GrowthConstellation />
    </group>
  )
}

/**
 * Three.js hero scene — a metallic distorted core with orbiting shapes and
 * connected growth signals. Pointer-events are disabled so it sits purely as a
 * decorative animated layer behind the hero copy.
 */
export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      style={{ pointerEvents: 'none' }}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#8eb6ff" />
        <pointLight position={[-5, -3, 2]} intensity={3} color="#2b48eb" />
        <InteractiveGrowthLayer />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
