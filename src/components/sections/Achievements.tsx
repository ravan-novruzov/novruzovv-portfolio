"use client";

import Image from "next/image";
import { Trophy, Medal, Award, Users, ExternalLink } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
                  {/* Hero image or gradient header */}
                  {achievement.image ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                      {/* Trophy badge on image (top-left) */}
                      <div className={`absolute left-4 top-4 rounded-xl bg-gradient-to-br ${style.gradient} p-2.5 shadow-lg ${style.glow}`}>
                        <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                      </div>

                      {/* Rank label on image (top-right) */}
                      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
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
                    {achievement.image && (
                      <p className="mb-1 text-xs text-muted-foreground">{achievement.date}</p>
                    )}

                    {/* Title */}
                    <h3 className={`${achievement.image ? "" : "mt-5"} text-xl font-bold transition-colors group-hover:text-primary`}>
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
