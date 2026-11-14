import { after } from "next/server";
import {
  clientIp,
  readCookie,
  resolveFbc,
  sendCapiEvent,
} from "@/lib/meta-capi";
import { metaServerEvents, type MetaServerEvent } from "@/lib/meta-config";
import { siteUrl } from "@/lib/site";

const CUSTOM_KEYS = ["content_name", "content_category"] as const;

export async function POST(request: Request) {
  try {
    // sendBeacon envía el JSON como text/plain o application/json; parseamos el texto.
    const body = JSON.parse(await request.text());
    const eventName = body.event_name as MetaServerEvent;
    const eventId = typeof body.event_id === "string" ? body.event_id : "";
    if (!metaServerEvents.includes(eventName) || !eventId || eventId.length > 100) {
      return new Response(null, { status: 400 });
    }

    // Solo URLs de nuestro propio sitio como event_source_url.
    let sourceUrl = siteUrl;
    try {
      const u = new URL(String(body.event_source_url));
      if (u.hostname.endsWith("uspechmexico.com") || u.hostname === "localhost") {
        sourceUrl = u.toString();
      }
    } catch {}

    const customData: Record<string, string> = {};
    for (const key of CUSTOM_KEYS) {
      const v = body.custom_data?.[key];
      if (typeof v === "string") customData[key] = v.slice(0, 100);
    }

    const cookies = request.headers.get("cookie");
    after(() =>
      sendCapiEvent({
        eventName,
        eventId,
        sourceUrl,
        ip: clientIp(request.headers),
        userAgent: request.headers.get("user-agent") ?? undefined,
        fbp: readCookie(cookies, "_fbp"),
        fbc: resolveFbc(cookies, sourceUrl),
        customData,
      })
    );
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error("Meta events endpoint:", err);
    return new Response(null, { status: 400 });
  }
}
