import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { proyectos } from "@/content/portafolio";
import { divisiones } from "@/content/divisiones";
import { whatsappNumero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PortafolioCard } from "@/components/portafolio/PortafolioCard";

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) return {};
  return {
    title: proyecto.cliente
      ? `${proyecto.cliente} — ${proyecto.titulo}`
      : proyecto.titulo,
    description: proyecto.queSeHizo,
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) notFound();

  const division = divisiones.find((d) => d.slug === proyecto.divisionSlug);
  const relacionados = proyectos
    .filter(
      (p) => p.divisionSlug === proyecto.divisionSlug && p.slug !== proyecto.slug
    )
    .slice(0, 3);

  const mensajeWhatsapp = `Hola, vi el proyecto "${proyecto.titulo}" en el portafolio de Uspech y quiero más información.`;
  const whatsappHref = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink text-base">
        <Image
          src={proyecto.imagen.src}
          alt={proyecto.imagen.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

        <Container className="relative z-10 py-16">
          <FadeIn>
            {division ? (
              <Link
                href={`/servicios/${division.slug}`}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-accent hover:underline"
              >
                {division.nombre}
              </Link>
            ) : null}
            <h1 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
              {proyecto.cliente ? `${proyecto.cliente} — ` : ""}
              {proyecto.titulo}
            </h1>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-xl uppercase text-accent">
              Qué se hizo
            </h2>
            <p className="mt-3 text-base text-ink-soft sm:text-lg">
              {proyecto.queSeHizo}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-xl uppercase text-accent">
              Resultado
            </h2>
            <p className="mt-3 text-base text-ink-soft sm:text-lg">
              {proyecto.resultado}
            </p>
          </FadeIn>
        </Container>

        <Container className="mt-10">
          <FadeIn delay={0.12} className="flex flex-wrap gap-4">
            <Button href="/contacto">Agenda una llamada</Button>
            <Button href={whatsappHref} variant="ghost" target="_blank">
              Escríbenos por WhatsApp
            </Button>
          </FadeIn>
        </Container>
      </section>

      {relacionados.length ? (
        <section className="bg-base-raised py-16 sm:py-24">
          <Container>
            <SectionTitle
              eyebrow={division?.nombre ?? "Portafolio"}
              title="Más proyectos de esta división"
            />
            <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p, index) => (
                <PortafolioCard key={p.slug} proyecto={p} delay={index * 0.05} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
