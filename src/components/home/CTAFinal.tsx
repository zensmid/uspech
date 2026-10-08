import { ctaFinal } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTAFinal() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn className="rounded-3xl bg-accent px-8 py-14 text-center text-accent-ink sm:px-16">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            {ctaFinal.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent-ink/90">
            {ctaFinal.texto}
          </p>
          <Button href="/contacto" variant="secondary" className="mt-8">
            {ctaFinal.ctaPrincipal}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
