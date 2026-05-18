import { SectionHeader } from "./SectionHeader";
import { GraduationCap } from "lucide-react";

const items = [
  {
    school: "Aditya University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.1",
  },
  {
    school: "Vignan Bharathi Junior College",
    degree: "Intermediate — MPC",
    period: "2021 – 2023",
    score: "CGPA: 8.49",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Education" title="Academic Journey" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div
                key={it.school}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full gradient-primary shadow-glow md:left-1/2" />
                <div className="ml-12 flex-1 md:ml-0">
                  <div className="glass hover-lift rounded-2xl p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{it.school}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.degree}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded-full bg-white/5 px-3 py-1 text-muted-foreground">
                        {it.period}
                      </span>
                      <span className="rounded-full gradient-primary px-3 py-1 font-semibold text-white">
                        {it.score}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
