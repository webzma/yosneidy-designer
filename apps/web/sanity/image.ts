import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

/** URLs de `cdn.sanity.io` para las imágenes servidas desde Sanity. */
export function urlFor(source: SanityImageSource) {
  if (!client) throw new Error("Sanity client is not configured");
  return createImageUrlBuilder(client).image(source);
}
