"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra roja fija arriba que avanza con el scroll de la página. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
