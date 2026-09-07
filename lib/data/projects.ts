export type Project = {
  id: string;
  name: string;
  description: string;
  location: string;
  type: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "residencia-palmares",
    name: "Residencia Los Palmares",
    description:
      "Vivienda unifamiliar con aberturas piso-techo, cerramiento de quincho y ventanales corredizos. Trabajo integral en aluminio anodizado y vidrio templado.",
    location: "Encarnación — Barrio Los Palmares",
    type: "Vivienda · Cerramientos y ventanas",
    cover: "/img/proyectos/proyecto-a1.jpg",
    images: [
      "/img/proyectos/proyecto-a1.jpg",
      "/img/proyectos/proyecto-a2.jpg",
      "/img/proyectos/proyecto-a3.jpg",
      "/img/mampara/20220708_121653.jpg",
    ],
  },
  {
    id: "oficinas-centro",
    name: "Oficinas Corporativas Centro",
    description:
      "División de oficinas con mamparas de vidrio templado y puertas corredizas. Solución acústica y estética para espacios de trabajo modernos.",
    location: "Encarnación — Microcentro",
    type: "Oficinas · Mamparas y puertas",
    cover: "/img/mampara/mamparas_icon2.jpg",
    images: [
      "/img/mampara/mamparas_icon2.jpg",
      "/img/mampara/IMG_20161021_084200.jpg",
      "/img/puerta/IMG_20161110_134437.jpg",
      "/img/mampara/mamparas_icon.jpg",
    ],
  },
  {
    id: "casa-moderna-costanera",
    name: "Casa Moderna Costanera",
    description:
      "Residencia con frente vidriado, puertas pivotantes y cerramiento de balcón. Diseño minimalista con perfilería de alta prestación.",
    location: "Encarnación — Costanera",
    type: "Vivienda · Frente vidriado",
    cover: "/img/proyectos/proyecto-b1.jpg",
    images: [
      "/img/proyectos/proyecto-b1.jpg",
      "/img/puerta/FB_IMG_1475337371617.jpg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.24.48.jpeg",
      "/img/proyectos/proyecto-b2.jpg",
    ],
  },
  {
    id: "local-comercial-cambyreta",
    name: "Local Comercial Cambyretá",
    description:
      "Frente comercial vidriado y puertas de acceso en aluminio, con vidrio laminado de seguridad. Iluminación natural y visibilidad total.",
    location: "Cambyretá — Centro",
    type: "Comercio · Frente vidriado",
    cover: "/img/proyectos/proyecto-b2.jpg",
    images: [
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14.jpeg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14%20(1).jpeg",
      "/img/proyectos/proyecto-a1.jpg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14%20(2).jpeg",
    ],
  },
  {
    id: "departamento-premium",
    name: "Departamento Premium",
    description:
      "Cerramiento de balcón con sistema corredizo y vidrio templado, ampliando el living con luz natural y aislación.",
    location: "Encarnación — San Roque",
    type: "Departamento · Cerramiento balcón",
    cover: "/img/mampara/2014-12-22%2010.37.50%20-%20copia.jpg",
    images: [
      "/img/mampara/2014-12-22%2010.37.50%20-%20copia.jpg",
      "/img/mampara/2015-10-13%2012.29.46.jpg",
      "/img/proyectos/proyecto-a2.jpg",
      "/img/cerramientos.svg",
    ],
  },
  {
    id: "quincho-familiar",
    name: "Quincho Familiar",
    description:
      "Cerramiento de quincho con ventanas corredizas y puerta balcón, integrando interior y exterior con ventilación cruzada.",
    location: "San Juan del Paraná",
    type: "Quincho · Cerramientos",
    cover: "/img/proyectos/proyecto-a3.jpg",
    images: [
      "/img/proyectos/proyecto-a3.jpg",
      "/img/proyectos/proyecto-b1.jpg",
      "/img/puerta/IMG_20161110_134437.jpg",
      "/img/mampara/20220708_121653.jpg",
    ],
  },
];
