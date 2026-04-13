import { GraduationCap, Briefcase, Code, Users, ShieldCheck } from "lucide-react";
import type { Experience } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  project: Code,
  community: Users,
  security: ShieldCheck,
};

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const Icon = typeIcons[experience.type];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative flex gap-6 pb-10 last:pb-0">
        {/* Line */}
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background transition-colors">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border" />
        </div>

        {/* Content */}
        <div className="pb-2 pt-1">
          <p className="text-xs font-medium text-primary">{experience.period}</p>
          <h3 className="mt-1 text-lg font-semibold">{experience.title}</h3>
          <p className="text-sm text-muted-foreground">{experience.organization}</p>
          <p className="mt-2 text-sm leading-relaxed text-secondary">
            {experience.description}
          </p>
          {experience.skills && experience.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
