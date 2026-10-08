import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const proyectosDestacados = [
  {
    src: "/assets/portafolio/ducati-launch-2016.jpg",
    alt: "Lanzamiento de producto Ducati México en escenario",
    caption: "Ducati México — Lanzamiento",
  },
  {
    src: "/assets/portafolio/cemefi-gala-2018.jpg",
    alt: "Escenario para la gala Cemefi 2018",
    caption: "Cemefi — Gala de reconocimiento",
  },
  {
    src: "/assets/portafolio/medtronic-booth.jpg",
    alt: "Stand de exhibición para Medtronic en ExpoMED",
    caption: "Medtronic — ExpoMED",
  },
  {
    src: "/assets/portafolio/meisa-stand.jpg",
    alt: "Stand de exhibición para MEISA",
    caption: "MEISA — Stand de exhibición",
  },
  {
    src: "/assets/portafolio/tapvs-stand-cnc.jpg",
    alt: "Stand construido en carpintería y CNC para TAPVS",
    caption: "TAPVS — Stand a medida",
  },
  {
    src: "/assets/portafolio/7eleven-vasos-ceal.jpg",
    alt: "Vasos promocionales personalizados para 7-Eleven",
    caption: "7-Eleven — Artículos promocionales",
  },
];

export function PortafolioDestacado() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Portafolio"
            title="Proyectos que hablan por nosotros"
          />
          <Button href="/portafolio" variant="ghost">
            Ver todo el portafolio
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosDestacados.map((proyecto, index) => (
            <FadeIn key={proyecto.src} delay={index * 0.04}>
              <PhotoTile
                src={proyecto.src}
                alt={proyecto.alt}
                caption={proyecto.caption}
                aspect="aspect-[4/5]"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
