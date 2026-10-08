import Link from "next/link";
import { divisiones } from "@/content/divisiones";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-line bg-ink text-base">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl uppercase tracking-wide">Uspech</p>
          <p className="mt-3 text-sm text-base/70">
            Agencia de publicidad 360° con sede en Mérida, Yucatán. Servicio a
            toda la República.
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
              Dirección y horario: [PENDIENTE]
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
            <li className="text-base/50">Garantía: [PENDIENTE: términos exactos]</li>
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
