import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

export function DivisionDescargas({
  items,
}: {
  items: { titulo: string; descripcion: string; src: string; preview?: string }[];
}) {
  return (
    <section className="bg-base-raised py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Catálogos"
          title="Descarga nuestros catálogos"
          description="Material en PDF, listo para consultar y cotizar."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.src} delay={index * 0.03}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink-line bg-base p-6">
                <div>
                  {item.preview ? (
                    <PhotoTile
                      src={item.preview}
                      alt={`Vista previa del catálogo ${item.titulo}`}
                      aspect="aspect-[3/4]"
                      className="mb-4"
                    />
                  ) : null}
                  <h3 className="font-display text-lg uppercase">{item.titulo}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.descripcion}</p>
                </div>
                <Button href={item.src} target="_blank" variant="ghost">
                  Descargar PDF
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
