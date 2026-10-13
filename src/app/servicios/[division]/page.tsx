import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { divisiones } from "@/content/divisiones";
import { DivisionHero } from "@/components/servicios/DivisionHero";
import { DivisionGaleria } from "@/components/servicios/DivisionGaleria";
import { DivisionDescargas } from "@/components/servicios/DivisionDescargas";
import { DivisionVideo } from "@/components/servicios/DivisionVideo";
import { DivisionPorQueUspech } from "@/components/servicios/DivisionPorQueUspech";
import { Marquee } from "@/components/ui/Marquee";
import { CTAFinal } from "@/components/home/CTAFinal";

export function generateStaticParams() {
  return divisiones.map((division) => ({ division: division.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ division: string }>;
}): Promise<Metadata> {
  const { division: slug } = await params;
  const division = divisiones.find((d) => d.slug === slug);
  if (!division) return {};
  return {
    title: division.nombre,
    description: division.descripcionCorta,
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ division: string }>;
}) {
  const { division: slug } = await params;
  const division = divisiones.find((d) => d.slug === slug);
  if (!division) notFound();

  return (
    <>
      <DivisionHero division={division} />
      <section className="overflow-hidden border-b border-ink bg-ink py-4 text-base">
        <Marquee duration={30}>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-display text-5xl uppercase leading-none sm:text-7xl">
                {division.nombre}
              </span>
              <span className="text-3xl text-accent">✦</span>
            </span>
          ))}
        </Marquee>
      </section>
      <DivisionPorQueUspech />
      {division.galeria ? <DivisionGaleria items={division.galeria} /> : null}
      {division.descargas ? <DivisionDescargas items={division.descargas} /> : null}
      {division.video ? (
        <DivisionVideo src={division.video.src} alt={division.video.alt} />
      ) : null}
      <CTAFinal />
    </>
  );
}
