import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Stethoscope, Wrench } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import Reveal from "./Reveal";

const projects = [
  {
    icon: Stethoscope,
    name: "Mediq",
    tagline: "Patient Appointment System",
    desc: "Real-time doctor availability platform that simplifies healthcare access.",
    highlights: [
      "Reduced booking steps from 6 to 3",
      "550+ active weekly users",
      "Real-time slot updates",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-[#8e2de2] to-[#22d3ee]",
    repo: "https://github.com/subhani12389/Mediq-project",
    demo: "https://subhani12389.github.io/Mediq-project/",
  },
  {
    icon: Wrench,
    name: "QuickFix",
    tagline: "Home Services Platform",
    desc: "On-demand home service booking with OTP auth and live location detection.",
    highlights: [
      "OTP authentication & geolocation",
      "Reduced booking time by 80%",
      "Improved retention by 25%",
    ],
    tags: ["React Native", "Express", "MySQL"],
    gradient: "from-[#4a00e0] to-[#8e2de2]",
    repo: "https://github.com/subhani12389/QUICKFIX",
    demo: "https://subhani12389.github.io/QUICKFIX/",
  },
  {
    icon: ExternalLink,
    name: "Payment Gateway",
    tagline: "Payment Gateway Integration",
    desc: "A ready payment gateway integration demo and utilities.",
    highlights: ["Secure payment flow", "Multiple gateway adapters", "Ready-to-integrate"],
    tags: ["Node.js", "Stripe", "Express"],
    gradient: "from-[#ff8a80] to-[#ffa07a]",
    repo: "https://github.com/subhani12389/payment-gateway-ready",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of products I've designed, built, and shipped."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.name} className="">
              <article className="group glass shine hover-lift relative overflow-hidden rounded-3xl p-8">
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}
              />
              <div className="relative">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-glow`}>
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-sm font-medium text-accent">{p.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${p.gradient}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                    >
                      <GithubIcon className="h-4 w-4" /> View Code
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
