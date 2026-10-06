// Descarga las 5 fotos de familia del inicio (Unsplash, licencia libre para uso comercial)
// y las guarda en public/images/hero/ como hero-1.jpg ... hero-5.jpg.
// El inicio usa esos archivos automáticamente y deja de cargar nada desde Unsplash.
//
// Uso (en la carpeta del proyecto):   node scripts/descargar-fotos.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.FOTOS_BASE || 'https://images.unsplash.com';
const FOTOS = [
  { id: '1742522211724-3425d697bbf0', autor: 'Jennifer Kalenberg' },
  { id: '1681311311149-7254102442de', autor: 'Reba Spike' },
  { id: '1685580388390-576100ae9ce3', autor: 'Philip White' },
  { id: '1681311311317-a0561a8eef74', autor: 'Reba Spike' },
  { id: '1624272864537-8ecc72b67958', autor: 'Mieke Campbell' },
];

const destino = path.join(process.cwd(), 'public', 'images', 'hero');
await mkdir(destino, { recursive: true });

let ok = 0;
for (const [i, f] of FOTOS.entries()) {
  const nombre = `hero-${i + 1}.jpg`;
  const url = `${BASE}/photo-${f.id}?auto=format&fit=crop&w=1920&q=75`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1024) throw new Error('archivo vacío o inválido');
    await writeFile(path.join(destino, nombre), buf);
    console.log(`  OK  ${nombre}  (${Math.round(buf.length / 1024)} KB)  foto de ${f.autor}`);
    ok++;
  } catch (e) {
    console.log(`  X   ${nombre}  ${e.message}`);
  }
}
console.log(`\nListo: ${ok} de ${FOTOS.length} fotos guardadas en public/images/hero/`);
if (ok < FOTOS.length) {
  console.log('Revisa tu conexión a internet y vuelve a ejecutar el comando.');
  process.exitCode = 1;
}
