import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.destapacionesopenagua.com.ar'),
  title: 'Openagua | Destapaciones de cañerías en CABA y GBA',
  description: 'Destapaciones de cañerías en CABA y GBA con atención profesional y soluciones reales. Diagnóstico claro y sin romper. Llamanos al 11 5179-7649.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar',
  },
  icons: {
    icon: [
      { url: '/img/favicon16.png?v=4', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon32.png?v=4', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon48.png?v=4', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: ['/img/favicon32.png?v=4'],
    apple: [
      { url: '/img/apple-touch-icon.png?v=4', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json?v=4',
  openGraph: {
    title: 'Openagua | Destapaciones de cañerías en CABA y GBA',
    description: 'Destapaciones de cañerías en CABA y GBA con atención profesional y soluciones reales. Diagnóstico claro y sin romper. Llamanos al 11 5179-7649.',
    url: 'https://www.destapacionesopenagua.com.ar',
    siteName: 'Openagua',
    images: [
      {
        url: 'https://www.destapacionesopenagua.com.ar/img/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Openagua - Destapaciones profesionales en CABA y GBA',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Openagua | Destapaciones de cañerías en CABA y GBA',
    description: 'Destapaciones de cañerías en CABA y GBA con atención profesional y soluciones reales. Diagnóstico claro y sin romper. Llamanos al 11 5179-7649.',
    images: ['https://www.destapacionesopenagua.com.ar/img/home.jpg'],
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.destapacionesopenagua.com.ar/#organization",
    "name": "Openagua",
    "url": "https://www.destapacionesopenagua.com.ar",
    "logo": "https://www.destapacionesopenagua.com.ar/logo.svg",
    "sameAs": [
      "https://facebook.com/openagua",
      "https://www.instagram.com/destapaciones_openagua/",
      "https://www.youtube.com/@openagua/videos",
      "https://www.tiktok.com/@destapacionesopenagua"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": "https://www.destapacionesopenagua.com.ar/#localbusiness",
    "parentOrganization": { "@id": "https://www.destapacionesopenagua.com.ar/#organization" },
    "name": "Openagua",
    "image": "https://www.destapacionesopenagua.com.ar/img/home.jpg",
    "logo": "https://www.destapacionesopenagua.com.ar/logo.svg",
    "telephone": "+5491151797649",
    "url": "https://www.destapacionesopenagua.com.ar",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "CABA / GBA",
      "addressCountry": "AR"
    },
    "areaServed": [
      "Ciudad Autónoma de Buenos Aires",
      "Zona Norte",
      "Zona Oeste",
      "Zona Sur"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "08:00",
        "closes": "19:00",
        "description": "Urgencias disponibles las 24 horas, los 7 días de la semana"
      }
    ],
    "sameAs": [
      "https://facebook.com/openagua",
      "https://www.instagram.com/destapaciones_openagua/",
      "https://www.youtube.com/@openagua/videos",
      "https://www.tiktok.com/@destapacionesopenagua"
    ],
    "hasMap": "https://www.google.com/maps/search/Openagua+Destapaciones"
  };

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
