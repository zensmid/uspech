"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Marca giratoria decorativa en SVG puro: un anillo punteado con el
 * isotipo "U" al centro, muy sutil, pensado como textura de fondo.
 */
export function SpinningMark({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none ${className}`}
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={
        reduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }
      }
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 10"
      />
      <circle
        cx="100"
        cy="100"
        r="72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M66 60v52a34 34 0 0 0 68 0V60"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
