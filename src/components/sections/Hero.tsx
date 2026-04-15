"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Gradient orbs */}
      <div className="gradient-orb absolute -left-32 top-1/4 h-96 w-96 bg-primary" />
      <div className="gradient-orb absolute -right-32 bottom-1/4 h-80 w-80 bg-accent" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Yazılım & Ağ Mühendisliği
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-4 max-w-xl rounded-xl border border-border bg-card/60 p-5 text-left font-mono shadow-lg shadow-primary/5 backdrop-blur-sm sm:p-6"
        >
          {/* Terminal top bar */}
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              ~/portfolio — zsh
            </span>
          </div>

          {/* Prompt line */}
          <p className="text-sm text-muted-foreground sm:text-base">
            <span className="text-primary">$</span> whoami
          </p>

          {/* Name line */}
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="text-accent">{">"}</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ravan Novruzov
            </span>
            <span className="terminal-cursor ml-1 text-primary">_</span>
          </h1>

          {/* Role line */}
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            <span className="text-primary">$</span> echo $ROLE
          </p>
          <p className="text-base text-foreground sm:text-lg">
            Bilgisayar Mühendisliği Öğrencisi
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          Bulut bilişim, ağ güvenliği ve sistem mimarisi alanlarında
          tutkulu bir mühendis adayı. Karmaşık problemleri zarif
          çözümlere dönüştürmeyi seviyorum.
        </motion.p>

        {/* Achievement badges */}
        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <a
            href="#basarilar"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5"
          >
            <Trophy className="h-4 w-4 text-amber-500" />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold">
              2x Hackathon Ödüllü
            </span>
          </a>
          <a
            href="#deneyim"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Siber Güvenlik & Ağ Tutkunu
          </a>
        </motion.div>

        {/* Social links with prominent LinkedIn */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="text-sm">LinkedIn&apos;de Bağlan</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="mt-8">
          <a
            href="#projeler"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-hover px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Projelerimi Gör
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
