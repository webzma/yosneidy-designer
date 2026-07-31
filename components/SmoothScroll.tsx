"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { lenisStore } from "@/lib/lenis";

/**
 * Inertia-based smooth scrolling (Lenis) for the whole page. Never activated
 * under prefers-reduced-motion, which keeps native scrolling untouched.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      /* Matches the 6rem scroll-padding the fixed navbar needs on anchor jumps. */
      anchors: { offset: -96 },
    });
    lenisStore.current = lenis;

    return () => {
      lenisStore.current = null;
      lenis.destroy();
    };
  }, []);

  return children;
}
