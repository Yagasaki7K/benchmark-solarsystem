// components/SolarSystem.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Sun from './Sun';
import Planet from './Planet';
import { useState, useEffect } from 'react';

const SolarSystem = () => {
  const [timeScale, setTimeScale] = useState(1); // Fator de aceleração
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 / timeScale); // Atualiza o tempo com base na escala
    return () => clearInterval(interval);
  }, [timeScale]);

  return (
    <>
      <Canvas camera={{ position: [0, 15, 40] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <OrbitControls />

        {/* Sol */}
        <Sun />

        {/* Planetas */}
        <Planet name="Mercury" radius={0.5} distance={5} speed={0.02} color="gray" time={currentTime} />
        <Planet name="Venus" radius={0.8} distance={8} speed={0.015} color="orange" time={currentTime} />
        <Planet name="Earth" radius={1} distance={12} speed={0.01} color="blue" time={currentTime} />
        <Planet name="Mars" radius={0.7} distance={16} speed={0.008} color="red" time={currentTime} />
        <Planet name="Jupiter" radius={2} distance={22} speed={0.005} color="brown" time={currentTime} />
        <Planet name="Saturn" radius={1.8} distance={30} speed={0.004} color="gold" time={currentTime} />
        <Planet name="Uranus" radius={1.5} distance={38} speed={0.003} color="cyan" time={currentTime} />
        <Planet name="Neptune" radius={1.4} distance={45} speed={0.002} color="blue" time={currentTime} />
      </Canvas>

      {/* Controles */}
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
        <button onClick={() => setTimeScale(1)}>Tempo Real</button>
        <button onClick={() => setTimeScale(10)}>10x</button>
        <button onClick={() => setTimeScale(100)}>100x</button>
      </div>
    </>
  );
};

export default SolarSystem;