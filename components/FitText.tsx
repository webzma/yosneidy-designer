"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Sizes a single line of text so it spans its container exactly, edge to edge.
 *
 * The wordmark is the page's defining element and has to touch both gutters at
 * every viewport width. A CSS `vw` formula can't do that on its own — the right
 * divisor depends on the glyph widths of whatever string is passed in — so the
 * text is measured once at a reference size and the ratio is reused.
 */
export function FitText({
  children,
  className = "",
  lineHeight = 0.9,
}: {
  children: string;
  className?: string;
  lineHeight?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const fit = useCallback(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const available = wrap.clientWidth;
    if (!available) return;

    // Measure at a fixed reference size, then scale by the ratio. One reflow,
    // no binary search.
    const REFERENCE = 100;
    text.style.fontSize = `${REFERENCE}px`;
    const measured = text.getBoundingClientRect().width;
    if (!measured) return;

    const next = (available / measured) * REFERENCE;
    text.style.fontSize = `${next}px`;
    setFontSize(next);
  }, []);

  useLayoutEffect(() => {
    fit();

    const observer = new ResizeObserver(fit);
    if (wrapRef.current) observer.observe(wrapRef.current);

    // Measuring with a fallback face gives a wrong ratio, so re-fit once the
    // real display face is usable. `fonts.load()` covers the case where the
    // font finished (or started) before hydration; `loadingdone` covers any
    // later load. Neither fires reliably on its own in every timing.
    let cancelled = false;
    const refit = () => {
      if (!cancelled) fit();
    };
    const text = textRef.current;
    if (text && document.fonts) {
      const { fontFamily, fontWeight, fontStyle } = getComputedStyle(text);
      document.fonts
        .load(`${fontStyle} ${fontWeight} 100px ${fontFamily}`)
        .then(refit)
        .catch(() => {});
      document.fonts.ready.then(refit).catch(() => {});
      document.fonts.addEventListener?.("loadingdone", refit);
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      document.fonts?.removeEventListener?.("loadingdone", refit);
    };
  }, [fit]);

  useEffect(() => {
    fit();
  }, [children, fit]);

  return (
    <div ref={wrapRef} className="w-full overflow-hidden">
      {/* inline-block so the measured box is the text's own advance width —
          a block box would always report the container width and the ratio
          would collapse to the reference size. */}
      <span
        ref={textRef}
        className={`inline-block whitespace-nowrap ${className}`}
        style={{
          lineHeight,
          // Before the first measurement, a vw-based estimate keeps the text
          // close to its final size so there is no visible jump.
          fontSize: fontSize ?? "calc((100vw - 3rem) / 5.77)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
