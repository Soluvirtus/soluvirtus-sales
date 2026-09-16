# SOLUVIRTUS - Consultora de Tecnología y Desarrollo

## Acelera, Delega y Simplifica tu trabajo

### Resumen
Soluvirtus es una consultora boutique de tecnología y desarrollo de software enfocada en la automatización inteligente de negocios, la ingeniería de software a la medida y la integración de soluciones avanzadas de Inteligencia Artificial (IA) en flujos de trabajo prácticos de nivel empresarial.

Bajo un paradigma **"agent-first"** (priorizando el uso de agentes autónomos), Soluvirtus ayuda a las empresas a escalar mediante la automatización de procesos repetitivos, el scrapers de datos masivos, y el reemplazo de herramientas heredadas e inflexibles por ecosistemas digitales modernos, rápidos y soberanos.

---

### Especialidades y Enfoque Tecnológico
El proyecto opera sobre un stack web moderno de alto rendimiento y arquitectura desacoplada:
- **Framework**: Astro 4 (arquitectura de islas para entrega de cero JavaScript innecesario en el cliente, óptimo para SEO y GEO).
- **Estilos y Diseño**: Tailwind CSS (sistema de diseño con tokens CSS, modo claro/oscuro dinámico, estética de ventanas de sistema operativo `#0a0a0a` y WCAG AAA).
- **Control de Calidad (QA-First)**: Suites de pruebas automatizadas con Pytest, Selenium y Playwright.
- **Estructura del Proyecto**:
  - `src/layouts/Layout.astro`: Layout base con soporte de tema, metadatos enriquecidos Open Graph, Twitter Cards y marcado semántico JSON-LD (`ProfessionalService`, `Person: Antonio Ávila`, `FAQPage`).
  - `src/pages/index.astro`: Landing page principal en español con Trust Banner institucional en SVG, tarjetas OS de especialidades, simulador interactivo de ROI, consola de agentes, tabla comparativa sintética y modal de evaluación express.
  - `src/pages/en/index.astro`: Versión en inglés con paridad completa de diseño, interactividad y enlaces internacionales hreflang.
  - `public/llms.txt` y `public/llms-full.txt`: Documentación machine-readable para motores de búsqueda con IA y LLMs (GEO).
  - `GEO_STRATEGY.md`: Registro de arquitectura y estrategia de Generative Engine Optimization.

---

### Estado de las 30 Sugerencias para el Sitio Web (UX, Diseño y Conversión)

A continuación se detalla el balance de las sugerencias propuestas y su estado actual de integración:

#### Estética y Diseño Visual
1. **[Implementado] Micro-animaciones al hacer scroll**: Implementado con clases de `reveal` e `IntersectionObserver` ligero nativo sin sobrecargar el bundle con dependencias pesadas.
2. **[Implementado] Efecto de Resplandor Neón**: Clases `text-neon-glow` y efectos de hover en isotipo y textos de marca.
3. **[Roadmap / Opcional] Indicador de Lectura**: Barra de progreso de lectura horizontal fija en el header.
4. **[Implementado] Gradiente Animado en el Fondo**: Radial background gradients con clase `animate-gradient` en el Hero.
5. **[Implementado] Efecto Glassmorphism Refinado**: Marcos de sistema operativo con bordes de baja opacidad `border-white/[0.08]`, fondos `#0a0a0a` y sombras interiores suaves.
6. **[Implementado] Optimización de Iconos e Imágenes SVG**: Logotipos vectoriales SVG oficiales y monocromáticos para **BBVA**, **Warner Bros. Discovery** y **JK Tornel (GINTOR)**, e iconos SVG inline de alta fidelidad.

#### Rendimiento y SEO / GEO
7. **[Implementado] Optimización de Formatos de Imagen**: Uso de recursos optimizados con directivas `fetchpriority="high"` en elementos críticos LCP.
8. **[Implementado] Esquema JSON-LD & DOM Semántico**: Marcado `@graph` en `Layout.astro` (`ProfessionalService`, `Person`, `FAQPage`) y microdatos Schema.org nativos (`itemscope`, `itemprop`).
9. **[Implementado] Meta-etiquetas Open Graph (OG) & Twitter**: Tarjetas `summary_large_image`, dimensiones explícitas `1200x630` y soporte bilingüe `og:locale`.
10. **[Implementado] Carga Diferida (Lazy Loading)**: Activación de carga diferida en activos complementarios.
11. **[Implementado] Optimización de Fuentes**: Directivas `preconnect` y `dns-prefetch` prioritarias hacia los servidores de fuentes.
12. **[Implementado] Core Web Vitals**: Compilación estática pura que entrega TTFB inferior a 150ms en el Edge y puntuaciones superiores a 95 en Lighthouse.

#### Experiencia de Usuario (UX)
13. **[Implementado] Navegación Responsive**: Barra superior flotante optimizada con cambio de idioma rápido (`ES` / `EN`) y selector de tema.
14. **[Roadmap / Opcional] Botón de Retorno al Principio (Scroll-to-Top)**: Botón flotante para retorno rápido al Hero.
15. **[Implementado] Transiciones de Tema Suaves**: Transiciones fluidas en colores de fondo y texto con persistencia en `localStorage`.
16. **[Implementado] Visualización de Casos en Tabla y Tarjetas**: Vista en tabla de alta escaneabilidad en escritorio y tarjetas modulares en pantallas táctiles.
17. **[Implementado] Claridad de Conceptos Técnicos**: Viñetas técnicas claras con especificaciones concretas (`PyMuPDF`, `Supabase RLS`, `Llama 3`, `Selenium/Playwright`).
18. **[Implementado] Modal de Diagnóstico & Evaluación**: Ventana modal flotante interactiva (`#audit-modal`) accesible desde el Hero y el Simulador de ROI con cierre por tecla `Esc` y fondo `backdrop-blur-md`.

#### Conversión (CRO)
19. **[Implementado] Casos de Estudio con Métricas Verificables**: Mención detallada y métricas cuantitativas de proyectos reales (**JK Tornel**, Retail RAG, Real Estate).
20. **[Implementado] Preguntas Frecuentes (FAQ)**: Acordeones interactivos con lógica accesible de apertura/cierre exclusivos.
21. **[Implementado] Formularios Reactivos con Validación**: Validación del lado del cliente, almacenamiento en `localStorage` y apertura directa con mensaje calificado a WhatsApp.
22. **[Implementado] Llamadas a la Acción Contextuales**: Botones contextuales de cotización que pre-seleccionan el servicio de interés en el formulario principal.
23. **[Implementado] Widget Flotante de Contacto Calificado**: Menú desplegable con opción de agendar sesión en Google Meet (20 min) o chat directo en WhatsApp.
24. **[Implementado] Métricas de Impacto Cuantitativas**: Ahorro porcentual, horas semanales recuperadas y volumen de SKUs gestionados.

#### Funcionalidades Interactivas
25. **[Implementado] Simulador de Retorno de Inversión (ROI)**: Sliders interactivos de colaboradores, horas mecánicas y costo hora con cálculo en tiempo real de ahorro mensual/anual y mensaje formateado para WhatsApp.
26. **[Implementado] Consola de Simulación de Agentes**: Terminal interactiva con logs progresivos en tiempo real para 3 tareas autónomas (Catálogo, Scraper de Leads y LLM Local).
27. **[Implementado] Hoja de Ruta / Diagnóstico Personalizado**: Enlace directo desde el cálculo de ROI hacia el modal de evaluación express.
28. **[Implementado] Telemetría y Estatus de IA Local**: Micro-artefactos interactivos que simulan el estado en vivo de sockets privados y modelos Llama 3 en GPU.
29. **[Implementado] Cobertura Internacional**: Especificación clara de servicio nearshore bilingüe para México, EE.UU. y LatAm.
30. **[Implementado] Filosofía y Soberanía Tecnológica**: Sección de pilares fundamentales ("Encontrando soluciones, Impulsando virtudes") y control absoluto de infraestructura.

---

### 30 Sugerencias para el Modelo de Negocio de Soluvirtus

> Para consultar la matriz de priorización estratégica, evaluación de viabilidad enterprise y hoja de ruta comercial de estas 30 iniciativas, consulta [BUSINESS_MODEL_DIAGNOSIS.md](file:///c:/Users/anton/Documents/GitHub/soluvirtus-sales/BUSINESS_MODEL_DIAGNOSIS.md).

#### Estructura de Servicios y Precios
1. **Suscripción de IA Local (SaaS Localized)**: Cambiar el modelo de cobro único por licencias mensuales de software que corran en servidores locales del cliente.
2. **Modelo de Compartición de Ingresos (RevShare)**: Estructurar la opción de "Crear Sociedad" con contratos formales donde se cobre un 1% a 3% de las ventas generadas a través de los catálogos automatizados.
3. **Auditorías de Automatización (Foot-in-the-Door)**: Ofrecer diagnósticos iniciales de bajo costo para identificar cuellos de botella en los flujos de trabajo del cliente.
4. **Packs de Horas de Ingeniería**: Vender bolsas mensuales de soporte/desarrollo de 10, 20 o 50 horas para el mantenimiento de flujos de IA.
5. **Categorización de Soporte**: Diferenciar soporte básico (correo) de soporte premium (WhatsApp/Llamada dedicada con tiempos de respuesta menores a 4 horas).
6. **E-Commerce "Llave en Mano"**: Crear un paquete cerrado para tiendas boutique digitales con un tiempo de entrega garantizado de 15 días.

#### Segmentación de Nichos
7. **Foco en Real Estate High-End**: Posicionar los scrapers de leads e integraciones inmobiliarias como un producto exclusivo para agencias de propiedades de lujo.
8. **Servicios Especializados para Retail Masivo**: Diseñar plantillas y scrapers específicos para catálogos de e-commerce con miles de productos.
9. **Soluciones para Consultorios e IPS**: Automatización de agendas, confirmaciones de citas e historiales médicos locales respetando la privacidad de datos.
10. **Automatización para Agencias de Marketing**: Bots especializados en recopilación y procesamiento automatizado de reportes de leads.
11. **Ecosistema Móvil para PyMEs**: Enfocarse en la configuración de flujos remotos móviles a través de smartphones económicos reutilizados como servidores locales (Termux + Tasker).
12. **Consultoría de Soberanía de Datos**: Ofrecer migración de servicios comerciales en la nube (AWS/Azure) hacia hardware de código abierto y local para corporaciones preocupadas por costos.

#### Ventas e Innovación
13. **Kit de Arranque "Agent-First"**: Vender un pack básico preconfigurado con un agente local open-source capaz de responder preguntas frecuentes corporativas.
14. **Garantía de Cero Fugas**: Ofrecer reembolsos si el sistema automatizado falla en procesar un lead dentro de los primeros 5 minutos.
15. **Alianzas con Plataformas de Pago**: Convertirse en partner oficial de Stripe o Mercado Pago para agilizar y comisionar la integración de cobros.
16. **Certificaciones Soluvirtus**: Crear un sello de "Negocio Automatizado con IA Soberana de Soluvirtus" que los clientes puedan colocar en sus pies de página.
17. **Plantillas Open Source**: Liberar herramientas sencillas en GitHub para generar tráfico orgánico de desarrolladores que recomienden la consultora.
18. **Demostraciones en Vivo Automatizadas**: Configurar un bot de WhatsApp público de Soluvirtus que demuestre en tiempo real el catálogo inteligente y el sistema de cobros al interactuar con él.

#### Retención y Escabilidad
19. **Panel de Clientes**: Desarrollar un portal donde los clientes monitoreen el rendimiento, leads procesados y el estado de sus servidores de IA local.
20. **Contratos Anuales con Descuento**: Ofrecer descuentos atractivos (ej. 20% de descuento) para clientes que se suscriban al soporte anual.
21. **Actualizaciones de IA como Servicio**: Incluir en las suscripciones mensuales la actualización constante de los modelos locales de lenguaje a las últimas versiones open-source.
22. **Capacitación del Personal Interno**: Vender talleres de "Prompt Engineering" y gestión de agentes para que los empleados del cliente operen la infraestructura.
23. **Programa de Referidos**: Ofrecer comisiones recurrentes u horas de desarrollo gratuitas a clientes que refieran a otros negocios.
24. **Infraestructura en Clúster**: Diseñar clústeres de servidores locales de bajo costo (ej. Raspberry Pi o mini PCs de oficina) para garantizar redundancia al cliente.

#### Alianzas y Posicionamiento
25. **Colaboración con Agencias de Diseño**: Aliarse con agencias creativas que carecen de brazo técnico para proveerles desarrollo Next.js y automatización de procesos.
26. **Casos de Estudio Detallados**: Documentar con métricas reales (ej. "Cómo redujimos 80% el tiempo de cotización en una Inmobiliaria") para usar como material de ventas.
27. **Talleres Gratuitos en Cámaras de Comercio**: Dar pláticas sobre IA local y soberanía de datos para captar dueños de negocios locales.
28. **Newsletter Tecnológica**: Crear un boletín semanal sobre automatización práctica para mantener a la marca en la mente de tomadores de decisiones.
29. **Whitepapers Técnicos**: Publicar investigaciones sobre el ahorro energético y de servidores al migrar a LLMs locales.
30. **Soporte de Cumplimiento Legal**: Posicionar a Soluvirtus como la mejor opción para sectores con regulaciones estrictas de datos que no pueden enviar información a servidores de IA externos.

---

### Ir a la página
[soluvirtus.com](https://soluvirtus.com/)

### Contacto:
- **Antonio Ávila** | Creador y desarrollador de recursos tecnológicos para la automatización e ingeniería a la medida.
- **Correo Electrónico**: [antonio.avila@soluvirtus.com](mailto:antonio.avila@soluvirtus.com)
- **WhatsApp**: [+52 55 7060 3839](http://wa.me/5215570603839)

---

© 2026 Soluvirtus. Design By: Antonio Ávila
