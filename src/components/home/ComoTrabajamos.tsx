import { comoTrabajamos } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";

export function ComoTrabajamos() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow="Proceso" title="Cómo trabajamos" align="center" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comoTrabajamos.map((paso, index) => (
            <FadeIn key={paso.paso} delay={index * 0.05}>
              <div className="rounded-2xl border border-ink-line p-6">
                <span className="font-display text-3xl text-accent">
                  {String(paso.paso).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-semibold">{paso.titulo}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
