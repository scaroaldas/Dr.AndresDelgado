# Guía: conectar el Perfil de Negocio de Google con el sitio

Esta parte la tiene que hacer el doctor (o alguien con acceso a su perfil): el sitio ya está
preparado para recibir el enlace, pero nadie puede entrar al perfil por él.

## 1. Acceso seguro
- En business.google.com → el perfil del doctor → **Personas y acceso** → **Agregar** tu correo como **Administrador**.
  Así no hace falta compartir su contraseña.
- Si la contraseña se compartió por WhatsApp o en una captura, cámbiala ahora desde su cuenta de Google.

## 2. Datos idénticos a los del sitio (muy importante para el posicionamiento local)
| Campo | Valor |
|---|---|
| Nombre | Dr. Andrés Delgado Ponce |
| Teléfono | +593 999 800 061 |
| Correo | dr.andresdelgadoponce@gmail.com |
| Dirección | Av. de las Américas y 24 de Mayo — Hospital Universitario del Río, Consultorio 401, Cuenca |
| Horario | Lun–Vie 09:00–12:00 y 15:30–18:30 · Sáb 10:00–12:30 |

Si algo cambia, se cambia en los dos lugares: en el perfil y en `src/data/site.js`.

## 3. Sitio web y enlace de cita
- **Editar perfil → Contacto → Sitio web**: la dirección del sitio (la de Vercel o, mejor, el dominio propio).
- **Enlace de cita**: `https://TU-DOMINIO/#agenda` (el formulario de la página de inicio) o el WhatsApp
  `https://wa.me/593999800061`.

## 4. Categorías y servicios
- Categoría principal: **Ginecólogo**. Agrega las secundarias relacionadas con fertilidad y obstetricia que Google ofrezca.
- **Servicios**: agrega uno por cada página de `/tratamientos` (inseminación artificial, FIV, ICSI, vitrificación de
  óvulos, congelación de embriones, cultivo embrionario, estudio genético PGT, ovodonación, banco de semen,
  histeroscopia, cirugía laparoscópica) con una descripción corta.

## 5. Fotos
Sube el logo (`public/images/logo.png`), una foto de portada, el consultorio, el laboratorio y retratos del doctor
(las mismas del sitio). Los perfiles con fotos reciben más visitas.

## 6. Reseñas
1. En el perfil: **Obtener más reseñas** → copia el enlace.
2. Pégalo en `src/data/site.js`, en `googleReviewUrl`.
3. Compártelo con los pacientes (por WhatsApp o con un código QR en el consultorio).
4. Responde las reseñas con amabilidad y **sin mencionar datos clínicos** de la paciente.

## 7. Conectar el perfil con el sitio
1. En el perfil: **Compartir perfil** → copia el enlace.
2. Pégalo en `src/data/site.js`, en `googleBusinessUrl`, y vuelve a subir los cambios.
   El sitio lo incluye en sus datos estructurados (`sameAs` y `hasMap`) para que Google relacione ambos.

## 8. Google Search Console (para que Google lea el sitio)
1. search.google.com/search-console → **Agregar propiedad** → pega la dirección del sitio.
2. Verifica la propiedad (por DNS si tienes dominio propio, o con la etiqueta HTML).
3. En **Sitemaps** envía: `https://TU-DOMINIO/sitemap.xml`
4. Con **Inspección de URL**, pide indexar la página de inicio y `/tratamientos`.

## 9. Cuando conectes el dominio propio
1. En Vercel: Settings → Domains → agrega el dominio y sigue las instrucciones de DNS.
2. En `astro.config.mjs`, cambia `site: '...'` por el dominio nuevo y vuelve a subir los cambios.
3. Actualiza el sitio web del Perfil de Negocio y la propiedad de Search Console.

## 10. Comprobar que todo quedó bien
- Prueba de resultados enriquecidos: search.google.com/test/rich-results (pega la dirección de una página de tratamiento).
- Verificador de datos estructurados: validator.schema.org
- Los datos de Facebook, Instagram y TikTok también deben coincidir (nombre, teléfono, dirección y horario).
