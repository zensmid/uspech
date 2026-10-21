"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { divisiones } from "@/content/divisiones";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { FadeIn } from "@/components/ui/FadeIn";

const MotionLink = motion.create(Link);

export function Divisiones() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Nuestras divisiones"
          title="Todo lo que tu marca necesita, bajo un mismo techo"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {divisiones.map((division, index) => (
            <FadeIn key={division.slug} delay={index * 0.05}>
              <MotionLink
                href={`/servicios/${division.slug}`}
                className="group block rounded-2xl border border-ink-line p-6"
                whileHover={{ y: -6, boxShadow: "0 16px 32px -16px rgb(18 18 18 / 0.25)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {division.cardImage ? (
                  <PhotoTile
                    src={division.cardImage}
                    alt={division.cardImageAlt ?? division.nombre}
                    aspect="aspect-[16/7]"
                  />
                ) : division.logo ? (
                  <PhotoTile
                    src={division.logo}
                    alt={`Logo de ${division.nombre}`}
                    aspect="aspect-[16/7]"
                    fit="contain"
                  />
                ) : (
                  <ImagePlaceholder
                    expectedPath={`/assets/divisiones/${division.slug}-logo.svg`}
                    label={division.nombre}
                    aspect="aspect-[16/7]"
                  />
                )}
                <p className="mt-4 font-display text-xl uppercase text-ink">
                  {division.nombre}
                </p>
                <p className="mt-2 text-base text-ink-soft">{division.resumen}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Ver división
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </MotionLink>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
