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
  title: 'Openagua | Destapaciones en CABA y GBA',
  description: 'Servicio profesional de destapaciones de cloacas, cañerías e hidrojet en CABA y Gran Buenos Aires. Diagnóstico preciso. Atención de 8 a 19 hs.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Openagua | Destapaciones en CABA y GBA',
    description: 'Servicio profesional de destapaciones de cloacas, cañerías e hidrojet en CABA y Gran Buenos Aires. Diagnóstico preciso. Atención de 8 a 19 hs.',
    url: 'https://www.destapacionesopenagua.com.ar',
    siteName: 'Openagua',
    images: [
      {
        url: 'https://www.destapacionesopenagua.com.ar/logo.svg',
        width: 800,
        height: 600,
        alt: 'Openagua Destapaciones',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Openagua | Destapaciones en CABA y GBA',
    description: 'Servicio profesional de destapaciones de cloacas, cañerías e hidrojet en CABA y Gran Buenos Aires.',
    images: ['https://www.destapacionesopenagua.com.ar/logo.svg'],
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Openagua",
    "image": "https://destapacionesopenagua.com.ar/img/home.jpg",
    "telephone": "15-5179-7649",
    "url": "https://destapacionesopenagua.com.ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "areaServed": "CABA y GBA",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
