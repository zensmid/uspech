"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { divisiones } from "@/content/divisiones";
import { buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";

const inputClasses =
  "rounded-xl border border-ink-line bg-base px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-shadow focus:border-accent focus:outline-none focus:shadow-[0_0_0_4px_rgb(218_1_0/0.12)]";

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

const lista = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

function Fila({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="rounded-2xl border border-ink-line bg-base-raised p-8"
      >
        <svg viewBox="0 0 52 52" className="mb-4 h-16 w-16" fill="none" aria-hidden="true">
          <motion.circle
            cx="26"
            cy="26"
            r="23"
            stroke="#da0100"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.path
            d="M15 27l8 8 14-16"
            stroke="#da0100"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </svg>
        <p className="font-display text-lg uppercase text-accent">¡Gracias!</p>
        <p className="mt-3 text-ink-soft">
          Agradecemos tu información. Inmediatamente procesamos tu solicitud y
          nuestro departamento comercial se pondrá en contacto contigo.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid gap-5"
      variants={lista}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Honeypot anti-spam: invisible para personas, visible para bots */}
      <input
        type="text"
        name="empresa_web"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Fila className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" />
      </Fila>
      <Fila className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" name="correo" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" required />
      </Fila>

      <Fila>
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
      </Fila>

      <Fila>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Descripción del proyecto
        <textarea name="descripcion" rows={4} required className={inputClasses} />
      </label>
      </Fila>

      <Fila>
        <Field label="Fecha deseada" name="fecha" type="date" />
      </Fila>

      <Fila>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`${buttonBaseClasses} ${buttonVariantClasses.primary} mt-2 w-full sm:w-auto`}
        >
          Enviar <span aria-hidden="true">→</span>
        </motion.button>
      </Fila>
    </motion.form>
  );
}
