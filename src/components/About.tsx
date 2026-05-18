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
          description="I'm a Computer Science student with a passion for creating impactful applications — from real-time platforms to mobile apps that delight users."
        />
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
