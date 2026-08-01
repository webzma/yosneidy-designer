import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ScrollDrift } from "@/components/ScrollDrift";
import { getProjects, getSettings } from "@/sanity/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  // El título viene como "(PROYECTOS)"; en la pestaña se muestra sin paréntesis.
  return {
    title: `${settings.projectsPage.title.replace(/[()]/g, "")} — ${settings.site.name}`,
    description: settings.projectsPage.intro,
  };
}

export default async function ProyectosPage() {
  const [settings, projects] = await Promise.all([getSettings(), getProjects()]);

  return (
    <>
      <Navbar site={settings.site} nav={settings.nav} />
      <main>
        {/* pt-24 clears the fixed navbar, same as the hero on the home page. */}
        <section className="shell pt-24 pb-16 lg:pb-36">
          <Reveal>
            <ScrollDrift>
              <h1 className="section-title">{settings.projectsPage.title}</h1>
            </ScrollDrift>
          </Reveal>

          <Reveal delay={0.05} className="mt-6">
            <p className="max-w-[26.25rem]">{settings.projectsPage.intro}</p>
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
      </main>
      <Footer site={settings.site} footer={settings.footer} />
    </>
  );
}
