import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";

// Solo hay dos rutas: los proyectos son tarjetas con ancla/enlace externo,
// no páginas propias. Hereda el `revalidate` del layout.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/proyectos`, lastModified: new Date(), priority: 0.8 },
  ];
}
