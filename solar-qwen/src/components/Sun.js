// components/Sun.js
import { Sphere } from '@react-three/drei';

const Sun = () => {
  return (
    <Sphere args={[2, 32, 32]}>
      <meshStandardMaterial emissive="yellow" />
    </Sphere>
  );
};

export default Sun;