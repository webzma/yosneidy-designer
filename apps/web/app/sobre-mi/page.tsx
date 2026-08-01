import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DotLink } from "@/components/DotLink";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import { ScrollDrift } from "@/components/ScrollDrift";
import { getSettings } from "@/sanity/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  // El título viene como "(SOBRE MÍ)"; en la pestaña se muestra sin paréntesis.
  return {
    title: `${settings.aboutPage.title.replace(/[()]/g, "")} — ${settings.site.name}`,
    description: settings.aboutPage.intro,
  };
}

export default async function SobreMiPage() {
  const settings = await getSettings();
  const { aboutPage } = settings;
  // La biografía se escribe en el Studio separando párrafos con línea en blanco.
  const paragraphs = aboutPage.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <>
      <Navbar site={settings.site} nav={settings.nav} />
      <main>
        {/* pt-24 clears the fixed navbar, same as the other pages. */}
        <section className="shell pt-24 pb-16 lg:pb-36">
          <Reveal>
            <ScrollDrift>
              <h1 className="section-title">{aboutPage.title}</h1>
            </ScrollDrift>
          </Reveal>

          <Reveal delay={0.05} className="mt-6">
            <p className="max-w-[26.25rem]">{aboutPage.intro}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-[5.5rem] lg:mt-24">
            <ParallaxImage
              src={aboutPage.image.src}
              alt={aboutPage.image.alt}
              sizes="100vw"
              className="h-[25rem] w-full md:h-[37.5rem]"
            />
          </Reveal>

          {/* Bio + services: stacked on mobile, two columns on desktop. */}
          <div className="mt-[5.5rem] flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:mt-24">
            <Reveal delay={0.05} className="flex flex-col gap-6">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="max-w-[26.25rem]">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            {aboutPage.services.length > 0 && (
              <Reveal delay={0.1}>
                <ul className="flex flex-col gap-3 sm:justify-self-end sm:text-right">
                  {aboutPage.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 font-display text-base font-bold sm:justify-end">
                      <span aria-hidden className="size-1.5 rounded-full bg-current sm:order-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <DotLink href={aboutPage.cta.href} label={aboutPage.cta.label} />
          </Reveal>
        </section>
      </main>
      <Footer site={settings.site} footer={settings.footer} />
    </>
  );
}
