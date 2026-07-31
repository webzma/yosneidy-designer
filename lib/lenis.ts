import type Lenis from "lenis";

/**
 * Holds the active Lenis instance (set by SmoothScroll) so UI that overlays
 * the page — the mobile menu — can stop and resume scrolling.
 */
export const lenisStore: { current: Lenis | null } = { current: null };
