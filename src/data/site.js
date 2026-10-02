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

export const nav = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    href: '/nosotros',
    children: [
      { label: 'Quiénes somos', href: '/nosotros#quienes-somos' },
      { label: 'Instalaciones', href: '/nosotros#instalaciones' },
      { label: 'Horario de atención', href: '/nosotros#horario' },
      { label: 'Tasas de embarazo', href: '/nosotros#tasas-embarazo' },
    ],
  },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Todos los servicios', href: '/servicios' },
      { label: 'Fertilidad', href: '/servicios/fertilidad' },
      { label: 'Donantes y bancos', href: '/servicios/donantes' },
      { label: 'Obstetricia', href: '/servicios/obstetricia' },
      { label: 'Cirugía de mínima invasión', href: '/servicios/cirugia' },
      { label: 'Ginecología', href: '/servicios/ginecologia' },
    ],
  },
  {
    label: 'Pacientes',
    href: '/pacientes',
    children: [
      { label: 'Primera consulta', href: '/pacientes#objetivo' },
      { label: 'Pruebas diagnósticas', href: '/pacientes#pruebas' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    ],
  },
  { label: 'Médicos asociados', href: '/medicos' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
];
