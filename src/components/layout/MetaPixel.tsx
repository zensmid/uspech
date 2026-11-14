import { metaPixelId } from "@/lib/meta-config";
import { MetaTracker } from "@/components/layout/MetaTracker";

/** Respaldo noscript del Pixel + rastreador de navegación y clics (el snippet vive en layout.tsx). */
export function MetaPixel() {
  return (
    <>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
      <MetaTracker />
    </>
  );
}
