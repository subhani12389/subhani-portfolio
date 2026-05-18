import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Mahaboob Subhani Shaik</span>. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/subhani12389" target="_blank" rel="noreferrer" className="rounded-full glass p-2 hover:text-foreground transition-colors" aria-label="GitHub">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/subhani-shaik-5262b32a1" target="_blank" rel="noreferrer" className="rounded-full glass p-2 hover:text-foreground transition-colors" aria-label="LinkedIn">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href="mailto:sk5826314@gmail.com" className="rounded-full glass p-2 hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
