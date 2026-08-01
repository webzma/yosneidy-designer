/**
 * Contenido inicial del sitio: es la fuente del seed (`scripts/seed.ts`).
 * Una vez sembrado, el contenido se edita en el Studio y el sitio lo lee
 * de Sanity vía `apps/web/sanity/fetch.ts`.
 */

export const site = {
  name: "Yosneidy",
  wordmark: "YOSNEIDY",
  email: "hello@delane.com",
  location: "Con base en Santa Cruz de Tenerife, España",
  availability: "Disponible para proyectos",
  scheduleUrl: "https://cal.com",
  description:
    "Portafolio de diseñadora creativa con diseños limpios, modos claro y oscuro, tipografía elegante y secciones totalmente personalizables.",
};

export const nav = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Proyectos", href: "#work" },
  { label: "Contacto", href: "#contact" },
];

export const hero = {
  intro:
    "Diseño y desarrollo experiencias digitales modernas que combinan una estética cuidada, interacciones fluidas y soluciones frontend de alto rendimiento.",
  cta: { label: "Hablemos", href: "#contact" },
  image: {
    src: "/img/hero.png",
    alt: "Retrato iluminado con luz azul profunda y ámbar cálido",
  },
};

export const work = {
  title: "(PROYECTOS)",
  intro:
    "Una selección de proyectos centrados en diseño moderno, interacciones fluidas y experiencias digitales de alto rendimiento.",
  cta: { label: "Ver todos los proyectos", href: "/proyectos" },
  projects: [
    {
      id: "01",
      name: "Orbit",
      href: "#work",
      src: "/img/work-01.jpg",
      alt: "Perro con gafas de sol descansando en un sofá de terciopelo con pizza y refresco",
    },
    {
      id: "02",
      name: "Vertex",
      href: "#work",
      src: "/img/work-02.jpg",
      alt: "Perro con gafas de sol pinchando detrás de una mesa de mezclas en un bar",
    },
    {
      id: "03",
      name: "Aura",
      href: "#work",
      src: "/img/work-03.jpg",
      alt: "Perro con gafas de sol rojas en la mesa de un restaurante con una taza a cuadros",
    },
    {
      id: "04",
      name: "Flow",
      href: "#work",
      src: "/img/work-04.jpg",
      alt: "Bulldog con gafas de sol recostado en una cama cubierta de billetes",
    },
    {
      id: "05",
      name: "Velto",
      href: "#work",
      src: "/img/work-05.jpg",
      alt: "Gato con gafas de sol conduciendo un taxi por calles iluminadas de neón",
    },
    {
      id: "06",
      name: "Luma",
      href: "#work",
      src: "/img/work-06.jpg",
      alt: "Gato con bata verde y gafas de sol sentado en una bañera",
    },
  ],
};

export const projectsPage = {
  title: "(PROYECTOS)",
  intro:
    "El archivo completo: cada proyecto con su enfoque de diseño, interacción y desarrollo frontend.",
};

export const contact = {
  title: "(CONTACTO)",
  image: {
    src: "/img/contact.png",
    alt: "Retrato surcado por luz cálida sobre un fondo azul profundo",
  },
  blurb:
    "Disponible para proyectos freelance, colaboraciones y oportunidades creativas en todo el mundo.",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const letsTalk = {
  title: "(HABLEMOS)",
  image: {
    src: "/img/letstalk.jpg",
    alt: "Primer plano de un retrato bajo luz azul tenue",
  },
  eyebrow: "¿TIENES UN PROYECTO EN MENTE?",
  blurb:
    "Creemos una experiencia digital cuidada que refleje tu visión con claridad, propósito e impacto duradero.",
  cta: { label: "Agenda una llamada", href: "https://cal.com" },
};

export const aboutPage = {
  title: "(SOBRE MÍ)",
  image: {
    src: "/img/contact.png",
    alt: "Retrato surcado por luz cálida sobre un fondo azul profundo",
  },
  intro:
    "Soy una diseñadora y desarrolladora frontend con base en Tenerife, enfocada en crear experiencias digitales que combinan estética, movimiento y rendimiento.",
  body: "Llevo años trabajando en la intersección entre diseño y código: del concepto visual a la implementación final, cuidando cada detalle del recorrido.\n\nMi enfoque parte de la tipografía, el espacio y el movimiento como herramientas de comunicación. Creo interfaces que se sienten vivas sin sacrificar velocidad ni accesibilidad.\n\nHe colaborado con estudios, marcas y clientes independientes en proyectos de identidad digital, sitios editoriales y experiencias interactivas.",
  services: ["Dirección de arte", "Diseño web y UI", "Desarrollo frontend", "Motion e interacción"],
  cta: { label: "Hablemos", href: "/#contact" },
};

export const notFound = {
  title: "(404)",
  blurb: "La página que buscas no existe o fue movida.",
  cta: { label: "Volver al inicio", href: "/" },
};

export const footer = {
  credit: "Hecho por @webzma",
  location: "Santa Cruz de Tenerife, España",
  rights: "© 2026 Todos los derechos reservados",
};
