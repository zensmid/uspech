import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ViewContent } from "@/components/regalos/ViewContent";
import {
  beneficios,
  categorias,
  faqs,
  pasos,
  regalosConfig,
  regalosRuta,
  waLink,
} from "@/content/regalos";

const titulo = "Regalos Corporativos en Mérida con tu Logo | Uspech 360°";
const descripcion =
  "Más de 10,000 artículos promocionales con tu logo: termos, kits ejecutivos, vinos, power banks, agendas y mochilas. Entrega en Mérida y envíos a todo México. Pide el catálogo por WhatsApp.";

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: descripcion,
  alternates: { canonical: regalosRuta },
  openGraph: {
    title: titulo,
    description: descripcion,
    url: regalosRuta,
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/regalos/og-regalos-corporativos.jpg",
        width: 1200,
        height: 630,
        alt: "Regalos corporativos con tu logo — Uspech 360°",
      },
    ],
  },
};

const dots = {
  backgroundImage: "radial-gradient(rgb(0 0 0 / 0.14) 1.5px, transparent 1.5px)",
  backgroundSize: "18px 18px",
};

const card = "border-4 border-black bg-white shadow-[6px_6px_0_#000]";
const btn =
  "inline-flex w-full items-center justify-center gap-3 border-4 border-black bg-[#E30613] px-6 py-4 text-center font-display text-xl uppercase tracking-wide text-white shadow-[6px_6px_0_#000] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] sm:w-auto";

const WaIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
    <path d="M16.004 3C9.374 3 4 8.374 4 15.004c0 2.37.692 4.58 1.886 6.44L4 29l7.73-1.86a11.9 11.9 0 0 0 4.274.78h.003c6.63 0 12.004-5.374 12.004-12.004C28.01 8.374 22.636 3 16.004 3Zm5.6 14.46c-.306-.153-1.81-.893-2.09-.994-.28-.102-.485-.153-.69.153-.204.306-.79.994-.969 1.198-.178.204-.357.23-.663.077-.306-.153-1.292-.476-2.462-1.52-.91-.81-1.52-1.81-1.698-2.117-.179-.306-.02-.47.153-.638.153-.153.357-.4.536-.6.179-.2.238-.342.357-.571.119-.23.06-.42-.03-.571-.09-.153-.76-1.835-1.04-2.52-.28-.685-.56-.59-.77-.6-.2-.01-.433-.012-.663-.012-.23 0-.6.085-.918.42-.32.333-1.21 1.18-1.21 2.88 0 1.7 1.238 3.35 1.41 3.58.17.23 2.355 3.6 5.713 4.91 2.846 1.11 2.846.74 3.364.69.52-.05 1.68-.69 1.918-1.35.238-.665.238-1.23.166-1.35-.07-.12-.26-.19-.566-.34Z" />
  </svg>
);

const iconos: Record<(typeof beneficios)[number]["icono"], string> = {
  logo: "M4 20h16M6 16l6-12 6 12M8.5 12h7",
  precio: "M12 3v18M16 7.5C15 6.5 13.7 6 12 6c-2.2 0-4 1-4 3s1.8 2.6 4 3 4 1 4 3-1.8 3-4 3c-1.8 0-3.2-.6-4.2-1.7",
  envio: "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19.5a1.5 1.5 0 1 0 0-.01M17 19.5a1.5 1.5 0 1 0 0-.01",
  asesoria: "M4 5h16v11H9l-5 4zM8 9.5h8M8 12.5h5",
};

const existeImagen = (archivo: string) =>
  existsSync(join(process.cwd(), "public", "regalos", archivo));

export default function RegalosCorporativosPage() {
  const { fechaLimite, pedidoMinimoPiezas } = regalosConfig;
  const chico = [
    "Para empresas",
    pedidoMinimoPiezas ? `Pedido mínimo ${pedidoMinimoPiezas} piezas` : null,
    `Pedidos hasta el ${fechaLimite}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="bg-[#FFD21F] text-black" style={dots}>
      <ViewContent />

      <header className="px-4 pt-4">
        <Image
          src="/assets/logo/uspech-logo-2022.png"
          alt="Uspech 360° — Agencia de Publicidad"
          width={180}
          height={75}
          priority
          className="h-auto w-32 sm:w-40"
        />
      </header>

      {/* 1. Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-5 text-center sm:pt-10">
        <span className="inline-block -rotate-2 border-4 border-black bg-black px-3 py-1 font-display text-sm uppercase tracking-widest text-[#FFD21F]">
          Temporada diciembre
        </span>
        <h1 className="mt-4 font-display text-[3.4rem] uppercase leading-[0.95] sm:text-8xl">
          Regalos <span className="text-[#E30613]">corporativos</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg font-bold leading-snug sm:text-xl">
          Más de 10,000 artículos promocionales con tu logo
        </p>
        <a
          href={waLink(regalosConfig.mensajeGeneral)}
          target="_blank"
          rel="noopener noreferrer"
          data-meta-name="hero"
          className={`${btn} mt-6`}
        >
          <WaIcon /> Pide el catálogo por WhatsApp
        </a>
        <p className="mt-4 text-sm font-semibold">{chico}</p>
      </section>

      {/* 2. Categorías */}
      <section className="mx-auto max-w-5xl px-4 pb-14" aria-labelledby="cats">
        <h2 id="cats" className="mb-6 text-center font-display text-4xl uppercase sm:text-5xl">
          Elige tu regalo
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categorias.map((c) => (
            <li key={c.slug} className={`${card} flex flex-col`}>
              <div className="relative aspect-[3/2] border-b-4 border-black bg-[#f1efe9]">
                {existeImagen(c.imagen) ? (
                  <Image
                    src={`/regalos/${c.imagen}`}
                    alt={c.nombre}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 46vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center p-2 text-center font-display text-2xl uppercase text-black/30">
                    {c.nombre}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-3">
                <h3 className="font-display text-xl uppercase leading-tight">{c.nombre}</h3>
                <a
                  href={waLink(regalosConfig.mensajeCategoria(c.nombre))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-meta-name={`categoria_${c.slug}`}
                  className="mt-auto border-4 border-black bg-[#E30613] py-2 text-center font-display text-lg uppercase text-white active:translate-y-0.5"
                >
                  Cotizar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Beneficios */}
      <section className="mx-auto max-w-5xl px-4 pb-14" aria-labelledby="ben">
        <h2 id="ben" className="sr-only">Beneficios</h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {beneficios.map((b) => (
            <li key={b.icono} className={`${card} p-4 text-center`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E30613"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-10 w-10"
                aria-hidden="true"
              >
                <path d={iconos[b.icono]} />
              </svg>
              <p className="mt-3 text-sm font-bold leading-snug sm:text-base">{b.titulo}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Cómo funciona */}
      <section className="mx-auto max-w-3xl px-4 pb-14" aria-labelledby="como">
        <h2 id="como" className="mb-6 text-center font-display text-4xl uppercase sm:text-5xl">
          Cómo funciona
        </h2>
        <ol className="grid gap-4">
          {pasos.map((paso, i) => (
            <li key={paso} className={`${card} flex items-center gap-4 p-4`}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-4 border-black bg-[#E30613] font-display text-2xl text-white">
                {i + 1}
              </span>
              <p className="text-lg font-bold leading-snug">{paso}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Urgencia */}
      <section className="bg-black px-4 py-12 text-center text-[#FFD21F]">
        <h2 className="mx-auto max-w-xl font-display text-4xl uppercase leading-tight sm:text-5xl">
          Asegura tus regalos antes del {fechaLimite}
        </h2>
        <a
          href={waLink(regalosConfig.mensajeGeneral)}
          target="_blank"
          rel="noopener noreferrer"
          data-meta-name="urgencia"
          className={`${btn} mx-auto mt-6 max-w-md !shadow-[6px_6px_0_#FFD21F] sm:!w-auto`}
        >
          <WaIcon /> Pide el catálogo por WhatsApp
        </a>
      </section>

      {/* 6. FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14" aria-labelledby="faq">
        <h2 id="faq" className="mb-6 text-center font-display text-4xl uppercase sm:text-5xl">
          Preguntas frecuentes
        </h2>
        <div className="grid gap-3">
          {faqs.map((f) => (
            <details key={f.pregunta} className={`${card} group p-4 shadow-[4px_4px_0_#000]`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg uppercase">
                {f.pregunta}
                <span aria-hidden="true" className="text-2xl text-[#E30613] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-medium leading-relaxed">{f.respuesta}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-black px-4 py-6 pb-24 text-center text-sm text-white/70">
        © Uspech 360° · Mérida, Yucatán ·{" "}
        <Link href="/aviso-de-privacidad" className="underline">
          Aviso de privacidad
        </Link>
      </footer>
    </div>
  );
}
