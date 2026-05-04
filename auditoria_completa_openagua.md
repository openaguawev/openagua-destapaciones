# 🌐 Auditoría SEO Integral Completa - Openagua

**Fecha de análisis:** Mayo 2026
**Tecnología base:** Next.js (App Router), Vercel
**Diagnóstico en vivo:** Lighthouse (Performance: 94 | SEO: 100 | Accesibilidad: 96 | CLS: 0 | LCP: 2.7s)

---

## 📊 1. RESUMEN EJECUTIVO

### Los 5 problemas más críticos encontrados en todo el sitio:
1. **Esquema LocalBusiness Incompleto:** Las páginas locales carecen de datos NAP (Nombre, Dirección, Teléfono), aniquilando la visibilidad en el *Map Pack* de Google.
2. **Thin Content Masivo en el Blog:** 17 de los 18 artículos son demasiado cortos y superficiales, siendo la causa raíz del error *"Descubierta - actualmente no indexada"*.
3. **Fuga de Interlinking en PSEO:** Las +160 páginas programáticas de barrios no están inyectando autoridad (enlaces) hacia el blog.
4. **Hemorragia de Crawl Budget (WP Legacy):** Googlebot sigue intentando rastrear `/wp-content/` y `.php` del sitio viejo. *(Nota: Contenido mitigado recientemente por proxy 410, pendiente de validación en GSC).*
5. **Canibalización Transaccional:** Servicios idénticos en intención de búsqueda (`/destapaciones-canerias` vs `/destapaciones-maquinas`) dividiendo la autoridad de la URL.

**Estado actual del sitio en una línea:**
*Arquitectura técnica y performance en el Top 5% del mercado local, pero con fugas graves de PageRank debido a orfandad estructural y debilidad crítica de contenido informacional.*

---

## 🛠️ 2. HALLAZGOS TÉCNICOS

### A. LCP (Largest Contentful Paint) en Zona de Peligro
- **Ubicación:** Home y Landings principales.
- **Severidad:** MENOR
- **Por qué afecta el SEO:** La carga del banner inicial arroja **2.7 segundos** (el límite verde de Google es 2.5s), afectando ligerísimamente las Core Web Vitals móviles.
- **Solución Concreta:** Añadir la directiva `priority={true}` en el componente `<Image />` de Next.js para el Hero banner para aplicar `fetchpriority="high"`.

### B. Rastreo Atascado por "Basura Legacy"
- **Ubicación:** Consola de Search Console (URLs antiguas).
- **Severidad:** IMPORTANTE
- **Por qué afecta el SEO:** Gasta el escaso presupuesto de rastreo de Google en 404s en lugar de indexar los barrios.
- **Solución Concreta:** Ya se implementó el Middleware 410 en `src/proxy.ts`. Falta validación manual masiva en GSC.

### C. Canibalización por Canonical Histórica
- **Ubicación:** `src/app/layout.tsx` (Previamente).
- **Severidad:** CRÍTICO (Corregido en sprint anterior).
- **Por qué afecta el SEO:** Forzaba a todas las URLs dinámicas a tener como canonical a la página Home.
- **Solución Concreta:** Ya erradicado. Next.js App Router ahora genera el canonical autogestionado por URL.

---

## 📝 3. HALLAZGOS DE CONTENIDO Y BLOG

### A. Thin Content Masivo
- **Ubicación:** `src/data/blog.ts`
- **Estado de los artículos:** 1 de 18 (Video Inspección) está optimizado. Los otros 17 están abandonados.
- **Severidad:** CRÍTICO
- **Word count / Estructura:** Promedian 250-350 palabras. Carecen de estructuras ricas (H2 anidados, tablas, viñetas, FAQs).
- **Intención de Búsqueda:** Dan respuestas teóricas superficiales sin "Information Gain" (ganancia de información frente a la IA o Wikipedia).

### B. Riesgo de Canibalización de Servicios
- **Ubicación:** `/destapaciones-canerias` vs `/destapaciones-maquinas`
- **Severidad:** IMPORTANTE
- **Problema:** Para Google, destapar una cañería y hacerlo con una máquina es la misma intención de búsqueda para el usuario.
- **Solución Concreta:** Convertir la página de "Máquinas" en una sección dentro de "Cañerías" y aplicar un 301.

### C. Carencia de FAQ Schema en Artículos
- **Ubicación:** Función `getFaqHtml` en `src/data/blog.ts`
- **Severidad:** MENOR
- **Problema:** Tienes acordeones HTML, pero no inyectas JSON-LD de tipo `FAQPage`, perdiendo Rich Snippets en las SERPs.

---

## 🔗 4. HALLAZGOS DE INTERLINKING

### A. Fuga en PSEO (Flujo de autoridad hacia el blog)
- **Ubicación:** `src/app/barrios/[slug]/page.tsx`
- **Severidad:** CRÍTICO
- **Páginas Huérfanas relativas:** El blog no recibe flujo de autoridad geográfica. Las 160+ páginas locales acaparan el PageRank y no lo distribuyen hacia el cluster informacional.
- **Solución Concreta:** Clonar el algoritmo `relatedBlogPosts` e inyectar 3 tarjetas semánticas del blog al pie de cada página de barrio.

---

## 🗺️ 5. HALLAZGOS PSEO (BARRIOS)

### A. Riesgo de "Doorway Pages"
- **Ubicación:** Páginas dinámicas (`/barrios/[slug]`)
- **Severidad:** IMPORTANTE
- **Estado de Indexación / Duplicados:** La inyección de la variable `{barrio.name}` funciona y genera URLs limpias, pero el 90% del DOM (texto) es matemáticamente idéntico entre distintos barrios. Esto alerta al SpamBrain de Google.
- **Solución Concreta:** Agregar campos extras en `src/data/barrios.ts` (ej. `tipologiaConstructiva`, `problemasFrecuentesZonales`) para inyectar párrafos únicos que diferencien el DOM de Palermo del de Avellaneda.

---

## 📍 6. HALLAZGOS SEO LOCAL

### A. Schema LocalBusiness Incompleto
- **Ubicación:** `src/app/[slug]/page.tsx` y `src/components/Servicios.tsx`
- **Severidad:** CRÍTICO
- **NAP Consistency:** El JSON-LD tiene el `"name"`, pero carece absolutamente de `"address"`, `"telephone"` y `"areaServed"`.
- **Cobertura geográfica:** Google no tiene forma algorítmica estructurada de saber que atiendes CABA y GBA, ni dónde está tu base, reduciendo drásticamente la visibilidad de tu Google Business Profile en búsquedas transaccionales locales.

---

## 📋 7. PLAN DE ACCIÓN PRIORIZADO

### 🔴 FASE 1: Salvataje Estructural (IMPACTO CRÍTICO - HACER YA)
1. **Actualizar el JSON-LD LocalBusiness** en todos los componentes para inyectar el NAP (Teléfono, Dirección, Área de Servicio).
2. **Inyectar el Interlinking Blog en Barrios:** Modificar `barrios/[slug]/page.tsx` para que cada barrio enlace a 3 posts del blog.
3. **Acción Manual GSC:** Entrar a Google Search Console, validar errores 404/410, y forzar indexación de la página "Video Inspección".

### 🟡 FASE 2: Expansión y Consolidación (IMPACTO MEDIO - PRÓXIMA SEMANA)
4. **Reescribir los 17 artículos del Blog:** Transformarlos de *thin content* a guías de +800 palabras con estructura EEAT.
5. **Frenar Canibalización:** Redirigir (301) `/destapaciones-maquinas` hacia `/destapaciones-canerias`.

### 🟢 FASE 3: Refinamiento de Calidad (MEJORAS MENORES / FUTURO)
6. **Desarrollar el "Doorway Shield":** Añadir variables descriptivas únicas a cada barrio en `barrios.ts` para que Google los considere páginas 100% únicas y valiosas.
7. **Optimización LCP:** Ajustar las propiedas `priority` y `fetchPriority` en la imagen Hero del home para raspar esos 200ms de velocidad.
8. **Generar Hubs Zonales:** Crear las páginas pilar (`/zonas/zona-norte`, etc) como *silos* de enlaces que agrupen eficientemente el Link Equity de los barrios.
