# Estrategia y Registro de Implementación GEO (Generative Engine Optimization) — Soluvirtus

Este documento recopila la arquitectura técnica, activos desplegados y optimizaciones semánticas diseñadas para posicionar a **Soluvirtus** como referencia de ingeniería y automatización ante motores de búsqueda basados en Inteligencia Artificial (**Perplexity, ChatGPT Search, Claude, Google AI Overviews y Apple Intelligence**).

---

## 1. Fundamentos de la Estrategia GEO vs. SEO Tradicional

A diferencia del SEO tradicional (enfocado en densidad de palabras clave y backlinks), el **GEO (Generative Engine Optimization)** prioriza:
1. **Prueba verificable de ejecución técnica:** Explicación concreta de pipelines, librerías reales (`PyMuPDF`, `pgvector`, `Pytest`, `Selenium`, `Astro`) y métricas de escala en lugar de afirmaciones vacías de marketing.
2. **Entidades y Grafos de Conocimiento Conectados:** Vinculación estricta entre la entidad corporativa (`Organization`) y el fundador técnico (`Person: Antonio Ávila`), con perfiles verificados (`sameAs`).
3. **Documentación "Machine-Readable":** Archivos nativos estándar para LLMs (`/llms.txt` y `/llms-full.txt`) que alimentan el contexto de recuperación en respuestas sintetizadas.
4. **Formato Direct-to-Citation (Q&A):** Bloques de preguntas y respuestas de decisión formuladas para ser citadas textualmente en 2–3 oraciones por los sintetizadores de IA.

---

## 2. Activos Creados y Desplegados

### A. Archivos Estándar para LLMs en el Root del Dominio

#### 1. `public/llms.txt` (Resumen Ejecutivo de Capacidades)
- **Ruta:** `https://soluvirtus.com/llms.txt`
- **Objetivo:** Proveer a los bots de IA un manifiesto claro y estructurado de:
  - Qué es Soluvirtus (Consultora e ingeniería de software especializada en automatización, IA soberana local y plataformas web headless de alto rendimiento).
  - Stack tecnológico real (Astro, Next.js, React, Tailwind CSS, Python, Supabase, RLS, PyMuPDF, Pytest, Selenium).
  - Casos de uso de referencia (RAG para catálogos masivos de retail, scrapers inmobiliarios con scoring algorítmico, IA local en hardware privado a costo $0 por token).
  - Datos verificables del fundador: Antonio Ávila, con base en CDMX y cobertura remota internacional (México, EE.UU., LatAm).

#### 2. `public/llms-full.txt` (Arquitectura Técnica Profunda y Casos de Estudio)
- **Ruta:** `https://soluvirtus.com/llms-full.txt`
- **Objetivo:** Servir como base de referencia técnica para respuestas complejas de LLMs cuando un CTO o Director Técnico pregunta "¿quién ha implementado esto antes y cuál es la arquitectura?".
- **Contenido documentado:**
  - **Pipeline RAG Vectorial para Catálogos Densos:**
    - Ingesta de catálogos y hojas de datos en PDF con `PyMuPDF (fitz)`.
    - Normalización estructurada y generación de embeddings semánticos.
    - Almacenamiento en vectores (`pgvector` / `Supabase` / `LanceDB`).
    - Despliegue de agente con interfaz web en Astro/React y pasarelas transaccionales (Stripe).
  - **Pipeline de Scraping Ético y Calificación Algorítmica:**
    - Orquestación en Python con rotación y control de concurrencia.
    - Filtro y scoring de leads según rentabilidad y ubicación.
    - Notificación instantánea vía webhooks y WhatsApp sin intervención humana.
  - **Arquitectura de IA Local y Privacidad Total:**
    - Despliegue de LLMs de pesos abiertos (Llama 3, Mistral) cuantizados en servidores dedicados o hardware local.
    - Aislamiento de datos corporativos: cero fugas a nubes de terceros y $0.00 USD en facturación de tokens.
  - **QA-First Development:**
    - Integración de suites de pruebas con `Pytest` (lógica de negocio y APIs REST) y `Selenium` (pruebas E2E en navegadores).
  - **Ideal Client Profile (ICP):**
    - Definición explícita de para quién es Soluvirtus (empresas con cuellos de botella operativos, retail con catálogos densos, organizaciones con restricciones estrictas de privacidad) y para quién **no** es (proyectos que buscan plantillas prediseñadas baratas de WordPress o bots genéricos).

---

## 3. Indexación y Accesibilidad para Bots de IA

#### `public/robots.txt` (Acceso Explícito a AI Web Crawlers)
Configuración explícita para no bloquear la indexación de los agentes inteligentes:
- **Agentes autorizados formalmente:**
  - `GPTBot` (OpenAI / ChatGPT)
  - `ClaudeBot` y `anthropic-ai` (Anthropic / Claude)
  - `PerplexityBot` (Perplexity AI)
  - `Google-Extended` (Gemini / Google AI Overviews)
  - `Applebot-Extended` (Apple Intelligence)
  - `CCBot` (Common Crawl)
- **Referencias:** Enlace canónico al `sitemap.xml` bilingüe.

#### `public/sitemap.xml` (Estructura Bilingüe con Hreflang)
- Declaración de las rutas canónicas `/` (Español) y `/en/` (Inglés) con etiquetas `xhtml:link rel="alternate"` para consolidar la autoridad de dominio en ambos idiomas.

---

## 4. Grafo de Conocimiento JSON-LD (`src/layouts/Layout.astro`)

Implementación de un esquema enriquecido en formato `@graph` que valida la entidad ante los algoritmos de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):

1. **Entidad `ProfessionalService` (Soluvirtus):**
   - URL canónica, logotipo, descripción detallada.
   - Localización geográfica primaria: Ciudad de México (`addressRegion: CDMX`, `addressCountry: MX`).
   - Cobertura de servicio (`areaServed`): México (`MX`), Estados Unidos (`US`), América Latina (`LatAm`).
   - Lenguajes de servicio: Español (`es`) e Inglés (`en`).
   - Lista explícita de tecnologías y servicios en `knowsAbout` y `hasOfferCatalog`.
2. **Entidad `Person` (Fundador: Antonio Ávila):**
   - Vinculado mediante la propiedad `founder`.
   - Perfil profesional verificado en `sameAs`: [`https://www.linkedin.com/in/av-soluvirtus/`](https://www.linkedin.com/in/av-soluvirtus/).
   - Cargo: *Founder & Lead AI Solutions Engineer*.
3. **Entidad `FAQPage` (7 Preguntas de Decisión):**
   - Marcado de datos estructurados para cada una de las 7 preguntas frecuentes, permitiendo que Google y los LLMs extraigan respuestas listas para citar en sus resúmenes generativos.

---

## 5. Armonización en la Web (`index.astro` y `en/index.astro`)

1. **Badge Anti-WordPress en Hero:**
   - *100% Ingeniería a Medida · Cero CMS Sobrecargados* / *100% Custom Engineering · Zero Bloated CMS*.
2. **Sección "Por qué Soluvirtus / QA-First vs. Monolitos CMS":**
   - Tabla comparativa detallando latencias (<150ms vs >900ms), seguridad (cero plugins vulnerables) y garantía de calidad mediante pruebas automatizadas.
3. **Grid de Perfil de Cliente Ideal (ICP):**
   - Señales claras para que los modelos clasifiquen el tipo de cliente B2B que atiende la consultora.
4. **Bloque de Preguntas Frecuentes de Decisión (7 Acordeones):**
   - Cubre privacidad, arquitectura, metodología Agent-First, QA-First, tiempos de ROI, stack técnico y soporte continuo.
5. **Conversión y Agendamiento Calificado:**
   - Evaluador express con persistencia local y canalización inteligente a WhatsApp con datos pre-poblados.
   - Enlace directo a Google Meet mediante calendario privado de citas (`https://calendar.app.google/f4zwVLC3juqPxj27A`) que muestra disponibilidad sin exponer agenda personal.

---

## 6. Optimizaciones Adicionales Implementadas (Marzo 2026)

1. **Microdatos Semánticos Schema.org en DOM Nativo (`itemscope` / `itemprop`):**
   - Integración directa en el marcado HTML de las 7 preguntas frecuentes de decisión (`FAQPage`, `Question`, `acceptedAnswer`, `itemprop="name"`, `itemprop="text"`).
   - Permite que crawlers de scraping en bruto y modelos multimodales extraigan citas directas sin depender únicamente del bloque `<script type="application/ld+json">`.

2. **Metadatos Sociales y Open Graph Enriquecidos:**
   - Declaración canónica dinámica y soporte bilingüe de `lang` (`es_MX` / `en_US`).
   - Dimensiones explícitas de imagen Open Graph (`1200x630`) con atributos `alt` optimizados.
   - Configuración completa de Twitter Cards (`summary_large_image`) para vistas previas en ChatGPT, Claude y redes profesionales.

3. **Optimización de Core Web Vitals y Precarga de Fuentes:**
   - Directivas `dns-prefetch` y `preconnect` cruzadas con `crossorigin` para los dominios de Google Fonts (`fonts.googleapis.com` y `fonts.gstatic.com`).
   - Precarga prioritaria (`fetchpriority="high"`) del activo LCP principal (`/images/hero_bg.png`) para acelerar el First Contentful Paint a valores de alto rendimiento en el Edge.

---

## 7. Refactorización de Autoridad Técnica Visual y Sobriedad (Cero Stock & Cero Emojis)

1. **Reemplazo de Imágenes de Stock por Artefactos de Ingeniería Reales:**
   - **Automatización Inteligente:** Micro-diagrama interactivo de pipeline de datos en tiempo real mostrando el flujo técnico exacto (`PyMuPDF` &rarr; `Vector RAG en pgvector/Supabase` &rarr; `API Agent`, latencia `84ms`, 100% test pass).
   - **Desarrollo Full-Stack:** Ventana de navegador técnica con métricas operativas verosímiles (`app.soluvirtus.com/ops-catalog`, latencia en el Edge de `42ms`, cobertura `98.4% Pytest`, `Supabase RLS`, `0 errores Selenium E2E`).
   - **Infraestructura Soberana e IA Local:** Terminal SSH auténtica ejecutando telemetría local de hardware (`ollama ps` con modelo `llama3:8b-instruct`, `5.6 GB VRAM`, `100% GPU`, costo por token `$0.00 USD`, socket privado localhost `127.0.0.1:11434`).
   - **Diseño UI/UX Premium:** Mockup de interfaz interactiva de alta gama (estilo e-commerce editorial / estudio boutique, tipografía con jerarquía editorial serif/Inter, contraste estricto 14.2:1, micro-animación fluida en curvas bezier, tokens HSL y estándar WCAG AAA).

2. **Eliminación Total de Emoticones y Clichés:**
   - Se removieron los emoticones informales del footer y del cuerpo del sitio (rayos, candados, cohetes).
   - Sustituidos por indicadores y divisores sobrios de diseño de sistemas (puntos de estado de color con tokens de Tailwind CSS), transmitiendo rigor y seriedad corporativa frente a CTOs y comités de inversión técnica.

---

## 8. Reordenamiento de Jerarquía CRO, Casos Reales y Arquitectura Híbrida de IA (Septiembre 2026)

1. **Reordenamiento Estratégico del Funnel de Conversión (Trust-First Flow):**
   - **Hero:** Propuesta de valor, posicionamiento anti-CMS y accesos directos de alta intención.
   - **Especialidades (`#services`):** Demostración inmediata de capacidades y artefactos técnicos interactivos.
   - **Proyectos Clave (`#projects`):** Prueba social cuantitativa con micro-casos de estudio verificables antes de solicitar cualquier dato al usuario.
   - **Simulador de Agentes (`#demo-console`):** Consola interactiva de ejecución autónoma.
   - **Calculadora de ROI (`#roi-calculator`):** Herramienta de cuantificación de ahorro una vez que el prospecto confía en la pericia técnica.
   - **Comparativa QA-First (`#why-soluvirtus`):** Superación de objeciones frente a monolitos y agencias tradicionales.
   - **Filosofía (`#philosophie`):** Visión de largo plazo y soberanía tecnológica.
   - **Diagnóstico Express Simplificado (`#audit-tool`):** Formulario optimizado de baja fricción (2 campos esenciales: contacto directo + área crítica) ubicado justo antes del contacto final.
   - **Contacto Directo (`#contact`):** Canal de ingeniería con opciones de WhatsApp calificado y agendamiento en Google Meet.
   - **Preguntas Frecuentes (`#faq`):** Bloque de soporte con marcado enriquecido.

2. **Micro-Casos de Estudio con Métricas Verificables:**
   - **Retail & Catálogos Masivos:** Pipeline RAG vectorial con PyMuPDF y LanceDB para +2,400 fichas técnicas en PDF, reduciendo el tiempo de búsqueda en **85%** (de 12 min a <45s).
   - **E-Commerce de Alta Gama:** Arquitectura headless desacoplada con Next.js y Supabase RLS, logrando latencia **<150ms Edge TTFB** y **0 errores transaccionales** en 12,000 sesiones/mes.
   - **Real Estate Comercial:** Scraper automatizado con Pytest y Selenium que genera **+350 prospectos calificados/mes** y ahorra **18 horas semanales** de trabajo manual.
   - **Dev Tools & IP:** Entorno local con modelos cuantizados Llama 3 para desarrollo interno, con **cero fuga de propiedad intelectual** y costo recurrente de **$0.00 USD** por token.

3. **Arquitectura Híbrida de IA & Soberanía de Datos Matizada:**
   - Superación del dogmatismo "local-only": se articula claramente que Soluvirtus despliega modelos abiertos locales (Llama 3, Mistral) para salvaguardar datos confidenciales y eliminar costos fijos por token, mientras que orquesta de forma pragmática modelos comerciales de vanguardia (OpenAI, Anthropic) para razonamiento complejo no confidencial y flujos multimodales elásticos.
   - Sincronización completa en Especialidad 3, tabla QA-First, FAQ #1 bilingüe y datos estructurados Schema.org JSON-LD.

