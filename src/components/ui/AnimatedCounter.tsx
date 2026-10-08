"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export function AnimatedCounter({
  value,
  prefijo = "",
  sufijo = "",
  duracion = 1.4,
}: {
  value: number;
  prefijo?: string;
  sufijo?: string;
  duracion?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: duracion, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value, duracion, count]);

  return (
    <span ref={ref}>
      {prefijo}
      <motion.span>{rounded}</motion.span>
      {sufijo}
    </span>
  );
}
