import { SectionHeader } from "./SectionHeader";
import { Languages, Heart } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Telugu", level: "Native" },
  { name: "Urdu", level: "Fluent" },
  { name: "Japanese", level: "Beginner" },
  { name: "Arabic", level: "Beginner" },
];

const hobbies = ["Volleyball", "Cricket", "Kabaddi", "Traveling"];

export function LanguagesHobbies() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Beyond Code" title="Languages & Hobbies" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass hover-lift rounded-2xl p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold">Languages</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {languages.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="font-medium">{l.name}</span>
                  <span className="text-xs text-accent">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass hover-lift rounded-2xl p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold">Hobbies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((h) => (
                <span
                  key={h}
                  className="rounded-full gradient-primary px-5 py-2 text-sm font-medium text-white shadow-glow"
                >
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Sports keep me sharp, and traveling fuels new perspectives that I bring back into my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
