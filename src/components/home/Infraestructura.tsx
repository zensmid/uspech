import { infraestructura } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function Infraestructura() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Infraestructura propia"
          title={infraestructura.titulo}
          description={infraestructura.texto}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {infraestructura.items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              {item.src ? (
                <PhotoTile
                  src={item.src}
                  alt={item.label}
                  caption={item.label}
                  aspect="aspect-square"
                />
              ) : (
                <ImagePlaceholder
                  expectedPath={`/assets/infraestructura/${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.jpg`}
                  label={item.label}
                  aspect="aspect-square"
                />
              )}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
