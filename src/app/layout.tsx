import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

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
  title: 'Destapaciones en CABA y GBA | Openagua — Más de 10 años',
  description: 'Destapaciones de cloacas, cañerías e hidrojet en CABA y GBA. Más de 10 años de experiencia. 332 reseñas con 4.9★. Sin romper pisos. ☎ 11 5179-7649.',
  icons: {
    icon: [
      { url: '/img/favicon16.png?v=5', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon32.png?v=5', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon48.png?v=5', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: ['/img/favicon32.png?v=5'],
    apple: [
      { url: '/img/apple-touch-icon.png?v=5', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json?v=5',
  openGraph: {
    title: 'Destapaciones en CABA y GBA | Openagua — Más de 10 años',
    description: 'Destapaciones de cloacas, cañerías e hidrojet en CABA y GBA. Más de 10 años de experiencia. 332 reseñas con 4.9★. Sin romper pisos. ☎ 11 5179-7649.',
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
    title: 'Destapaciones en CABA y GBA | Openagua — Más de 10 años',
    description: 'Destapaciones de cloacas, cañerías e hidrojet en CABA y GBA. Más de 10 años de experiencia. 332 reseñas con 4.9★. Sin romper pisos. ☎ 11 5179-7649.',
    images: ['https://www.destapacionesopenagua.com.ar/img/home.jpg'],
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Script from 'next/script';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SkipLink from '@/components/SkipLink';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <GoogleTagManager gtmId="GTM-P8F23J7N" />
      <body>
        <SkipLink />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8F23J7N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LocalBusinessSchema />
        <SpeedInsights />
      </body>
    </html>
  );
}
