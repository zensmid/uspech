"use client";

import { useEffect } from "react";

/** Avisa que el JavaScript ya hidrató la página (ver respaldo en layout.tsx). */
export function HydrationFlag() {
  useEffect(() => {
    document.documentElement.dataset.hydrated = "1";
    document.documentElement.classList.remove("no-hydrate");
  }, []);
  return null;
}
