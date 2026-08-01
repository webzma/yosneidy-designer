import { defineField, defineType } from "sanity";

/** Imagen con hotspot y texto alternativo obligatorio, reutilizada en los schemas. */
export const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Texto alternativo",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    ],
    validation: (rule) => rule.required(),
  });

export const project = defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      description: 'Se muestra como "01", "02"… en la tarjeta del proyecto.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: "href", title: "Enlace", type: "string", validation: (rule) => rule.required() }),
    imageField("image", "Imagen"),
  ],
  orderings: [
    { title: "Orden", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", media: "image" } },
});
