import type { APIRoute } from 'astro';
import { tratamientos } from '../data/tratamientos.js';

// Mapa del sitio para Google: se genera solo con todas las páginas del proyecto.
// Usa la dirección "site" de astro.config.mjs (cámbiala cuando conectes el dominio propio).
const paginas = import.meta.glob('./**/*.astro');

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://example.com')).origin;
  const rutas = new Set<string>();

  for (const archivo of Object.keys(paginas)) {
    let ruta = archivo.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '');
    if (ruta === '') ruta = '/';
    if (ruta.includes('[') || ruta === '/404') continue; // páginas dinámicas y de error
    rutas.add(ruta);
  }
  for (const t of tratamientos) rutas.add(`/tratamientos/${t.slug}`);

  const hoy = new Date().toISOString().slice(0, 10);
  const prioridad = (r: string) => (r === '/' ? '1.0' : r.startsWith('/tratamientos/') ? '0.8' : '0.7');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    [...rutas]
      .sort()
      .map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc><lastmod>${hoy}</lastmod><priority>${prioridad(r)}</priority></url>`)
      .join('\n') +
    '\n</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
