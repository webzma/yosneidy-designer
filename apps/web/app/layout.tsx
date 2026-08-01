import type { Metadata } from "next";
import { inter, interDisplay, pecita } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getSettings } from "@/sanity/fetch";
import "./globals.css";

// ISR: las páginas se regeneran como máximo cada 60 s, de modo que los cambios
// hechos en el Studio aparecen sin reconstruir el sitio.
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { site, hero } = await getSettings();
  return {
    title: site.wordmark,
    description: site.description,
    openGraph: {
      type: "website",
      title: site.wordmark,
      description: site.description,
      images: [hero.image.src],
    },
  };
}

/**
 * Applies the stored theme before first paint. Without this the page would
 * render light and then flash to dark once React hydrates.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${interDisplay.variable} ${pecita.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
