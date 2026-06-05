import Script from 'next/script';

export interface LocalBusinessSchemaProps {
  additionalData?: Record<string, any>;
}

export default function LocalBusinessSchema({ additionalData }: LocalBusinessSchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.destapacionesopenagua.com.ar/#business",
    "name": "Openagua Destapaciones",
    "description": "Servicio profesional de destapaciones cloacales, pluviales y video inspección de cañerías en CABA y Gran Buenos Aires.",
    "url": "https://www.destapacionesopenagua.com.ar",
    "telephone": "+54-9-11-5179-7649",
    "email": "contacto@destapacionesopenagua.com.ar",
    "image": "https://www.destapacionesopenagua.com.ar/logo.svg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zona Oeste",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ciudad Autónoma de Buenos Aires"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Zona Norte GBA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Zona Oeste GBA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Zona Sur GBA"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday",
          "Thursday","Friday","Saturday"
        ],
        "opens": "08:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/openagua",
      "https://www.instagram.com/destapaciones_openagua/",
      "https://www.youtube.com/@openagua"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Destapaciones",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destapación de Cloacas"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destapación de Cañerías"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destapación de Pluviales"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Video Inspección de Cañerías"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Limpieza de Cámaras Sépticas"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destapación con Hidrojet"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Desagote de Sótanos"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Mantenimiento Preventivo"}}
      ]
    }
  };

  const finalSchema = additionalData ? { ...baseSchema, ...additionalData } : baseSchema;

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
