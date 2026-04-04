import Hero from '@/components/Hero';
import Diferenciales from '@/components/Diferenciales';
import Servicios from '@/components/Servicios';
import Zonas from '@/components/Zonas';
import ComoTrabajamos from '@/components/ComoTrabajamos';
import NuestrosTrabajos from '@/components/NuestrosTrabajos';
import Resenas from '@/components/Resenas';
import FAQ from '@/components/FAQ';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferenciales />
      <Servicios />
      <Zonas />
      <ComoTrabajamos />
      <NuestrosTrabajos />
      <Resenas />
      <FAQ />
      <Contacto />
    </main>
  );
}
