import Image from "next/image";
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
  const hasRoles = experience.roles && experience.roles.length > 0;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative flex gap-6 pb-10 last:pb-0">
        {/* Line */}
        <div className="flex flex-col items-center">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-primary/40 bg-background shadow-lg shadow-primary/5 transition-colors">
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={experience.organization}
                fill
                className="object-cover"
                sizes="56px"
              />
            ) : (
              <Icon className="h-5 w-5 text-primary" />
            )}
          </div>
          <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-2 pt-1">
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

          {/* Sub-roles */}
          {hasRoles && (
            <div className="mt-4 space-y-3 border-l-2 border-primary/20 pl-4">
              {experience.roles!.map((role) => (
                <div key={role.title} className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full border-2 border-primary bg-background" />
                  <p className="text-xs font-medium text-primary">{role.period}</p>
                  <h4 className="mt-0.5 text-sm font-semibold text-foreground">
                    {role.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-secondary">
                    {role.description}
                  </p>
                  {role.skills && role.skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
