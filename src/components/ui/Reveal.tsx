"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Revela el contenido como una cortina que baja (clip-path) al entrar en pantalla.
 * El estado inicial deja 0.1% visible a propósito: Chromium (Android/escritorio)
 * calcula IntersectionObserver con el clip-path, así que un recorte del 100% deja el
 * elemento sin área visible y ni `whileInView` ni el `loading="lazy"` de las imágenes
 * internas se disparan jamás. Safari no lo tiene en cuenta, por eso en iPhone sí cargaba.
 */
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
      data-reveal
      className={className}
      initial={{ clipPath: "inset(0 0 99.9% 0 round 16px)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0 round 16px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
