// Datos centrales del sitio.
// EDITA ESTE ARCHIVO con los datos reales del consultorio: número de WhatsApp,
// teléfono fijo, dirección exacta, horarios y enlaces de redes sociales.
// Todo el sitio lee de aquí, así que un solo cambio se refleja en todas las páginas.

export const site = {
  doctorName: 'Dr. Andrés Delgado Ponce',
  specialty: 'Ginecología, Obstetricia y Medicina Reproductiva',
  clinicName: 'Centro de Fertilidad Delgado Ponce',
  tagline: 'Fertilidad, obstetricia y ginecología con acompañamiento cercano',

  // Nota: dirección y correo aún son de ejemplo (ficticios). El WhatsApp/teléfono
  // ya es el número real proporcionado por el doctor.
  whatsappNumber: '593999800061',
  whatsappDefaultMessage: 'Hola, quisiera agendar una cita.',

  phoneDisplay: '+593 999 800 061',
  email: 'citas@delgadoponcefertilidad.com',

  address: {
    line1: 'Av. Solano 5-38 y Av. Loja, Edificio Conquistador del Cajas, piso 3',
    city: 'Cuenca, Ecuador',
    mapsUrl: 'https://maps.google.com/?q=Av.+Solano+y+Av.+Loja,+Cuenca,+Ecuador',
  },

  hours: [
    { day: 'Lunes a viernes', time: '09:00 – 13:00 y 15:00 – 19:00' },
    { day: 'Sábados', time: '09:00 – 12:00 (previa cita)' },
    { day: 'Domingos', time: 'Cerrado' },
  ],

  social: {
    instagram: 'https://instagram.com/drdelgadoponce',
    facebook: 'https://facebook.com/drdelgadoponce',
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
