import { Articulo } from '@/data/blog';

export interface FAQ {
  q: string;
  a: string;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function generateArticleSchema(post: Articulo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle || post.title,
    "description": post.excerpt,
    "image": `https://www.destapacionesopenagua.com.ar${post.image}`,
    "datePublished": post.publishedAt || "2024-01-01",
    "dateModified": post.updatedAt || post.publishedAt || "2024-01-01",
    "author": {
      "@type": "Person",
      "name": "Emmanuel",
      "jobTitle": "Técnico especialista en destapaciones",
      "worksFor": {
        "@type": "Organization",
        "name": "Openagua Destapaciones",
        "@id": "https://www.destapacionesopenagua.com.ar/#business"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Openagua Destapaciones",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.destapacionesopenagua.com.ar/logo.svg"
      }
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
}
