import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

// Placeholder hasta que exista el proyecto Sanity: ver .env.example.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "your-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

export default defineConfig({
  name: "default",
  title: "Portafolio",

  projectId,
  dataset,

  plugins: [
    structureTool({
      // siteSettings es un singleton: se edita siempre el mismo documento.
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Ajustes del sitio")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.documentTypeListItem("project").title("Proyectos"),
          ]),
    }),
    visionTool(),
  ],

  document: {
    // El singleton no se puede borrar ni duplicar.
    actions: (input, context) =>
      context.schemaType === "siteSettings"
        ? input.filter(({ action }) => action !== "delete" && action !== "duplicate")
        : input,
    // Y no se pueden crear documentos nuevos de ese tipo.
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter((item) => item.templateId !== "siteSettings")
        : prev,
  },

  schema: {
    types: schemaTypes,
  },
});
