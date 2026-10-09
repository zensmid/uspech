import { clientesDestacados } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Blob } from "@/components/ui/Blob";

export function Clientes() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Blob
        color="rgb(218 1 0 / 0.28)"
        size={520}
        duration={17}
        moveX={50}
        moveY={40}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Container className="relative">
        <SectionTitle
          eyebrow="Confían en nosotros"
          title="+350 clientes en toda la República"
          align="center"
        />

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {clientesDestacados.map((cliente) => (
            <span
              key={cliente}
              className="rounded-full border border-ink-line px-4 py-2 text-sm text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-ink hover:shadow-md"
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
