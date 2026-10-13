"use server";

import { Resend } from "resend";
import { divisiones } from "@/content/divisiones";

export type ContactoState = {
  ok: boolean;
  error?: string;
  valores?: Record<string, string>;
};

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const campo = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();

export async function enviarContacto(
  _prev: ContactoState,
  formData: FormData
): Promise<ContactoState> {
  // Honeypot: un bot rellena este campo; fingimos éxito sin enviar nada.
  if (campo(formData, "empresa_web")) return { ok: true };

  const valores = {
    nombre: campo(formData, "nombre").slice(0, 120),
    empresa: campo(formData, "empresa").slice(0, 120),
    correo: campo(formData, "correo").slice(0, 160),
    telefono: campo(formData, "telefono").slice(0, 40),
    division: campo(formData, "division"),
    descripcion: campo(formData, "descripcion").slice(0, 4000),
    fecha: campo(formData, "fecha").slice(0, 20),
  };

  if (!valores.nombre || !valores.telefono || !valores.descripcion) {
    return { ok: false, error: "Completa los campos obligatorios.", valores };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)) {
    return { ok: false, error: "Escribe un correo válido.", valores };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Falta RESEND_API_KEY o CONTACT_TO_EMAIL");
    return {
      ok: false,
      error: "El formulario no está disponible por ahora. Escríbenos por WhatsApp.",
      valores,
    };
  }

  const division =
    divisiones.find((d) => d.slug === valores.division)?.nombre ?? "No especificada";
  const filas: [string, string][] = [
    ["Nombre", valores.nombre],
    ["Empresa", valores.empresa || "—"],
    ["Correo", valores.correo],
    ["Teléfono", valores.telefono],
    ["División de interés", division],
    ["Fecha deseada", valores.fecha || "—"],
    ["Descripción", valores.descripcion],
  ];

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Uspech Web <onboarding@resend.dev>",
    to: to.split(",").map((e) => e.trim()),
    replyTo: valores.correo,
    subject: `Nuevo contacto web: ${valores.nombre}`,
    html: `<h2>Nuevo contacto desde uspech.com</h2><table cellpadding="6">${filas
      .map(
        ([k, v]) =>
          `<tr><td><b>${k}</b></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
      )
      .join("")}</table>`,
    text: filas.map(([k, v]) => `${k}: ${v}`).join("\n"),
  });

  if (error) {
    console.error("Resend:", error);
    return {
      ok: false,
      error: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      valores,
    };
  }
  return { ok: true };
}
