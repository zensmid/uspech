import type { Metadata } from "next";
import { proyectos } from "@/content/portafolio";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortafolioGrid } from "@/components/portafolio/PortafolioGrid";

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
        <PortafolioGrid proyectos={proyectos} />
      </Container>
    </section>
  );
}
