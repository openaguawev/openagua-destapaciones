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
  title: 'Destapaciones en CABA y GBA | Openagua',
  description: 'Servicio profesional de destapaciones de cloacas, cañerías e hidrojet en CABA y Gran Buenos Aires. Diagnóstico preciso. Atención de 8 a 19 hs.',
  alternates: {
    canonical: 'https://www.openagua.com.ar',
  },
  icons: {
    icon: '/icon.svg',
  }
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
    "@type": "LocalBusiness",
    "name": "Openagua Destapaciones",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    "telephone": "+5491151797649",
    "url": "https://www.openagua.com.ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "areaServed": ["CABA", "Gran Buenos Aires"],
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
