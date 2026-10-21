import Image from "next/image";
import Link from "next/link";
import { divisiones } from "@/content/divisiones";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  MobileMenuButton,
  MobileMenuPanel,
  MobileMenuProvider,
} from "@/components/layout/MobileMenu";
import { ServiciosDropdown } from "@/components/layout/ServiciosDropdown";

const navLinks = [
  { href: "/portafolio", label: "Portafolio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-base/90 backdrop-blur">
      <MobileMenuProvider>
        <Container className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          >
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
            <ServiciosDropdown divisiones={divisiones} />
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

          <div className="flex items-center gap-2">
            <Button href="/contacto" className="hidden lg:inline-flex">
              Agenda una llamada
            </Button>
            <MobileMenuButton />
          </div>
        </Container>
        <MobileMenuPanel />
      </MobileMenuProvider>
    </header>
  );
}
