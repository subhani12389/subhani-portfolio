import profile from "@/assets/profile.webp";
import { SectionHeader } from "./SectionHeader";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const traits = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Crafting end-to-end web & mobile experiences with React, Node, and modern tooling.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Strong DSA foundation with 1500+ problems solved across competitive platforms.",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    desc: "Passionate about shipping products that genuinely improve people's lives.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="A developer who loves building things"
        />

        <div className="grid gap-12 lg:grid-cols-12 items-center mb-16">
          <div className="lg:col-span-5 flex justify-center">
            <Reveal className="relative">
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-white/10 shadow-elegant sm:h-80 sm:w-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent -z-10" />
                <img
                  src={profile}
                  alt="Mahaboob Subhani Shaik"
                  loading="lazy"
                  className="relative h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display text-2xl font-bold mb-4">
                Hi, I'm <span className="gradient-text font-extrabold">Mahaboob Subhani Shaik</span>
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate Computer Science Engineering student at Aditya University, dedicated to building scalable, high-performance web and mobile applications. With a strong foundation in data structures and algorithms, I love solving complex technical challenges and have successfully solved over 1500 coding problems across competitive platforms like LeetCode and GeeksforGeeks.
                </p>
                <p>
                  My experience includes working as a Full Stack Developer Intern at Technical Hub, where I optimized React Native application performance by 30% and crafted modern, responsive user interfaces. I am continuously exploring emerging technologies, aiming to collaborate on impact-driven projects that deliver premium digital experiences to users worldwide.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {traits.map((t) => (
            <Reveal key={t.title} className="">
              <div className="glass hover-lift rounded-2xl p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-glow">
                  <t.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
