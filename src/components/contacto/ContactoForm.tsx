"use client";

import { useState, type FormEvent } from "react";
import { divisiones } from "@/content/divisiones";
import { buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";

const inputClasses =
  "rounded-xl border border-ink-line bg-base px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input name={name} type={type} required={required} className={inputClasses} />
    </label>
  );
}

export function ContactoForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="rounded-2xl border border-ink-line bg-base-raised p-8">
        <p className="font-display text-lg uppercase text-accent">¡Gracias!</p>
        <p className="mt-3 text-ink-soft">
          Agradecemos tu información. Inmediatamente procesamos tu solicitud y
          nuestro departamento comercial se pondrá en contacto contigo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* Honeypot anti-spam: invisible para personas, visible para bots */}
      <input
        type="text"
        name="empresa_web"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" name="correo" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" required />
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink">
        División de interés
        <select name="division" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Selecciona una división
          </option>
          {divisiones.map((division) => (
            <option key={division.slug} value={division.slug}>
              {division.nombre}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Descripción del proyecto
        <textarea name="descripcion" rows={4} required className={inputClasses} />
      </label>

      <Field label="Fecha deseada" name="fecha" type="date" />

      <button
        type="submit"
        className={`${buttonBaseClasses} ${buttonVariantClasses.primary} mt-2 w-full sm:w-auto`}
      >
        Enviar
      </button>
    </form>
  );
}
