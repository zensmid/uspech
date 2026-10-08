import { numeros } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

export function DivisionPorQueUspech() {
  return (
    <section className="bg-base-raised py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Por qué Uspech"
          title="Infraestructura propia, 21 años de experiencia"
          description="Producimos todo internamente —sin depender de proveedores externos—, lo que se traduce en mejor calidad, tiempos más cortos y mejor costo para tu marca."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
          {numeros.map((item, index) => (
            <FadeIn key={item.etiqueta} delay={index * 0.05} className="text-center">
              <p className="font-display text-2xl text-accent sm:text-3xl">
                <AnimatedCounter value={item.valor} sufijo={item.sufijo} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft">
                {item.etiqueta}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
