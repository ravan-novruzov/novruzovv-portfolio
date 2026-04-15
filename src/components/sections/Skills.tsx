"use client";

import { Code, Layout, Database, Wrench, Shield } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  layout: Layout,
  database: Database,
  wrench: Wrench,
  shield: Shield,
};

export default function Skills() {
  return (
    <section id="yetenekler" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Yetenekler"
          subtitle="Çalıştığım teknolojiler ve ilgi alanlarım"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <ScrollReveal key={category.name} delay={catIndex * 0.08}>
                <div className="card-glow h-full rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 p-1.5">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
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
