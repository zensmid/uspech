"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Oculta su contenido en las rutas indicadas (p. ej. header/footer en landings de campaña). */
export function RouteGate({
  hideOn,
  children,
}: {
  hideOn: string[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  return hideOn.includes(pathname) ? null : <>{children}</>;
}
