import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { LetsTalk } from "@/components/LetsTalk";
import { Footer } from "@/components/Footer";
import { getProjects, getSettings } from "@/sanity/fetch";

export default async function Home() {
  const [settings, projects] = await Promise.all([getSettings(), getProjects()]);

  return (
    <>
      <Navbar site={settings.site} nav={settings.nav} />
      <main>
        <Hero site={settings.site} hero={settings.hero} />
        <Work work={settings.work} projects={projects} />
        <Contact site={settings.site} contact={settings.contact} />
        <LetsTalk letsTalk={settings.letsTalk} />
      </main>
      <Footer site={settings.site} footer={settings.footer} />
    </>
  );
}
