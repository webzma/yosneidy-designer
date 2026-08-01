import { defineField, defineType } from "sanity";
import { imageField } from "./project";

const ctaField = defineField({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Texto", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Enlace", type: "string", validation: (rule) => rule.required() }),
  ],
});

const linkList = (name: string, title: string, itemName: string, itemTitle: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineField({
        name: itemName,
        title: itemTitle,
        type: "object",
        fields: [
          defineField({ name: "label", title: "Texto", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "href", title: "Enlace", type: "string", validation: (rule) => rule.required() }),
        ],
      }),
    ],
  });

/**
 * Documento único (singleton) con todo el contenido del sitio salvo los
 * proyectos. Refleja la estructura de `scripts/content.ts` (fuente del seed).
 * La unicidad se refuerza en `sanity.config.ts` (structure + acciones).
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Ajustes del sitio",
  type: "document",
  fields: [
    defineField({
      name: "site",
      title: "Sitio",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Nombre", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "wordmark", title: "Wordmark", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "location", title: "Ubicación", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "availability", title: "Disponibilidad", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "scheduleUrl", title: "URL de agenda", type: "string" }),
        defineField({ name: "description", title: "Descripción (SEO)", type: "text", rows: 2, validation: (rule) => rule.required() }),
      ],
    }),
    linkList("nav", "Navegación", "item", "Enlace"),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "intro", title: "Introducción", type: "text", rows: 3, validation: (rule) => rule.required() }),
        ctaField,
        imageField("image", "Imagen"),
      ],
    }),
    defineField({
      name: "workSection",
      title: "Sección de proyectos",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "intro", title: "Introducción", type: "text", rows: 3, validation: (rule) => rule.required() }),
        ctaField,
      ],
    }),
    defineField({
      name: "projectsPage",
      title: "Página de proyectos",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "intro", title: "Introducción", type: "text", rows: 3, validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contacto",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
        imageField("image", "Imagen"),
        defineField({ name: "blurb", title: "Texto", type: "text", rows: 3, validation: (rule) => rule.required() }),
        linkList("socials", "Redes sociales", "social", "Red social"),
      ],
    }),
    defineField({
      name: "letsTalk",
      title: "Hablemos",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
        imageField("image", "Imagen"),
        defineField({ name: "eyebrow", title: "Antetítulo", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "blurb", title: "Texto", type: "text", rows: 3, validation: (rule) => rule.required() }),
        ctaField,
      ],
    }),
    defineField({
      name: "footer",
      title: "Pie de página",
      type: "object",
      fields: [
        defineField({ name: "credit", title: "Crédito", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "location", title: "Ubicación", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "rights", title: "Derechos", type: "string", validation: (rule) => rule.required() }),
      ],
    }),
  ],
});
