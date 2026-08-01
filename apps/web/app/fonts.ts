import localFont from "next/font/local";

/** Body copy — Inter v4 variable (weights 100–900). */
export const inter = localFont({
  src: [{ path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Display cut of Inter — tighter spacing and smaller apertures, used for every
 * heading and the parenthesised section labels. Only the three weights the
 * design actually uses are shipped.
 */
export const interDisplay = localFont({
  src: [
    { path: "./fonts/InterDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/InterDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/InterDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

/** Handwritten wordmark in the navbar. Subset to Latin to keep it under 100 kB. */
export const pecita = localFont({
  src: [{ path: "./fonts/Pecita.woff2", weight: "400", style: "normal" }],
  variable: "--font-pecita",
  display: "swap",
});
