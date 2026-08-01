import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DotLink } from "@/components/DotLink";
import { Reveal } from "@/components/Reveal";
import { ScrollDrift } from "@/components/ScrollDrift";
import { getSettings } from "@/sanity/fetch";

export default async function NotFound() {
  const settings = await getSettings();
  const { notFound } = settings;

  return (
    <>
      <Navbar site={settings.site} nav={settings.nav} />
      <main>
        {/* pt-24 clears the fixed navbar, same as the other pages. */}
        <section className="shell flex min-h-svh flex-col justify-center pt-24 pb-16">
          <Reveal>
            <ScrollDrift>
              <h1 className="section-title">{notFound.title}</h1>
            </ScrollDrift>
          </Reveal>

          <Reveal delay={0.05} className="mt-6">
            <p className="max-w-[26.25rem]">{notFound.blurb}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <DotLink href={notFound.cta.href} label={notFound.cta.label} />
          </Reveal>
        </section>
      </main>
      <Footer site={settings.site} footer={settings.footer} />
    </>
  );
}
