import { useState, useRef } from "react";
import Head from "next/head";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

// Componente para um planeta simples (aqui, apenas a Terra como exemplo)
function Planet({ orbitRadius, size, color, orbitSpeed, acceleration }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // Incrementa o ângulo com base no tempo, velocidade e aceleração
    ref.current.rotation.y += delta * orbitSpeed * acceleration;
    // Atualiza a posição do planeta em um círculo
    ref.current.position.x = orbitRadius * Math.cos(ref.current.rotation.y);
    ref.current.position.z = orbitRadius * Math.sin(ref.current.rotation.y);
  });
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Componente que simula o sistema solar
function SolarSystem({ acceleration }) {
  return (
    <>
      {/* Sol: posição fixa no centro */}
      <mesh>
        <sphereBufferGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="yellow" emissive="yellow" />
      </mesh>
      {/* Terra: exemplo de planeta */}
      <Planet
        orbitRadius={10}      // Distância do Sol
        size={1}              // Tamanho do planeta
        color="blue"
        orbitSpeed={0.5}      // Velocidade base de órbita
        acceleration={acceleration}
      />
      {/* Você pode adicionar outros planetas seguindo o mesmo padrão */}
    </>
  );
}

const Overlay = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  color: white;
  font-family: Arial, sans-serif;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
  border-radius: 8px;
`;

export default function Home() {
  const [acceleration, setAcceleration] = useState(1);
  // A data/hora atual pode ser atualizada em intervalos ou no carregamento
  const currentTime = new Date().toLocaleTimeString();

  // Configurações para o Canvas (pode ser customizado conforme necessário)
  return (
    <>
      <Head>
        <title>3D Solar System Simulation</title>
        <meta name="description" content="3D Solar System simulation using Next.js and react-three-fiber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <SolarSystem acceleration={acceleration} />
          <OrbitControls />
        </Canvas>
        <Overlay>
          <div>
            <strong>Real Time:</strong> {currentTime}
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="acceleration">Simulation Speed: {acceleration}x</label>
            <br />
            <input
              id="acceleration"
              type="range"
              min="1"
              max="20"
              value={acceleration}
              onChange={(e) => setAcceleration(Number(e.target.value))}
            />
          </div>
        </Overlay>
      </div>
    </>
  );
}
