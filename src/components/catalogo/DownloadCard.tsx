import { Button, buttonBaseClasses, buttonVariantClasses } from "@/components/ui/Button";
import { PhotoTile } from "@/components/ui/PhotoTile";

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
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink-line p-6">
      <div>
        {preview ? (
          <PhotoTile
            src={preview}
            alt={`Vista previa de ${titulo}`}
            aspect="aspect-[3/4]"
            className="mb-4"
          />
        ) : null}
        <h3 className="font-display text-lg uppercase">{titulo}</h3>
        <p className="mt-2 text-sm text-ink-soft">{descripcion}</p>
      </div>
      {disponible ? (
        <Button href={expectedPath} target="_blank">
          Descargar PDF
        </Button>
      ) : (
        <div>
          <span
            aria-disabled
            className={`${buttonBaseClasses} ${buttonVariantClasses.ghost} cursor-not-allowed text-ink-faint`}
          >
            Disponible próximamente
          </span>
          <p className="mt-2 font-mono text-xs text-ink-faint">{expectedPath}</p>
        </div>
      )}
    </div>
  );
}
