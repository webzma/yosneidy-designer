"use client";

import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import type { ContactContent, Site } from "@/sanity/fetch";

export function Contact({ site, contact }: { site: Site; contact: ContactContent }) {
  return (
    <section id="contact" className="shell pb-16 lg:pb-36">
      <Reveal>
        <ScrollDrift>
          <h2 className="section-title">{contact.title}</h2>
        </ScrollDrift>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <ParallaxImage
          src={contact.image.src}
          alt={contact.image.alt}
          sizes="100vw"
          className="h-[25rem] w-full"
        />
      </Reveal>

      {/* Mobile stacks blurb → socials → email; desktop is a 3-column row with
          the blurb centred and the email flush right. */}
      <Reveal delay={0.1} className="mt-6 flex flex-col gap-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
        <ul className="order-2 flex flex-col gap-3 sm:order-1">
          {contact.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="order-1 w-full max-w-xs sm:order-2">{contact.blurb}</p>

        <a
          href={`mailto:${site.email}`}
          className="relative order-3 inline-block justify-self-start after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full sm:justify-self-end"
        >
          {site.email}
        </a>
      </Reveal>
    </section>
  );
}
