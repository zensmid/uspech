"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Fade/slide de entrada al hacer scroll. Framer Motion ya respeta
 * `prefers-reduced-motion` a nivel de usuario cuando se usa `useReducedMotion`,
 * pero aquí además recortamos el desplazamiento para que sea sutil por defecto.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
