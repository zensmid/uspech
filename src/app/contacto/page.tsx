import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ContactoForm } from "@/components/contacto/ContactoForm";
import { whatsappNumero } from "@/content/home";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una llamada, escríbenos por WhatsApp o cuéntanos tu proyecto. Respondemos lo antes posible.",
};

const faqs = [
  {
    pregunta: "¿Cuánto tiempo toma un proyecto?",
    respuesta:
      "El tiempo ideal depende de la complejidad de cada proyecto, pero siempre nos adaptamos a la fecha que necesites.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Cada proyecto es distinto, así que te enviamos una cotización aproximada lo antes posible después de conocer tu idea.",
  },
  {
    pregunta: "¿Tienen casos de éxito?",
    respuesta:
      "Sí: 21 años de experiencia y más de 200 campañas exitosas respaldan nuestro trabajo. Puedes ver una muestra en nuestro portafolio.",
  },
  {
    pregunta: "¿Por qué elegir a Uspech?",
    respuesta:
      "Experiencia, profesionalismo e infraestructura propia: solucionamos cada proyecto de principio a fin, sin depender de proveedores externos.",
  },
];

export default function ContactoPage() {
  const mensajeWhatsapp =
    "Hola, vengo de la página de contacto de Uspech y quiero más información.";
  const whatsappHref = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Contacto"
            title="Cuéntanos tu proyecto"
            description="Completa el formulario, agenda una llamada o escríbenos por WhatsApp. Nuestro equipo comercial te responde lo antes posible."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
            <FadeIn>
              <ContactoForm />
            </FadeIn>

            <FadeIn delay={0.08} className="grid gap-6">
              <div className="rounded-2xl border border-dashed border-ink-line bg-base-raised p-6">
                <p className="text-sm font-semibold text-ink">
                  Agenda una llamada
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  Aquí vivirá el calendario para agendar directamente (Cal.com o
                  Calendly). Mientras se confirma la herramienta, escríbenos por
                  WhatsApp y coordinamos tu llamada.
                </p>
                <Button href={whatsappHref} target="_blank" className="mt-4">
                  Escríbenos por WhatsApp
                </Button>
              </div>

              <div className="rounded-2xl border border-ink-line p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Dirección y horario
                </p>
                <p className="mt-2 text-ink-faint">[PENDIENTE]</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Teléfono
                </p>
                <p className="mt-2 text-ink-faint">[PENDIENTE]</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-base-raised py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Antes de escribirnos"
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-8">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.pregunta} delay={index * 0.05}>
                <h3 className="font-display text-lg uppercase">{faq.pregunta}</h3>
                <p className="mt-2 text-ink-soft">{faq.respuesta}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
