/**
 * Every string and image path the page renders. Editing this file is enough to
 * rebrand the site — no component needs to be touched.
 */

export const site = {
  name: "Yosneidy",
  wordmark: "YOSNEIDY",
  email: "hello@delane.com",
  location: "Con base en Brooklyn, Nueva York",
  availability: "Disponible para proyectos",
  scheduleUrl: "https://cal.com",
};

export const nav = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
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
  cta: { label: "Ver todos los proyectos", href: "#work" },
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

export const footer = {
  credit: "Hecho por Neo",
  location: "Nueva York",
  // Hardcoded rather than derived from `new Date()` so the server and client
  // renders can never disagree and trigger a hydration mismatch.
  rights: "© 2026 Todos los derechos reservados",
};
