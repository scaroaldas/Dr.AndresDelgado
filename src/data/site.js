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

  social: {
    instagram: 'https://www.instagram.com/drandresdelgadop/',
    facebook: 'https://www.facebook.com/DrAndresDelgadoFertilidadGinecologiaObstetricia/',
    tiktok: 'https://www.tiktok.com/@drandresdelgadop',
  },
};

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
          { label: 'Inseminación artificial', href: '/servicios/fertilidad' },
          { label: 'Fecundación in vitro (FIV)', href: '/servicios/fertilidad' },
          { label: 'Microinyección espermática (ICSI)', href: '/servicios/fertilidad' },
          { label: 'Vitrificación de óvulos', href: '/servicios/fertilidad' },
          { label: 'Congelación de embriones', href: '/servicios/fertilidad' },
          { label: 'Screening genético (PGT)', href: '/servicios/fertilidad' },
        ],
      },
      {
        title: 'Donantes y bancos',
        href: '/servicios/donantes',
        links: [
          { label: 'Donación de óvulos', href: '/servicios/donantes' },
          { label: 'Donación de esperma', href: '/servicios/donantes' },
          { label: 'Donación de embriones', href: '/servicios/donantes' },
          { label: 'Banco de semen', href: '/servicios/donantes' },
          { label: 'Banco de óvulos', href: '/servicios/donantes' },
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
          { label: 'Laparoscopia', href: '/servicios/cirugia' },
          { label: 'Histeroscopia', href: '/servicios/cirugia' },
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
    footer: { label: 'Ver todos los servicios', href: '/servicios' },
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
