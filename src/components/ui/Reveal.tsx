"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/** Revela el contenido como una cortina que baja (clip-path) al entrar en pantalla. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0 round 16px)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0 round 16px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
