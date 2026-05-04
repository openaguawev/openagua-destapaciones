# 📝 Auditoría Experta de Contenidos y Search Intent - Openagua

**Enfoque:** Calidad de contenido (EEAT), intención de búsqueda, thin content y canibalización.

---

## 📊 1. Diagnóstico de Calidad General: MEDIO-ALTO (con un punto crítico)

Pensando como el algoritmo de Google (Helpful Content Update), el sitio tiene un **comportamiento bipolar**:
- **Landing Pages Transaccionales (Servicios):** Nivel ALTO. Están construidas con una profundidad semántica excelente. Resuelven la intención de búsqueda transaccional al instante (urgencia, FAQs de tiempos de llegada, métodos sin romper).
- **Páginas Programáticas (Barrios):** Nivel MEDIO. Cumplen su función hiper-local, pero bordean el concepto de *Doorway Pages* (páginas puerta) debido a que el texto varía muy poco entre "Palermo" y "Belgrano".
- **Blog (Informacional):** Nivel BAJO (Crítico). A excepción del artículo que expandimos recientemente, el resto son textos de 200-300 palabras que Google califica como **Thin Content**.

---

## 🚨 2. Lista de Errores Graves de Contenido

### A. Thin Content Masivo en el Blog (Riesgo Penalización Algorítmica)
De los 18 artículos del blog, **17 no tienen la profundidad necesaria** para competir en 2026. Son respuestas superficiales. 
* *Efecto:* Google los marca como "Descubierta - no indexada" porque considera que no aportan valor único frente a sitios como Wikipedia o foros de plomería.

### B. Riesgo de Canibalización de Keywords (Servicios)
Existen páginas que responden a una misma intención de búsqueda del usuario final:
- `/destapaciones-canerias` vs `/destapaciones-maquinas`
Para un usuario común con una pileta tapada, la intención es la misma. Tener dos landings separadas compitiendo por "destapar caños CABA" divide la fuerza de ranking (*link equity*).

### C. Naturalidad vs Forzado en Programática
Las 80+ páginas de barrios (`/barrios/destapaciones-[barrio]`) tienen una estructura muy robusta, pero la inyección de la keyword (el nombre del barrio) empieza a sentirse robótica en ciertas secciones del layout. A la larga, el *SpamBrain* de Google podría devaluar estas páginas si no se les inyecta data real hiper-local.

---

## 🗑️ 3. Qué contenido Eliminar, Mejorar o Crear

### ¿Qué Eliminar (o Consolidar)?
- **No elimines**, pero **Consolida**. La página de `/destapaciones-maquinas` debería ser absorbida por `/destapaciones-cloacas` o `/destapaciones-canerias` mediante un Redireccionamiento 301, convirtiendo "Máquinas rotativas" en un bloque de contenido fuerte dentro del servicio principal. La maquinaria es el *método*, no la *intención de búsqueda*.

### ¿Qué Mejorar Urgente?
- **El Blog:** Aplicar el mismo framework de expansión EEAT que usamos para "Video Inspección" en los 17 artículos restantes. Expandirlos a +800 palabras, agregar citas, viñetas de síntomas, casos reales de CABA, y tablas comparativas.
- **Diferenciación de Barrios:** Agregar al menos un párrafo dinámico en la base de datos `barrios.ts` que describa la tipología de cañerías del barrio (ej. *"En Recoleta es común encontrar cañerías de hierro fundido antiguo, mientras que en Nordelta dominan los sistemas de PVC tricapa..."*). Esto destruye el flag de contenido duplicado.

### ¿Oportunidades Nuevas (Qué Crear)?
- **Clústers Zonales (Hubs):** Actualmente pasas del Home al Barrio. Te falta la página "Pilar" intermedia. Crear:
  - `/zonas/destapaciones-zona-norte`
  - `/zonas/destapaciones-caba`
  Estas páginas agruparían los links de sus respectivos barrios, creando un silo de autoridad perfecto que Google ama rastrear.

---

## 💡 4. Ideas Concretas para Posicionar Mejor y Dominar

1. **Ataque a la Intención de "Pánico" (Search Intent):**
   El usuario que busca "inodoro rebalsa" está en pánico. Coloca el botón de WhatsApp (con un texto de *Llegamos en 45 min*) en la parte superior, sin necesidad de hacer scroll (Above the fold).
2. **Inyectar "Casos de Éxito Locales" (Social Proof & EEAT):**
   Añadir un componente en la home o servicios de *Trabajos Recientes*: "Destapación de columna en edificio de Belgrano (Martes 14)". Esto le demuestra a Google (y al cliente) que el negocio es real, activo y local.
3. **Sección de Precios/Presupuestos (Transparencia):**
   Uno de los "Search Intents" más fuertes es "¿cuánto cuesta destapar un caño?". Nadie lo pone en su web. Crear un artículo o sección sobre *"Cómo calculamos el precio de una destapación"* te robará todos los clics informacionales de competidores opacos.
