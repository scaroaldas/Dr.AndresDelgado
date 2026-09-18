# Sitio web — Dr. Andrés Delgado Ponce

Sitio informativo construido con [Astro](https://astro.build), pensado para carga
rápida, buen SEO y un botón de WhatsApp siempre visible para agendar citas.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Se abre en `http://localhost:4321`.

## Cómo generar la versión de producción

```bash
npm run build
```

Esto genera la carpeta `dist/`, lista para subir a cualquier hosting estático
(Vercel, Netlify, Cloudflare Pages, o un hosting tradicional vía FTP).

## Imágenes y animaciones

- **Imágenes**: se usan fotos de stock reales (vía Picsum, con licencia libre)
  como marcador de posición, tratadas con un filtro "duotono" en la paleta de
  marca (`src/components/PhotoBlock.astro`) para que se vean diseñadas y no
  genéricas. Cuando tengas las fotos reales del consultorio, reemplaza el
  `<PhotoBlock seed="..." .../>` de cada página por un `<img>` normal apuntando
  a tu foto en `public/images/`.
- **Animaciones**: los elementos con `data-reveal` o `data-reveal-group`
  aparecen suavemente al hacer scroll (ver script en `src/layouts/Layout.astro`,
  sin dependencias externas). Las tasas de embarazo en `/nosotros` usan
  `data-count-to` para un conteo animado. Todo respeta
  `prefers-reduced-motion` para personas que prefieren menos animación.
- **Servicios**: cada categoría ahora incluye una introducción por bloque de
  tratamiento y una sección "¿Cómo es el proceso?" con pasos numerados
  (`.process` en `global.css`).

## Qué personalizar antes de publicar

Para que el sitio se viera completo, se rellenó con datos **ficticios pero
verosímiles** (dirección, teléfono, WhatsApp, biografía del doctor, tasas de
embarazo, médicos asociados y testimonios de pacientes). Nada de esto es real
todavía. Antes de publicar:

1. **`src/data/site.js`** — número de WhatsApp real, teléfono, correo,
   dirección exacta y horario real. Todo el sitio lee de este archivo, así que
   un solo cambio aquí se refleja en todas las páginas (incluido el mapa de
   `/contacto`, que ya genera el embed automáticamente a partir de esta
   dirección).
2. **Biografía y tasas de embarazo** — en `src/pages/index.astro` y
   `src/pages/nosotros.astro`. Las cifras (58%, 22%, 63%) y la biografía son
   inventadas; deben venir del doctor, idealmente con su fuente.
3. **Médicos asociados** — en `src/pages/medicos.astro`, arreglo `medicos`.
   Reemplazar nombres y especialidades ficticios por el equipo real, y añadir
   fotografías.
4. **Testimonios** — en `src/pages/testimonios.astro`, arreglo `testimonios`.
   Son inventados. Publicar solo testimonios reales, con autorización expresa
   de cada paciente para usar su nombre e historia.
5. **Preguntas frecuentes** — en `src/pages/preguntas-frecuentes.astro`. Las
   respuestas son generales; conviene que el doctor las revise y ajuste a su
   criterio clínico.
6. **Fotos de las páginas** — cada `<PhotoBlock seed="..." .../>` (hero de inicio,
   instalaciones, cada página de servicios, pacientes) usa una foto de stock de
   marcador de posición. Reemplázalas por fotos reales del consultorio.

## Estructura del proyecto

```
src/
  layouts/
    Layout.astro          Plantilla base (head, header, footer, botón WhatsApp)
  components/
    Header.astro           Navegación superior
    Footer.astro            Pie de página con contacto y horario
    WhatsAppFloat.astro     Botón flotante de WhatsApp
    ServiceBlock.astro      Bloque reutilizable de lista de servicios
    PhotoBlock.astro        Imagen con tratamiento duotono + animación reveal
  data/
    site.js                Datos centrales del sitio (editar aquí)
  pages/
    index.astro             Inicio
    nosotros.astro           Quiénes somos, instalaciones, horario, tasas de embarazo
    servicios/
      index.astro            Hub de servicios
      fertilidad.astro
      donantes.astro
      obstetricia.astro
      cirugia.astro
      ginecologia.astro
    pacientes.astro          Primera consulta y pruebas diagnósticas
    medicos.astro            Médicos asociados
    preguntas-frecuentes.astro
    testimonios.astro
    contacto.astro
  styles/
    global.css              Sistema de diseño (colores, tipografía, componentes)
```

## Sistema de diseño

- **Tipografía:** Newsreader (títulos, serif) + Public Sans (texto, sans-serif).
- **Color:** verde azulado profundo (`#2F4F4A`) como color de confianza médica,
  con un rosa cálido (`#C98A7D`) como acento de esperanza/calidez, sobre un
  fondo marfil (`#FBF8F3`).
- **Motivo visual:** un anillo/círculo delgado, recurrente en el logo, el hero
  y las llamadas a la acción — evita iconografía médica genérica.

## Próximos pasos sugeridos

- Contratar dominio y hosting, o desplegar gratis en Vercel/Netlify conectando
  este repositorio.
- Configurar Google Search Console y Google Business Profile con la dirección
  real, para aparecer en búsquedas locales de Cuenca.
- Añadir fotografías reales del consultorio y del equipo (mejoran mucho la
  confianza frente al sitio de referencia).
