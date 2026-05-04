import Hero from '@/components/Hero';
import Diferenciales from '@/components/Diferenciales';
import Servicios from '@/components/Servicios';
import Zonas from '@/components/Zonas';
import ComoTrabajamos from '@/components/ComoTrabajamos';
import NuestrosTrabajos from '@/components/NuestrosTrabajos';
import Resenas from '@/components/Resenas';
import FAQ from '@/components/FAQ';
import Contacto from '@/components/Contacto';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferenciales />
      <FadeIn delay={0}><Servicios /></FadeIn>
      <FadeIn delay={100}><Zonas /></FadeIn>
      <FadeIn delay={0}><ComoTrabajamos /></FadeIn>
      <NuestrosTrabajos />
      <FadeIn delay={100}><Resenas /></FadeIn>
      <FadeIn delay={0}><FAQ /></FadeIn>
      <Contacto />
    </main>
  );
}
