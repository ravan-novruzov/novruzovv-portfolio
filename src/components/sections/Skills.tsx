"use client";

import { Code, Layout, Server, Database, Wrench, Shield, Network } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBar from "@/components/ui/SkillBadge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  network: Network,
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  shield: Shield,
};

export default function Skills() {
  return (
    <section id="yetenekler" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Yetenekler"
          subtitle="Kullandığım teknolojiler ve yetkinlik seviyelerim"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <ScrollReveal key={category.name} delay={catIndex * 0.1}>
                <div className="card-glow rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={idx}
                      />
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
