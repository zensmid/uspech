"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Proyecto } from "@/content/portafolio";
import { divisiones } from "@/content/divisiones";
import { PortafolioCard } from "@/components/portafolio/PortafolioCard";

/** Cuadrícula con filtro por división; las tarjetas se reacomodan animadas. */
export function PortafolioGrid({ proyectos }: { proyectos: Proyecto[] }) {
  const [filtro, setFiltro] = useState<string>("todos");
  const opciones = divisiones.filter((d) =>
    proyectos.some((p) => p.divisionSlug === d.slug)
  );
  const visibles =
    filtro === "todos" ? proyectos : proyectos.filter((p) => p.divisionSlug === filtro);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {[{ slug: "todos", nombre: "Todos" }, ...opciones].map((o) => (
          <button
            key={o.slug}
            type="button"
            onClick={() => setFiltro(o.slug)}
            className="relative rounded-full border border-ink-line px-5 py-2 text-sm font-semibold transition-colors hover:border-ink"
          >
            {filtro === o.slug ? (
              <motion.span
                layoutId="filtro-activo"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className={`relative ${filtro === o.slug ? "text-accent-ink" : ""}`}>
              {o.nombre}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visibles.map((proyecto, index) => (
            <motion.div
              key={proyecto.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <PortafolioCard proyecto={proyecto} delay={(index % 6) * 0.04} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
