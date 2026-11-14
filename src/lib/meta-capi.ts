import { createHash } from "node:crypto";
import { metaPixelId, type MetaServerEvent } from "@/lib/meta-config";

const sha256 = (value: string) =>
  createHash("sha256").update(value).digest("hex");

export const hashEmail = (email: string) =>
  sha256(email.trim().toLowerCase());

/** Teléfono a formato 52XXXXXXXXXX (solo dígitos) y luego SHA-256. */
export function hashPhone(phone: string) {
  let d = phone.replace(/\D/g, "");
  if (d.length === 10) d = `52${d}`;
  else if (d.length === 13 && d.startsWith("521")) d = `52${d.slice(3)}`;
  return sha256(d);
}

/** Lee una cookie de un header Cookie crudo. */
export function readCookie(cookieHeader: string | null, name: string) {
  const match = cookieHeader
    ?.split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
}

/** Si no hay cookie _fbc pero la URL trae fbclid, lo construimos (fb.1.<ms>.<fbclid>). */
export function resolveFbc(cookieHeader: string | null, sourceUrl: string) {
  const fromCookie = readCookie(cookieHeader, "_fbc");
  if (fromCookie) return fromCookie;
  try {
    const fbclid = new URL(sourceUrl).searchParams.get("fbclid");
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
  } catch {
    return undefined;
  }
}

export type CapiEvent = {
  eventName: MetaServerEvent;
  eventId: string;
  sourceUrl: string;
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  email?: string;
  phone?: string;
  customData?: Record<string, string>;
};

/** Reenvía un evento a la API de Conversiones. Nunca lanza: solo loguea. */
export async function sendCapiEvent(e: CapiEvent) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    console.error("Meta CAPI: falta META_CAPI_TOKEN, evento omitido");
    return;
  }
  const pixelId = process.env.META_PIXEL_ID ?? metaPixelId;
  const version = process.env.META_GRAPH_VERSION ?? "v26.0";

  const userData: Record<string, unknown> = {};
  if (e.ip) userData.client_ip_address = e.ip;
  if (e.userAgent) userData.client_user_agent = e.userAgent;
  if (e.fbp) userData.fbp = e.fbp;
  if (e.fbc) userData.fbc = e.fbc;
  if (e.email) userData.em = [hashEmail(e.email)];
  if (e.phone) userData.ph = [hashPhone(e.phone)];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: e.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: e.eventId,
        event_source_url: e.sourceUrl,
        action_source: "website",
        user_data: userData,
        ...(e.customData && Object.keys(e.customData).length
          ? { custom_data: e.customData }
          : {}),
      },
    ],
  };
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${version}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) {
      console.error("Meta CAPI:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Meta CAPI:", err);
  }
}

/** IP del visitante detrás del proxy de Vercel. */
export const clientIp = (h: Headers) =>
  h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || undefined;
