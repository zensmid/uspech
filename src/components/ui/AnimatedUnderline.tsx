"use client";

import { motion } from "framer-motion";

export function AnimatedUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 8"
      className={`h-2 w-16 overflow-visible ${className}`}
    >
      <motion.path
        d="M2 5.5C14 2 24 2 32 4.5C40 7 50 7 62 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      />
    </svg>
  );
}
