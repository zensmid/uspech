"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function FloatingShape({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      initial={{ opacity: 0 }}
      animate={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: [0, -18, 0], rotate: [0, 1.5, 0] }
      }
      transition={
        reduceMotion
          ? { duration: 0.8 }
          : {
              opacity: { duration: 1 },
              y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      <Image src={src} alt="" fill className="object-contain" />
    </motion.div>
  );
}
