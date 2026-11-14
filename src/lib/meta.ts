"use client";

import type { MetaServerEvent } from "@/lib/meta-config";

type Fbq = (
  method: string,
  event: string,
  params?: Record<string, unknown>,
  options?: { eventID: string }
) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function newEventId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

/** Dispara el evento en el Pixel (navegador) con el event_id que se usará para deduplicar. */
export function pixelTrack(
  event: string,
  params: Record<string, unknown> = {},
  eventId?: string
) {
  window.fbq?.("track", event, params, eventId ? { eventID: eventId } : undefined);
}

/**
 * Evento dual: Pixel + API de Conversiones con el MISMO event_id.
 * sendBeacon/keepalive no bloquean la navegación (p. ej. al abrir WhatsApp).
 */
export function trackMeta(
  event: MetaServerEvent,
  params: Record<string, string> = {}
) {
  try {
    const eventId = newEventId();
    pixelTrack(event, params, eventId);

    const body = JSON.stringify({
      event_name: event,
      event_id: eventId,
      event_source_url: window.location.href,
      custom_data: params,
    });
    const url = "/api/meta/events";
    if (
      !navigator.sendBeacon?.(url, new Blob([body], { type: "application/json" }))
    ) {
      fetch(url, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // El tracking nunca debe romper la página.
  }
}
