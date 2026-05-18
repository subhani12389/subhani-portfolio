import { useState } from "react";
import { z } from "zod";
import { SectionHeader } from "./SectionHeader";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import Reveal from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:sk5826314@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          description="Have an opportunity, project, or just want to say hi? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href="mailto:sk5826314@gmail.com"
                className="glass hover-lift flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-glow">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">sk5826314@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+919966271457"
                className="glass hover-lift flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-accent">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 99662 71457</p>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/subhani12389"
                  target="_blank"
                  rel="noreferrer"
                  className="glass hover-lift flex items-center gap-3 rounded-2xl p-4"
                >
                  <GithubIcon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/subhani-shaik-5262b32a1"
                  target="_blank"
                  rel="noreferrer"
                  className="glass hover-lift flex items-center gap-3 rounded-2xl p-4"
                >
                  <LinkedinIcon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Tell me a bit about your project…"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {status && <p className="text-center text-xs text-accent">{status}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
