import Link from "next/link";
import type { Proyecto } from "@/content/portafolio";
import { divisiones } from "@/content/divisiones";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function PortafolioCard({
  proyecto,
  delay = 0,
}: {
  proyecto: Proyecto;
  delay?: number;
}) {
  const division = divisiones.find((d) => d.slug === proyecto.divisionSlug);

  return (
    <FadeIn delay={delay}>
      <Link href={`/portafolio/${proyecto.slug}`} className="group block">
        <PhotoTile
          src={proyecto.imagen.src}
          alt={proyecto.imagen.alt}
          aspect="aspect-[4/5]"
          className="transition group-hover:opacity-90"
        />
        <div className="mt-4">
          {division ? (
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {division.nombre}
            </span>
          ) : null}
          <h3 className="mt-1 font-display text-lg uppercase leading-snug">
            {proyecto.cliente ? `${proyecto.cliente} — ` : ""}
            {proyecto.titulo}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-ink-soft">
            {proyecto.queSeHizo}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
