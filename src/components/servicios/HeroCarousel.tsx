"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type CarouselSlide = { src: string; alt: string; caption?: string };

export function HeroCarousel({
  slides,
  intervalMs = 4500,
}: {
  slides: CarouselSlide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs, prefersReducedMotion]);

  const current = slides[index];

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={current.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Mostrar imagen: ${slide.caption ?? slide.alt}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-base" : "w-1.5 bg-base/40"
              }`}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
