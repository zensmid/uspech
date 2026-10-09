import Link from "next/link";
import Image from "next/image";
import { divisiones } from "@/content/divisiones";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-line bg-ink text-base">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src="/assets/logo/uspech-logo-2022.png"
              alt="Uspech"
              width={140}
              height={58}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-3 text-sm text-base/70">
            Agencia de Publicidad 360° CDMX-Mérida Yucatán.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base/60">
            Divisiones
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {divisiones.map((division) => (
              <li key={division.slug}>
                <Link
                  href={`/servicios/${division.slug}`}
                  className="text-base/80 hover:text-base"
                >
                  {division.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base/60">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-base/80">
            <li>
              <Link href="/contacto" className="hover:text-base">
                Formulario de contacto
              </Link>
            </li>
            <li className="text-base/50">
              CDMX: Salaverry 1208, Zacatenco
              <br />
              Mérida: Calle 67 #334478, Dzitya
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base/60">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/aviso-de-privacidad" className="text-base/80 hover:text-base">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-6">
        <p className="text-xs text-base/50">
          © Uspech. Creando ideas para tus sentidos.
        </p>
      </Container>
    </footer>
  );
}
