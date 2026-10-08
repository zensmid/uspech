import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { divisiones } from "@/content/divisiones";
import { DivisionHero } from "@/components/servicios/DivisionHero";
import { DivisionGaleria } from "@/components/servicios/DivisionGaleria";
import { DivisionVideo } from "@/components/servicios/DivisionVideo";
import { DivisionPorQueUspech } from "@/components/servicios/DivisionPorQueUspech";
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
      <DivisionPorQueUspech />
      {division.galeria ? <DivisionGaleria items={division.galeria} /> : null}
      {division.video ? (
        <DivisionVideo src={division.video.src} alt={division.video.alt} />
      ) : null}
      <CTAFinal />
    </>
  );
}
