import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { LetsTalk } from "@/components/LetsTalk";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Contact />
        <LetsTalk />
      </main>
      <Footer />
    </>
  );
}
