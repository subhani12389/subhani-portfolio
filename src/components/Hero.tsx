import profile from "@/assets/profile.webp";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Mahaboob Subhani</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
            Full Stack Developer · Problem Solver · Tech Enthusiast
          </p>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Building scalable web & mobile applications with clean and efficient code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full gradient-3d-primary px-7 py-3 text-sm font-semibold transition-transform hover:scale-105 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/subhani12389"
              target="_blank"
              rel="noreferrer"
              className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-foreground hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/subhani-shaik-5262b32a1"
              target="_blank"
              rel="noreferrer"
              className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-foreground hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:sk5826314@gmail.com"
              className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-foreground hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Parallax className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 mx-auto h-80 w-80 rounded-full bg-gradient-to-br from-[#ff8a80] via-[#ffa07a] to-[#ee5a52] opacity-40 blur-3xl sm:h-96 sm:w-96" />
          <Reveal className="relative">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/40 shadow-elegant glow-ring sm:h-96 sm:w-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8a80] to-[#ee5a52]" />
              <img
                src={profile}
                alt="Mahaboob Subhani Shaik"
                loading="eager"
                className="relative h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
