import { SectionHeader } from "./SectionHeader";
import { Code, Layers, Database, Wrench, Brain } from "lucide-react";
import Reveal from "./Reveal";

const groups = [
  {
    icon: Code,
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["React", "Node.js", "Express", "HTML", "CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Linux"],
  },
  {
    icon: Brain,
    title: "Concepts",
    items: ["DSA", "OS", "DBMS", "Computer Networks"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tech I work with"
          description="My everyday toolkit for building production software."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Reveal key={g.title} className="">
              <div className="glass hover-lift rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
                    <g.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
