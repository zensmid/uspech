import { whatsappNumero } from "@/content/home";

/** Ruta de la landing; también se usa para ocultar header/footer del sitio. */
export const regalosRuta = "/regalos-corporativos";

/**
 * Textos y datos editables de la campaña. Cambia aquí el número, los mensajes
 * de WhatsApp, el pedido mínimo (null = no se muestra) y la fecha límite.
 */
export const regalosConfig = {
  whatsappNumero,
  mensajeGeneral: "Hola, quiero el catálogo de regalos corporativos",
  mensajeCategoria: (categoria: string) =>
    `Hola, me interesan ${categoria} para regalos corporativos, ¿me mandan el catálogo?`,
  pedidoMinimoPiezas: null as number | null,
  fechaLimite: "5 de diciembre",
};

export const waLink = (mensaje: string) =>
  `https://wa.me/${regalosConfig.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

export const categorias = [
  { slug: "termos", nombre: "Termos y tazas", imagen: "termos.png" },
  { slug: "kits", nombre: "Kits ejecutivos", imagen: "kits.png" },
  { slug: "vinos", nombre: "Vinos y bar", imagen: "vinos.png" },
  { slug: "powerbanks", nombre: "Power banks", imagen: "powerbanks.png" },
  { slug: "agendas", nombre: "Agendas", imagen: "agendas.png" },
  { slug: "mochilas", nombre: "Mochilas", imagen: "mochilas.png" },
];

export const beneficios = [
  { icono: "logo", titulo: "Tu logo en bordado, láser o UV" },
  { icono: "precio", titulo: "Mejor precio por volumen" },
  { icono: "envio", titulo: "Entrega en Mérida y envíos a todo México" },
  { icono: "asesoria", titulo: "Asesoría para elegir el regalo" },
] as const;

export const pasos = [
  "Pide el catálogo",
  "Elige productos y cantidades",
  "Aprobamos tu diseño y entregamos",
];

export const faqs = [
  {
    pregunta: "¿Cuál es el pedido mínimo?",
    respuesta:
      "Depende del producto. Escríbenos por WhatsApp con lo que buscas y te decimos el mínimo exacto.",
  },
  {
    pregunta: "¿Cuánto tardan en entregar?",
    respuesta: `Depende del producto y la personalización. Para temporada de diciembre te recomendamos pedir antes del ${regalosConfig.fechaLimite}.`,
  },
  {
    pregunta: "¿Facturan?",
    respuesta: "Sí, emitimos factura por todos los pedidos.",
  },
  {
    pregunta: "¿Envían fuera de Mérida?",
    respuesta: "Sí. Entregamos en Mérida y enviamos a todo México.",
  },
  {
    pregunta: "¿Puedo ver una muestra?",
    respuesta:
      "Sí. Pídela por WhatsApp y coordinamos cómo verla antes de que confirmes tu pedido.",
  },
];
