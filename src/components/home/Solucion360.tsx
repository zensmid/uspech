import { solucion360 } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";
import { Blob } from "@/components/ui/Blob";

export function Solucion360() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-base sm:py-24">
      <Blob
        color="rgb(218 1 0 / 0.9)"
        size={440}
        duration={12}
        moveX={80}
        moveY={60}
        className="-left-24 -top-24"
      />
      <Blob
        color="rgb(218 1 0 / 0.5)"
        size={300}
        duration={16}
        delay={1}
        moveX={-60}
        moveY={50}
        className="-bottom-16 right-10 hidden md:block"
      />
      <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionTitle
          eyebrow="Solución 360°"
          title={<span className="text-base">{solucion360.titulo}</span>}
          description={<span className="text-base/70">{solucion360.texto}</span>}
        />
        <FadeIn delay={0.1}>
          <PhotoTile
            src="/assets/infraestructura/solucion-360.jpg"
            alt="Ilustración de un taller integrado donde diseño, CNC, impresión, herrería, carpintería y montaje de stands ocurren bajo un mismo techo, conectados por un hilo de luz roja"
            aspect="aspect-[4/3]"
            className="bg-white/5"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
