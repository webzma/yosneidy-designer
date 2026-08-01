const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error("Falta NEXT_PUBLIC_SITE_URL (dominio del sitio, ver .env.example).");
}

/** URL absoluta del sitio, sin barra final: `https://ejemplo.com`. */
export const SITE_URL = siteUrl.replace(/\/$/, "");
