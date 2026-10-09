"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Mancha de gradiente animada (motion graphic puro, sin imagen): se
 * funde siempre a la perfección con el fondo porque es el mismo CSS,
 * no un raster con su propio color de fondo.
 */
export function Blob({
  className = "",
  color,
  size = 420,
  duration = 14,
  delay = 0,
  moveX = 70,
  moveY = 60,
  opacity = 1,
}: {
  className?: string;
  color: string;
  size?: number;
  duration?: number;
  delay?: number;
  moveX?: number;
  moveY?: number;
  opacity?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, ${color}, transparent 70%)`,
      }}
      initial={{ opacity: 0 }}
      animate={
        reduceMotion
          ? { opacity }
          : {
              opacity,
              x: [0, moveX, -moveX * 0.5, 0],
              y: [0, -moveY, moveY * 0.6, 0],
              scale: [1, 1.18, 0.92, 1],
            }
      }
      transition={
        reduceMotion
          ? { duration: 1 }
          : {
              opacity: { duration: 1.2, delay },
              x: { duration, delay, repeat: Infinity, ease: "easeInOut" },
              y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
              scale: { duration, delay, repeat: Infinity, ease: "easeInOut" },
            }
      }
    />
  );
}
