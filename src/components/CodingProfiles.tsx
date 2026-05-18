import { SectionHeader } from "./SectionHeader";
import { Trophy, Code2, Star, Award } from "lucide-react";

const profiles = [
  { icon: Code2, name: "LeetCode", value: "450+", label: "Problems Solved" },
  { icon: Trophy, name: "GeeksforGeeks", value: "250+", label: "Problems Solved" },
  { icon: Star, name: "HackerRank", value: "5★", label: "Rating" },
  { icon: Award, name: "CodeChef", value: "1260", label: "800+ problems" },
];

export function CodingProfiles() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Coding Profiles"
          title="Competitive programming"
          description="1500+ problems solved across major competitive coding platforms."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <div
              key={p.name}
              className="glass hover-lift group relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all group-hover:from-primary/10 group-hover:to-accent/10" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <p className="font-display text-3xl font-bold gradient-text">{p.value}</p>
                <p className="mt-1 font-semibold">{p.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
