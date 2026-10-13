import { marqueeServicios } from "@/content/home";
import { Marquee } from "@/components/ui/Marquee";

function Fila({ items, outline }: { items: string[]; outline?: boolean }) {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span
            className={`px-6 font-display text-4xl uppercase leading-none sm:text-6xl ${
              outline ? "text-outline" : ""
            }`}
          >
            {item}
          </span>
          <span className="text-2xl text-accent sm:text-4xl">✦</span>
        </span>
      ))}
    </>
  );
}

/** Dos bandas de texto gigantes en sentidos opuestos, ligeramente inclinadas. */
export function BandaMarquee() {
  return (
    <section
      className="relative -rotate-1 overflow-hidden border-y border-ink bg-base py-4"
      aria-label="Servicios de Uspech"
    >
      <Marquee duration={40}>
        <Fila items={marqueeServicios} />
      </Marquee>
      <Marquee duration={50} reverse className="mt-2">
        <Fila items={[...marqueeServicios].reverse()} outline />
      </Marquee>
    </section>
  );
}
