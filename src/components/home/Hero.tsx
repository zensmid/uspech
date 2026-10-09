import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";
import { Blob } from "@/components/ui/Blob";
import { Parallax } from "@/components/ui/Parallax";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <Blob
        color="rgb(218 1 0 / 0.85)"
        size={520}
        duration={13}
        moveX={110}
        moveY={80}
        className="-right-20 -top-24 lg:right-0 lg:-top-16"
      />
      <Blob
        color="rgb(218 1 0 / 0.6)"
        size={300}
        duration={10}
        delay={0.6}
        moveX={-80}
        moveY={60}
        className="right-32 top-52 hidden md:block"
      />
      <Blob
        color="rgb(18 18 18 / 0.5)"
        size={260}
        duration={15}
        delay={0.3}
        moveX={70}
        moveY={-50}
        className="-left-16 top-4 hidden lg:block"
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
          <Parallax offset={24} className="col-span-1">
            <PhotoTile
              src="/assets/portafolio/farmatodo-maraton-cdmx.jpg"
              alt="Stand de Farmatodo con promotoras en el maratón de la Ciudad de México"
              caption="Farmatodo — Maratón CDMX"
              aspect="aspect-[3/4]"
              priority
            />
          </Parallax>
          <div className="col-span-1 grid gap-4">
            <Parallax offset={-18}>
              <PhotoTile
                src="/assets/portafolio/medtronic-stand.jpg"
                alt="Stand de Medtronic en ExpoMED"
                caption="Medtronic"
                aspect="aspect-square"
              />
            </Parallax>
            <Parallax offset={18}>
              <PhotoTile
                src="/assets/portafolio/icyhot-mi-reto-soy-yo.jpg"
                alt="Unidad móvil de IcyHot, activación &ldquo;Mi Reto Soy Yo&rdquo;"
                caption="IcyHot — Mi Reto Soy Yo"
                aspect="aspect-square"
              />
            </Parallax>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
