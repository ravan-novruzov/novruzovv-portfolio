"use client";

import { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xplaceholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="iletisim" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="İletişim"
          subtitle="Benimle iletişime geçin"
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: info */}
          <ScrollReveal>
            <div>
              <p className="text-lg leading-relaxed text-secondary">
                Projelerim hakkında sorularınız varsa veya birlikte çalışmak
                isterseniz, bana ulaşabilirsiniz.
              </p>

              <div className="mt-8 space-y-4">
                {/* LinkedIn prominent card */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-glow flex items-center gap-4 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/5 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                >
                  <div className="rounded-lg bg-primary/20 p-3">
                    <LinkedinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">LinkedIn&apos;de Bağlanalım</p>
                    <p className="text-sm text-muted-foreground">
                      Profesyonel ağımda yerinizi alın
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* GitHub link */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                >
                  <div className="rounded-lg bg-muted p-3">
                    <GithubIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      Açık kaynak projelerime göz atın
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-ring focus:shadow-lg focus:shadow-primary/5"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-ring focus:shadow-lg focus:shadow-primary/5"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-ring focus:shadow-lg focus:shadow-primary/5"
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-hover px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Gönderiliyor..." : "Gönder"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
