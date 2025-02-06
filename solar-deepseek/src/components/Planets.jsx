import { useTexture } from '@react-three/drei';

function Planet({ textureUrl, ...props }) {
  const texture = useTexture(textureUrl);
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}