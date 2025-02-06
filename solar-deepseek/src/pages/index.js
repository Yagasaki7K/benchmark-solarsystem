import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/SolarSystem'), {
  ssr: false,
  loading: () => <p>Carregando...</p>
});

export default function Home() {
  return <Scene />;
}