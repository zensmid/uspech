import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedUnderline } from "./AnimatedUnderline";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <FadeIn
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <AnimatedUnderline
        className={`mt-3 text-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      {description ? (
        <p className="mt-4 text-base text-ink-soft sm:text-lg">{description}</p>
      ) : null}
    </FadeIn>
  );
}
