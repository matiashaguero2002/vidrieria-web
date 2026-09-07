export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "factory" | "wrench" | "message" | "shield";
};

export const services: Service[] = [
  {
    id: "fabricacion",
    title: "Fabricación",
    description:
      "Fabricación a medida en taller propio con perfiles de primera línea y control de calidad en cada etapa.",
    icon: "factory",
  },
  {
    id: "instalacion",
    title: "Instalación",
    description:
      "Instalación profesional por equipo especializado, respetando tiempos y dejando el espacio impecable.",
    icon: "wrench",
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento",
    description:
      "Te asesoramos para elegir la mejor abertura según tu espacio, orientación y presupuesto.",
    icon: "message",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    description:
      "Servicio de mantenimiento preventivo y correctivo para prolongar la vida útil de tus aberturas.",
    icon: "shield",
  },
];
