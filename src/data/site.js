export const site = {
  doctorName: 'Dr. Andrés Delgado Ponce',
  specialty: 'Ginecología, Obstetricia y Medicina Reproductiva',
  clinicName: 'Centro de Fertilidad Delgado Ponce',
  tagline: 'Fertilidad, obstetricia y ginecología con acompañamiento cercano',

  whatsappNumber: '593999800061',
  whatsappDefaultMessage: 'Hola, quisiera agendar una cita.',

  phoneDisplay: '+593 999 800 061',
  email: 'dr.andresdelgadoponce@gmail.com',

  address: {
    line1: 'Av. de las Américas y 24 de Mayo — Hospital Universitario del Río, Consultorio 401',
    city: 'Cuenca, Ecuador',
    mapsQuery: 'Hospital Universitario del Río, Cuenca, Ecuador',
    mapsUrl: 'https://maps.google.com/?q=Hospital+Universitario+del+R%C3%ADo,+Cuenca,+Ecuador',
  },

  // Nota: "nota" se muestra como una línea aparte, en cursiva, debajo del
  // horario (footer, Nosotros y Contacto) — no es un día más.
  hours: [
    { day: 'Lunes a viernes', time: '09:00 – 12:00 y 15:30 – 18:30' },
    { day: 'Sábados', time: '10:00 – 12:30' },
  ],
  hoursNote: 'Todas las citas deben agendarse previamente.',

  // Horario en formato para Google (debe coincidir con "hours" de arriba).
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '12:00' },
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:30', closes: '18:30' },
    { days: ['Saturday'], opens: '10:00', closes: '12:30' },
  ],

  // Perfil de Negocio de Google. Cuando el doctor lo tenga verificado, pega aquí:
  //  - googleBusinessUrl: el enlace "Compartir perfil" (g.page/... o maps.app.goo.gl/...)
  //  - googleReviewUrl: el enlace para pedir reseñas ("Obtener más reseñas")
  // Se usan en los datos estructurados del sitio para que Google conecte ambos.
  googleBusinessUrl: 'https://maps.app.goo.gl/nWWdm34oBNNa9scs8',
  googleReviewUrl: '',
  // Lo más cómodo: el "Place ID" del perfil (se obtiene gratis en
  // https://developers.google.com/maps/documentation/places/web-service/place-id).
  // Con él, el botón "Calificar en Google" abre DIRECTO la ventana de reseña con las estrellas.
  googlePlaceId: 'ChIJg8cAQakZzZERc-OeS3z1RfM',
  // Cuando haya reseñas reales, copia aquí la calificación que muestra Google y algunas reseñas
  // (siempre reales, con autorización). Si quedan vacías, la página no muestra nada inventado.
  googleRating: null,            // ejemplo: { valor: 4.9, total: 32 }
  resenas: [],                   // ejemplo: [{ nombre: 'María P.', texto: '...', estrellas: 5, fecha: 'septiembre 2026' }]

  // Videos de Instagram para la página de Testimonios. Pega aquí el enlace de cada
  // publicación o reel (el que sale en "Copiar enlace"), uno por línea. Ejemplo:
  //   'https://www.instagram.com/reel/XXXXXXXXXXX/',
  videosInstagram: [
    'https://www.instagram.com/reel/DYX8EfAE02Q/',
    'https://www.instagram.com/reel/DVPIFnRDuPn/',
  ],

  social: {
    instagram: 'https://www.instagram.com/drandresdelgadop/',
    facebook: 'https://www.facebook.com/DrAndresDelgadoFertilidadGinecologiaObstetricia/',
    tiktok: 'https://www.tiktok.com/@drandresdelgadop',
  },
};

// Enlaces a Google. Prioridad: enlace propio > Place ID > búsqueda en Google Maps (siempre funciona).
const googleFallback = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Dr. Andrés Delgado Ponce Cuenca')}`;
export function googleReviewLink() {
  if (site.googleReviewUrl) return site.googleReviewUrl;
  if (site.googlePlaceId) return `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`;
  return googleFallback;
}
export function googleReadLink() {
  if (site.googlePlaceId) return `https://search.google.com/local/reviews?placeid=${site.googlePlaceId}`;
  if (site.googleBusinessUrl) return site.googleBusinessUrl;
  return googleFallback;
}

export function whatsappLink(message = site.whatsappDefaultMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

// Menú principal. Los elementos con "groups" abren un panel grande dividido por secciones
// (como un menú de clínica). "cols" es el número de columnas del panel (por defecto, una por grupo).
export const nav = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    href: '/nosotros',
    groups: [
      {
        title: 'Nuestra clínica',
        links: [
          { label: 'Quiénes somos', href: '/nosotros#quienes-somos' },
          { label: 'Instalaciones', href: '/nosotros#instalaciones' },
          { label: 'Laboratorio', href: '/nosotros/laboratorio' },
          { label: 'Horario de atención', href: '/nosotros#horario' },
          { label: 'Tasas de embarazo', href: '/nosotros#tasas-embarazo' },
        ],
      },
      {
        title: 'Actualidad',
        links: [
          { label: 'Testimonios e historias', href: '/testimonios' },
          { label: 'Preguntas y respuestas', href: '/preguntas-frecuentes' },
          { label: 'Médicos asociados', href: '/medicos' },
        ],
      },
    ],
  },
  {
    label: 'Servicios',
    href: '/servicios',
    cols: 3,
    groups: [
      {
        title: 'Fertilidad',
        href: '/servicios/fertilidad',
        links: [
          { label: 'Inseminación artificial', href: '/tratamientos/inseminacion-artificial' },
          { label: 'Fecundación in vitro (FIV)', href: '/tratamientos/fecundacion-in-vitro' },
          { label: 'Microinyección espermática (ICSI)', href: '/tratamientos/icsi' },
          { label: 'Vitrificación de óvulos', href: '/tratamientos/vitrificacion-de-ovulos' },
          { label: 'Congelación de embriones', href: '/tratamientos/criopreservacion-de-embriones' },
          { label: 'Estudio genético (PGT)', href: '/tratamientos/diagnostico-genetico-preimplantacional' },
        ],
      },
      {
        title: 'Donantes y bancos',
        href: '/servicios/donantes',
        links: [
          { label: 'Donación de óvulos', href: '/tratamientos/ovodonacion' },
          { label: 'Donación de esperma', href: '/tratamientos/banco-de-semen-y-donacion-de-esperma' },
          { label: 'Donación de embriones', href: '/servicios/donantes' },
          { label: 'Banco de semen', href: '/tratamientos/banco-de-semen-y-donacion-de-esperma' },
          { label: 'Banco de óvulos', href: '/tratamientos/vitrificacion-de-ovulos' },
        ],
      },
      {
        title: 'Obstetricia',
        href: '/servicios/obstetricia',
        links: [
          { label: 'Embarazo normal', href: '/servicios/obstetricia' },
          { label: 'Embarazo de alto riesgo', href: '/servicios/obstetricia' },
          { label: 'Parto humanizado', href: '/servicios/obstetricia' },
          { label: 'Cesárea', href: '/servicios/obstetricia' },
        ],
      },
      {
        title: 'Cirugía de mínima invasión',
        href: '/servicios/cirugia',
        links: [
          { label: 'Laparoscopia', href: '/tratamientos/cirugia-laparoscopica' },
          { label: 'Histeroscopia', href: '/tratamientos/histeroscopia' },
          { label: 'Cirugía robótica', href: '/servicios/cirugia' },
          { label: 'Cirugía abierta', href: '/servicios/cirugia' },
        ],
      },
      {
        title: 'Ginecología',
        href: '/servicios/ginecologia',
        links: [
          { label: 'Papanicolaou y colposcopia', href: '/servicios/ginecologia' },
          { label: 'Control ginecológico', href: '/servicios/ginecologia' },
          { label: 'Planificación familiar', href: '/servicios/ginecologia' },
          { label: 'Endometriosis y quistes', href: '/servicios/ginecologia' },
        ],
      },
    ],
    footer: { label: 'Ver todos los tratamientos', href: '/tratamientos' },
  },
  {
    label: 'Pacientes',
    href: '/pacientes',
    groups: [
      {
        title: 'Tu primera consulta',
        links: [
          { label: 'Primera consulta', href: '/pacientes#objetivo' },
          { label: 'Pruebas diagnósticas', href: '/pacientes#pruebas' },
          { label: 'Agendar una cita', href: '/#agenda' },
        ],
      },
      {
        title: 'Información',
        links: [
          { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
          { label: 'Testimonios', href: '/testimonios' },
          { label: 'Cómo llegar', href: '/contacto' },
        ],
      },
    ],
  },
  { label: 'Médicos', href: '/medicos' },
  { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Contacto', href: '/contacto' },
];
