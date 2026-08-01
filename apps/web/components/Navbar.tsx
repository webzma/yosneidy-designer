"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HoverLetters } from "./HoverLetters";
import { useTheme } from "./ThemeProvider";
import { lenisStore } from "@/lib/lenis";
import type { NavItem, Site } from "@/sanity/fetch";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        className={theme === "light" ? "opacity-100" : "opacity-45 hover:opacity-75"}
      >
        Claro
      </button>
      <span aria-hidden className="opacity-45">
        /
      </span>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        className={theme === "dark" ? "opacity-100" : "opacity-45 hover:opacity-75"}
      >
        Oscuro
      </button>
    </div>
  );
}

export function Navbar({ site, nav }: { site: Site; nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  /* Anchor links ("#work") are same-page on the home page; off it they must
     carry the "/" prefix so they still land on the right section. Absolute
     paths ("/sobre-mi") are used as-is. */
  const home = pathname === "/" ? "" : "/";
  const navHref = (href: string) => (href.startsWith("/") ? href : `${home}${href}`);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenisStore.current?.stop();
    else lenisStore.current?.start();
    return () => {
      document.body.style.overflow = "";
      lenisStore.current?.start();
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* mix-blend-difference is what lets the wordmark and links stay legible
          as they pass over the full-bleed photography. It must live on the
          header itself: the fixed, z-indexed header creates a stacking context,
          so a blend on a child would be isolated and never see the page. */}
      <header className="fixed inset-x-0 top-0 z-50 text-paper mix-blend-difference">
        <div className="shell flex items-center justify-between py-6">
          <a href={`${home}#home`} className="font-script text-2xl leading-none" aria-label={`${site.name} — inicio`}>
            {site.name}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <ThemeToggle />
            <span aria-hidden className="opacity-35">
              |
            </span>
            <nav className="flex items-center gap-6 text-sm font-medium">
              {nav.map((item) => (
                <a key={item.href} href={navHref(item.href)}>
                  <HoverLetters text={item.label} />
                </a>
              ))}
            </nav>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-[15px] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </header>

      {/* Kept outside the header so it is not caught by its blend mode, and
          below it (z-40) so the Menu/Close button stays visible on top. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-paper px-gutter text-ink md:hidden dark:bg-black dark:text-paper"
      >
        <nav className="flex flex-col gap-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={navHref(item.href)}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-black tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </>
  );
}
