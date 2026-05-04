# 🔍 Auditoría Técnica SEO Avanzada - Openagua

**Framework Base:** Next.js App Router | Vercel
**Foco de Negocio:** Destapaciones (SEO Local CABA/GBA) + PSEO

A continuación presento el diagnóstico crudo y técnico, organizado por impacto descendente, enfocándome puramente en la arquitectura de Next.js y el estado actual de tu indexación.

---

## 🚨 PROBLEMAS CRÍTICOS (Resolver Inmediatamente)

### 1. Schema LocalBusiness Incompleto (SEO Local)
- **Ubicación:** `src/app/[slug]/page.tsx` y `src/components/Servicios.tsx`
- **Por qué afecta el SEO:** Tienes implementado el objeto `LocalBusiness` en el JSON-LD, pero solo defines el campo `"name": "Openagua"`. Google no tiene el NAP (Name, Address, Phone) ni el área de servicio en las páginas transaccionales más importantes. Sin esto, es imposible ganar autoridad local en el *Map Pack*.
- **Solución Concreta (Next.js):** Debes expandir el objeto estático en los scripts de Next.js.
  ```typescript
  "provider": {
    "@type": "LocalBusiness",
    "name": "Openagua Destapaciones",
    "telephone": "+5491151797649",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "areaServed": ["CABA", "Gran Buenos Aires"],
    "priceRange": "$$"
  }
  ```

### 2. Thin Content Severo (Origen del "Descubierta - No Indexada")
- **Ubicación:** `src/data/blog.ts`
- **Por qué afecta el SEO:** De los 18 artículos, 17 tienen menos de 400 palabras y una estructura superficial. Googlebot los "Descubre" vía Sitemap, analiza su DOM y decide que no valen el costo de almacenamiento en sus servidores (Crawl Demand = Bajo) porque no aportan valor único (*Helpful Content Update*).
- **Solución Concreta:** Usar el modelo de expansión que ya probamos en el post de video inspección. Re-escribir los arrays en `blog.ts` inyectando etiquetas semánticas (`<h2>`, `<h3>`), tablas comparativas, listas estructuradas y un mínimo de 800 palabras reales que ataquen a fondo la intención.

### 3. Fuga de Interlinking desde la Arquitectura PSEO
- **Ubicación:** `src/app/barrios/[slug]/page.tsx`
- **Por qué afecta el SEO:** Tienes +160 páginas de barrios acumulando autoridad geográfica. Sin embargo, estas páginas NO enlazan hacia el blog. Estás perdiendo el flujo de *PageRank* (Link Equity) que podría levantar a los artículos informacionales del pozo de no-indexación.
- **Solución Concreta (Next.js):** Modificar el layout de los barrios para incluir el mismo mapeo determinista `relatedBlogPosts` que ya tienes en los servicios. Al final de la vista del barrio, renderiza 3 enlaces semánticos hacia el blog.

---

## ⚠️ PROBLEMAS IMPORTANTES (Resolver en el Sprint 2)

### 4. Riesgo de "Doorway Pages" por Falta de Singularidad
- **Ubicación:** Páginas dinámicas PSEO (`/barrios/*`)
- **Por qué afecta el SEO:** La matriz programática reemplaza la variable `{barrio.name}` eficientemente, pero el 90% del texto adyacente es idéntico entre "Destapaciones Palermo" y "Destapaciones Belgrano". Google está penalizando fuertemente la generación masiva de contenido sin valor local único.
- **Solución Concreta:** Añadir propiedades específicas en la base de datos (`src/data/barrios.ts`). Por ejemplo, agregar `tipoConstruccion` (ej. "Edificios antiguos con caños de plomo" vs "Condominios modernos de PVC"). Luego, en el `page.tsx` de barrios, renderizar condicionalmente bloques de texto que utilicen esas variables para forzar diferenciación de DOM.

### 5. Canibalización de Intención de Búsqueda
- **Ubicación:** `/destapaciones-canerias` vs `/destapaciones-maquinas`
- **Por qué afecta el SEO:** Ambas landings apuntan al mismo usuario y resuelven el mismo problema (caños tapados en interior). "Máquinas" es la herramienta, no el servicio. Google confunde a cuál darle la fuerza de clasificación.
- **Solución Concreta:** 
  1. En Next.js (`next.config.js`), crear un `redirect` permanente (301) de `/destapaciones-maquinas` hacia `/destapaciones-canerias`.
  2. Borrar o deshabilitar el servicio en `src/data/servicios.ts` y trasladar su texto como un subtítulo (`<h2>`) dentro de la página destino.

---

## 🟡 PROBLEMAS MENORES (Mejoras Técnicas de Rendimiento)

### 6. Carencia de FAQ Schema en el Blog
- **Ubicación:** Función `getFaqHtml` en `src/data/blog.ts`
- **Por qué afecta el SEO:** Tienes FAQs renderizadas en HTML nativo con `<details>`, lo cual es genial para UX, pero no inyectas JSON-LD de tipo `FAQPage`. Te estás perdiendo la oportunidad de ganar "Resultados Enriquecidos" (Rich Snippets) en las SERPs, que duplican el CTR.
- **Solución Concreta:** Modificar el template del blog en `src/app/blog/[slug]/page.tsx` para extraer las preguntas y construir un `<Script type="application/ld+json">` dinámico con el esquema de Google.

---

## 📋 PLAN DE ACCIÓN PRIORIZADO (Tu Roadmap)

**Fase 1: Autoridad y Señales Core (HOY)**
1. **Actualizar el LocalBusiness Schema** en los componentes de Servicios y Barrios. Google necesita vincular tu marca con coordenadas reales.
2. **Inyectar el bloque de interlinking** en `barrios/[slug]/page.tsx` hacia el blog para bañar a los artículos de autoridad programática.

**Fase 2: Salvataje de Contenido (Próxima Semana)**
3. **Re-escribir los 17 artículos "Thin"** en `blog.ts` usando frameworks EEAT agresivos.
4. Una vez modificados, entrar a Google Search Console y solicitar inspección masiva para forzar a Googlebot a re-descubrirlos.

**Fase 3: Refinamiento Programático (Futuro)**
5. Expandir `barrios.ts` con variables únicas por localidad para evitar el flag de "Doorway Page".
6. Consolidar el servicio de máquinas dentro del servicio de cañerías para frenar la canibalización.
