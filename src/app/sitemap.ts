import type { MetadataRoute } from "next";
import { divisiones } from "@/content/divisiones";
import { proyectos } from "@/content/portafolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    "",
    "/portafolio",
    "/catalogo",
    "/contacto",
    "/aviso-de-privacidad",
    ...divisiones.map((d) => `/servicios/${d.slug}`),
    ...proyectos.map((p) => `/portafolio/${p.slug}`),
  ];
  return rutas.map((ruta) => ({ url: `${siteUrl}${ruta}` }));
}
