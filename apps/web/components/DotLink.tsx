"use client";

import { HoverLetters } from "./HoverLetters";

/**
 * The site's only button style: the label inside a pill outline, a small dot
 * in front, and the per-letter roll on hover. The border and the hover tint
 * both derive from currentColor, so the same pill works on paper and on the
 * dark "Hablemos" photograph. Used for "Hablemos", "Ver todos los proyectos"
 * and "Agenda una llamada".
 */
export function DotLink({
  href,
  label,
  className = "",
  external = false,
}: {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/dot inline-flex w-fit items-center gap-2 rounded-full border border-current/30 px-5 py-2.5 text-sm transition-[border-color,background-color] duration-300 hover:border-current hover:bg-current/10 ${className}`}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-current transition-transform duration-300 group-hover/dot:scale-150"
      />
      <HoverLetters text={label} />
    </a>
  );
}
