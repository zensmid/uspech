import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="pt-10 sm:pt-16">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
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
            src="/assets/portafolio/7eleven-mundial-2018.jpg"
            alt="Activación 7-Eleven, Mundial Rusia 2018"
            caption="7-Eleven — Mundial 2018"
            aspect="aspect-[3/4]"
            className="col-span-1"
            priority
          />
          <div className="col-span-1 grid gap-4">
            <PhotoTile
              src="/assets/infraestructura/printer-flatbed.jpg"
              alt="Impresora de gran formato Üspech en el taller de Fasterprint"
              aspect="aspect-square"
            />
            <PhotoTile
              src="/assets/portafolio/farmatodo-maraton.jpg"
              alt="Activación Farmatodo en maratón"
              caption="Farmatodo"
              aspect="aspect-square"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
