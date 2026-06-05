import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Destapaciones en CABA y GBA | Openagua',
  description: 'Destapaciones de cloacas, cañerías y pluviales en CABA y GBA. Más de 12 años de experiencia, 333 reseñas con 4.9★. Llamá al 11 5179-7649.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar',
  },
  openGraph: {
    title: 'Destapaciones en CABA y GBA | Openagua',
    description: 'Destapaciones de cloacas, cañerías y pluviales en CABA y GBA. Más de 12 años de experiencia, 333 reseñas con 4.9★.',
    url: 'https://www.destapacionesopenagua.com.ar',
    siteName: 'Openagua',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main id="main-content">
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
