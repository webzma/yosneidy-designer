import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

if (!projectId) {
  throw new Error(
    "Falta NEXT_PUBLIC_SANITY_PROJECT_ID: todo el contenido del sitio viene de Sanity (ver .env.example).",
  );
}

// useCdn: false para que la revalidación (ver `app/layout.tsx`) lea siempre
// el contenido recién publicado; el CDN de Sanity puede servir datos en caché.
export const client = createClient({ projectId, dataset, apiVersion: "2025-01-01", useCdn: false });
