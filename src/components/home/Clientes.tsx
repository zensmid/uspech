import { clientesDestacados } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Marquee } from "@/components/ui/Marquee";
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
      </Container>
      <div className="relative mt-10 space-y-4">
        {[clientesDestacados, [...clientesDestacados].reverse()].map((fila, n) => (
          <Marquee key={n} reverse={n === 1} duration={45 + n * 10}>
            {fila.map((cliente) => (
              <span
                key={cliente}
                className="mx-2 whitespace-nowrap rounded-full border border-ink-line bg-base px-6 py-3 font-display text-xl uppercase"
              >
                {cliente}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
