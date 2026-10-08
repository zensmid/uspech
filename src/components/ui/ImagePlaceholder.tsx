/**
 * Placeholder elegante para espacios de imagen/video mientras no haya el
 * asset real. Muestra la ruta esperada para que quede documentado en
 * pantalla (ver ASSETS.md para la lista completa).
 */
export function ImagePlaceholder({
  expectedPath,
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  expectedPath: string;
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-end overflow-hidden rounded-2xl bg-base-raised ${className}`}
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgb(18_18_18/0.05)_0px,rgb(18_18_18/0.05)_1px,transparent_1px,transparent_12px)]" />
      <div className="relative z-10 w-full p-4">
        {label ? (
          <p className="text-sm font-semibold text-ink-soft">{label}</p>
        ) : null}
        <p className="font-mono text-xs text-ink-faint">{expectedPath}</p>
      </div>
    </div>
  );
}
