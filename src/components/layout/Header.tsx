import Image from "next/image";
import Link from "next/link";
import { divisiones } from "@/content/divisiones";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "/portafolio", label: "Portafolio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-base/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo/uspech-logo-2022.png"
            alt="Uspech — Agencia de Publicidad 360°"
            width={1797}
            height={747}
            priority
            className="h-[74px] w-auto sm:h-[90px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <button className="text-sm font-medium text-ink-soft hover:text-ink">
              Servicios
            </button>
            <div className="invisible absolute left-0 top-full flex w-64 flex-col gap-1 rounded-xl border border-ink-line bg-base p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {divisiones.map((division) => (
                <Link
                  key={division.slug}
                  href={`/servicios/${division.slug}`}
                  className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-base-raised hover:text-ink"
                >
                  {division.nombre}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/contacto" className="hidden sm:inline-flex">
          Agenda una llamada
        </Button>
      </Container>
    </header>
  );
}
