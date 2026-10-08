import Image from "next/image";
import type { Division } from "@/content/divisiones";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroCarousel } from "@/components/servicios/HeroCarousel";

export function DivisionHero({ division }: { division: Division }) {
  const mensajeWhatsapp = `Hola, vengo de la página de ${division.nombre} y quiero más información.`;

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink text-base">
      {division.heroCarousel && division.heroCarousel.length > 1 ? (
        <HeroCarousel slides={division.heroCarousel} />
      ) : division.heroImage ? (
        <Image
          src={division.heroImage}
          alt={division.heroAlt ?? division.nombre}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,var(--color-accent)_38%,var(--color-accent)_42%,transparent_42%,transparent_100%),repeating-linear-gradient(90deg,rgb(255_255_255/0.06)_0px,rgb(255_255_255/0.06)_1px,transparent_1px,transparent_64px),repeating-linear-gradient(0deg,rgb(255_255_255/0.06)_0px,rgb(255_255_255/0.06)_1px,transparent_1px,transparent_64px)]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <Container className="relative z-10 py-16">
        <FadeIn>
          {division.logo ? (
            <div className="relative mb-6 inline-block h-16 w-56 rounded-xl bg-base p-3">
              <Image
                src={division.logo}
                alt={`Logo de ${division.nombre}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Uspech — {division.nombre}
            </p>
          )}
          <h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            {division.resumen}
          </h1>
          <p className="mt-4 max-w-xl text-base text-base/80 sm:text-lg">
            {division.descripcionCorta}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contacto">Agenda una llamada</Button>
            <Button
              href={`https://wa.me/525579062460?text=${encodeURIComponent(
                mensajeWhatsapp
              )}`}
              variant="ghost"
              target="_blank"
              className="border-base/30 text-base hover:border-base"
            >
              Escríbenos por WhatsApp
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
