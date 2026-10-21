import { Button, buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Tilt";

export function DownloadCard({
  titulo,
  descripcion,
  expectedPath,
  disponible,
  preview,
}: {
  titulo: string;
  descripcion: string;
  expectedPath: string;
  disponible: boolean;
  preview?: string;
}) {
  return (
    <Tilt className="h-full" max={6}>
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink-line bg-base p-6 transition-shadow duration-300 hover:shadow-xl">
      <div>
        {preview ? (
          <Reveal className="mb-4">
            <PhotoTile
              src={preview}
              alt={`Vista previa de ${titulo}`}
              aspect="aspect-[3/4]"
            />
          </Reveal>
        ) : null}
        <h3 className="font-display text-lg uppercase">{titulo}</h3>
        <p className="mt-2 text-sm text-ink-soft">{descripcion}</p>
      </div>
      {disponible ? (
        <Button href={expectedPath} target="_blank">
          Descargar PDF <span aria-hidden="true" className="animate-bounce">↓</span>
        </Button>
      ) : (
        <span
          aria-disabled
          className={`${buttonBaseClasses} ${buttonVariantClasses.ghost} cursor-not-allowed text-ink-faint`}
        >
          Disponible próximamente
        </span>
      )}
    </div>
    </Tilt>
  );
}
