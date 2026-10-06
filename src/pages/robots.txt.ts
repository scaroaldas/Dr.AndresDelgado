import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const mapa = new URL('sitemap.xml', site ?? 'https://example.com').href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
