"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DotLink } from "./DotLink";
import { FitText } from "./FitText";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import type { HeroContent, Site } from "@/sanity/fetch";

export function Hero({ site, hero }: { site: Site; hero: HeroContent }) {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="shell pt-24 pb-16 lg:pb-36">
      <Reveal className="flex justify-center">
        <p className="flex items-center gap-2 text-sm font-semibold leading-none">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-available opacity-70 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-available" />
          </span>
          {site.availability}
        </p>
      </Reveal>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 lg:mt-6"
      >
        <ScrollDrift distance={60}>
          <FitText className="font-display font-black" lineHeight={1.09}>
            {`(${site.wordmark})`}
          </FitText>
        </ScrollDrift>
      </motion.h1>

      <Reveal delay={0.1} className="mt-5 flex flex-col items-center gap-6 text-center lg:mt-6">
        <p className="max-w-[26.25rem]">{hero.intro}</p>
        <DotLink href={hero.cta.href} label={hero.cta.label} />
      </Reveal>

      <Reveal delay={0.15} className="mt-5 lg:mt-6">
        <ParallaxImage
          src={hero.image.src}
          alt={hero.image.alt}
          sizes="100vw"
          priority
          className="h-[25rem] w-full md:h-[37.5rem]"
        />
      </Reveal>

      {/* Location/email row is desktop-only in the original. */}
      <Reveal delay={0.1} className="mt-6 hidden justify-between gap-2 text-sm sm:flex">
        <p className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" aria-hidden className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
          {site.location}
        </p>
        <a href={`mailto:${site.email}`} className="sm:text-right">
          <HoverEmail email={site.email} />
        </a>
      </Reveal>
    </section>
  );
}

function HoverEmail({ email }: { email: string }) {
  return (
    <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full">
      {email}
    </span>
  );
}
