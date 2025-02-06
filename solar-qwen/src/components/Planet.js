// components/Planet.js
import { Sphere, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Planet = ({ name, radius, distance, speed, color, time }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      const angle = (time.getTime() * speed) / 1000; // Calcula a posição angular
      ref.current.position.x = Math.cos(angle) * distance;
      ref.current.position.z = Math.sin(angle) * distance;
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </group>
  );
};

export default Planet;