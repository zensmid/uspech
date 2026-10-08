import { solucion360 } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/ui/FadeIn";

export function Solucion360() {
  return (
    <section className="bg-ink py-16 text-base sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionTitle
          eyebrow="Solución 360°"
          title={<span className="text-base">{solucion360.titulo}</span>}
          description={<span className="text-base/70">{solucion360.texto}</span>}
        />
        <FadeIn delay={0.1}>
          <ImagePlaceholder
            expectedPath="/assets/infraestructura/solucion-360.jpg"
            label="Proceso integrado"
            aspect="aspect-[4/3]"
            className="bg-white/5"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
