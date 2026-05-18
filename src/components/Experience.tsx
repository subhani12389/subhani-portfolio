import { SectionHeader } from "./SectionHeader";
import { Briefcase, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Internship & Work" />
        <Reveal>
          <div className="glass hover-lift rounded-3xl p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Full Stack Developer Intern</h3>
                  <p className="text-sm text-accent">Technical Hub</p>
                </div>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                May – Jun 2025
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-primary" />
                Developed React Native applications, improving overall performance by 30%.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-primary" />
                Built responsive, accessible UIs using HTML, CSS, and modern JavaScript.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-primary" />
                Collaborated with cross-functional teams to ship features on tight timelines.
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
              <BadgeCheck className="h-4 w-4" />
              Verified · Roll No 23A91A0559
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
