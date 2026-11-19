/** PDFs públicos en Upstash Blob (bucket "uspech"); pesados, por eso no viven en git. */
const BLOB = "https://bb4818d66481.blob.upstash.io";

export type Catalogo = {
  titulo: string;
  descripcion: string;
  src: string;
  preview: string;
};

export const catalogos: Catalogo[] = [
  {
    titulo: "Catálogo general CEAL 2026",
    descripcion:
      "El catálogo completo de artículos promocionales CEAL, listos para personalizar con tu marca.",
    src: `${BLOB}/catalogo-ceal-2026.pdf`,
    preview: "/assets/pdf/previews/catalogo-ceal-2026.png",
  },
  {
    titulo: "Regalos ejecutivos fin de año 2026",
    descripcion: "Selección de regalos ejecutivos y corporativos para cierre de año.",
    src: `${BLOB}/regalos-ejecutivos-fin-de-ano-2026.pdf`,
    preview: "/assets/pdf/previews/regalos-ejecutivos-fin-de-ano-2026.png",
  },
  {
    titulo: "Impresión gratis fin de año",
    descripcion: "Catálogo de fin de año 2026 con impresión de tu logo sin costo.",
    src: `${BLOB}/catalogo-impresion-gratis-fin-de-ano-2026.pdf`,
    preview: "/assets/pdf/previews/catalogo-impresion-gratis-fin-de-ano-2026.png",
  },
  {
    titulo: "Proyectos especiales — Felices Fiestas 2026",
    descripcion: "Propuestas de proyectos especiales para las fiestas decembrinas.",
    src: `${BLOB}/proyectos-especiales-felices-fiestas-2026.pdf`,
    preview: "/assets/pdf/previews/proyectos-especiales-felices-fiestas-2026.png",
  },
  {
    titulo: "Catálogo Columbia",
    descripcion: "Chamarras y prendas Columbia personalizables para tu empresa.",
    src: `${BLOB}/catalogo-columbia.pdf`,
    preview: "/assets/pdf/previews/catalogo-columbia.png",
  },
];
