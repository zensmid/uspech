import { clientesDestacados } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";

export function Clientes() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Confían en nosotros"
          title="+350 clientes en toda la República"
          align="center"
        />

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {clientesDestacados.map((cliente) => (
            <span
              key={cliente}
              className="rounded-full border border-ink-line px-4 py-2 text-sm text-ink-soft"
            >
              {cliente}
            </span>
          ))}
        </FadeIn>
        <p className="mt-6 text-center text-xs text-ink-faint">
          Logos reales en alta resolución: [PENDIENTE] — ver ASSETS.md
        </p>
      </Container>
    </section>
  );
}
