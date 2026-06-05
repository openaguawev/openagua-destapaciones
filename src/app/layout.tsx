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
  title: {
    default: 'Openagua Destapaciones | CABA y GBA',
    template: '%s | Openagua',
  },
  description: 'Servicio profesional de destapaciones en CABA y GBA. Cloacas, cañerías, pluviales y video inspección. 333 reseñas con 4.9★.',
}

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
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LocalBusinessSchema />
        <SpeedInsights sampleRate={0.1} />
      </body>
    </html>
  );
}
