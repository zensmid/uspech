import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { DownloadCard } from "@/components/catalogo/DownloadCard";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Descarga el catálogo de artículos promocionales CEAL y el brochure general de Uspech.",
};

const descargas = [
  {
    titulo: "Catálogo CEAL",
    descripcion:
      "Artículos promocionales y regalos corporativos: USB, termos, vasos y más, listos para personalizar con tu marca.",
    expectedPath: "/assets/pdf/catalogo-ceal.pdf",
    disponible: true,
  },
  {
    titulo: "Brochure Uspech",
    descripcion:
      "Quiénes somos, nuestras divisiones e infraestructura propia, en un solo documento.",
    expectedPath: "/assets/pdf/brochure-uspech.pdf",
    disponible: false,
  },
];

export default function CatalogoPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Descarga nuestro material"
          description="Consulta el catálogo de CEAL o descarga el brochure general de Uspech."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {descargas.map((item, index) => (
            <FadeIn key={item.titulo} delay={index * 0.05}>
              <DownloadCard {...item} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
