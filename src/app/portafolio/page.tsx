import type { Metadata } from "next";
import { proyectos } from "@/content/portafolio";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortafolioCard } from "@/components/portafolio/PortafolioCard";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos reales de BTL y eventos, Fasterprint y CEAL producidos por Uspech en toda la República.",
};

export default function PortafolioPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos que hablan por nosotros"
          description="Una muestra de activaciones, impresión de gran formato y artículos promocionales que hemos producido de principio a fin."
        />
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto, index) => (
            <PortafolioCard
              key={proyecto.slug}
              proyecto={proyecto}
              delay={(index % 6) * 0.04}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
