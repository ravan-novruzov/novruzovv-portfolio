"use client";

import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import { communityEvents } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Events() {
  return (
    <section id="etkinlikler" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Etkinlikler"
          subtitle="Topluluk olarak düzenlediğimiz etkinlikler"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {communityEvents.map((event, index) => (
            <ScrollReveal key={event.title} delay={index * 0.15}>
              <div className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                {/* Horizontal scrollable photo strip */}
                <div className="relative">
                  <div className="flex gap-1.5 overflow-x-auto p-1.5 scrollbar-hide snap-x snap-mandatory">
                    {event.images.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] w-64 shrink-0 snap-start overflow-hidden rounded-xl"
                      >
                        <Image
                          src={src}
                          alt={`${event.title} - ${i + 1}`}
                          fill
                          sizes="256px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Fade hint on right edge */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                      {event.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </div>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                    {event.description}
                  </p>

                  {event.linkedin && (
                    <a
                      href={event.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-all hover:gap-2"
                    >
                      LinkedIn&apos;de Gör
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
