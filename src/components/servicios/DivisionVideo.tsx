import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";

export function DivisionVideo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Video"
          title="Nuestras activaciones en movimiento"
          align="center"
        />
        <FadeIn delay={0.1} className="mt-10 overflow-hidden rounded-2xl bg-ink">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={src}
            aria-label={alt}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
