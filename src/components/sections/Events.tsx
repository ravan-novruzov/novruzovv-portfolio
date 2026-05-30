"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { communityEvents } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function ImageCarousel({ images, title, containImages = [] }: { images: string[]; title: string; containImages?: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      {/* Photos */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={src}
            alt={`${title} - ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={containImages.includes(src) ? "object-contain" : "object-cover"}
          />
        </div>
      ))}

      {/* Arrows — only show if more than 1 photo */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-1.5 text-white backdrop-blur-sm transition-all hover:bg-black/60"
            aria-label="Önceki"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-1.5 text-white backdrop-blur-sm transition-all hover:bg-black/60"
            aria-label="Sonraki"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Fotoğraf ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
              <div
                className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <ImageCarousel images={event.images} title={event.title} containImages={event.containImages} />

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
