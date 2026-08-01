"use client";

import { DotLink } from "./DotLink";
import { ProjectCard, type Project } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import type { WorkSection } from "@/sanity/fetch";

export function Work({ work, projects }: { work: WorkSection; projects: Project[] }) {
  return (
    <section id="work" className="shell pb-10 lg:pb-36">
      <Reveal>
        <ScrollDrift>
          <h2 className="section-title">{work.title}</h2>
        </ScrollDrift>
      </Reveal>

      <Reveal delay={0.05} className="mt-6 flex flex-col gap-6">
        <p className="max-w-[26.25rem]">{work.intro}</p>
        <DotLink href={work.cta.href} label={work.cta.label} />
      </Reveal>

      <ul className="mt-[5.5rem] grid grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:gap-y-24">
        {projects.map((project, i) => (
          <li key={project.id}>
            {/* Row-paired delay so the two cards in a row animate together. */}
            <ProjectCard project={project} delay={(i % 2) * 0.08} />
          </li>
        ))}
      </ul>
    </section>
  );
}
