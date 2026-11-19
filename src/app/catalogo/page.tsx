import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Marquee } from "@/components/ui/Marquee";
import { catalogos } from "@/content/catalogos";
import { DownloadCard } from "@/components/catalogo/DownloadCard";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Descarga los catálogos de artículos promocionales y regalos corporativos CEAL.",
};

export default function CatalogoPage() {
  return (
    <>
    <section className="overflow-hidden border-b border-ink bg-ink py-4 text-base">
      <Marquee duration={30}>
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-5xl uppercase leading-none sm:text-7xl">
              Catálogos
            </span>
            <span className="text-3xl text-accent">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Descarga nuestro material"
          description="Consulta los catálogos de CEAL, listos para cotizar."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogos.map((item, index) => (
            <FadeIn key={item.titulo} delay={index * 0.05}>
              <DownloadCard
                titulo={item.titulo}
                descripcion={item.descripcion}
                expectedPath={item.src}
                preview={item.preview}
                disponible
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
}
