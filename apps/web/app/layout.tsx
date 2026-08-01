import type { Metadata } from "next";
import { inter, interDisplay, pecita } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "DELANE — Portafolio de desarrollador creativo",
  description:
    "Plantilla de portafolio moderna para diseñadores, desarrolladores y creativos, con diseños limpios, modos claro y oscuro, tipografía elegante y secciones totalmente personalizables.",
  openGraph: {
    type: "website",
    title: "DELANE — Portafolio de desarrollador creativo",
    description:
      "Plantilla de portafolio moderna para diseñadores, desarrolladores y creativos, con diseños limpios, modos claro y oscuro, tipografía elegante y secciones totalmente personalizables.",
    images: ["/img/hero.png"],
  },
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
