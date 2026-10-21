"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Division } from "@/content/divisiones";

export function ServiciosDropdown({ divisiones }: { divisiones: Division[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="servicios-menu"
        onClick={() => setOpen((v) => !v)}
        className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
      >
        Servicios
      </button>
      <div
        id="servicios-menu"
        className={`absolute left-0 top-full flex w-64 flex-col gap-1 rounded-xl border border-ink-line bg-base p-2 shadow-lg transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {divisiones.map((division) => (
          <Link
            key={division.slug}
            href={`/servicios/${division.slug}`}
            className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-base-raised hover:text-ink"
          >
            {division.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}
