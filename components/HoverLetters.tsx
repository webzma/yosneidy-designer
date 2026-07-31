"use client";

/**
 * The navbar / button hover effect from the original: on hover each glyph rolls
 * upward out of a clipped box while a duplicate rolls in from below, staggered
 * left to right.
 *
 * The duplicate row is aria-hidden and the whole word is exposed once via an
 * sr-only span, so screen readers never read the letters one at a time.
 */
export function HoverLetters({
  text,
  className = "",
  stagger = 0.022,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  return (
    <span className={`group/letters relative inline-flex overflow-hidden align-bottom ${className}`}>
      <span className="sr-only">{text}</span>

      <span aria-hidden className="inline-flex">
        {[...text].map((char, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            {/* Reserves the glyph's advance width, including for spaces. */}
            <span className="invisible">{char === " " ? " " : char}</span>

            <span
              className="absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/letters:-translate-y-full motion-reduce:transition-none"
              style={{ transitionDelay: `${i * stagger}s` }}
            >
              {char === " " ? " " : char}
            </span>

            <span
              className="absolute inset-0 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/letters:translate-y-0 motion-reduce:hidden"
              style={{ transitionDelay: `${i * stagger}s` }}
            >
              {char === " " ? " " : char}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
