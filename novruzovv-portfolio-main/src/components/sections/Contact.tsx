import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

const contactLinks = [
  {
    href: SOCIAL_LINKS.linkedin,
    icon: LinkedinIcon,
    label: "LinkedIn'de Bağlanalım",
    sub: "Profesyonel ağımda yerinizi alın",
    prominent: true,
  },
  {
    href: "mailto:ravannovruzov7@gmail.com",
    icon: Mail,
    label: "E-posta Gönder",
    sub: "ravannovruzov7@gmail.com",
    prominent: false,
  },
  {
    href: SOCIAL_LINKS.github,
    icon: GithubIcon,
    label: "GitHub",
    sub: "Açık kaynak projelerime göz atın",
    prominent: false,
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="İletişim"
          subtitle="Benimle iletişime geçin"
        />

        <ScrollReveal>
          <p className="mb-8 text-center text-base leading-relaxed text-secondary">
            Staj fırsatları, projeler veya işbirliği için her zaman ulaşabilirsiniz.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {contactLinks.map(({ href, icon: Icon, label, sub, prominent }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group card-glow flex items-center gap-4 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  prominent
                    ? "border-primary/30 bg-gradient-to-r from-primary/10 to-accent/5 hover:border-primary/50 hover:shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-primary/5"
                }`}
              >
                <div className={`rounded-lg p-3 ${prominent ? "bg-primary/20" : "bg-muted"}`}>
                  <Icon className={`h-6 w-6 ${prominent ? "text-primary" : ""}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{sub}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
