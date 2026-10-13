import type { GaleriaItem } from "@/content/divisiones";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Tilt";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function DivisionGaleria({ items }: { items: GaleriaItem[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow="Trabajos recientes" title="Algunos proyectos" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.src ?? item.alt} delay={index * 0.04}>
              {item.src ? (
                <Tilt>
                  <Reveal delay={(index % 4) * 0.08}>
                    <PhotoTile
                      src={item.src}
                      alt={item.alt}
                      caption={item.caption}
                      aspect="aspect-[4/5]"
                    />
                  </Reveal>
                </Tilt>
              ) : (
                <ImagePlaceholder
                  expectedPath={`/assets/portafolio/${slugify(item.alt)}.jpg`}
                  label={item.caption ?? item.alt}
                  aspect="aspect-[4/5]"
                />
              )}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
