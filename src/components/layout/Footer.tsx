import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ravan Novruzov. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
