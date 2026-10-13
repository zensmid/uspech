import { type ReactNode } from "react";

/**
 * Banda de texto/elementos que corre infinitamente en CSS puro (sin JS).
 * El contenido se duplica para que el bucle sea continuo.
 */
export function Marquee({
  children,
  reverse = false,
  duration = 30,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`flex overflow-hidden ${className}`} aria-hidden="true">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="marquee-track flex shrink-0 items-center"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
