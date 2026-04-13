"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
