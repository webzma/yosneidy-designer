"use client";

import { DotLink } from "./DotLink";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import { letsTalk } from "@/data/content";

export function LetsTalk() {
  return (
    <section id="about" className="shell pb-16 lg:pb-18">
      <Reveal>
        <ScrollDrift>
          <h2 className="section-title">{letsTalk.title}</h2>
        </ScrollDrift>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <ParallaxImage
          src={letsTalk.image.src}
          alt={letsTalk.image.alt}
          sizes="100vw"
          className="h-[25rem] w-full"
          imageClassName="object-[49.8%_20.4%]"
        >
          {/* The photograph is already dark behind the copy; a light scrim is
              enough to guarantee contrast without washing out the image. */}
          <div aria-hidden className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-paper">
            <p className="font-display text-base font-bold leading-4">{letsTalk.eyebrow}</p>
            <p className="max-w-[26.25rem]">{letsTalk.blurb}</p>
            <DotLink href={letsTalk.cta.href} label={letsTalk.cta.label} external />
          </div>
        </ParallaxImage>
      </Reveal>
    </section>
  );
}
