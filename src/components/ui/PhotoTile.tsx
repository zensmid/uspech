import Image from "next/image";

export function PhotoTile({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  fit = "cover",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative ${aspect} w-full overflow-hidden rounded-2xl bg-base-raised ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className={`transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
          fit === "cover" ? "object-cover" : "object-contain p-6"
        }`}
      />
      {caption ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 pt-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-semibold text-white">{caption}</p>
        </div>
      ) : null}
    </div>
  );
}
