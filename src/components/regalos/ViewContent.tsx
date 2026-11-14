"use client";

import { useEffect } from "react";
import { trackMeta } from "@/lib/meta";

/** ViewContent (Pixel + CAPI) al cargar la landing. */
export function ViewContent() {
  useEffect(() => {
    trackMeta("ViewContent", {
      content_name: "Regalos corporativos",
      content_category: "CEAL",
    });
  }, []);
  return null;
}
