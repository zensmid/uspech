import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";
import { FloatingShape } from "@/components/ui/FloatingShape";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <FloatingShape
        src="/assets/decorativo/hero-flow.jpg"
        className="-right-24 -top-24 hidden h-[560px] w-[760px] opacity-60 mix-blend-multiply md:block lg:-right-32 lg:-top-16"
      />
      <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.subtitulo}
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[1.05] sm:text-6xl md:text-7xl">
            {hero.slogan}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contacto">{hero.ctaPrincipal}</Button>
            <Button
              href={`https://wa.me/525579062460?text=${encodeURIComponent(
                hero.mensajeWhatsapp
              )}`}
              variant="ghost"
              target="_blank"
            >
              {hero.ctaSecundario}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="grid grid-cols-2 gap-4">
          <PhotoTile
            src="/assets/portafolio/farmatodo-maraton-cdmx.jpg"
            alt="Stand de Farmatodo con promotoras en el maratón de la Ciudad de México"
            caption="Farmatodo — Maratón CDMX"
            aspect="aspect-[3/4]"
            className="col-span-1"
            priority
          />
          <div className="col-span-1 grid gap-4">
            <PhotoTile
              src="/assets/portafolio/medtronic-stand.jpg"
              alt="Stand de Medtronic en ExpoMED"
              caption="Medtronic"
              aspect="aspect-square"
            />
            <PhotoTile
              src="/assets/portafolio/icyhot-mi-reto-soy-yo.jpg"
              alt="Unidad móvil de IcyHot, activación &ldquo;Mi Reto Soy Yo&rdquo;"
              caption="IcyHot — Mi Reto Soy Yo"
              aspect="aspect-square"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
