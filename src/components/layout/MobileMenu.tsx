"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { divisiones } from "@/content/divisiones";
import { buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";

const navLinks = [
  { href: "/portafolio", label: "Portafolio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

const MobileMenuContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMobileMenu() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used inside MobileMenuProvider");
  return ctx;
}

export function MobileMenuButton() {
  const { open, setOpen } = useMobileMenu();

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      onClick={() => setOpen(!open)}
      className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-base-raised lg:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
      </svg>
    </button>
  );
}

export function MobileMenuPanel() {
  const { open, setOpen } = useMobileMenu();
  const [serviciosOpen, setServiciosOpen] = useState(false);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      className="absolute inset-x-0 top-full z-30 max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink-line bg-base lg:hidden"
    >
      <nav className="flex flex-col gap-1 px-6 py-6">
        <button
          type="button"
          aria-expanded={serviciosOpen}
          aria-controls="mobile-servicios"
          onClick={() => setServiciosOpen((v) => !v)}
          className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-ink"
        >
          Servicios
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
              serviciosOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {serviciosOpen && (
          <div id="mobile-servicios" className="flex flex-col gap-1 pl-3">
            {divisiones.map((division) => (
              <Link
                key={division.slug}
                href={`/servicios/${division.slug}`}
                className="rounded-lg px-3 py-3 text-sm text-ink-soft hover:bg-base-raised hover:text-ink"
              >
                {division.nombre}
              </Link>
            ))}
          </div>
        )}

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-base-raised"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contacto"
          onClick={() => setOpen(false)}
          className={`${buttonBaseClasses} ${buttonVariantClasses.primary} mt-4 w-full`}
        >
          Agenda una llamada
        </Link>
      </nav>
    </div>
  );
}
