"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

/** Preguntas frecuentes en acordeón con altura animada. */
export function Faqs({ items }: { items: { pregunta: string; respuesta: string }[] }) {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink-line border-y border-ink-line">
      {items.map((faq, i) => {
        const open = abierta === i;
        return (
          <FadeIn key={faq.pregunta} delay={i * 0.05}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setAbierta(open ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-display text-lg uppercase transition-colors group-hover:text-accent">
                {faq.pregunta}
              </span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xl leading-none text-accent-ink"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-ink-soft">{faq.respuesta}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </FadeIn>
        );
      })}
    </div>
  );
}
