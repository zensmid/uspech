import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whatsappNumero } from "@/content/home";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Cómo Uspech recaba, usa y protege tus datos personales, y cómo ejercer tus derechos ARCO.",
};

const secciones = [
  {
    titulo: "Responsable de tus datos",
    texto: [
      "Uspech, Agencia de Publicidad 360°, con domicilios en Salaverry 1208, Zacatenco, Ciudad de México, y Calle 67 #334478, Dzitya, Mérida, Yucatán, es responsable del tratamiento de tus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
    ],
  },
  {
    titulo: "Datos que recabamos",
    texto: [
      "Cuando llenas el formulario de contacto te pedimos: nombre, empresa (opcional), correo electrónico, teléfono, descripción de tu proyecto, división de interés y fecha deseada (opcionales). No solicitamos datos personales sensibles, contraseñas ni datos de pago.",
    ],
  },
  {
    titulo: "Para qué usamos tus datos",
    texto: [
      "Usamos tus datos para responder tu solicitud, enviarte una cotización y dar seguimiento comercial al proyecto que nos describes. No los usamos para fines distintos ni los vendemos.",
    ],
  },
  {
    titulo: "Con quién los compartimos",
    texto: [
      "No transferimos tus datos a terceros, salvo a proveedores que nos prestan servicios técnicos necesarios para operar el sitio, como el envío de correos y el alojamiento web, quienes solo los tratan por cuenta nuestra. Podremos compartirlos cuando una autoridad competente lo requiera.",
    ],
  },
  {
    titulo: "Tus derechos ARCO",
    texto: [
      "Tienes derecho a Acceder a tus datos, Rectificarlos, Cancelarlos u Oponerte a su tratamiento, así como a revocar tu consentimiento. Para ejercerlos escríbenos desde el formulario de contacto o por WhatsApp, indicando tu nombre, el derecho que quieres ejercer y los datos a los que se refiere tu solicitud. Te responderemos en un plazo máximo de 20 días hábiles.",
    ],
  },
  {
    titulo: "Cambios a este aviso",
    texto: [
      "Podemos actualizar este aviso. Publicaremos la versión vigente en esta misma página, con su fecha de actualización.",
    ],
  },
];

export default function AvisoPrivacidadPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Legal"
          title="Aviso de privacidad"
          description="Última actualización: 5 de noviembre de 2026."
        />
        <div className="mt-10 max-w-3xl space-y-8">
          {secciones.map((s) => (
            <div key={s.titulo}>
              <h2 className="font-display text-xl uppercase">{s.titulo}</h2>
              {s.texto.map((parrafo) => (
                <p key={parrafo} className="mt-3 text-ink-soft">
                  {parrafo}
                </p>
              ))}
            </div>
          ))}
          <p className="text-ink-soft">
            Contacto:{" "}
            <a
              href={`https://wa.me/${whatsappNumero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              WhatsApp
            </a>{" "}
            o{" "}
            <Link href="/contacto" className="font-medium text-accent hover:underline">
              formulario de contacto
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
