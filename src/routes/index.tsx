import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Certifications } from "@/components/Certifications";
import { LanguagesHobbies } from "@/components/LanguagesHobbies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahaboob Subhani Shaik — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mahaboob Subhani Shaik — Full Stack Developer building scalable web & mobile applications with clean, efficient code.",
      },
      { property: "og:title", content: "Mahaboob Subhani Shaik — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer · Problem Solver · Tech Enthusiast. Explore projects, skills, and experience.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Certifications />
        <LanguagesHobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
