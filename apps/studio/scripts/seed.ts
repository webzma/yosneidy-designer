/**
 * Puebla Sanity con el contenido inicial de `scripts/content.ts`:
 * crea/reemplaza el documento único `siteSettings` y los 6 `project`,
 * subiendo las imágenes de `apps/web/public/img`.
 *
 * Es idempotente (ids deterministas) y se ejecuta con:
 *
 *   pnpm --filter studio seed
 *
 * Se autentica con SANITY_AUTH_TOKEN (ver `.env.example`), con el cwd en
 * `apps/studio`, de donde se resuelve la ruta `../web/public`.
 */
import path from "node:path";
import { createReadStream } from "node:fs";
import { getCliClient } from "sanity/cli";
import {
  contact,
  footer,
  hero,
  letsTalk,
  nav,
  notFound,
  projectsPage,
  site,
  work,
} from "./content";

const client = getCliClient({ apiVersion: "2025-01-01" });

const publicDir = path.resolve(process.cwd(), "../web/public");

async function uploadImage(src: string, alt: string) {
  const filename = path.basename(src);
  const asset = await client.assets.upload("image", createReadStream(path.join(publicDir, src)), {
    filename,
  });
  console.log(`Imagen subida: ${filename} (${asset._id})`);
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
    alt,
  };
}

async function main() {
  const siteSettings = {
    _id: "siteSettings",
    _type: "siteSettings",
    site,
    // Los items de arrays necesitan `_key` (y `_type`) para que el Studio los muestre.
    nav: nav.map((item, i) => ({ _key: `nav-${i}`, _type: "item", ...item })),
    hero: {
      intro: hero.intro,
      cta: hero.cta,
      image: await uploadImage(hero.image.src, hero.image.alt),
    },
    workSection: { title: work.title, intro: work.intro, cta: work.cta },
    projectsPage,
    contact: {
      title: contact.title,
      image: await uploadImage(contact.image.src, contact.image.alt),
      blurb: contact.blurb,
      socials: contact.socials.map((social, i) => ({ _key: `social-${i}`, _type: "social", ...social })),
    },
    letsTalk: {
      title: letsTalk.title,
      image: await uploadImage(letsTalk.image.src, letsTalk.image.alt),
      eyebrow: letsTalk.eyebrow,
      blurb: letsTalk.blurb,
      cta: letsTalk.cta,
    },
    notFound,
    footer,
  };
  await client.createOrReplace(siteSettings);
  console.log("Documento siteSettings creado/actualizado");

  for (const project of work.projects) {
    await client.createOrReplace({
      _id: `project-${project.id}`,
      _type: "project",
      name: project.name,
      order: Number(project.id),
      href: project.href,
      image: await uploadImage(project.src, project.alt),
    });
    console.log(`Proyecto ${project.id} (${project.name}) creado/actualizado`);
  }

  console.log("Seed completado");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
