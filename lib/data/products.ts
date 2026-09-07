export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  featured?: boolean;
  images?: string[];
};

export const products: Product[] = [
  {
    id: "ventanas",
    name: "Ventanas",
    description:
      "Ventanas corredizas, batientes y de alta prestación con aislación térmica y acústica.",
    image: "/img/ventanas.svg",
    alt: "Ventanas de aluminio SF Aberturas",
    category: "Ventanas",
    featured: true,
  },
  {
    id: "puertas",
    name: "Puertas",
    description:
      "Puertas de aluminio y vidrio templado, seguras y elegantes para interior y exterior.",
    image: "/img/puerta/FB_IMG_1475337371617.jpg",
    alt: "Puertas de aluminio SF Aberturas",
    category: "Puertas",
    featured: true,
    images: [
      "/img/puerta/FB_IMG_1475337371617.jpg",
      "/img/puerta/IMG_20161110_134437.jpg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14%20(1).jpeg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14%20(2).jpeg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.23.14.jpeg",
      "/img/puerta/WhatsApp%20Image%202026-09-02%20at%2006.24.48.jpeg",
    ],
  },
  {
    id: "mamparas",
    name: "Mamparas",
    description:
      "Mamparas para baño y oficina, con vidrio templado y perfiles de aluminio anodizado.",
    image: "/img/mampara/mamparas_icon.jpg",
    alt: "Mamparas de vidrio SF Aberturas",
    category: "Mamparas",
    featured: true,
    images: [
      "/img/mampara/mamparas_icon.jpg",
      "/img/mampara/mamparas_icon2.jpg",
      "/img/mampara/2014-12-22%2010.37.50%20-%20copia.jpg",
      "/img/mampara/2015-10-13%2012.29.46.jpg",
      "/img/mampara/20220708_121653.jpg",
      "/img/mampara/IMG_20161021_084200.jpg",
    ],
  },
  {
    id: "cerramientos",
    name: "Cerramientos",
    description:
      "Cerramientos de balcones, galerías y quinchos que amplían tu espacio con luz natural.",
    image: "/img/cerramientos.svg",
    alt: "Cerramientos de aluminio SF Aberturas",
    category: "Cerramientos",
    featured: true,
  },
  {
    id: "vidrios",
    name: "Vidrios",
    description:
      "Vidrios templados, laminados en distintos espesores y terminaciones.",
    image: "/img/puertas.svg",
    alt: "Vidrios SF Aberturas",
    category: "Vidrios",
  },
  {
    id: "otros",
    name: "Otros",
    description:
      "Accesorios, herrajes y soluciones a medida en aluminio y vidrio según tu proyecto.",
    image: "/img/cerramientos.svg",
    alt: "Otros productos SF Aberturas",
    category: "Otros",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
