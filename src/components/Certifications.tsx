import { SectionHeader } from "./SectionHeader";
import { Award } from "lucide-react";

const certs = [
  { name: "Java", by: "Oracle" },
  { name: "SQL", by: "HackerRank" },
  { name: "Python", by: "Cisco · Red Hat · Infosys" },
  { name: "Operating Systems", by: "Red Hat" },
  { name: "Web Development", by: "Cisco" },
  { name: "GitHub Foundation", by: "GitHub" },
  { name: "MongoDB Associate Developer", by: "MongoDB" },
  { name: "AI Foundation", by: "Oracle" },
];

export function Certifications() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified Credentials"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="glass hover-lift flex items-start gap-3 rounded-xl p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg gradient-accent">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
