"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Medal, Award, Users, ExternalLink, ChevronLeft, ChevronRight, BarChart2 } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
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
            className="object-cover"
          />
        </div>
      ))}

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

const rankStyles: Record<number, { icon: typeof Trophy; gradient: string; glow: string; label: string }> = {
  1: {
    icon: Trophy,
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    glow: "shadow-amber-500/20",
    label: "BİRİNCİLİK",
  },
  2: {
    icon: Medal,
    gradient: "from-slate-300 via-gray-300 to-slate-400",
    glow: "shadow-slate-400/20",
    label: "İKİNCİLİK",
  },
  3: {
    icon: Award,
    gradient: "from-amber-600 via-orange-700 to-amber-800",
    glow: "shadow-orange-600/20",
    label: "ÜÇÜNCÜLÜK",
  },
};

export default function Achievements() {
  return (
    <section id="basarilar" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Başarılar"
          subtitle="Hackathon dereceleri ve rekabetçi başarılarım"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const style = rankStyles[achievement.rank] || rankStyles[3];
            const Icon = style.icon;

            return (
              <ScrollReveal key={achievement.title} delay={index * 0.15}>
                <div
                  className={`card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl ${style.glow} hover:-translate-y-1`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  {/* Hero image / carousel or gradient header */}
                  {(achievement.images?.length || achievement.image) ? (
                    <div className="relative">
                      {achievement.images?.length ? (
                        <ImageCarousel images={achievement.images} title={achievement.title} />
                      ) : (
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src={achievement.image!}
                            alt={achievement.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      {/* Gradient overlay for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />

                      {/* Trophy badge on image (bottom-left) */}
                      <div className={`absolute bottom-4 left-4 rounded-xl bg-gradient-to-br ${style.gradient} p-2.5 shadow-lg ${style.glow}`}>
                        <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                      </div>

                      {/* Rank label on image (bottom-right) */}
                      <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
                        <p className={`text-[10px] font-bold tracking-widest bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
                          {style.label}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative px-6 pt-6">
                      {/* Decorative gradient corner */}
                      <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${style.gradient} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30`} />

                      {/* Trophy icon + rank */}
                      <div className="relative flex items-start justify-between">
                        <div className={`rounded-xl bg-gradient-to-br ${style.gradient} p-3 shadow-lg ${style.glow}`}>
                          <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="text-right">
                          <p className={`text-[10px] font-bold tracking-widest bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
                            {style.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col p-6">
                    {/* Date (only show below if image exists, since rank label is on image) */}
                    {(achievement.images?.length || achievement.image) && (
                      <p className="mb-1 text-xs text-muted-foreground">{achievement.date}</p>
                    )}

                    {/* Title */}
                    <h3 className={`${(achievement.images?.length || achievement.image) ? "" : "mt-5"} text-xl font-bold transition-colors group-hover:text-primary`}>
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {achievement.organization}
                    </p>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary">
                      {achievement.description}
                    </p>

                    {/* Team */}
                    {achievement.team && achievement.team.length > 0 && (
                      <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-muted/50 p-3">
                        <Users className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Takım Arkadaşları
                          </p>
                          <p className="text-xs text-foreground">
                            {achievement.team.join(" · ")}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* LinkedIn link */}
                    {achievement.linkedin && (
                      <a
                        href={achievement.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-all hover:gap-2"
                      >
                        LinkedIn&apos;de Gör
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {/* Result link */}
                    {achievement.resultLink && (
                      <a
                        href={achievement.resultLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-all hover:gap-2"
                      >
                        <BarChart2 className="h-3.5 w-3.5" />
                        Turnuva Sonuçları
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
