"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cadenaProduccion } from "@/content/home";
import { Container } from "@/components/ui/Container";

const { pasos } = cadenaProduccion;
const N = pasos.length;

/** Trazos (viewBox 48×48) de cada estación; se "dibujan" al activarse. */
const iconos: string[][] = [
  ["M24 6a12 12 0 0 0-7 21.8V33h14v-5.2A12 12 0 0 0 24 6Z", "M18 38h12", "M20 42h8"],
  ["M8 38C14 8 34 8 40 38", "M5 35h6v6H5z", "M37 35h6v6h-6z"],
  ["M14 18V8h20v10", "M14 34H8V18h32v16h-6", "M14 28h20v14H14z", "M18 34h12"],
  ["M16 6h16v10H16z", "M20 16v18l4 8 4-8V16", "M10 44h28"],
  ["M8 12h22v10H8z", "M19 22v22", "M30 14l10-4"],
  ["M6 42h36", "M10 42V16h28v26", "M6 16h36l-4-8H10z", "M20 42V28h8v14"],
];

function Icono({ i, a }: { i: number; a: MotionValue<number> }) {
  const stroke = useTransform(a, [0, 1], ["#121212", "#ffffff"]);
  const opacity = useTransform(a, [0, 0.05], [0, 1]);
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      {iconos[i].map((d) => (
        <motion.path
          key={d}
          d={d}
          style={{ pathLength: a, stroke, opacity }}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function Burbuja({ i, a }: { i: number; a: MotionValue<number> }) {
  const bg = useTransform(a, [0, 1], ["#faf9f6", "#da0100"]);
  const scale = useTransform(a, [0, 0.6, 1], [0.85, 1.15, 1]);
  return (
    <motion.div
      style={{ backgroundColor: bg, scale }}
      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink"
    >
      <Icono i={i} a={a} />
    </motion.div>
  );
}

/** Estación de la vista de escritorio: se activa según el progreso global. */
function Estacion({ i, p }: { i: number; p: MotionValue<number> }) {
  const at = i / (N - 1);
  const a = useTransform(p, [at - 0.5 / (N - 1), at], [0, 1], { clamp: true });
  const opacity = useTransform(a, [0, 1], [0.35, 1]);
  const y = useTransform(a, [0, 1], [8, 0]);
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Burbuja i={i} a={a} />
      <motion.p
        style={{ opacity, y }}
        className="font-display text-lg uppercase leading-tight"
      >
        <span className="mr-1 text-accent">0{i + 1}</span>
        {pasos[i].titulo}
      </motion.p>
    </div>
  );
}

function VistaEscritorio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });
  const [actual, setActual] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActual(Math.min(N - 1, Math.round(v * (N - 1))))
  );

  const margen = 50 / N; // % para centrar la pista en la primera/última estación
  const pieza = useTransform(p, (v) => `${margen + v * (100 - margen * 2)}%`);
  const giro = useTransform(p, [0, 1], [0, 720]);

  return (
    <div ref={ref} className="relative hidden h-[480vh] lg:block">
      <div className="sticky top-[90px] flex h-[calc(100vh-90px)] flex-col justify-center">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {cadenaProduccion.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl uppercase leading-[1.05]">
            {cadenaProduccion.titulo}
          </h2>

          {/* Banda transportadora */}
          <div className="relative mt-16">
            <div
              className="absolute top-10 h-1 -translate-y-1/2 rounded-full bg-ink-line"
              style={{ left: `${margen}%`, right: `${margen}%` }}
            />
            <motion.div
              className="absolute top-10 h-1 origin-left -translate-y-1/2 rounded-full bg-accent"
              style={{ left: `${margen}%`, right: `${margen}%`, scaleX: p }}
            />
            <motion.div
              className="absolute top-10 z-20 -ml-3 -mt-7 h-6 w-6 rounded-md bg-ink shadow-lg"
              style={{ left: pieza, rotate: giro }}
            >
              <span className="absolute inset-1 rounded-sm border border-white/60" />
            </motion.div>

            <div
              className="relative grid"
              style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}
            >
              {pasos.map((_, i) => (
                <Estacion key={i} i={i} p={p} />
              ))}
            </div>
          </div>

          {/* Detalle del paso actual */}
          <div className="relative mt-14 h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={actual}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex items-start gap-8"
              >
                <span className="font-display text-8xl leading-none text-outline">
                  0{actual + 1}
                </span>
                <div className="max-w-xl pt-2">
                  <h3 className="font-display text-3xl uppercase">
                    {pasos[actual].titulo}
                  </h3>
                  <p className="mt-2 text-lg text-ink-soft">{pasos[actual].texto}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </div>
  );
}

function PasoMovil({ i }: { i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 55%"],
  });
  const a = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <li ref={ref} className="relative flex gap-5 pb-10 last:pb-0">
      <Burbuja i={i} a={a} />
      <div className="pt-2">
        <h3 className="font-display text-2xl uppercase">
          <span className="mr-2 text-accent">0{i + 1}</span>
          {pasos[i].titulo}
        </h3>
        <p className="mt-1 text-ink-soft">{pasos[i].texto}</p>
      </div>
    </li>
  );
}

function VistaMovil() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  return (
    <Container className="py-16 lg:hidden">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {cadenaProduccion.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl uppercase leading-tight sm:text-4xl">
        {cadenaProduccion.titulo}
      </h2>
      <div className="relative mt-10">
        <div className="absolute bottom-10 left-10 top-10 w-1 -translate-x-1/2 bg-ink-line" />
        <motion.div
          className="absolute bottom-10 left-10 top-10 w-1 origin-top -translate-x-1/2 bg-accent"
          style={{ scaleY }}
        />
        <ol ref={ref} className="relative">
          {pasos.map((_, i) => (
            <PasoMovil key={i} i={i} />
          ))}
        </ol>
      </div>
    </Container>
  );
}

export function CadenaProduccion() {
  return (
    <section className="bg-base-raised" aria-label={cadenaProduccion.eyebrow}>
      <VistaEscritorio />
      <VistaMovil />
    </section>
  );
}
