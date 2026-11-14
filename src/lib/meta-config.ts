/** ID del dataset/Pixel de Meta. Es público (aparece en el HTML), no es un secreto. */
export const metaPixelId = "2628436023908189";

/** Eventos que el servidor acepta reenviar a la API de Conversiones. */
export const metaServerEvents = ["ViewContent", "Contact", "Lead"] as const;
export type MetaServerEvent = (typeof metaServerEvents)[number];
