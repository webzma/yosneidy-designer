import type { SanityImageCrop, SanityImageHotspot } from "@sanity/image-url";

/** Imagen de Sanity con su campo `alt`, tal como la definen los schemas del studio. */
export type CmsImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  alt?: string;
};

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  name,
  order,
  href,
  image
}`;

export type ProjectQueryResult = {
  name: string;
  order: number;
  href: string;
  image: CmsImage;
};

export const SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  site,
  nav,
  hero,
  workSection,
  projectsPage,
  contact,
  letsTalk,
  footer
}`;

type Cta = { label: string; href: string };
type LinkItem = { label: string; href: string };

export type SettingsQueryResult = {
  site: {
    name: string;
    wordmark: string;
    email: string;
    location: string;
    availability: string;
    scheduleUrl: string;
    description: string;
  };
  nav: LinkItem[];
  hero: { intro: string; cta: Cta; image: CmsImage };
  workSection: { title: string; intro: string; cta: Cta };
  projectsPage: { title: string; intro: string };
  contact: { title: string; image: CmsImage; blurb: string; socials: LinkItem[] };
  letsTalk: { title: string; image: CmsImage; eyebrow: string; blurb: string; cta: Cta };
  footer: { credit: string; location: string; rights: string };
};
