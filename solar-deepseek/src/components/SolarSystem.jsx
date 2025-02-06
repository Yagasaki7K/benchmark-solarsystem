import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import { format, getTime, addHours } from 'date-fns';

function Planet({ position, color, scale, orbitalSpeed, orbitalRadius }) {
  const ref = useRef();
  const [trailPoints, setTrailPoints] = useState([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const angle = time * orbitalSpeed;
    const x = Math.cos(angle) * orbitalRadius;
    const z = Math.sin(angle) * orbitalRadius;
    
    ref.current.position.x = x;
    ref.current.position.z = z;

    // Atualizar trilha orbital
    if (time % 0.5 < 0.1) {
      setTrailPoints(prev => [...prev.slice(-200), [x, 0, z]]);
    }
  });

  return (
    <>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Line
        points={trailPoints}
        color="white"
        lineWidth={0.5}
        transparent
        opacity={0.3}
      />
    </>
  );
}

function Sun() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="#ffd700" />
    </mesh>
  );
}

function SolarSystem({ speedMultiplier, useRealTime }) {
  const [simulationTime, setSimulationTime] = useState(new Date());
  
  useEffect(() => {
    let interval;
    if (!useRealTime) {
      interval = setInterval(() => {
        setSimulationTime(prev => addHours(prev, speedMultiplier));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [speedMultiplier, useRealTime]);

  return (
    <Canvas camera={{ position: [0, 100, 100], fov: 50 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />
      <Stars radius={300} depth={50} count={2000} factor={7} />
      
      <Sun />
      
      {/* Mercúrio */}
      <Planet
        orbitalRadius={15}
        orbitalSpeed={0.04 * speedMultiplier}
        scale={[0.4, 0.4, 0.4]}
        color="#a8a8a8"
      />
      
      {/* Vênus */}
      <Planet
        orbitalRadius={25}
        orbitalSpeed={0.015 * speedMultiplier}
        scale={[0.9, 0.9, 0.9]}
        color="#e3a857"
      />
      
      {/* Terra */}
      <Planet
        orbitalRadius={35}
        orbitalSpeed={0.01 * speedMultiplier}
        scale={[1, 1, 1]}
        color="#2f6a69"
      />
      
      {/* ... outros planetas ... */}

      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.6}
        minDistance={20}
        maxDistance={500}
      />
    </Canvas>
  );
}

export default function Scene() {
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [useRealTime, setUseRealTime] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SolarSystem 
        speedMultiplier={speedMultiplier} 
        useRealTime={useRealTime} 
      />
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '8px'
      }}>
        <label>
          <input
            type="checkbox"
            checked={useRealTime}
            onChange={(e) => setUseRealTime(e.target.checked)}
          />
          Tempo Real
        </label>
        
        {!useRealTime && (
          <div>
            <input
              type="range"
              min="1"
              max="100000"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
            />
            <div>Velocidade: {speedMultiplier}x</div>
          </div>
        )}
      </div>
    </div>
  );
}