import { client } from "./client";
import { urlFor } from "./image";
import {
  PROJECTS_QUERY,
  SETTINGS_QUERY,
  type CmsImage,
  type ProjectQueryResult,
  type SettingsQueryResult,
} from "./queries";
import type { Project } from "@/components/ProjectCard";

type Cta = { label: string; href: string };
type CmsImageValue = { src: string; alt: string };

/** Todo el contenido del sitio salvo los proyectos, tal como llega de Sanity. */
export type SiteSettings = {
  site: {
    name: string;
    wordmark: string;
    email: string;
    location: string;
    availability: string;
    scheduleUrl: string;
    description: string;
  };
  nav: Cta[];
  hero: { intro: string; cta: Cta; image: CmsImageValue };
  work: { title: string; intro: string; cta: Cta };
  projectsPage: { title: string; intro: string };
  contact: {
    title: string;
    image: CmsImageValue;
    blurb: string;
    socials: Cta[];
  };
  letsTalk: {
    title: string;
    image: CmsImageValue;
    eyebrow: string;
    blurb: string;
    cta: Cta;
  };
  notFound: { title: string; blurb: string; cta: Cta };
  aboutPage: {
    title: string;
    image: CmsImageValue;
    intro: string;
    body: string;
    services: string[];
    cta: Cta;
  };
  footer: { credit: string; location: string; rights: string };
};

/* Tipos de las props que reciben los componentes, derivados de SiteSettings. */
export type Site = SiteSettings["site"];
export type NavItem = SiteSettings["nav"][number];
export type HeroContent = SiteSettings["hero"];
export type WorkSection = SiteSettings["work"];
export type ProjectsPageContent = SiteSettings["projectsPage"];
export type ContactContent = SiteSettings["contact"];
export type LetsTalkContent = SiteSettings["letsTalk"];
export type AboutPageContent = SiteSettings["aboutPage"];
export type FooterContent = SiteSettings["footer"];

function cmsImage(image: CmsImage): CmsImageValue {
  return { src: urlFor(image).url(), alt: image.alt ?? "" };
}

function mapSettings(doc: SettingsQueryResult): SiteSettings {
  return {
    site: doc.site,
    nav: doc.nav,
    hero: {
      intro: doc.hero.intro,
      cta: doc.hero.cta,
      image: cmsImage(doc.hero.image),
    },
    work: doc.workSection,
    projectsPage: doc.projectsPage,
    contact: {
      title: doc.contact.title,
      image: cmsImage(doc.contact.image),
      blurb: doc.contact.blurb,
      socials: doc.contact.socials,
    },
    letsTalk: {
      title: doc.letsTalk.title,
      image: cmsImage(doc.letsTalk.image),
      eyebrow: doc.letsTalk.eyebrow,
      blurb: doc.letsTalk.blurb,
      cta: doc.letsTalk.cta,
    },
    notFound: doc.notFound,
    aboutPage: {
      title: doc.aboutPage.title,
      image: cmsImage(doc.aboutPage.image),
      intro: doc.aboutPage.intro,
      body: doc.aboutPage.body,
      services: doc.aboutPage.services,
      cta: doc.aboutPage.cta,
    },
    footer: doc.footer,
  };
}

/** Ajustes del sitio desde Sanity; falla si el documento aún no existe (seed). */
export async function getSettings(): Promise<SiteSettings> {
  const doc = await client.fetch<SettingsQueryResult | null>(SETTINGS_QUERY);
  if (!doc) {
    throw new Error(
      'No existe el documento "siteSettings" en Sanity: ejecuta `pnpm --filter studio seed`.',
    );
  }
  return mapSettings(doc);
}

/** Proyectos ordenados por `order`. */
export async function getProjects(): Promise<Project[]> {
  const docs = await client.fetch<ProjectQueryResult[]>(PROJECTS_QUERY);
  return docs.map((doc) => ({
    id: String(doc.order).padStart(2, "0"),
    name: doc.name,
    href: doc.href,
    src: urlFor(doc.image).url(),
    alt: doc.image.alt ?? doc.name,
  }));
}
