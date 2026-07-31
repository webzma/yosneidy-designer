"use client";

import { HoverLetters } from "./HoverLetters";

/**
 * The site's only button style: a small dot followed by the label, with the
 * per-letter roll on hover. Used for "Hablemos", "Ver todos los proyectos"
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
      className={`group/dot inline-flex items-center gap-2 text-sm ${className}`}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-current transition-transform duration-300 group-hover/dot:scale-150"
      />
      <HoverLetters text={label} />
    </a>
  );
}
