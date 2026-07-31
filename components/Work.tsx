"use client";

import { DotLink } from "./DotLink";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import { work } from "@/data/content";

export function Work() {
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
        {work.projects.map((project, i) => (
          <li key={project.id}>
            {/* Row-paired delay so the two cards in a row animate together. */}
            <Reveal delay={(i % 2) * 0.08}>
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
          </li>
        ))}
      </ul>
    </section>
  );
}
