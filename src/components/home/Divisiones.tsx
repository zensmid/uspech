import Link from "next/link";
import { divisiones } from "@/content/divisiones";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function Divisiones() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Nuestras divisiones"
          title="Todo lo que tu marca necesita, bajo un mismo techo"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {divisiones.map((division, index) => (
            <FadeIn key={division.slug} delay={index * 0.05}>
              <Link
                href={`/servicios/${division.slug}`}
                className="group block rounded-2xl border border-ink-line p-6 transition hover:border-ink"
              >
                {division.cardImage ? (
                  <PhotoTile
                    src={division.cardImage}
                    alt={division.cardImageAlt ?? division.nombre}
                    aspect="aspect-[16/7]"
                  />
                ) : division.logo ? (
                  <PhotoTile
                    src={division.logo}
                    alt={`Logo de ${division.nombre}`}
                    aspect="aspect-[16/7]"
                    fit="contain"
                  />
                ) : (
                  <ImagePlaceholder
                    expectedPath={`/assets/divisiones/${division.slug}-logo.svg`}
                    label={division.nombre}
                    aspect="aspect-[16/7]"
                  />
                )}
                <p className="mt-4 text-base text-ink-soft">{division.resumen}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:underline">
                  Ver división →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
