"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pixelTrack, trackMeta } from "@/lib/meta";

/**
 * - PageView en navegaciones del lado del cliente (la primera carga ya la
 *   dispara el snippet del Pixel, por eso se omite).
 * - Contact en CADA clic a un enlace wa.me del sitio. El nombre sale de
 *   data-meta-name; si no lo tiene, usamos "whatsapp_<ruta>".
 */
export function MetaTracker() {
  const pathname = usePathname();
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    pixelTrack("PageView");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>(
        'a[href^="https://wa.me/"]'
      );
      if (!link) return;
      trackMeta("Contact", {
        content_name:
          link.dataset.metaName ?? `whatsapp_${window.location.pathname}`,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
