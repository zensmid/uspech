import { numeros } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";

export function Numeros() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 border-y border-ink-line py-10 sm:grid-cols-5">
          {numeros.map((item, index) => (
            <FadeIn key={item.etiqueta} delay={index * 0.05} className="text-center">
              <p className="font-display text-3xl text-accent sm:text-4xl">
                <AnimatedCounter value={item.valor} sufijo={item.sufijo} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft sm:text-sm">
                {item.etiqueta}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
