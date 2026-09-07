export const contact = {
  email: "contacto@sfaberturas.com.py",
  phone: "+595 981 000 000",
  phoneHref: "tel:+595981000000",
  whatsapp: "+595 981 000 000",
  whatsappHref: "https://wa.me/595981000000",
  address: "Encarnación, Paraguay",
  map: {
    // Coordenadas provisionales centro de Encarnación (no es ubicación real de la empresa)
    lat: -27.33056,
    lng: -55.86833,
    zoom: 13,
    label: "Centro de Encarnación — ubicación provisional",
  },
  hours: [
    { days: "Lunes a Viernes", time: "08:00 – 18:00" },
    { days: "Sábado", time: "08:00 – 12:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  coverage: [
    "Encarnación",
    "Cambyretá",
    "San Juan del Paraná",
    "Capitán Miranda",
    "Frut",
    "Colonias Unidas",
  ],
} as const;
