"use client";

import { FitText } from "./FitText";
import { Reveal } from "./Reveal";
import { ScrollDrift } from "./ScrollDrift";
import { footer, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="shell pt-3 pb-3">
      <Reveal>
        {/* Mirrors the hero wordmark, edge to edge but with a tighter line box. */}
        <div aria-hidden>
          <ScrollDrift distance={60}>
            <FitText className="font-display font-black" lineHeight={0.965}>
              {`(${site.wordmark})`}
            </FitText>
          </ScrollDrift>
        </div>
      </Reveal>

      {/* The credit only appears on desktop; mobile keeps location + rights. */}
      <div className="mt-5 flex justify-between gap-2 text-sm font-semibold leading-none sm:mt-6 sm:grid sm:grid-cols-3">
        <p className="hidden sm:block">{footer.credit}</p>
        <p className="sm:text-center">{footer.location}</p>
        <p className="sm:text-right">{footer.rights}</p>
      </div>
    </footer>
  );
}
