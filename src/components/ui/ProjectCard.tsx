"use client";

import { ExternalLink, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div
        className="card-glow group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        }}
      >
        <div className="mb-1 inline-flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Proje
          </span>
        </div>

        <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Challenge */}
        {project.challenge && (
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-3">
            <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-accent">
              <Lightbulb className="h-3.5 w-3.5" />
              Teknik Zorluk
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Canlı Demo
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
