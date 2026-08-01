"use client";

import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";

export type Project = {
  id: string;
  name: string;
  href: string;
  src: string;
  alt: string;
};

/**
 * One project card: the (id)/name row that reveals the name on hover above a
 * parallax thumbnail. Shared by the home "Proyectos" section and the
 * /proyectos archive.
 */
export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <a href={project.href} className="group block">
        <div className="mb-2 flex items-baseline justify-between font-display text-base font-bold leading-4">
          <span>({project.id})</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.name}
          </span>
        </div>

        <ParallaxImage
          src={project.src}
          alt={project.alt}
          sizes="(min-width: 640px) 50vw, 100vw"
          className="h-[25rem] w-full"
          imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </a>
    </Reveal>
  );
}
